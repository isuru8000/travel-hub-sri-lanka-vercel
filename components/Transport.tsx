
import React from 'react';
import { Language } from '../types.ts';
import { TRANSPORT_DATA } from '../constants.tsx';
import { Car, Plane, Train, Waves, MapPin, ShieldCheck, ArrowRight, Zap, Radio, Compass } from 'lucide-react';

const Transport: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="min-h-screen bg-white pb-32">
      <div className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-white" />
        <div className="relative text-center space-y-8 px-6">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
             <Zap size={16} className="text-blue-400" />
             Island Logistics Registry
          </div>
          <h2 className="text-6xl md:text-[10rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            TRAVEL <br/><span className="italic insta-text-gradient">LOGISTICS.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-2xl font-light italic leading-relaxed tracking-wide">
            "High-fidelity transit protocols for road, rail, and sky traversals."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TRANSPORT_DATA.map((item) => (
            <div key={item.id} className="group bg-white rounded-[4rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-1000 hover:shadow-2xl hover:-translate-y-4">
              <div className="relative h-80 overflow-hidden">
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110" alt={item.name[language]} />
                <div className="absolute bottom-0 right-0 bg-[#0a0a0a] text-white px-8 py-5 rounded-tl-[3rem]">
                   <p className="text-[9px] font-black text-[#E1306C] uppercase tracking-[0.4em]">Rate_Link</p>
                   <p className="text-3xl font-heritage font-bold">$ {item.price}</p>
                </div>
              </div>
              <div className="p-12 space-y-8">
                 <div className="space-y-2">
                    <div className="flex items-center gap-3 text-blue-500">
                       {item.type === 'air' ? <Plane size={20} /> : item.type === 'rail' ? <Train size={20} /> : <Car size={20} />}
                       <span className="text-[10px] font-black uppercase tracking-widest">{item.type}_registry</span>
                    </div>
                    <h3 className="text-3xl font-heritage font-bold text-[#0a0a0a] group-hover:insta-text-gradient transition-all uppercase tracking-tight">{item.name[language]}</h3>
                 </div>
                 <p className="text-base text-gray-500 font-light italic leading-relaxed">"{item.description[language]}"</p>
                 <ul className="space-y-3 pt-6 border-t border-gray-50">
                    {item.features[language].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                         <div className="w-1 h-1 rounded-full bg-blue-500" />
                         {f}
                      </li>
                    ))}
                 </ul>
                 <button className="w-full py-5 bg-[#0a0a0a] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-[#E1306C] transition-all">
                    Initialize Protocol
                    <ArrowRight size={16} />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transport;
