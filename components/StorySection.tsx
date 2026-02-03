
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { ArrowRight, History, Users } from 'lucide-react';

interface StorySectionProps {
  language: Language;
  setView: (view: any) => void;
}

const StorySection: React.FC<StorySectionProps> = ({ language, setView }) => {
  const stories = [
    {
      EN: "Centuries ago, kings walked these lands... today, you can too.",
      SI: "ශතවර්ෂ ගණනාවකට පෙර, රජවරුන් මෙම දේශයේ ඇවිද ගියහ... අද, ඔබටත් පුළුවන."
    },
    {
      EN: "Our soil holds the echoes of ancient civilizations that built monuments beyond time.",
      SI: "කාලය අභිබවා ගිය ස්මාරක ඉදිකළ පැරණි ශිෂ්ටාචාරවල හඬ අපේ පසෙහි රැඳී තිබේ."
    },
    {
      EN: "Travel isn't just about the place, it's about connecting with the memories of our ancestors.",
      SI: "සංචාරය යනු ස්ථානයක් ගැන පමණක් නොවේ, එය අපගේ මුතුන් මිත්තන්ගේ මතකයන් සමඟ සම්බන්ධ වීමයි."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-40 bg-white relative overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-black/5 border border-black/10 text-gray-400 text-[9px] font-black uppercase tracking-[0.5em]">
                <Users size={14} className="text-[#E1306C]" />
                Voyager_Social_Archive
              </div>
              <h2 className="text-4xl md:text-7xl font-heritage font-bold text-[#0a0a0a] tracking-tighter uppercase leading-none">
                {UI_STRINGS.travelMemories[language]}
              </h2>
              <div className="w-24 h-1.5 insta-gradient rounded-full shadow-lg" />
            </div>

            <div className="space-y-8">
              {stories.map((s, i) => (
                <p key={i} className="text-xl md:text-2xl font-light leading-relaxed italic border-l-4 border-[#E1306C]/20 pl-8 py-2 text-gray-500">
                  "{s[language]}"
                </p>
              ))}
            </div>
            
            <button 
              onClick={() => setView('community')}
              className="group relative flex items-center gap-8 px-12 py-6 bg-[#0a0a0a] text-white rounded-[2.5rem] shadow-[0_30px_70px_rgba(225,48,108,0.3)] transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#E1306C] to-[#f09433] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12">
                 <History size={24} />
              </div>
              <div className="relative z-10 flex flex-col items-start leading-none">
                 <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] mb-1">Public Journal</span>
                 <span className="text-sm font-bold uppercase tracking-[0.2em]">
                    {language === 'EN' ? 'Explore Community Journal' : 'සමූහයේ මතක සටහන්'}
                 </span>
              </div>
              <ArrowRight size={20} className="relative z-10 text-white/50 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 relative">
            {/* Visual HUD Decoration */}
            <div className="absolute -inset-10 opacity-[0.03] text-black pointer-events-none -z-10">
               <History size={400} className="animate-spin-slow" />
            </div>

            <div className="space-y-8 pt-20">
              <div className="story-ring p-[2px] rounded-[3rem] shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=800&q=80" className="rounded-[2.9rem] w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" alt="Temple" />
              </div>
              <div className="story-ring p-[2px] rounded-[3rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=800&q=80" className="rounded-[2.9rem] w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" alt="Statue" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="story-ring p-[2px] rounded-[3rem] shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-700 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80" className="rounded-[2.9rem] w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" alt="Culture" />
              </div>
              <div className="story-ring p-[2px] rounded-[3rem] shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=800&q=80" className="rounded-[2.9rem] w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" alt="Nature" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-spin-slow { animation: spin 30s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}} />
    </section>
  );
};

export default StorySection;
