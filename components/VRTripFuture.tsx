import React, { useState } from 'react';
import { Language } from '../types.ts';
// Added ArrowRight to imports to fix the error on line 147
import { 
  ArrowLeft, 
  ArrowRight,
  Orbit, 
  Scan, 
  Activity, 
  Target, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Box, 
  Compass, 
  Wind, 
  Waves,
  Maximize2,
  ChevronRight
} from 'lucide-react';

interface VRTripFutureProps {
  language: Language;
  setView: (view: any) => void;
}

const VR_NODES = [
  {
    id: 'vr-sigiriya',
    name: { EN: 'Sigiriya Sky Palace', SI: 'සීගිරිය අහස් මාලිගය' },
    image: 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1000&q=80',
    icon: <Target size={24} />,
    type: 'AERIAL_SCANNED',
    status: 'SYNC_READY',
    stats: '82M POLYGONS'
  },
  {
    id: 'vr-ella',
    name: { EN: 'Ella Misty Ridge', SI: 'ඇල්ල මීදුම් කඳු වැටිය' },
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80',
    icon: <MountainIcon size={24} />,
    type: 'TERRAIN_RENDER',
    status: 'LIVE_LINK',
    stats: '114M POLYGONS'
  },
  {
    id: 'vr-galle',
    name: { EN: 'Galle Coastal Ramparts', SI: 'ගාල්ල වෙරළබඩ පවුර' },
    image: 'https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=1000&q=80',
    icon: <Waves size={24} />,
    type: 'COASTAL_DEPTH',
    status: 'TEMPORAL_SYNC',
    stats: '67M POLYGONS'
  }
];

function MountainIcon({ size }: { size: number }) {
  return <Wind size={size} />;
}

