import React, { useEffect, useState } from 'react';
import { Destination, Language } from '../types.ts';
import { 
  ArrowLeft, 
  MapPin, 
  Compass, 
  History, 
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
  PlayCircle,
  Target,
  Wind
} from 'lucide-react';

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

const getEmbedUrl = (url: string) => {
  if (!url) return '';
  let videoId = '';
  if (url.includes('shorts/')) videoId = url.split('shorts/')[1].split('?')[0];
  else if (url.includes('watch?v=')) videoId = url.split('v=')[1].split('&')[0];
  else if (url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1].split('?')[0];
  else if (url.includes('embed/')) return url;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

const MiniMap: React.FC<{ destination: Destination }> = ({ destination }) => {
  if (!destination.coordinates) return null;
  return (
    <div className="relative aspect-[3/4] bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/10 group/map">
       <img 
         src="https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=400&q=80" 
         className="absolute inset-0 w-full h-full object-contain opacity-20 grayscale transition-opacity group-hover/map:opacity-40" 
         alt="Sri Lanka Map"
       />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_70%)]" />
       <div 
         className="absolute w-4 h-4 bg-[#E1306C] rounded-full shadow-[0_0_15px_#E1306C] animate-pulse z-10"
         style={{ left: `${destination.coordinates.x}%`, top: `${destination.coordinates.y}%`, transform: 'translate(-50%, -50%)' }}
       />
       <div className="absolute bottom-4 left-0 right-0 text-center">
          <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.4em]">Geospatial_Signature</span>
       </div>
    </div>
  );
};

interface DestinationDetailProps {
  destination: Destination | null;
  language: Language;
  onBack: () => void;
  onSelect: (dest: Destination) => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination, language, onBack, onSelect }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('history');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollY / height);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!destination) return null;

  const categoryConfigs = {
    ancient: { icon: Landmark, color: '#F59E0B' },
    beach: { icon: Waves, color: '#0EA5E9' },
    wildlife: { icon: PawPrint, color: '#10B981' },
    mountains: { icon: Mountain, color: '#8B5CF6' }
  };
  const config = categoryConfigs[destination.category] || { icon: Compass, color: '#0EA5E9' };
  const CatIcon = config.icon;

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: ARCHIVE DETAILS */}
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-ping" />
               <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-400">Instant_Archive_Access</span>
            </div>

            <div className="rounded-[4rem] overflow-hidden border border-gray-100 shadow-2xl shadow-blue-500/5">
              <ArchiveAccordion 
                title={language === 'EN' ? "The Legend & History" : "පුරාවෘත්තය සහ ඉතිහාසය"} 
                icon={<History size={24} />} 
                isOpen={activeAccordion === 'history'}
                onClick={() => setActiveAccordion(activeAccordion === 'history' ? null : 'history')}
              >
                <p className="whitespace-pre-line text-lg md:text-xl font-medium not-italic leading-relaxed">
                  {destination.history[language]}
                </p>
              </ArchiveAccordion>

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

          {/* RIGHT SIDEBAR: MEDIA & MAP */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
            
            {/* Quick Action Card */}
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

            {/* Video Fragment (Right Column) */}
            {destination.videoUrl && (
              <div className="space-y-6">
                <div className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <PlayCircle size={18} className="text-[#E1306C]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Atmospheric_Fragment</span>
                  </div>
                  <Activity size={14} className="text-green-500 animate-pulse" />
                </div>
                <div className="group relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-black border border-gray-100">
                  <iframe
                    src={`${getEmbedUrl(destination.videoUrl)}?modestbranding=1&rel=0&controls=0`}
                    title={destination.name[language]}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>
              </div>
            )}

            {/* Geospatial Signature (Map View) */}
            <div className="space-y-6">
                <div className="flex items-center gap-3 px-4 text-gray-400">
                  <Target size={18} className="text-[#0EA5E9]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Geospatial_Node</span>
                </div>
                <MiniMap destination={destination} />
            </div>

          </div>
        </div>

        {/* EXPANDED GALLERY SECTION */}
        <section className="space-y-20 py-40 border-t border-gray-100 mt-20">
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
    </div>
  );
};

export default DestinationDetail;