
import React from 'react';
import { Language, TeaExperience } from '../types.ts';
import { TEA_DATA } from '../constants.tsx';
import { Sprout, Mountain, Map, Sparkles, Coffee, Info, ArrowUpRight, Wind, Activity } from 'lucide-react';

interface TeaCultureProps {
  language: Language;
}

const TeaCard: React.FC<{ item: TeaExperience; language: Language; idx: number }> = ({ item, language, idx }) => (
  <div 
    className="bg-white/95 backdrop-blur-md rounded-[4rem] overflow-hidden shadow-2xl border border-white/20 flex flex-col group hover:-translate-y-4 transition-all duration-700 animate-in slide-in-from-bottom-8"
    style={{ animationDelay: `${idx * 100}ms` }}
  >
    <div className="relative h-80 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.name[language]} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[6000ms]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 border border-white/20">
        {item.type === 'variety' ? <Coffee size={14} className="text-emerald-600" /> : item.type === 'process' ? <Sparkles size={14} className="text-emerald-600" /> : <Mountain size={14} className="text-emerald-600" />}
        <span className="text-[10px] font-black text-[#262626] uppercase tracking-widest">
          {item.type === 'variety' ? (language === 'EN' ? 'Tea Variety' : 'තේ වර්ගය') : item.type === 'process' ? (language === 'EN' ? 'The Craft' : 'නිෂ්පාදන ක්‍රියාවලිය') : (language === 'EN' ? 'Historic Region' : 'ඓතිහාසික කලාපය')}
        </span>
      </div>
      <div className="absolute bottom-6 left-8">
         <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.4em] drop-shadow-md">Node_Ref #T0{idx+1}</span>
      </div>
    </div>

    <div className="p-12 flex-grow space-y-8 flex flex-col">
      <div className="space-y-2">
        <h3 className="text-3xl font-heritage font-bold text-[#262626] group-hover:text-emerald-600 transition-all leading-tight">
          {item.name[language]}
        </h3>
        <div className="w-12 h-1 bg-gray-100 rounded-full group-hover:w-24 group-hover:bg-emerald-600 transition-all duration-500" />
      </div>

      <p className="text-lg text-gray-500 leading-relaxed font-light italic">
        "{item.description[language]}"
      </p>

      <div className="mt-auto pt-8 border-t border-gray-50">
        <div className="bg-emerald-50/80 backdrop-blur-sm p-6 rounded-[2.5rem] border border-emerald-100 relative overflow-hidden group-hover:bg-white transition-colors">
          <div className="flex items-center gap-3 mb-3">
             <Info size={14} className="text-emerald-600" />
             <p className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest">Heritage Fact</p>
          </div>
          <p className="text-sm text-emerald-900 font-medium italic leading-relaxed">
            {item.fact[language]}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TeaCulture: React.FC<TeaCultureProps> = ({ language }) => {
  const heroTeaBg = "https://images.unsplash.com/photo-1594631252845-29fc458695d1?q=80&w=1920&auto=format&fit=crop";
  // Updated pageBg with the new Unsplash URL provided by the user
  const pageBg = "https://images.unsplash.com/photo-1632639521806-cead484cc369?w=1920&auto=format&fit=crop&q=80";

  return (
    <section className="min-h-screen bg-[#fafafa] pb-32 relative">
      {/* Page-wide Cinematic Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-[0.07] pointer-events-none z-0" 
        style={{ backgroundImage: `url('${pageBg}')`, backgroundAttachment: 'fixed' }}
      />

      {/* Cinematic Header */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-60 transition-transform duration-[20000ms] animate-slow-zoom" 
          style={{ backgroundImage: `url('${heroTeaBg}')` }}
        />
        <div className="absolute inset-0 bg-emerald-900/20 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-black/40 to-transparent" />
        
        <div className="relative text-center space-y-8 px-4 animate-in fade-in zoom-in duration-1000">
          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 story-ring rounded-[2.5rem] p-1 animate-pulse">
              <div className="bg-white w-full h-full rounded-[2.3rem] flex items-center justify-center">
                <Sprout size={40} className="text-emerald-600" />
              </div>
            </div>
            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
              <Wind size={16} className="text-emerald-400" />
              Highland_Aromatic_Registry
            </div>
          </div>
          
          <h2 className="text-6xl md:text-9xl font-heritage font-bold text-white drop-shadow-2xl tracking-tighter uppercase leading-[0.8]">
            TEA <br/><span className="italic insta-text-gradient">TRAILS.</span>
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-xl md:text-3xl font-light italic drop-shadow-lg leading-relaxed">
            {language === 'EN' 
              ? "Follow the journey of the leaf that made Sri Lanka world-famous, from the misty highlands to your morning cup." 
              : "මීදුමෙන් වැසුණු කඳුකරයේ සිට ඔබේ තේ කෝප්පය දක්වා ශ්‍රී ලංකාව ලොව පුරා ප්‍රසිද්ධ කළ තේ දල්ලේ ගමන අත්විඳින්න."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 -mt-24 relative z-10 space-y-20">
        {/* Tea Selection HUD */}
        <div className="flex justify-center">
           <div className="bg-white/95 backdrop-blur-xl border border-emerald-100 px-12 py-8 rounded-[3rem] shadow-2xl flex flex-wrap items-center justify-center gap-12">
              <div className="flex flex-col items-center">
                 <p className="text-[9px] font-black text-emerald-600/60 uppercase tracking-widest mb-1">Archived_Nodes</p>
                 <p className="text-3xl font-heritage font-black text-[#0a0a0a]">10 UNITS</p>
              </div>
              <div className="hidden md:block h-12 w-px bg-emerald-100" />
              <div className="flex flex-col items-center">
                 <p className="text-[9px] font-black text-emerald-600/60 uppercase tracking-widest mb-1">Identity_Ref</p>
                 <p className="text-3xl font-heritage font-black text-[#0a0a0a]">CEYLON TEA</p>
              </div>
              <div className="hidden md:block h-12 w-px bg-emerald-100" />
              <div className="flex flex-col items-center">
                 <p className="text-[9px] font-black text-emerald-600/60 uppercase tracking-widest mb-1">Neural_State</p>
                 <p className="text-3xl font-heritage font-black text-emerald-500 flex items-center gap-2">
                    <Activity size={24} /> STABLE
                 </p>
              </div>
           </div>
        </div>

        {/* Updated grid spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 pt-8">
          {TEA_DATA.map((item, idx) => (
            <TeaCard key={item.id} item={item} language={language} idx={idx} />
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="max-w-4xl mx-auto mt-48 px-6 text-center space-y-16 relative">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-[0.03] text-emerald-900 pointer-events-none">
          <Sprout size={300} />
        </div>
        
        <div className="flex justify-center gap-12 opacity-30">
           <Sprout size={48} className="text-emerald-700" />
           <div className="w-px h-16 bg-emerald-200" />
           <Coffee size={48} className="text-emerald-700" />
        </div>
        
        <p className="text-3xl md:text-6xl font-heritage font-medium text-gray-500 italic leading-[1.1] relative z-10">
          {language === 'EN' 
            ? "\"A cup of Ceylon Tea is more than a beverage; it is a blend of monsoon rains, mountain mist, and the legacy of our hills.\""
            : "\"ලංකා තේ කෝප්පයක් යනු හුදු පානයක් පමණක් නොවේ; එය මෝසම් වැසි, කඳුකර මීදුම සහ අපගේ උරුමයේ අපූර්ව මිශ්‍රණයකි.\""}
        </p>
        
        <div className="w-40 h-1.5 insta-gradient mx-auto rounded-full shadow-2xl animate-pulse" />
        
        <div className="flex flex-col items-center gap-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.8em] pt-12">
           <p>End_Of_Tea_Registry</p>
           <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <p>v4.5_ARCHIVE_SYNC_COMPLETE</p>
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
      `}} />
    </section>
  );
};

export default TeaCulture;
