import { GoogleGenAI, Type } from "@google/genai";
import { Language } from "../types.ts";

export interface GroundingLink {
  title: string;
  uri: string;
}

export interface AIResponse {
  text: string;
  links: GroundingLink[];
  error?: string;
}

export interface DestinationDeepDive {
  history: string;
  temporalSync: string;
  wisdom: string[];
  hiddenEchoes: string;
}

/**
 * Initializes the GoogleGenAI client using process.env.API_KEY directly.
 */
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

/**
 * Decodes a base64 string into a Uint8Array.
 */
export function decode(base64: string): Uint8Array {
  if (!base64 || typeof base64 !== 'string') return new Uint8Array(0);
  try {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  } catch (e) {
    console.error("Failed to decode base64 string", e);
    return new Uint8Array(0);
  }
}

/**
 * Encodes a Uint8Array into a base64 string.
 */
export function encode(bytes: Uint8Array): string {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Vision-based Food Identification.
 */
export const analyzeFoodImage = async (base64Image: string, language: Language): Promise<string> => {
  try {
    const ai = getAIClient();
    const model = 'gemini-3-flash-preview';
    
    const prompt = `
      You are the "Lanka Culinary Archivist". 
      Identify the Sri Lankan dish in this image. 
      If it is not food or not Sri Lankan, state it clearly but politely.
      If identified, provide:
      1. Name of the dish (English and Sinhala transliterated).
      2. A 2-sentence poetic description of its history/significance.
      3. A list of 3 key ingredients.
      Language: ${language === 'SI' ? 'Sinhala' : 'English'}.
    `;

    const result = await ai.models.generateContent({
      model,
      contents: {
        parts: [
          { inlineData: { data: base64Image, mimeType: 'image/jpeg' } },
          { text: prompt }
        ]
      }
    });

    return result.text || "Identification failed.";
  } catch (error) {
    console.error("Vision API Error:", error);
    return "Error: Neural link to the kitchen archives was interrupted.";
  }
};

/**
 * Decodes raw PCM audio data into an AudioBuffer manually.
 */
export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

/**
 * Creates an audio/pcm Blob from Float32Array input data.
 */
export function createPcmBlob(data: Float32Array): { data: string; mimeType: string } {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    int16[i] = data[i] * 32768;
  }
  return {
    data: encode(new Uint8Array(int16.buffer)),
    mimeType: 'audio/pcm;rate=16000',
  };
}

/**
 * Fetches a structured deep-dive overview for a destination.
 */
export const getDestinationDeepDive = async (destinationName: string, language: Language): Promise<DestinationDeepDive | null> => {
  try {
    const ai = getAIClient();
    const result = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the "Master Archivist" for Travel Hub Sri Lanka. 
      Provide a structured, comprehensive, high-fidelity deep-dive for: ${destinationName}. 
      Use poetic yet informative language. Language: ${language === 'SI' ? 'Sinhala' : 'English'}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            history: { type: Type.STRING, description: "Detailed historical and mythical context (The Legend)." },
            temporalSync: { type: Type.STRING, description: "Best time to visit and atmospheric conditions (Temporal Sync)." },
            wisdom: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3 unique, specific travel tips for 2026 (Voyager Wisdom)." 
            },
            hiddenEchoes: { type: Type.STRING, description: "Nearby lesser-known spots or hidden secrets (Hidden Echoes)." }
          },
          required: ["history", "temporalSync", "wisdom", "hiddenEchoes"]
        }
      }
    });

    return JSON.parse(result.text || "{}") as DestinationDeepDive;
  } catch (error) {
    console.error("Deep Dive API Error:", error);
    return null;
  }
};

/**
 * Main Guide Response.
 */
