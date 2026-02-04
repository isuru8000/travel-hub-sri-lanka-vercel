import React, { useEffect, useState } from 'react';
import { Destination, Language } from '../types.ts';
import { 
  ArrowLeft, 
  MapPin, 
  Compass, 
  Clock, 
  Lightbulb, 
  Sparkles, 
  ChevronDown,
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
  Layers
} from 'lucide-react';
import { getLankaGuideResponse, GroundingLink } from '../services/gemini.ts';

const ArchiveAccordion: React.FC<{ 
  title: string; 
  icon: React.ReactNode; 
  isOpen: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
}> = ({ title, icon, isOpen, onClick, children }) => (
  <div className={`group border-b border-gray-100 transition-all duration-500 ${isOpen ? 'bg-[#fafafa]' : 'bg-transparent hover:bg-gray-50/50'}`}>
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between py-10 px-8 text-left outline-none"
    >
      <div className="flex items-center gap-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#0a0a0a] text-white' : 'bg-gray-100 text-gray-400 group-hover:text-[#0EA5E9]'}`}>
          {icon}
        </div>
        <h3 className={`text-2xl md:text-3xl font-heritage font-bold transition-all duration-500 ${isOpen ? 'text-[#0a0a0a]' : 'text-gray-400 group-hover:text-gray-600'}`}>
          {title}
        </h3>
      </div>
      <ChevronDown size={24} className={`text-gray-300 transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#0EA5E9]' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="px-8 pb-12 pl-28 pr-12">
        <div className="prose prose-xl max-w-none text-gray-600 font-light leading-relaxed italic border-l-2 border-[#0EA5E9]/20 pl-10">
          {children}
        </div>
      </div>
    </div>
  </div>
);

interface DestinationDetailProps {
  destination: Destination | null;
  language: Language;
  onBack: () => void;
  onSelect: (dest: Destination) => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination, language, onBack, onSelect }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('tips');
  const [nearbyResults, setNearbyResults] = useState<GroundingLink[]>([]);
  const [isSyncingNearby, setIsSyncingNearby] = useState(false);

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

  if (!destination) return null;

  const categoryConfigs = {
    ancient: { icon: Landmark, color: '#F59E0B' },
    beach: { icon: Waves, color: '#0EA5E9' },
    wildlife: { icon: PawPrint, color: '#10B981' },
    mountains: { icon: Mountain, color: '#8B5CF6' }
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
        
        <div className="absolute top-0 left-0 right-0 p-8 md:p-12 z-50 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-5 px-10 py-5 bg-black/50 backdrop-blur-2xl border border-white/20 text-white rounded-full font-black text-[10px] uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Registry
          </button>
        </div>

        <div className="absolute bottom-24 left-0 right-0 px-8 md:px-16 z-30">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-wrap items-center gap-6">
               <div className="px-8 py-2.5 bg-[#0EA5E9] text-white rounded-full text-[11px] font-black uppercase tracking-[0.6em] border border-white/20 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                 ACTIVE NODE
               </div>
               <div className="px-8 py-2.5 bg-black/40 backdrop-blur-3xl text-white rounded-full text-[11px] font-black uppercase tracking-[0.6em] border border-white/20 flex items-center gap-4">
                 <CatIcon size={16} style={{ color: config.color }} />
                 {destination.category} REGISTRY
               </div>
            </div>
            
            <div className="space-y-6">
               <h1 className="text-6xl md:text-[10rem] font-heritage font-bold text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
                 {destination.name[language]}
               </h1>
               <div className="text-2xl md:text-4xl text-white/80 font-light italic border-l-[6px] pl-10 max-w-4xl py-2" style={{ borderColor: config.color }}>
                 {destination.shortStory[language]}
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        {/* PRIMARY SECTION: ABOUT DESTINATION (EXPANDED ARCHIVAL NARRATIVE + GOOGLE MAPS) */}
        {destination.detailedAbout?.[language] && (
          <section className="mb-32 animate-in slide-in-from-bottom-12 duration-[1500ms] relative">
             {/* Header HUD Decor */}
             <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-[2rem] bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center text-[#0EA5E9] shadow-inner animate-float">
                    <BookOpen size={28} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#0EA5E9]/60 block">Registry_ID: {destination.id}_Expansion</span>
                    <h3 className="text-2xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Archival Narrative & Spatial Context</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                   <div className="h-[1px] w-20 bg-gray-100 hidden md:block" />
                   <Layers size={18} />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em]">Temporal_Depth: High</span>
                </div>
             </div>
             
             {/* Split Layout Container */}
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                {/* Left Side: The Narrative */}
                <div className="lg:col-span-7 relative group perspective-[2000px]">
                   <div className="absolute -inset-4 bg-gradient-to-br from-[#0EA5E9]/5 to-transparent rounded-[6rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent animate-scan z-20" />
                   <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-32 bg-[#0EA5E9]/20 rounded-full" />

                   <div className="relative bg-white border border-gray-100 p-10 md:p-16 rounded-[4rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.08)] overflow-hidden h-full">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.015] mix-blend-overlay rotate-12 transition-transform duration-[10s] group-hover:rotate-0">
                         <Compass size={600} />
                      </div>
                      <div className="absolute top-10 right-10 opacity-[0.03] text-black"><Quote size={80} /></div>

                      <div className="relative z-10">
                         <div className="font-narrative text-xl md:text-2xl text-[#1a1a1a] leading-[1.6] space-y-8 antialiased font-medium">
                            <div className="prose-container first-letter:text-7xl md:first-letter:text-8xl first-letter:font-heritage first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:text-[#0EA5E9] first-letter:leading-[0.85] first-letter:mt-1">
                               {destination.detailedAbout[language].split('\n\n').map((para, pIdx) => (
                                 <p key={pIdx} className={`${pIdx === 0 ? 'mt-0' : 'mt-8'} text-justify`}>
                                   {para}
                                 </p>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right Side: Google Map View */}
                <div className="lg:col-span-5 relative group">
                   <div className="absolute -inset-4 bg-gradient-to-tr from-[#0EA5E9]/5 to-transparent rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   
                   <div className="relative h-full bg-[#fafafa] border border-gray-100 rounded-[4rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
                      {/* Map HUD Overlay */}
                      <div className="absolute top-8 left-8 right-8 z-10 flex justify-between items-start pointer-events-none">
                         <div className="px-5 py-2 bg-[#0a0a0a]/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-3">
                            <Navigation size={14} className="text-[#0EA5E9] animate-pulse" />
                            <span className="text-[9px] font-black text-white uppercase tracking-widest">Spatial_Feed_Live</span>
                         </div>
                         <div className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-xl flex items-center justify-center text-[#0EA5E9] shadow-xl border border-white/20">
                            <MapPin size={20} />
                         </div>
                      </div>

                      <div className="flex-grow relative min-h-[400px]">
                         <iframe 
                           src={googleMapsIframeUrl}
                           className="absolute inset-0 w-full h-full grayscale-[0.1] contrast-[1.05] transition-all duration-1000 group-hover:grayscale-0"
                           loading="lazy"
                           allowFullScreen
                         />
                      </div>

                      {/* Map Controls / Context Footer */}
                      <div className="p-8 bg-white border-t border-gray-50 flex items-center justify-between relative z-10">
                         <div className="space-y-1">
                            <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest leading-none">Coordinates</p>
                            <p className="text-xs font-bold text-[#0a0a0a] tracking-widest">{destination.location} Node</p>
                         </div>
                         <button className="flex items-center gap-3 px-6 py-3 bg-[#0a0a0a] text-white rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-[#0EA5E9] transition-all">
                            Expand Map <ExternalLink size={12} />
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* LEFT: ARCHIVE DETAILS (TIPS, ECHOES) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-ping" />
               <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-400">Instant_Archive_Access</span>
            </div>

            <div className="rounded-[4rem] overflow-hidden border border-gray-100 shadow-2xl shadow-blue-500/5">
              <ArchiveAccordion 
                title={language === 'EN' ? "Voyager Wisdom (Tips)" : "සංචාරක උපදෙස්"} 
                icon={<Lightbulb size={24} />} 
                isOpen={activeAccordion === 'tips'}
                onClick={() => setActiveAccordion(activeAccordion === 'tips' ? null : 'tips')}
              >
                <ul className="space-y-8">
                  {destination.tips.map((tip, idx) => (
                    <li key={idx} className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] font-black text-xs shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-lg md:text-xl font-medium not-italic leading-relaxed text-gray-700">{tip[language]}</span>
                    </li>
                  ))}
                </ul>
              </ArchiveAccordion>

              <ArchiveAccordion 
                title={language === 'EN' ? "Hidden Echoes" : "සැඟවුණු තොරතුරු"} 
                icon={<Gem size={24} />} 
                isOpen={activeAccordion === 'hidden'}
                onClick={() => setActiveAccordion(activeAccordion === 'hidden' ? null : 'hidden')}
              >
                <p className="whitespace-pre-line text-lg md:text-xl font-medium not-italic leading-relaxed">
                  {destination.hiddenEchoes[language]}
                </p>
              </ArchiveAccordion>
            </div>
          </div>

          {/* RIGHT SIDEBAR: MEDIA & TRAVEL SYNC */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
            <div className="p-12 rounded-[4rem] bg-[#0a0a0a] text-white space-y-10 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 pattern-overlay opacity-10 group-hover:opacity-20 transition-opacity" />
               <div className="relative z-10 space-y-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[#0EA5E9]">
                       <ShieldCheck size={20} className="animate-pulse" />
                       <span className="text-[10px] font-black uppercase tracking-[0.4em]">Official_Registry</span>
                    </div>
                    <h4 className="text-3xl font-heritage font-bold tracking-tighter leading-none">Initialize <span className="italic insta-text-gradient">Trajectory.</span></h4>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl group-hover:bg-white/10 transition-colors">
                     <div className="w-12 h-12 bg-[#0EA5E9]/20 rounded-2xl flex items-center justify-center text-[#0EA5E9]">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <p className="text-[9px] font-black text-white/30 uppercase tracking-widest leading-none mb-1">Region</p>
                        <p className="text-xl font-bold uppercase tracking-widest">{destination.location}</p>
                     </div>
                  </div>
                  <button className="w-full py-8 bg-white text-black rounded-[2.5rem] font-black text-[12px] uppercase tracking-[0.5em] transition-all hover:bg-[#0EA5E9] hover:text-white flex items-center justify-center gap-4 group/btn">
                    Authorize Trip Sync
                    <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
               </div>
            </div>

            {/* Nearby Intelligence */}
            <div className="space-y-8 bg-[#fafafa] p-10 rounded-[3.5rem] border border-gray-100">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#E1306C]">
                    <Target size={18} className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Nearby_Registry_Nodes</span>
                  </div>
                  {isSyncingNearby && <Loader2 size={14} className="animate-spin text-gray-300" />}
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
                            <div className="w-8 h-8 rounded-lg bg-[#0EA5E9]/5 flex items-center justify-center text-[#0EA5E9] group-hover/link:bg-[#0EA5E9] group-hover/link:text-white transition-colors">
                               <Navigation size={14} />
                            </div>
                            <span className="text-xs font-bold text-gray-500 group-hover/link:text-[#0a0a0a] truncate">{link.title}</span>
                         </div>
                         <ExternalLink size={12} className="text-gray-200 group-hover/link:text-[#0EA5E9] shrink-0" />
                      </a>
                    ))
                  ) : (
                    <div className="text-center py-8 opacity-40">
                       <p className="text-[9px] font-black uppercase tracking-widest italic">Awaiting Registry Sweep...</p>
                    </div>
                  )}
               </div>
            </div>
          </div>
        </div>

        {/* EXPANDED GALLERY SECTION */}
        <section className="space-y-20 py-40 border-t border-gray-100">
           <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-black/5 text-gray-400 text-[9px] font-black uppercase tracking-[0.6em]">
                 <ImageIcon size={14} /> High_Res_Fragment_Archive
              </div>
              <h2 className="text-4xl md:text-[9rem] font-heritage font-bold text-[#0a0a0a] tracking-tighter leading-none uppercase">Visual <span className="italic insta-text-gradient">Nodes.</span></h2>
              <p className="text-gray-400 font-light italic text-xl">"Immersive evidence of an island defined by natural majesty."</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             {destination.gallery.map((img, i) => (
               <div key={i} className={`group relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl transition-all duration-1000 ${i % 3 === 1 ? 'lg:translate-y-12' : ''}`}>
                  <img src={img} className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                     <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] flex items-center gap-3">
                       <Sparkles size={14} className="text-[#0EA5E9]" />
                       Archive_Ref_0{i+1}
                     </span>
                  </div>
               </div>
             ))}
           </div>
        </section>
      </div>
      
      <div className="max-w-7xl mx-auto px-12 pb-32 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 border-t border-gray-50 pt-20">
         <div className="flex items-center gap-6">
            <Compass size={28} className="animate-spin-slow" />
            <p className="text-[11px] font-black uppercase tracking-[0.8em]">End_Of_Registry_Node</p>
         </div>
         <div className="flex gap-4">
            {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-black" />)}
         </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-spin-slow { animation: spin 30s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .shadow-3xl { box-shadow: 0 40px 100px rgba(0,0,0,0.1); }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan { animation: scan 8s linear infinite; }
      `}} />
    </div>
  );
};

export default DestinationDetail;