const VRTripFuture: React.FC<VRTripFutureProps> = ({ language, setView }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#020205] flex flex-col items-center pt-32 pb-40 px-6 text-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12)_0%,transparent_70%)] animate-pulse" />
      
      {/* Grid Floor */}
      <div 
        className="fixed inset-0 opacity-[0.15] pointer-events-none transition-transform duration-1000 ease-out" 
        style={{ 
          backgroundImage: `linear-gradient(#0EA5E9 1.5px, transparent 1.5px), linear-gradient(90deg, #0EA5E9 1.5px, transparent 1.5px)`, 
          backgroundSize: '120px 120px', 
          transform: 'perspective(1200px) rotateX(75deg) translateY(200px) scale(3)', 
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)' 
        }} 
      />

      <div className="relative z-10 space-y-24 max-w-7xl w-full">
        <div className="space-y-8 animate-in fade-in slide-in-from-top-12 duration-1000">
           <div className="flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-5 px-10 py-4 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 text-white text-[12px] font-black uppercase tracking-[0.6em] mx-auto backdrop-blur-2xl shadow-3xl">
                <Scan size={20} className="text-[#0EA5E9] animate-pulse" />
                Phase_04_3D_Reality_Buffer
              </div>
              <h2 className="text-6xl md:text-[10rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_80px_rgba(0,0,0,1)]">
                VIRTUAL <br/><span className="italic insta-text-gradient">HORIZON.</span>
              </h2>
           </div>
           <p className="text-gray-400 text-xl md:text-3xl font-light italic leading-relaxed max-w-3xl mx-auto opacity-90">
             {language === 'EN' 
               ? "Synchronize with high-fidelity volumetric reconstructions of sacred island nodes." 
               : "දිවයිනේ පූජනීය ස්ථානවල උසස් තත්වයේ ත්‍රිමාණ ප්‍රතිනිර්මාණ සමඟ සම්බන්ධ වන්න."}
           </p>
        </div>

        {/* VR NODE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 w-full">
           {VR_NODES.map((node, idx) => (
             <div 
               key={node.id}
               onMouseEnter={() => setHoveredNode(node.id)}
               onMouseLeave={() => setHoveredNode(null)}
               className="group relative h-[580px] rounded-[4rem] bg-black/60 backdrop-blur-3xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-1000 hover:border-[#0EA5E9]/50 shadow-2xl"
               style={{ perspective: '1000px' }}
             >
                {/* 3D Content Layer */}
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                   <img src={node.image} className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/40 to-transparent" />
                </div>

                {/* Animated HUD Overlay */}
                <div className="absolute inset-0 p-12 flex flex-col justify-between items-center text-center z-10">
                   <div className="w-full flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                      <div className="px-5 py-2 rounded-xl bg-black/80 border border-white/10 text-[9px] font-black tracking-widest text-white/60">
                         {node.type}
                      </div>
                      <div className="flex gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                         <span className="text-[9px] font-black tracking-widest text-green-500/80">CORE_ACTIVE</span>
                      </div>
                   </div>

                   <div className="space-y-12 w-full">
                      <div className="relative mx-auto w-24 h-24 rounded-[2rem] bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center text-[#0EA5E9] shadow-3xl group-hover:scale-110 transition-transform duration-700">
                         <div className="absolute inset-0 border border-[#0EA5E9]/10 rounded-[2.5rem] animate-ping opacity-30" />
                         <Orbit size={48} className="animate-spin-slow" />
                         <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/20 to-transparent animate-pulse" />
                      </div>

                      <div className="space-y-4">
                         <h3 className="text-3xl md:text-4xl font-heritage font-bold text-white uppercase tracking-tighter leading-tight group-hover:insta-text-gradient transition-all">
                            {node.name[language]}
                         </h3>
                         <div className="flex flex-col items-center gap-4">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">{node.status}</span>
                            <div className="w-40 h-1 bg-white/5 rounded-full overflow-hidden">
                               <div className="h-full bg-[#0EA5E9] animate-loading-bar" style={{ width: '40%' }} />
                            </div>
                         </div>
                      </div>
                   </div>

                   <button className="w-full py-6 bg-white/5 border border-white/10 rounded-[2.5rem] text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:bg-[#0EA5E9] group-hover:text-white group-hover:border-transparent transition-all duration-500 flex items-center justify-center gap-4 shadow-3xl">
                      Initialize Link
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>

                {/* Cyber Decorative Scanline */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0EA5E9] shadow-[0_0_20px_#0EA5E9] animate-scan-y z-20 opacity-0 group-hover:opacity-40 pointer-events-none"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
             </div>
           ))}
        </div>

        <div className="pt-16 flex flex-col items-center gap-14 animate-in fade-in duration-1000 delay-500">
           <div className="flex flex-wrap justify-center gap-16 opacity-70">
              <div className="flex items-center gap-4">
                 <Activity size={24} className="text-[#0EA5E9] animate-pulse" />
                 <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white">Neural_State: Stable</span>
              </div>
              <div className="flex items-center gap-4">
                 <Target size={24} className="text-[#0EA5E9]" />
                 <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white">Target: Node_Sync</span>
              </div>
              <div className="flex items-center gap-4">
                 <ShieldCheck size={24} className="text-green-500" />
                 <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white">Protocol: L4_Restricted</span>
              </div>
           </div>

           <button 
             onClick={() => setView('home')}
             className="group relative px-20 py-9 bg-white text-[#020205] rounded-full font-black text-[13px] uppercase tracking-[0.6em] flex items-center gap-8 hover:scale-110 active:scale-95 transition-all shadow-[0_40px_100px_rgba(255,255,255,0.3)] overflow-hidden"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0EA5E9]/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
             <ArrowLeft size={26} className="group-hover:-translate-x-3 transition-transform" />
             Return to Base Registry
           </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-y {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        .animate-scan-y { animation: scan-y 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-loading-bar { animation: loading-bar 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .shadow-3xl { box-shadow: 0 0 60px rgba(14,165,233,0.25); }
      `}} />
    </div>
  );
};

export default VRTripFuture;