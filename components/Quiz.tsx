
import React, { useState, useEffect } from 'react';
import { Language, QuizQuestion, ExplorerProfile } from '../types.ts';
import { DESTINATIONS } from '../constants.tsx';
import { 
  Compass, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  MapPin, 
  History, 
  Waves, 
  Mountain, 
  PawPrint,
  ChevronLeft,
  ArrowUpRight
} from 'lucide-react';

interface QuizProps {
  language: Language;
  setView: (view: any) => void;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'view',
    question: { EN: "What's your ideal morning view?", SI: "ඔබ වඩාත්ම ප්‍රිය කරන උදෑසන දර්ශනය කුමක්ද?" },
    options: [
      { id: 'ruins', text: { EN: 'Sacred Ancient Ruins', SI: 'පූජනීය පුරාණ නටබුන්' }, image: 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=800&q=80', profileScore: 'ancient' },
      { id: 'mist', text: { EN: 'Misty Mountains', SI: 'මීදුමෙන් වැසුණු කඳු' }, image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80', profileScore: 'mountains' },
      { id: 'waves', text: { EN: 'Turquoise Ocean Waves', SI: 'නිල්වන් සාගර රළ' }, image: 'https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=800&q=80', profileScore: 'beach' },
      { id: 'jungle', text: { EN: 'Wild Jungle Canopy', SI: 'වනගත තුරු වියන' }, image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80', profileScore: 'wildlife' },
    ]
  },
  {
    id: 'tempo',
    question: { EN: "How do you prefer to traverse space?", SI: "ඔබ සංචාරය කිරීමට කැමති වේගය කුමක්ද?" },
    options: [
      { id: 'slow', text: { EN: 'Meditative Slow-Walks', SI: 'සන්සුන් පියමං කිරීම' }, image: 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=800&q=80', profileScore: 'ancient' },
      { id: 'fast', text: { EN: 'High-Altitude Treks', SI: 'වේගවත් කඳු තරණය' }, image: 'https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=800&q=80', profileScore: 'mountains' },
      { id: 'lounge', text: { EN: 'Coastal Lounging', SI: 'වෙරළේ විවේකය' }, image: 'https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=800&q=80', profileScore: 'beach' },
      { id: 'scout', text: { EN: 'Predatory Tracking', SI: 'සතුන් ලුහුබැඳීම' }, image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80', profileScore: 'wildlife' },
    ]
  },
  {
    id: 'sensory',
    question: { EN: "Which sensory experience calls to you?", SI: "ඔබට වැඩිපුරම දැනෙන අත්දැකීම කුමක්ද?" },
    options: [
      { id: 'scent', text: { EN: 'Ancient Incense', SI: 'පුරාණ සුවඳ' }, image: 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=800&q=80', profileScore: 'ancient' },
      { id: 'touch', text: { EN: 'Cool Mountain Air', SI: 'සිසිල් කඳුකර සුළඟ' }, image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80', profileScore: 'mountains' },
      { id: 'taste', text: { EN: 'Salt and Spice', SI: 'ලුණු සහ කුළුබඩු' }, image: 'https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=800&q=80', profileScore: 'beach' },
      { id: 'sound', text: { EN: 'The Roar of the Wild', SI: 'වනයේ හඬ' }, image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80', profileScore: 'wildlife' },
    ]
  },
  {
    id: 'soul',
    question: { EN: "What defines your island soul?", SI: "ඔබේ ආත්මය වඩාත්ම බැඳෙන්නේ කුමකටද?" },
    options: [
      { id: 'legacy', text: { EN: 'Eternal Legacy', SI: 'සදාකාලික උරුමය' }, image: 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=800&q=80', profileScore: 'ancient' },
      { id: 'freedom', text: { EN: 'Highland Freedom', SI: 'කඳුකරයේ නිදහස' }, image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80', profileScore: 'mountains' },
      { id: 'serenity', text: { EN: 'Oceanic Serenity', SI: 'සාගර නිශ්ශබ්දතාවය' }, image: 'https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=800&q=80', profileScore: 'beach' },
      { id: 'instinct', text: { EN: 'Primal Instinct', SI: 'වනගත සහජ බුද්ධිය' }, image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80', profileScore: 'wildlife' },
    ]
  }
];

const EXPLORER_PROFILES: Record<string, ExplorerProfile> = {
  ancient: {
    id: 'ancient',
    name: { EN: "The Heritage Guardian", SI: "උරුමයේ ආරක්ෂකයා" },
    description: { 
      EN: "You are drawn to the whispers of history. Your soul finds peace among ancient stones and sacred ruins where kings once walked.", 
      SI: "ඔබ ඉතිහාසයේ හඬට ඇදී යයි. රජවරුන් ඇවිද ගිය පැරණි ගල් පර්වත සහ පූජනීය නටබුන් අතර ඔබේ ආත්මයට සාමය ලැබේ." 
    },
    image: 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80',
    recommendations: ['sigiriya', 'polonnaruwa', 'anuradhapura']
  },
  mountains: {
    id: 'mountains',
    name: { EN: "The Mountain Mystic", SI: "කඳුකර අබිරහස් ගවේෂකයා" },
    description: { 
      EN: "You seek the heights and the mist. Your spirit soars in the cool mountain air, where tea estates blanket the hills like emerald velvet.", 
      SI: "ඔබ මීදුම සහ කඳු මුදුන් සොයන්නෙකි. හරිත පැහැ තේ වතුවලින් වැසුණු කඳුකරයේ සිසිල් සුළඟ ඔබේ ජවයයි." 
    },
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    recommendations: ['ella', 'adams-peak', 'knuckles']
  },
  beach: {
    id: 'beach',
    name: { EN: "The Ocean Voyager", SI: "සාගර සංචාරකයා" },
    description: { 
      EN: "The rhythm of the tide is your heartbeat. You find joy on golden shores and in the turquoise depths of the Indian Ocean.", 
      SI: "සාගර රළේ රිද්මය ඔබේ හදගැස්මයි. රන්වන් වෙරළ තීරයන් සහ ඉන්දියන් සාගරයේ නිල්වන් ගැඹුර ඔබව සතුටු කරයි." 
    },
    image: 'https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80',
    recommendations: ['mirissa', 'trinco', 'galle']
  },
  wildlife: {
    id: 'wildlife',
    name: { EN: "The Jungle Spirit", SI: "වනගත ආත්මය" },
    description: { 
      EN: "You are one with nature. Your adventure lies in the deep bush, where wild elephants roam and the leopard's eyes gleam in the shadows.", 
      SI: "ඔබ සොබාදහම සමඟ බැඳී සිටින්නෙකි. වන අලි සැරිසරන සහ දිවියන්ගේ දෑස් දිලිසෙන ඝන වනාන්තරය ඔබේ වික්‍රමයයි." 
    },
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80',
    recommendations: ['yala', 'wasgamuwa', 'kumana']
  }
};

const Quiz: React.FC<QuizProps> = ({ language, setView }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [profile, setProfile] = useState<ExplorerProfile | null>(null);

  const handleOptionSelect = (profileScore: string) => {
    const newAnswers = [...answers, profileScore];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateProfile(newAnswers);
    }
  };

  const calculateProfile = (finalAnswers: string[]) => {
    const counts: Record<string, number> = { ancient: 0, mountains: 0, beach: 0, wildlife: 0 };
    finalAnswers.forEach(ans => counts[ans]++);
    
    let maxCount = 0;
    let winningProfile = 'ancient';
    
    for (const [key, value] of Object.entries(counts)) {
      if (value > maxCount) {
        maxCount = value;
        winningProfile = key;
      }
    }
    
    setProfile(EXPLORER_PROFILES[winningProfile]);
    setIsFinished(true);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsFinished(false);
    setProfile(null);
  };

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  if (isFinished && profile) {
    return (
      <div className="min-h-screen bg-[#fafafa] pt-24 pb-32 px-4 animate-in fade-in duration-700">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="relative overflow-hidden bg-white rounded-[4rem] shadow-2xl border border-gray-100 group">
            <div className="absolute inset-0 pattern-overlay opacity-5"></div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-80 md:h-full">
                <img src={profile.image} alt={profile.name[language]} className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10 p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
                    <Sparkles size={14} className="text-yellow-400" />
                    Explorer Profile Synced
                  </div>
                </div>
              </div>
              <div className="p-12 md:p-16 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-5xl font-heritage font-bold insta-text-gradient leading-tight">
                    {profile.name[language]}
                  </h2>
                  <div className="w-16 h-1 bg-[#E1306C] rounded-full"></div>
                </div>
                <p className="text-xl text-gray-500 font-light italic leading-relaxed">
                  "{profile.description[language]}"
                </p>
                <button 
                  onClick={resetQuiz}
                  className="flex items-center gap-3 text-[10px] font-bold text-gray-400 hover:text-[#E1306C] uppercase tracking-widest transition-colors"
                >
                  <RotateCcw size={14} />
                  Re-Initiate Sync
                </button>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
             <button 
               onClick={() => setView('destinations')}
               className="px-12 py-5 bg-[#262626] text-white rounded-2xl font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase tracking-[0.3em]"
             >
               Explore Your Destiny
             </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-32 px-4 flex flex-col items-center overflow-hidden">
      <div className="max-w-5xl w-full space-y-16 animate-in slide-in-from-bottom-8 duration-700">
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">
            <span>Uplink Stage</span>
            <span>Step {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full insta-gradient transition-all duration-700 shadow-[0_0_15px_rgba(225,48,108,0.3)]" style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }} />
          </div>
        </div>

        <div className="text-center space-y-12">
          <div className="space-y-6">
            <div className="w-20 h-20 story-ring rounded-full mx-auto p-1 animate-pulse">
              <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
                <Compass size={32} className="text-[#E1306C]" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-heritage font-bold text-[#262626] leading-tight max-w-2xl mx-auto uppercase">
              {currentQuestion.question[language]}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentQuestion.options.map((opt, idx) => (
              <button
                key={opt.id}
                onClick={() => handleOptionSelect(opt.profileScore)}
                className="group relative flex flex-col items-center bg-white rounded-[3rem] p-4 shadow-xl border border-gray-100 hover:border-[#E1306C]/30 hover:-translate-y-3 transition-all duration-500"
              >
                <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden mb-6">
                  <img src={opt.image} alt={opt.text[language]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight size={32} className="text-white" />
                  </div>
                </div>
                <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest group-hover:text-[#E1306C] transition-colors pb-4 px-2">
                  {opt.text[language]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {currentStep > 0 && (
          <div className="flex justify-center">
             <button onClick={() => setCurrentStep(currentStep - 1)} className="flex items-center gap-2 text-[10px] font-bold text-gray-300 hover:text-gray-500 uppercase tracking-widest transition-all">
               <ChevronLeft size={16} /> Backtrack Node
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
