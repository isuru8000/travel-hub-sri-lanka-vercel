
import React from 'react';
import { Language } from '../types.ts';
import { DESTINATIONS } from '../constants.tsx';
import { 
  Compass, 
  MapPin, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Radio, 
  Target, 
  Clock, 
  ExternalLink, 
  Database, 
  Lock,
  Activity,
  Scan,
  Globe,
  ArrowLeft
} from 'lucide-react';

interface BookingDestinationsProps {
  language: Language;
  setView: (view: any) => void;
}

const BookingDestinations: React.FC<BookingDestinationsProps> = ({ language, setView }) => {
  const bookingRegistry = DESTINATIONS.map((d, i) => ({
    ...d,
    price: 150 + (i * 25),
    duration: i % 2 === 0 ? '3-5 Days' : '2-4 Days',
    isLocked: i > 5 // Mock locking for some nodes
  }));

  return (
    <div className="min-h-screen bg-[#fafafa] pb-32">
      {/* MANIFEST HEADER */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-[20000ms] animate-slow-zoom" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/90 to-[#fafafa]" />
        
        {/* Spatial Scanning Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `radial-gradient(#E1306C 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="relative text-center space-y-12 px-6 max-w-5xl animate-in fade-in zoom-in duration-1000">
          <div className="flex flex-col items-center gap-6">
             <div className="inline-flex items-center gap-5 px-10 py-4 rounded-full bg-[#E1306C]/10 border border-[#E1306C]/30 text-white text-[11px] font-black uppercase tracking-[0.6em] mx-auto backdrop-blur-3xl shadow-2xl animate-pulse">
                <Target size={20} fill="currentColor" />
                Mission_Briefing_Manifest
             </div>
             <div className="h-20 w-px bg-gradient-to-b from-[#E1306C] to-transparent" />
          </div>
          
          <h2 className="text-6xl md:text-[11rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_80px_rgba(0,0,0,1)]">
            ROUTE <br/><span className="italic insta-text-gradient">SYNTHESIS.</span>
          </h2>
          
          <p className="text-white/40 text-xl md:text-3xl font-light italic leading-relaxed tracking-wide max-w-4xl mx-auto">
            "Targeting optimal traversal trajectories across the island's primary archival nodes."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 space-y-32">
        {/* EXPEDITION MANIFEST LIST */}
        <div className="space-y-16">
          {bookingRegistry.map((item, idx) => (
            <div 
              key={item.id} 
              className={`group relative flex flex-col lg:flex-row bg-white rounded-[5rem] overflow-hidden border border-gray-100 shadow-xl transition-all duration-1000 animate-in slide-in-from-bottom-12 ${item.isLocked ? 'grayscale opacity-60' : 'hover:shadow-[0_80px_150px_rgba(0,0,0,0.1)] hover:-translate-y-2'}`}
              style={{ animationDelay: `${idx * 120}ms` }}
            >
               {item.isLocked && (
                 <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center gap-6">
                    <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-2xl animate-pulse">
                       <Lock size={32} />
                    </div>
                    <div className="bg-white px-10 py-5 rounded-full flex items-center gap-4 shadow-3xl">
                       <span className="text-[11px] font-black text-[#0a0a0a] uppercase tracking-[0.4em]">Node_Locked_Next_Cycle</span>
                    </div>
                 </div>
               )}

               <div className="w-full lg:w-2/5 h-96 lg:h-auto relative overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110" alt={item.name[language]} />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
                  
                  {/* Node ID Decoration */}
                  <div className="absolute top-10 left-10 p-2 bg-[#0a0a0a]/80 backdrop-blur-md rounded-2xl border border-white/10 text-white shadow-2xl">
                     <div className="px-6 py-3 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                        <Scan size={14} className="text-[#E1306C] animate-pulse" />
                        Target_#0{idx + 1}
                     </div>
                  </div>
               </div>
               
               <div className="w-full lg:w-3/5 p-12 md:p-20 flex flex-col justify-between space-y-12 bg-white relative z-10">
                  <div className="space-y-8">
                     <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div className="space-y-4">
                           <div className="flex items-center gap-4 text-[#E1306C]">
                              <MapPin size={20} className="animate-pulse" />
                              <span className="text-[11px] font-black uppercase tracking-[0.6em]">{item.location}</span>
                           </div>
                           <h4 className="text-4xl md:text-6xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter leading-none group-hover:insta-text-gradient transition-all duration-700">{item.name[language]}</h4>
                        </div>
                        <div className="text-left md:text-right bg-gray-50 px-10 py-6 rounded-[3rem] border border-gray-100 shadow-inner group-hover:bg-white transition-colors duration-700">
                           <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-1">Archival Rate</p>
                           <p className="text-4xl md:text-5xl font-heritage font-bold text-[#0a0a0a] tracking-tighter">${item.price}</p>
                        </div>
                     </div>
                     <p className="text-xl md:text-2xl text-gray-400 font-light italic leading-relaxed max-w-2xl border-l-4 border-gray-50 pl-10">
                        "{item.shortStory[language]}"
                     </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-gray-50">
                     <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-400">
                           <Clock size={16} />
                           <span className="text-[10px] font-black uppercase tracking-widest leading-none">Temporal Scope</span>
                        </div>
                        <p className="text-lg font-bold text-[#0a0a0a] uppercase tracking-widest">{item.duration}</p>
                     </div>
                     <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-400">
                           <Zap size={16} />
                           <span className="text-[10px] font-black uppercase tracking-widest leading-none">Sync Status</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className={`w-2 h-2 rounded-full animate-ping shadow-[0_0_10px_currentColor] ${item.isLocked ? 'text-blue-500 bg-blue-500' : 'text-green-500 bg-green-500'}`} />
                           <p className={`text-[11px] font-black uppercase tracking-[0.3em] ${item.isLocked ? 'text-blue-600' : 'text-green-600'}`}>
                             {item.isLocked ? 'CALIBRATING' : 'LINK_ESTABLISHED'}
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center justify-end">
                        <button 
                          disabled={item.isLocked}
                          onClick={() => setView('marketplace')}
                          className="w-full sm:w-auto flex items-center gap-8 px-12 py-7 bg-[#0a0a0a] text-white rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.5em] hover:bg-[#E1306C] transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)] group/btn active:scale-95 disabled:opacity-20 overflow-hidden relative"
                        >
                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                           <span className="relative z-10">Initialize Sync</span>
                           <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* REGISTRY FOOTER HUD */}
        <div className="pt-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30">
           <div className="flex items-center gap-12">
              <div className="flex items-center gap-5">
                 <Globe size={32} className="text-[#0EA5E9]" />
                 <div className="text-left space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Global_Topology_Sync</p>
                    <p className="text-[11px] font-bold text-gray-500">Satellite Mesh Active</p>
                 </div>
              </div>
              <div className="w-px h-16 bg-gray-100" />
              <div className="flex items-center gap-5">
                 <Activity size={32} className="text-[#E1306C]" />
                 <div className="text-left space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Trajectory_Logic</p>
                    <p className="text-[11px] font-bold text-gray-500">Direct Uplink v4.5</p>
                 </div>
              </div>
           </div>

           <div className="text-center md:text-right space-y-3">
              <p className="text-[11px] font-black uppercase tracking-[1em] text-[#0a0a0a] ml-[1em]">End_Of_Mission_Manifest</p>
              <div className="flex justify-center md:justify-end gap-3">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200" />)}
              </div>
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s linear infinite;
        }
        .shadow-3xl {
           box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }
      `}} />
    </div>
  );
};

export default BookingDestinations;
