import React, { useState, useEffect } from 'react';
import { Language } from '../types.ts';
import { ArrowLeft, Sparkles, Database, Library, Gem, Target, Box, ArrowRight, ShieldCheck, Cpu, Lock, Scan, Radio, Activity, Loader2, Binary, ChevronRight } from 'lucide-react';

interface LegacyMuseumProps {
  language: Language;
  setView: (view: any) => void;
}

const LegacyMuseum: React.FC<LegacyMuseumProps> = ({ language, setView }) => {
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Initializing Neural Handshake...",
    "Accessing Ancient Lanka Metadata...",
    "Decrypting Sandakada Pahana Volumetrics...",
    "Syncing Northern Frontier Sector...",
    "Jaffna Royal Portal Handshake: SUCCESS",
    "Calibrating Delft Island Pony Colony Meshes...",
    "Optimizing Heritage Buffer...",
    "Awaiting Architectural Authorization..."
  ]);

  return (
    <div className="min-h-screen bg-[#020205] pb-40 animate-in fade-in duration-500 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Cinematic Ambience */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_70%)]" />
      
      {/* Grid Floor */}
      <div 
        className="fixed inset-0 opacity-[0.12] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)`, 
          backgroundSize: '120px 120px', 
          transform: 'perspective(1200px) rotateX(75deg) translateY(200px) scale(3)', 
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)' 
        }} 
      />

      <div className="relative z-10 max-w-5xl w-full px-6 flex flex-col items-center text-center space-y-20">
        
        {/* Header HUD */}
        <div className="space-y-8">
           <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 rounded-[2.5rem] bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center text-[#0EA5E9] relative shadow-[0_0_60px_rgba(14,165,233,0.3)] group">
                 <div className="absolute inset-0 border border-[#0EA5E9]/20 rounded-[2.5rem] animate-ping" />
                 <Lock size={44} className="animate-pulse" />
              </div>
              <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[11px] font-black uppercase tracking-[0.6em] shadow-2xl">
                  <Scan size={16} className="text-[#0EA5E9] animate-pulse" />
                  RESTRICTED_LEGACY_VAULT
              </div>
           </div>
           
           <div className="space-y-4">
              <h2 className="text-6xl md:text-[10rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                UNDER <br/><span className="italic insta-text-gradient">CALIBRATION.</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-xl md:text-3xl font-light italic leading-relaxed opacity-70">
                {language === 'EN' 
                  ? "The National Legacy Archive is undergoing deep-neural synchronization for the Northern best future cycle." 
                  : "උතුරු කලාපයේ උරුමයන් සංරක්ෂණය සඳහා පද්ධතිය දැනට යාවත්කාලීන වෙමින් පවතී."}
              </p>
           </div>
        </div>

        {/* Calibration HUD */}
        <div className="w-full max-w-3xl bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[4rem] p-10 md:p-16 space-y-12 shadow-inner group">
           <div className="space-y-6">
              <div className="flex justify-between items-end px-4">
                 <div className="text-left space-y-1">
                    <p className="text-[10px] font-black text-[#0EA5E9] uppercase tracking-[0.4em]">Registry_Sync_Status</p>
                    <p className="text-xs font-bold text-white/40 italic">Processing Northern Sector Nodes...</p>
                 </div>
                 <span className="text-5xl font-heritage font-black text-white">99%</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5">
                 <div 
                   className="h-full rounded-full bg-gradient-to-r from-[#0EA5E9] via-cyan-400 to-blue-600 shadow-[0_0_30px_#0EA5E9] transition-all duration-1000 ease-out"
                   style={{ width: `99%` }}
                 />
              </div>
           </div>

           {/* Terminal Feed */}
           <div className="bg-black/60 rounded-[2.5rem] p-8 font-mono text-[10px] md:text-xs text-green-500/80 text-left border border-white/5 h-48 overflow-y-auto no-scrollbar space-y-2">
              {terminalLogs.map((log, i) => (
                <div key={i} className="flex gap-4">
                   <span className="text-white/20 select-none">[{new Date().toLocaleTimeString()}]</span>
                   <span className="flex items-center gap-2">
                      <ChevronRight size={10} className="text-[#0EA5E9]" />
                      {log}
                   </span>
                </div>
              ))}
              <div className="flex items-center gap-2 animate-pulse text-[#0EA5E9]">
                 <span className="text-white/20">[{new Date().toLocaleTimeString()}]</span>
                 <span className="w-2 h-4 bg-[#0EA5E9]" />
              </div>
           </div>

           <div className="flex flex-wrap items-center justify-center gap-10 opacity-30 pt-4">
              <div className="flex items-center gap-3">
                 <ShieldCheck size={18} className="text-green-500" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-white">TLS 1.3 Secure</span>
              </div>
              <div className="flex items-center gap-3">
                 <Radio size={18} className="text-blue-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-white">Satellite Uplink</span>
              </div>
              <div className="flex items-center gap-3">
                 <Binary size={18} className="text-yellow-500" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-white">L0_Protocol</span>
              </div>
           </div>
        </div>

        {/* Northern Sector Teaser Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
           <div className="relative h-64 rounded-[3.5rem] overflow-hidden bg-white/5 border border-white/10 group cursor-help">
              <img src="https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 group-hover:scale-110 transition-all duration-[5000ms]" />
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <p className="text-[9px] font-black text-[#0EA5E9] uppercase tracking-widest">Northern_Sector</p>
                    <Target size={20} className="text-white/20 group-hover:text-[#0EA5E9] transition-colors" />
                 </div>
                 <div className="text-left space-y-2">
                    <h4 className="text-2xl font-heritage font-bold text-white uppercase tracking-tighter">Delft Island</h4>
                    <p className="text-[10px] text-gray-400 font-medium italic">"Photogrammetry of the wild pony colonies pending."</p>
                 </div>
              </div>
           </div>

           <div className="relative h-64 rounded-[3.5rem] overflow-hidden bg-white/5 border border-white/10 group cursor-help">
              <img src="https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 group-hover:scale-110 transition-all duration-[5000ms]" />
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <p className="text-[9px] font-black text-[#0EA5E9] uppercase tracking-widest">Northern_Sector</p>
                    <Activity size={20} className="text-white/20 group-hover:text-[#0EA5E9] transition-colors" />
                 </div>
                 <div className="text-left space-y-2">
                    <h4 className="text-2xl font-heritage font-bold text-white uppercase tracking-tighter">Jaffna Fort</h4>
                    <p className="text-[10px] text-gray-400 font-medium italic">"Volumetric reconstruction of the Dutch Ramparts."</p>
                 </div>
              </div>
           </div>
        </div>

        <button 
          onClick={() => setView('home')}
          className="relative group px-16 py-8 bg-white text-black rounded-full font-black text-[11px] uppercase tracking-[0.6em] transition-all hover:scale-110 active:scale-95 shadow-[0_30px_80px_rgba(255,255,255,0.1)] flex items-center gap-6"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
           <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
           Return to Main Registry
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin 40s linear infinite; }
        .shadow-3xl { box-shadow: 0 40px 120px rgba(14,165,233,0.2); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default LegacyMuseum;