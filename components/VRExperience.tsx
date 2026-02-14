
import React, { useState, useEffect, useRef } from 'react';
import { Language, Destination } from '../types.ts';
import { DESTINATIONS } from '../constants.tsx';
import { 
  Box, 
  Compass, 
  ArrowLeft, 
  Globe, 
  Search, 
  Target, 
  X, 
  Move, 
  Maximize2, 
  Zap,
  Radio,
  MapPin,
  Info,
  RotateCw,
  Sparkles,
  Activity,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface VRExperienceProps {
  language: Language;
  setView: (view: any) => void;
}

interface POI {
  id: string;
  name: { EN: string; SI: string };
  x: number; // -100 to 100
  y: number; // -100 to 100
  description: { EN: string; SI: string };
  category: string;
}

const VRExperience: React.FC<VRExperienceProps> = ({ language, setView }) => {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [scanProgress, setScanProgress] = useState(0);
  const [isImmersive, setIsImmersive] = useState(false);
  const [movement, setMovement] = useState({ x: 0, z: 0 }); 
  const [lookRotation, setLookRotation] = useState({ x: 0, y: 0 }); 
  const [activePOI, setActivePOI] = useState<POI | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastTouchRef = useRef<{ x: number; y: number } | null>(null);

  const featuredDestinations = DESTINATIONS.filter(d => 
    d.name.EN.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.name.SI.includes(searchQuery)
  );

  // Expanded POIs for more discovery
  const pointsOfInterest: POI[] = [
    { 
      id: 'portal', 
      name: { EN: 'Ancient Gateway', SI: 'ප්‍රධාන ද්වාරය' }, 
      x: -40, y: 20, 
      category: 'Architectural Node',
      description: { EN: 'A monolithic entrance carved directly into the living granite, guarded by celestial guardians for 15 centuries.', SI: 'වසර 1500 ක් පුරා දෙවිවරුන් විසින් රකිනු ලබන බව පැවසෙන, ස්වභාවික ගල් පර්වතය තුළම නෙළන ලද මහා ද්වාරය.' } 
    },
    { 
      id: 'sanctuary', 
      name: { EN: 'Spiritual Shard', SI: 'පූජනීය භූමිය' }, 
      x: 60, y: -30, 
      category: 'Sacred Node',
      description: { EN: 'An energy-dense sector used by ancient monks for deep synchronization with the island\'s natural pulse.', SI: 'දිවයිනේ ස්වභාවික රිද්මය සමඟ ඒකාත්මික වීම සඳහා පැරණි භික්ෂූන් වහන්සේලා භාවිතා කළ සුවිශේෂී භූමියකි.' } 
    },
    { 
      id: 'echo', 
      name: { EN: 'Hidden Echo', SI: 'සැඟවුණු රාවය' }, 
      x: 10, y: 50, 
      category: 'Mythical Node',
      description: { EN: 'Legend holds that the wind carries the whispers of the kings who once walked these ramparts.', SI: 'මෙම කොටු පවුරු මත ඇවිද ගිය රජවරුන්ගේ රහස් මෙන්ම ඔවුන්ගේ හඬ අදටත් සුළඟේ රැඳී ඇති බව ජනප්‍රවාදයේ පැවසේ.' } 
    }
  ];

  useEffect(() => {
    if (selectedDest && !isImmersive) {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsImmersive(true), 1000);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 250);
      return () => clearInterval(interval);
    }
  }, [selectedDest, isImmersive]);

  const handleJoystick = (e: React.TouchEvent) => {
    e.stopPropagation();
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (touch.clientX - centerX) / (rect.width / 2);
    const y = (touch.clientY - centerY) / (rect.height / 2);
    
    setMovement(prev => ({
      x: prev.x + (x * 4),
      z: prev.z - (y * 4)
    }));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isImmersive) return;
    lastTouchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isImmersive || !lastTouchRef.current) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastTouchRef.current.x;
    const deltaY = touch.clientY - lastTouchRef.current.y;
    
    setLookRotation(prev => ({
      x: Math.max(-60, Math.min(60, prev.x - deltaY * 0.25)),
      y: prev.y + deltaX * 0.25
    }));
    
    lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = () => {
    lastTouchRef.current = null;
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#050505] flex flex-col items-center relative overflow-hidden select-none touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Immersive Environment Container */}
      <div 
        className={`fixed inset-0 transition-opacity duration-1000 ${isImmersive ? 'opacity-100' : 'opacity-0'}`}
        style={{ perspective: '1200px' }}
      >
        <div 
          className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateX(${lookRotation.x}deg) rotateY(${lookRotation.y}deg) translateZ(${movement.z}px) translateX(${movement.x}px)`
          }}
        >
          {/* Main Panorama Layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${selectedDest?.image})`,
              transform: 'translateZ(-1000px) scale(5)',
              opacity: 0.7
            }}
          />

          {/* Points of Interest in 3D Space */}
          {isImmersive && pointsOfInterest.map((poi) => (
            <div 
              key={poi.id}
              className="absolute group cursor-pointer"
              style={{ 
                transform: `translateX(${poi.x * 12}px) translateY(${poi.y * 6}px) translateZ(-600px)`,
                transformStyle: 'preserve-3d'
              }}
              onClick={(e) => { e.stopPropagation(); setActivePOI(poi); }}
            >
              <div className="flex flex-col items-center">
                 {/* Upgraded Multi-Ring Marker */}
                 <div className="relative">
                    <div className={`absolute inset-[-12px] border-2 border-dashed rounded-full animate-spin-slow transition-all duration-500 ${activePOI?.id === poi.id ? 'border-[#E1306C] opacity-100' : 'border-white/10 opacity-40'}`} />
                    <div className={`absolute inset-[-4px] border border-white/20 rounded-full animate-ping opacity-20`} />
                    
                    <div className={`w-14 h-14 backdrop-blur-xl rounded-full border-2 flex items-center justify-center transition-all duration-700 shadow-2xl ${activePOI?.id === poi.id ? 'bg-[#E1306C] border-white scale-125' : 'bg-white/10 border-white/30 group-hover:scale-110 group-hover:border-white'}`}>
                       <Target size={activePOI?.id === poi.id ? 28 : 24} className={activePOI?.id === poi.id ? 'text-white' : 'text-[#E1306C]'} />
                    </div>
                 </div>

                 <div className={`mt-6 px-6 py-2 bg-black/80 backdrop-blur-2xl rounded-full border transition-all duration-500 flex items-center gap-3 ${activePOI?.id === poi.id ? 'border-[#E1306C] scale-110' : 'border-white/10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px]'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${activePOI?.id === poi.id ? 'bg-white animate-pulse' : 'bg-[#E1306C]'}`} />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">
                       {poi.name[language]}
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Background (Fallback/Scan mode) */}
      {!isImmersive && (
        <>
          <div 
            className="fixed inset-0 bg-cover bg-center transition-all duration-[3000ms] opacity-20 scale-125 blur-sm pointer-events-none"
            style={{ 
              backgroundImage: `url(${selectedDest ? selectedDest.image : 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2400&auto=format&fit=crop'})`
            }}
          />
          <div className="fixed inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />
        </>
      )}

      {/* VR HUD UI */}
      {isImmersive && (
        <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between p-6 sm:p-12 animate-in fade-in duration-1000">
          {/* Top HUD */}
          <div className="flex justify-between items-start">
            <div className="bg-black/60 backdrop-blur-3xl border border-white/10 p-6 rounded-[2.5rem] flex items-center gap-6 shadow-3xl">
              <div className="w-12 h-12 bg-[#E1306C]/20 rounded-2xl flex items-center justify-center text-[#E1306C] shadow-inner border border-[#E1306C]/30">
                 <Radio size={24} className="animate-pulse" />
              </div>
              <div className="text-left space-y-0.5">
                <p className="text-[9px] font-black text-[#E1306C] uppercase tracking-[0.4em] leading-none mb-1">Reality_Portal_01</p>
                <p className="text-lg font-heritage font-bold text-white uppercase tracking-tight">{selectedDest?.name[language]}</p>
              </div>
            </div>

            {/* Radar Mini-Map */}
            <div className="relative w-32 h-32 rounded-full border-2 border-white/10 bg-black/60 backdrop-blur-3xl flex items-center justify-center group overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(225,48,108,0.1)_100%)] animate-pulse" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-white/10" />
                  <div className="h-full w-[1px] bg-white/10" />
               </div>
               <div className="absolute inset-0 origin-center animate-spin-slow opacity-30">
                  <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-tr from-[#E1306C]/60 to-transparent rounded-tr-full" />
               </div>
               
               {pointsOfInterest.map(poi => (
                 <div 
                   key={poi.id}
                   className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-300 ${activePOI?.id === poi.id ? 'bg-white scale-150 shadow-[0_0_10px_white]' : 'bg-[#E1306C] opacity-40 shadow-[0_0_4px_#E1306C]'}`}
                   style={{ 
                     transform: `translate(${(poi.x - (movement.x / 10)) * 0.4}px, ${(poi.y + (movement.z / 10)) * 0.4}px)` 
                   }}
                 />
               ))}

               <div className="relative z-10 w-2.5 h-2.5 bg-[#E1306C] rounded-full shadow-[0_0_15px_#E1306C] animate-pulse">
                  <div className="absolute inset-[-6px] border border-[#E1306C]/30 rounded-full animate-ping" />
               </div>
               <Compass size={12} className="absolute top-3 left-1/2 -translate-x-1/2 text-white/20" />
            </div>
          </div>

          {/* UPGRADED POI INFORMATION CARD - Inspired by Registry Selection UI */}
          <div className="relative flex-grow flex items-center justify-center">
            {activePOI && (
              <div className="max-w-md w-full pointer-events-auto bg-[#0a0a0a]/90 backdrop-blur-[40px] border border-white/10 rounded-[3rem] shadow-[0_60px_150px_rgba(0,0,0,1)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-12 duration-700">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E1306C] animate-scan-slow opacity-60" />
                
                <div className="p-10 space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 px-4 py-1.5 bg-[#E1306C]/10 border border-[#E1306C]/30 rounded-full text-[#E1306C] text-[8px] font-black uppercase tracking-[0.4em]">
                        <Sparkles size={12} />
                        {activePOI.category}
                      </div>
                      <h4 className="text-3xl font-heritage font-bold text-white uppercase tracking-tighter leading-tight">
                        {activePOI.name[language]}
                      </h4>
                    </div>
                    <button 
                      onClick={() => setActivePOI(null)} 
                      className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 text-white transition-all active:scale-90"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <p className="text-base text-gray-400 font-light italic leading-relaxed border-l-2 border-[#E1306C]/40 pl-6">
                    "{activePOI.description[language]}"
                  </p>

                  <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                       <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">Node_Synchronized</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#E1306C] font-black text-[9px] uppercase tracking-widest group cursor-pointer">
                       Verify Archive <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom HUD - Controls */}
          <div className="flex justify-between items-end pointer-events-auto">
            {/* Traverse Joystick */}
            <div 
              className="w-32 h-32 sm:w-44 sm:h-44 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-full flex items-center justify-center touch-none relative group"
              onTouchMove={handleJoystick}
            >
              <div className="absolute inset-6 rounded-full border border-white/5 flex items-center justify-center">
                 <Move size={20} className="text-white/5 group-hover:text-white/20 transition-colors" />
              </div>
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 backdrop-blur-md rounded-full border border-white/20 shadow-3xl flex items-center justify-center transition-transform duration-75"
              >
                <div className="w-2 h-2 bg-[#E1306C] rounded-full shadow-[0_0_20px_#E1306C] animate-pulse" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] font-black text-white/20 uppercase tracking-[0.6em] whitespace-nowrap">Traverse_Manifold</div>
            </div>

            {/* View/Action Buttons */}
            <div className="flex flex-col gap-6">
               <button 
                 onClick={() => { setIsImmersive(false); setSelectedDest(null); setScanProgress(0); setMovement({x:0,z:0}); setLookRotation({x:0,y:0}); }}
                 className="w-14 h-14 sm:w-20 sm:h-20 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl flex items-center justify-center text-white/60 hover:text-white hover:bg-red-500/20 hover:border-red-500/40 transition-all active:scale-90 shadow-2xl"
               >
                 <X size={28} />
               </button>
               <button 
                 onClick={() => { setLookRotation({x: 0, y: 0}); setMovement({x:0, z:0}); }}
                 className="w-14 h-14 sm:w-20 sm:h-20 bg-[#E1306C]/80 backdrop-blur-xl border border-white/20 text-white rounded-3xl flex items-center justify-center shadow-[0_20px_60px_rgba(225,48,108,0.4)] active:scale-90 transition-all"
               >
                 <RotateCw size={28} />
               </button>
            </div>
          </div>
        </div>
      )}

      {/* Selection / Scanning Interface (When not immersive) */}
      {!isImmersive && (
        <div className="relative z-10 max-w-6xl w-full text-center space-y-12 sm:space-y-20 transition-all duration-1000">
          <div className="inline-flex items-center gap-5 px-8 py-3 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10 text-white shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 mx-auto">
             <div className="w-10 h-10 story-ring p-[1.5px] rounded-xl flex items-center justify-center">
               <div className="bg-black w-full h-full rounded-[9px] flex items-center justify-center">
                  <Box size={20} className="text-[#E1306C] animate-spin-slow" />
               </div>
             </div>
             <span className="text-[10px] font-black uppercase tracking-[0.5em]">Mobile Vision Core v4.1</span>
          </div>

          <div className="space-y-6 sm:space-y-10 animate-in fade-in zoom-in duration-1000 delay-300 px-6">
            <h2 className="text-6xl sm:text-8xl md:text-[10rem] font-heritage font-bold text-white leading-tight tracking-tighter uppercase">
              IMMERSE <br/>
              <span className="insta-text-gradient italic">{selectedDest ? selectedDest.name[language] : (language === 'EN' ? 'Reality.' : 'යථාර්ථය.')}</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-3xl font-light italic max-w-3xl mx-auto leading-relaxed">
              {selectedDest 
                ? (language === 'EN' 
                    ? "Neural handshake initiated. Projecting spatial metadata onto the visual buffer."
                    : "නාභිගත කිරීම ආරම්භ විය. දෘශ්‍ය අවකාශය සකසමින් පවතී.")
                : (language === 'EN' 
                    ? "Access high-fidelity volumetric reconstructions. Use the traverse controller to explore sacred nodes." 
                    : "දිවයිනේ පූජනීය ස්ථානවල ත්‍රිමාණ ප්‍රතිනිර්මාණ සමඟ සම්බන්ධ වන්න. ගවේෂණය සඳහා පාලක භාවිතා කරන්න.")
              }
            </p>
          </div>

          {!selectedDest ? (
            <div className="space-y-12 sm:space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <div className="max-w-lg mx-auto relative group px-6 touch-auto">
                <div className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#E1306C] transition-colors pointer-events-none">
                  <Search size={20} />
                </div>
                <input 
                  type="text"
                  placeholder={language === 'EN' ? "Search Reality Portals..." : "යථාර්ථ පිවිසුම් සොයන්න..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-12 py-6 bg-white/5 border border-white/10 text-white rounded-full focus:outline-none focus:ring-8 focus:ring-[#E1306C]/5 backdrop-blur-3xl font-bold text-base transition-all pointer-events-auto placeholder:text-white/20 shadow-2xl"
                />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 overflow-y-auto max-h-[45vh] no-scrollbar px-6 pointer-events-auto">
                {featuredDestinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => { setSelectedDest(dest); setScanProgress(0); }}
                    className="group relative aspect-[3/4] sm:h-72 rounded-[3.5rem] overflow-hidden border border-white/10 hover:border-[#E1306C]/50 transition-all duration-700 shadow-2xl"
                  >
                    <img src={dest.image} alt={dest.name[language]} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/20 to-transparent opacity-80" />
                    <div className="absolute bottom-8 left-8 right-8 text-left space-y-2">
                      <p className="text-[8px] font-black text-[#E1306C] uppercase tracking-[0.4em]">{dest.location}</p>
                      <h4 className="text-xs sm:text-sm font-heritage font-bold text-white uppercase tracking-widest truncate">{dest.name[language]}</h4>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                       <div className="w-14 h-14 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/30 text-white">
                          <Maximize2 size={24} />
                       </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 px-6">
               <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-12 sm:p-20 rounded-[5rem] shadow-[0_80px_150px_rgba(0,0,0,0.6)] overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#E1306C] to-transparent shadow-[0_0_30px_#E1306C] animate-scan z-20"></div>

                  <div className="space-y-16 relative z-10 text-center">
                    <div className="flex flex-col items-center gap-10">
                      <div className="w-40 h-40 rounded-[4rem] overflow-hidden story-ring p-[2px] shadow-3xl">
                         <img src={selectedDest.image} className="w-full h-full object-cover rounded-[3.9rem]" />
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center gap-4">
                          <Radio size={18} className="text-[#E1306C] animate-pulse" />
                          <p className="text-[11px] font-black text-[#E1306C] uppercase tracking-[0.5em]">Synchronizing Neural Mesh</p>
                        </div>
                        <h4 className="text-4xl sm:text-6xl font-heritage font-bold text-white tracking-tighter uppercase leading-none">{selectedDest.name[language]}</h4>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="flex justify-between items-end px-4">
                        <div className="text-left space-y-2">
                          <span className="block text-[11px] font-black text-gray-500 uppercase tracking-widest leading-none">Buffer_State</span>
                          <span className="block text-sm font-bold text-white/30 italic">Processing spatial harmonics...</span>
                        </div>
                        <div className="text-right">
                          <span className="text-5xl sm:text-8xl font-heritage font-black text-white leading-none tabular-nums">{scanProgress}%</span>
                        </div>
                      </div>
                      <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-1 border border-white/10 shadow-inner">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#E1306C] via-[#fd5949] to-[#f09433] transition-all duration-300 ease-out shadow-[0_0_30px_rgba(225,48,108,0.6)]" style={{ width: `${scanProgress}%` }} />
                      </div>
                    </div>
                  </div>
               </div>
               <button onClick={() => setSelectedDest(null)} className="flex items-center gap-5 text-gray-500 hover:text-white transition-all uppercase tracking-[0.5em] text-[11px] font-black mx-auto pointer-events-auto group">
                 <ArrowLeft size={18} className="group-hover:translate-x-[-4px] transition-transform" /> Abort_Transmission
               </button>
            </div>
          )}
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0.2; }
          50% { top: 100%; opacity: 0.8; }
          100% { top: 0%; opacity: 0.2; }
        }
        @keyframes scan-slow {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(600px); opacity: 0; }
        }
        .animate-scan { animation: scan 6s linear infinite; }
        .animate-scan-slow { animation: scan-slow 8s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-spin-slow { animation: spin 12s linear infinite; }
        .animate-bounce-slow { animation: bounce 4s infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .shadow-3xl { box-shadow: 0 40px 100px rgba(225,48,108,0.2); }
      `}} />
    </div>
  );
};

export default VRExperience;
