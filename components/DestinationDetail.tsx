
import React, { useEffect, useState, useRef } from 'react';
import { Destination, Language, NearbyAttraction } from '../types.ts';
import { DESTINATIONS } from '../constants.tsx';
import { 
  ArrowLeft, 
  MapPin, 
  Compass, 
  Clock, 
  Lightbulb, 
  Sparkles, 
  Landmark,
  Waves,
  Mountain,
  PawPrint,
  Activity,
  ShieldCheck,
  Gem,
  ArrowRight,
  Image as ImageIcon,
  Target,
  Database,
  Scan,
  Zap,
  Loader2,
  ExternalLink,
  Map as MapIcon,
  Navigation,
  BookOpen,
  Quote,
  Layers,
  Star,
  Droplets,
  Tent,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { getLankaGuideResponse, GroundingLink } from '../services/gemini.ts';

interface DestinationDetailProps {
  destination: Destination | null;
  language: Language;
  onBack: () => void;
  onSelect: (dest: Destination) => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination, language, onBack, onSelect }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [nearbyResults, setNearbyResults] = useState<GroundingLink[]>([]);
  const [isSyncingNearby, setIsSyncingNearby] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const thumbnailScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollY / height);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (destination) {
      const fetchNearby = async () => {
        setIsSyncingNearby(true);
        try {
          const prompt = `What are the top 5 historic sites, cafes, or landmarks nearby ${destination.name.EN} in ${destination.location}, Sri Lanka? Provide verified Google Maps references.`;
          const response = await getLankaGuideResponse(prompt, language, undefined, false);
          if (typeof response !== 'string' && response.links) {
            setNearbyResults(response.links);
          }
        } catch (e) {
          console.error("Nearby sync failed", e);
        } finally {
          setIsSyncingNearby(false);
        }
      };
      fetchNearby();
    }
  }, [destination, language]);

  const handleNearbyClick = (id: string) => {
    const fullDest = DESTINATIONS.find(d => d.id === id);
    if (fullDest) {
      onSelect(fullDest);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const nextImage = () => {
    if (!destination) return;
    setActiveImageIndex((prev) => (prev + 1) % destination.gallery.length);
  };

  const prevImage = () => {
    if (!destination) return;
    setActiveImageIndex((prev) => (prev - 1 + destination.gallery.length) % destination.gallery.length);
  };

  if (!destination) return null;

  const categoryConfigs = {
    ancient: { icon: Landmark, color: '#F59E0B' },
    beach: { icon: Waves, color: '#0EA5E9' },
    wildlife: { icon: PawPrint, color: '#10B981' },
    mountains: { icon: Mountain, color: '#8B5CF6' },
    waterfalls: { icon: Droplets, color: '#3B82F6' },
    camping: { icon: Tent, color: '#059669' }
  };
  const config = categoryConfigs[destination.category] || { icon: Compass, color: '#0EA5E9' };
  const CatIcon = config.icon;

  const googleMapsIframeUrl = `https://www.google.com/maps?q=${encodeURIComponent(destination.name.EN + ' ' + destination.location + ' Sri Lanka')}&output=embed&z=15`;

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-1000 relative overflow-x-hidden">
      {/* Cinematic Hero */}
      <div className="relative h-[85vh] w-full overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-[100ms] ease-out"
          style={{ 
            backgroundImage: `url(${destination.image})`,
            transform: `translateY(${scrollProgress * 200}px) scale(1.05)`,
          }}
          role="img"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/30 to-transparent" />
        
        <div className="absolute top-0 left-0 right-0 p-6 md:p-12 z-50 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-4 px-8 py-4 bg-black/50 backdrop-blur-2xl border border-white/20 text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> {language === 'EN' ? 'Back' : 'පසුපසට'}
          </button>
        </div>

        <div className="absolute bottom-24 left-0 right-0 px-6 md:px-16 z-30">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-wrap items-center gap-4">
               <div className="px-6 py-2 bg-[#0EA5E9] text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-white/20 shadow-xl">
                 ACTIVE NODE
               </div>
               <div className="px-6 py-2 bg-black/40 backdrop-blur-3xl text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-white/20 flex items-center gap-3">
                 <CatIcon size={14} style={{ color: config.color }} />
                 {destination.category}
               </div>
            </div>
            
            <div className="space-y-4">
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-heritage font-bold text-white leading-[0.9] tracking-tighter drop-shadow-2xl max-w-5xl break-words">
                 {destination.name[language]}
               </h1>
               <div className="text-xl md:text-3xl text-white/90 font-light italic border-l-[4px] pl-8 max-w-3xl py-2 drop-shadow-lg" style={{ borderColor: config.color }}>
                 {destination.shortStory[language]}
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        
        {/* PRIMARY SECTION: ABOUT DESTINATION */}
        <section className="animate-in slide-in-from-bottom-12 duration-[1500ms] relative">
           
           {/* NEARBY PLACES CIRCLES */}
           {destination.nearbyAttractions && destination.nearbyAttractions.length > 0 && (
            <div className="animate-in slide-in-from-top-8 duration-1000 mb-24">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C]">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Nearby Places</h3>
              </div>

              <div className="flex overflow-x-auto no-scrollbar gap-12 md:gap-20 pb-12 -mx-4 px-4 scroll-smooth">
                 {destination.nearbyAttractions.map((att, idx) => (
                   <div 
                     key={att.id} 
                     className="shrink-0 group cursor-pointer flex flex-col items-center gap-6"
                     onClick={() => handleNearbyClick(att.id)}
                   >
                      <div className="relative w-40 h-40 md:w-56 md:h-56">
                         {/* Animated Circular Rings */}
                         <div className="absolute inset-[-8px] border border-dashed border-[#0EA5E9]/30 rounded-full animate-spin-slow opacity-60" />
                         <div className="absolute inset-[-4px] border border-[#E1306C]/15 rounded-full animate-spin-slow-reverse opacity-40" />
                         
                         {/* Core Visual Circle */}
                         <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white transition-all duration-1000 group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(14,165,233,0.3)]">
                            <img src={att.image} className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" alt={att.name[language]} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                            
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                               <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/40 flex items-center justify-center text-white">
                                  <ArrowRight size={24} />
                               </div>
                            </div>
                         </div>

                         {/* Sequential Badge */}
                         <div className="absolute top-0 right-0 w-10 h-10 bg-[#0a0a0a] text-white rounded-full flex items-center justify-center border-2 border-white shadow-xl group-hover:scale-110 transition-transform z-20">
                            <span className="text-[9px] font-black">0{idx + 1}</span>
                         </div>
                      </div>

                      <div className="text-center space-y-2 max-w-[160px]">
                         <h4 className="text-lg md:text-xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tight leading-tight">{att.name[language]}</h4>
                         <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Explore Node</p>
                      </div>
                   </div>
                 ))}
                 
                 <div className="shrink-0 w-24 h-full flex items-center justify-center opacity-5">
                    <Database size={64} className="text-gray-400" />
                 </div>
              </div>
            </div>
           )}

           {/* MAIN CONTENT BLOCK */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
              <div className="lg:col-span-7 space-y-16">
                 {/* 1. Main Narrative */}
                 <div className="space-y-10">
                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 rounded-3xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center text-[#0EA5E9] shadow-inner">
                         <BookOpen size={24} />
                       </div>
                       <h3 className="text-3xl md:text-5xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">
                         {language === 'EN' ? `About ${destination.name.EN}` : `${destination.name.SI} පිළිබඳව`}
                       </h3>
                    </div>

                    <div className="relative group">
                       <div className="absolute -left-10 top-0 h-full w-1 bg-gradient-to-b from-[#0EA5E9] via-gray-100 to-transparent opacity-30" />
                       <div className="font-narrative text-lg md:text-2xl text-[#1a1a1a] leading-relaxed space-y-10 antialiased font-medium text-justify">
                          <div className="prose-container first-letter:text-7xl md:first-letter:text-8xl first-letter:font-heritage first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:text-[#0EA5E9] first-letter:leading-[0.85] first-letter:mt-1">
                             {destination.detailedAbout?.[language]?.split('\n\n').map((para, pIdx) => (
                               <p key={pIdx} className={pIdx === 0 ? 'mt-0' : 'mt-10'}>
                                 {para}
                               </p>
                             )) || (
                               <p className="italic text-gray-400">Loading information...</p>
                             )}
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* 2. Traveler's Wisdom (Now Integrated) */}
                 <div className="pt-16 border-t border-gray-100 space-y-10">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9]">
                         <Lightbulb size={22} />
                       </div>
                       <h4 className="text-2xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Traveler's Wisdom</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:pl-16">
                      {destination.tips.map((tip, idx) => (
                        <div key={idx} className="flex gap-6 items-start">
                          <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/5 border border-[#0EA5E9]/20 flex items-center justify-center text-[#0EA5E9] font-black text-xs shrink-0 shadow-sm">
                            {idx + 1}
                          </div>
                          <span className="text-lg md:text-xl font-medium text-gray-600 leading-relaxed pt-1 italic">{tip[language]}</span>
                        </div>
                      ))}
                    </div>
                 </div>

                 {/* 3. Hidden Gems (Now Integrated) */}
                 <div className="pt-16 border-t border-gray-100 space-y-10">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
                         <Gem size={22} />
                       </div>
                       <h4 className="text-2xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Hidden Gems</h4>
                    </div>
                    <div className="md:pl-16">
                       <p className="text-lg md:text-2xl text-gray-600 italic font-medium leading-relaxed border-l-2 border-[#F59E0B]/20 pl-8">
                          "{destination.hiddenEchoes[language]}"
                       </p>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-10">
                 {/* Map Section */}
                 <div className="relative h-[450px] bg-[#fafafa] border border-gray-100 rounded-[3.5rem] shadow-xl overflow-hidden flex flex-col group">
                    <div className="absolute top-6 left-6 right-6 z-10 flex justify-between items-start pointer-events-none">
                       <div className="px-4 py-2 bg-[#0a0a0a]/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3">
                          <Navigation size={12} className="text-[#0EA5E9] animate-pulse" />
                          <span className="text-[8px] font-black text-white uppercase tracking-widest">Satellite Feed</span>
                       </div>
                       <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-[#0EA5E9] shadow-lg border border-white/20">
                          <MapPin size={18} />
                       </div>
                    </div>

                    <div className="flex-grow relative">
                       <iframe 
                         src={googleMapsIframeUrl}
                         className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
                         loading="lazy"
                         allowFullScreen
                       />
                    </div>

                    <div className="p-8 bg-white border-t border-gray-50 flex items-center justify-between relative z-10">
                       <div className="space-y-1">
                          <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Region Node</p>
                          <p className="text-sm font-bold text-[#0a0a0a] tracking-widest">{destination.location}</p>
                       </div>
                       <button className="flex items-center gap-2 px-6 py-3 bg-[#0a0a0a] text-white rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-[#0EA5E9] transition-all shadow-lg active:scale-95">
                          Launch Maps <ExternalLink size={12} />
                       </button>
                    </div>
                 </div>

                 {/* Official Registry Sidebar */}
                 <div className="p-10 rounded-[3.5rem] bg-[#0a0a0a] text-white space-y-8 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 pattern-overlay opacity-5 group-hover:opacity-10 transition-opacity" />
                    <div className="absolute -top-10 -right-10 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000">
                       <Compass size={200} />
                    </div>
                    
                    <div className="relative z-10 space-y-8">
                       <div className="space-y-3">
                         <div className="flex items-center gap-3 text-[#0EA5E9]">
                            <ShieldCheck size={18} className="animate-pulse" />
                            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Official Registry</span>
                         </div>
                         <h4 className="text-3xl font-heritage font-bold tracking-tighter leading-none uppercase">Plan Your Journey.</h4>
                       </div>
                       
                       <div className="space-y-4">
                          <div className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-2xl">
                             <div className="w-10 h-10 bg-[#0EA5E9]/20 rounded-xl flex items-center justify-center text-[#0EA5E9]">
                                <MapPin size={20} />
                             </div>
                             <div>
                                <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">Location</p>
                                <p className="text-lg font-bold uppercase tracking-widest">{destination.location}</p>
                             </div>
                          </div>
                       </div>

                       <button className="w-full py-7 bg-white text-black rounded-[2rem] font-black text-[10px] uppercase tracking-[0.4em] transition-all hover:bg-[#0EA5E9] hover:text-white flex items-center justify-center gap-4 group/btn shadow-xl active:scale-95">
                         Initialize Sync
                         <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                       </button>
                    </div>
                 </div>

                 {/* Nearby Hotspots Sidebar (Relocated) */}
                 <div className="bg-[#fafafa] p-10 rounded-[3.5rem] border border-gray-100 space-y-8 shadow-inner">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                       <div className="flex items-center gap-3 text-[#E1306C]">
                         <Target size={20} className="animate-pulse" />
                         <span className="text-[10px] font-black uppercase tracking-[0.4em]">Nearby Hotspots</span>
                       </div>
                       {isSyncingNearby && <Loader2 size={16} className="animate-spin text-gray-300" />}
                    </div>
                    
                    <div className="space-y-4">
                       {nearbyResults.length > 0 ? (
                         nearbyResults.map((link, idx) => (
                           <a 
                             key={idx}
                             href={link.uri}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-50 shadow-sm transition-all hover:border-[#0EA5E9]/40 hover:shadow-xl hover:-translate-x-1 group/link"
                           >
                              <div className="flex items-center gap-4 overflow-hidden">
                                 <div className={`w-10 h-10 rounded-xl bg-[#0EA5E9]/5 flex items-center justify-center text-[#0EA5E9] group-hover/link:bg-[#0EA5E9] group-hover/link:text-white transition-colors`}>
                                    <Navigation size={16} />
                                 </div>
                                 <span className="text-xs md:sm font-bold text-gray-500 group-hover/link:text-[#0a0a0a] truncate tracking-tight">{link.title}</span>
                              </div>
                              <ExternalLink size={14} className="text-gray-200 group-hover/link:text-[#0EA5E9] shrink-0" />
                           </a>
                         ))
                       ) : (
                         <div className="text-center py-12 opacity-30 space-y-4">
                            <Scan size={40} className="mx-auto text-gray-300 animate-pulse" />
                            <p className="text-[10px] font-black uppercase tracking-widest italic">Syncing Local Data...</p>
                         </div>
                       )}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* REFINED: PROMINENT BACK BUTTON AT BOTTOM */}
        <div className="mt-20 flex justify-center pb-20 border-b border-gray-100">
           <button 
             onClick={onBack}
             className="group relative flex items-center gap-6 px-16 py-8 bg-[#0a0a0a] text-white rounded-[3rem] font-black text-xs uppercase tracking-[0.6em] transition-all hover:scale-105 active:scale-95 shadow-3xl overflow-hidden"
           >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
              {language === 'EN' ? 'Return to Registry' : 'නාමාවලියට ආපසු'}
           </button>
        </div>

        {/* GALLERY SECTION: REPLACED GRID WITH CAROUSEL */}
        <section className="space-y-24 py-40">
           <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-black/5 text-gray-400 text-[9px] font-black uppercase tracking-[0.6em]">
                 <ImageIcon size={14} /> High Resolution Archive
              </div>
              <h2 className="text-5xl md:text-[6rem] lg:text-[8rem] font-heritage font-bold text-[#0a0a0a] tracking-tighter leading-none uppercase">Gallery.</h2>
              <p className="text-gray-400 font-light italic text-xl md:text-2xl max-w-3xl mx-auto">"Immersive visual evidence of a legacy defined by natural majesty."</p>
           </div>
           
           <div className="max-w-6xl mx-auto relative group/carousel">
              {/* Main Display Frame */}
              <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[4rem] overflow-hidden shadow-[0_80px_150px_rgba(0,0,0,0.2)] border-8 border-white bg-gray-900 group">
                 <img 
                   key={activeImageIndex}
                   src={destination.gallery[activeImageIndex]} 
                   className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-1000"
                   alt={`Gallery fragment ${activeImageIndex + 1}`}
                 />
                 
                 {/* Visual Overlays */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                 
                 {/* Navigation Buttons */}
                 <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all pointer-events-auto active:scale-90"
                    >
                       <ChevronLeft size={32} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all pointer-events-auto active:scale-90"
                    >
                       <ChevronRight size={32} />
                    </button>
                 </div>

                 {/* Corner Data Badge */}
                 <div className="absolute bottom-10 left-10 space-y-2">
                    <div className="px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.4em] w-fit shadow-2xl">
                       FRAGMENT_0{activeImageIndex + 1}
                    </div>
                    <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest ml-1">Resolution_4K_Active</p>
                 </div>

                 {/* Top Right Action */}
                 <div className="absolute top-10 right-10">
                    <div className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer">
                       <Maximize2 size={20} />
                    </div>
                 </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="mt-12 flex justify-center gap-4 md:gap-6 overflow-x-auto no-scrollbar py-4 px-2" ref={thumbnailScrollRef}>
                 {destination.gallery.map((img, i) => (
                   <button 
                     key={i}
                     onClick={() => setActiveImageIndex(i)}
                     className={`relative shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden border-4 transition-all duration-500 ${activeImageIndex === i ? 'border-[#0EA5E9] scale-110 shadow-xl' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'}`}
                   >
                      <img src={img} className="w-full h-full object-cover" alt={`Thumb ${i}`} />
                      {activeImageIndex === i && (
                        <div className="absolute inset-0 bg-[#0EA5E9]/10 animate-pulse" />
                      )}
                   </button>
                 ))}
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                 {destination.gallery.map((_, i) => (
                   <div 
                     key={i} 
                     className={`h-1.5 rounded-full transition-all duration-500 ${activeImageIndex === i ? 'w-12 bg-[#0EA5E9]' : 'w-2 bg-gray-200'}`}
                   />
                 ))}
              </div>
           </div>
        </section>
      </div>
      
      <div className="max-w-7xl mx-auto px-12 pb-32 flex flex-col md:flex-row justify-between items-center gap-10 opacity-20 border-t border-gray-50 pt-24">
         <div className="flex items-center gap-6">
            <Compass size={32} className="animate-spin-slow" />
            <p className="text-[11px] font-black uppercase tracking-[0.8em]">End of Entry</p>
         </div>
         <div className="flex gap-4">
            {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-black" />)}
         </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-spin-slow { animation: spin 40s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-spin-slow-reverse { animation: spin-reverse 32s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </div>
  );
};

export default DestinationDetail;