export const getLankaGuideResponse = async (
  prompt: string, 
  language: Language, 
  location?: { latitude: number; longitude: number },
  isThinkingMode: boolean = false
): Promise<AIResponse | string> => {
  try {
    const ai = getAIClient();
    
    const systemInstruction = `
      You are "Lanka Guide AI", a prestige travel intelligence unit for "Travel Hub Sri Lanka". 
      ${isThinkingMode ? 'You are currently in DEEP THINKING MODE, utilizing maximum neural resources to solve complex travel queries, historical mysteries, and logistics.' : 'You use real-time Google Maps data to provide accurate, up-to-date information about locations.'}
      
      Your tone: Sophisticated, expert, and welcoming (Ayubowan).
      Always provide your main response in ${language === 'SI' ? 'Sinhala' : 'English'}.
    `;

    const model = isThinkingMode ? 'gemini-3-pro-preview' : 'gemini-2.5-flash';
    const tools = isThinkingMode ? [{ googleSearch: {} }] : [{ googleMaps: {} }];

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        tools,
        ...(isThinkingMode && { thinkingConfig: { thinkingBudget: 32768 } }),
        ...(!isThinkingMode && location && {
          toolConfig: {
            retrievalConfig: {
              latLng: {
                latitude: location.latitude,
                longitude: location.longitude
              }
            }
          }
        })
      },
    });

    const text = response.text || "";
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    const links: GroundingLink[] = groundingChunks
      ?.map((chunk: any) => isThinkingMode ? chunk.web : chunk.maps)
      .filter((m: any) => m && m.uri)
      .map((m: any) => ({ 
        title: m.title || (language === 'SI' ? "තොරතුරු බලන්න" : "View Details"), 
        uri: m.uri 
      })) || [];

    return { text, links };
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    const errMsg = error.message || "";
    if (errMsg.includes("Requested entity was not found.") || errMsg.includes("API key not found") || errMsg.includes("403")) {
      return { text: "API_KEY_REQUIRED", links: [], error: "API_KEY_REQUIRED" };
    }
    return language === 'SI' 
      ? "කණගාටුයි, මට මේ අවස්ථාවේ පිළිතුරු දිය නොහැක. කරුණාකර නැවත උත්සාහ කරන්න."
      : "I'm sorry, my neural link is experiencing interference. Please try again.";
  }
};

/**
 * Real-time Information Retrieval.
 */
export const searchGrounding = async (query: string, language: Language, isThinkingMode: boolean = true): Promise<AIResponse> => {
  try {
    const ai = getAIClient();
    
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: query,
      config: {
        systemInstruction: `You are the "Neural Intelligence Hub" for Travel Hub Sri Lanka. 
        Provide up-to-the-minute, accurate travel information using real-time search.
        ${isThinkingMode ? 'Use your deep reasoning capabilities to analyze trends and provide insightful conclusions.' : ''}
        Format with clean Markdown. Language: ${language === 'SI' ? 'Sinhala' : 'English'}.`,
        tools: [{ googleSearch: {} }],
        ...(isThinkingMode && { thinkingConfig: { thinkingBudget: 20000 } })
      },
    });

    const text = response.text || "";
    const links: GroundingLink[] = [];
    
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (groundingChunks) {
      groundingChunks.forEach((chunk: any) => {
        if (chunk.web) {
          links.push({
            title: chunk.web.title || "Source",
            uri: chunk.web.uri
          });
        }
      });
    }

    return { text, links };
  } catch (e: any) {
    console.error("Search Grounding Error:", e);
    const errMsg = e.message || "";
    if (errMsg.includes("Requested entity was not found.") || errMsg.includes("API key") || errMsg.includes("403")) {
      return { text: "API_KEY_REQUIRED", links: [], error: "API_KEY_REQUIRED" };
    }
    
    try {
      const ai = getAIClient();
      const fallback = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Provide general information about: ${query}. (Note: Search registry offline, providing archival data.) Language: ${language === 'SI' ? 'Sinhala' : 'English'}`
      });
      return { text: fallback.text || "Neural connection intermittent.", links: [] };
    } catch (inner) {
      return { text: "Critical Error: Registry Manifold Offline.", links: [] };
    }
  }
};

/**
 * Poetic refinement.
 */
export const refineTravelStory = async (story: string, language: Language): Promise<string> => {
  try {
    const ai = getAIClient();
    const prompt = `Refine this travel story to be more poetic and atmospheric. Return ONLY the text. Language: ${language === 'SI' ? 'Sinhala' : 'English'}. Story: "${story}"`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || story;
  } catch (e) {
    return story;
  }
};

/**
 * Itinerary creation.
 */
export const generateDetailedItinerary = async (destination: string, language: Language): Promise<string> => {
  try {
    const ai = getAIClient();
    const systemInstruction = `You are an elite travel planner. Create high-end 3-day itineraries. Language: ${language === 'SI' ? 'Sinhala' : 'English'}. Use deep reasoning for logistics.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Create a detailed 3-day immersive itinerary for ${destination}, Sri Lanka.`,
      config: { 
        systemInstruction,
        thinkingConfig: { thinkingBudget: 32768 } 
      }
    });
    return response.text || "";
  } catch (e) {
    return "Failed to generate itinerary.";
  }
};