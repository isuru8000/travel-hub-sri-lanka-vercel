
import React, { useState, useMemo } from 'react';
import { Language, Food } from '../types.ts';
import { FOODS_DATA } from '../constants.tsx';
import { Flame, UtensilsCrossed, Leaf, Sparkles, History, Compass, Utensils, Wheat, Candy, Waves, Crown, LayoutGrid, Search } from 'lucide-react';

interface FoodsProps {
  language: Language;
}

const Foods: React.FC<FoodsProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<Food['category'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const heroImage = "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1920&q=80";

  const categories = [
    { id: 'all', icon: <LayoutGrid size={18} />, EN: 'All Dishes', SI: 'සියල්ල' },
    { id: 'street', icon: <Utensils size={18} />, EN: 'Street Food', SI: 'වීදි ආහාර' },
    { id: 'village', icon: <Wheat size={18} />, EN: 'Village Classics', SI: 'ගමේ ආහාර' },
    { id: 'sweets', icon: <Candy size={18} />, EN: 'Sweets & Treats', SI: 'රසකැවිලි' },
    { id: 'coastal', icon: <Waves size={18} />, EN: 'Coastal Flavors', SI: 'මුහුදු ආහාර' },
    { id: 'royal', icon: <Crown size={18} />, EN: 'Royal Legacy', SI: 'රාජකීය උරුමය' },
  ];

  const filteredFoods = useMemo(() => {
    let base = activeCategory === 'all' 
      ? FOODS_DATA 
      : FOODS_DATA.filter(food => food.category === activeCategory);
    
    if (searchQuery.trim()) {
      base = base.filter(f => 
        f.name.EN.toLowerCase().includes(searchQuery.toLowerCase()) || 
        f.name.SI.includes(searchQuery)
      );
    }
    return base;
  }, [activeCategory, searchQuery]);

  return (
    <section className="min-h-screen bg-white pb-32">
      {/* Food Heritage Header */}
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-70 transition-transform duration-[20000ms] animate-slow-zoom" 
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 story-ring opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/40 to-transparent" />
        
        <div className="relative text-center space-y-8 px-6 max-w-5xl animate-in fade-in zoom-in duration-1000">
          <div className="flex flex-col items-center gap-6">
             <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
                <History size={16} className="text-[#0EA5E9] animate-pulse" />
                Ancestral_Flavor_Registry
             </div>
             <div className="h-12 w-[1px] bg-gradient-to-b from-[#0EA5E9] to-transparent"></div>
          </div>
          
          <h2 className="text-6xl md:text-[11rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            CULTURAL <br/><span className="italic insta-text-gradient">CUISINE.</span>
          </h2>
          
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-2xl font-light italic leading-relaxed drop-shadow-lg">
            {language === 'EN' 
              ? "A culinary pilgrimage through 40 authentic masterpieces of an island civilization." 
              : "දිවයිනේ අසමසම ආහාර වර්ග 40ක් හරහා යන රසවත් වන්දනාවක්."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 -mt-24 relative z-10 space-y-24">
        
        {/* EYE-CATCHING TAB NAVIGATION */}
        <div className="flex flex-col items-center gap-12">
          <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 p-2 md:p-3 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)] flex flex-wrap justify-center gap-2 md:gap-4 relative group">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-3 px-8 py-5 rounded-[2.5rem] text-[11px] font-black uppercase tracking-widest transition-all duration-700 relative overflow-hidden group/btn ${
                  activeCategory === cat.id 
                    ? 'text-white' 
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                {/* Active Highlight Background */}
                {activeCategory === cat.id && (
                  <div className="absolute inset-0 insta-gradient opacity-100 animate-in fade-in zoom-in-95 duration-500" />
                )}
                
                <span className="relative z-10">{cat.icon}</span>
                <span className="relative z-10">{language === 'EN' ? cat.EN : cat.SI}</span>
              </button>
            ))}
          </div>

          {/* Taste Archive Search */}
          <div className="relative w-full max-w-2xl group">
             <div className="absolute -inset-1 bg-gradient-to-r from-[#0EA5E9]/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
             <div className="relative flex items-center bg-white border border-gray-100 rounded-full shadow-xl px-10 py-2">
                <Search size={20} className="text-gray-400 group-focus-within:text-[#0EA5E9] transition-colors" />
                <input 
                   type="text" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder={language === 'EN' ? "Search for a recipe or ingredient..." : "ආහාර වට්ටෝරු සොයන්න..."}
                   className="w-full bg-transparent border-none outline-none px-6 py-4 text-base font-bold text-[#0a0a0a] placeholder:text-gray-300"
                />
             </div>
          </div>
        </div>

        {/* Curated Food Grid - Updated with gap-10 md:gap-16 pt-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 pt-8">
          {filteredFoods.map((food, idx) => {
            return (
              <div 
                key={food.id}
                className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-4 transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) animate-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={food.image} 
                    alt={food.name[language]} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[6000ms]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-8 left-8">
                     <div className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-full shadow-2xl flex items-center gap-2 border border-white/20">
                        <span className="text-[9px] font-black text-[#0a0a0a] uppercase tracking-widest">{food.category} registry</span>
                     </div>
                  </div>

                  <div className="absolute bottom-6 left-8">
                     <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.4em] drop-shadow-md">Archive_Node #F{idx+1}</span>
                  </div>
                </div>

                <div className="p-12 flex-grow space-y-8 flex flex-col">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-heritage font-bold text-[#0a0a0a] group-hover:insta-text-gradient transition-all leading-tight">
                      {food.name[language]}
                    </h3>
                    <div className="flex items-center gap-3 text-[10px] font-black text-[#0EA5E9] uppercase tracking-[0.3em]">
                      <UtensilsCrossed size={14} />
                      {food.tasteProfile[language]}
                    </div>
                  </div>

                  <p className="text-lg text-gray-500 leading-relaxed font-light italic border-l-4 border-gray-50 pl-6">
                    "{food.description[language]}"
                  </p>

                  <div className="pt-8 border-t border-gray-50 mt-auto">
                    <div className="flex items-center gap-3 mb-6">
                      <Leaf size={16} className="text-green-500" />
                      <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Heritage Components</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {food.ingredients.map((ing, i) => (
                        <span 
                          key={i} 
                          className="px-5 py-2 bg-gray-50 text-[#0a0a0a] text-[10px] font-black rounded-xl border border-gray-100 uppercase tracking-widest group-hover:bg-white group-hover:border-[#0EA5E9]/20 transition-all"
                        >
                          {ing[language]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredFoods.length === 0 && (
          <div className="py-40 text-center space-y-8">
             <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-200">
                <Search size={48} />
             </div>
             <div className="space-y-2">
                <h3 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">No Flavors Found</h3>
                <p className="text-gray-400 italic">Adjust your search or category filter to synchronize.</p>
             </div>
             <button onClick={() => {setSearchQuery(''); setActiveCategory('all');}} className="px-12 py-5 bg-[#0a0a0a] text-white rounded-full font-black text-xs uppercase tracking-widest">Reset Sync</button>
          </div>
        )}

        {/* Taste Wisdom Section */}
        <div className="max-w-4xl mx-auto pt-40 text-center space-y-12">
          <div className="flex justify-center gap-8 opacity-20">
             <Compass size={40} />
             <Sparkles size={40} />
             <UtensilsCrossed size={40} />
          </div>
          <p className="text-2xl md:text-5xl font-heritage font-medium text-gray-400 italic leading-tight">
            {language === 'EN' 
              ? "\"To taste our food is to hear the stories of our farmers, our soil, and the ancient currents of the Indian Ocean.\""
              : "\"අපගේ ආහාර රස විඳීම යනු අපේ ගොවියන්ගේ, අපේ පසෙහි සහ ඉන්දියන් සාගරයේ පැරණි රළවල කතාවට සවන් දීමයි.\""}
          </p>
          <div className="w-32 h-1.5 insta-gradient mx-auto rounded-full shadow-3xl animate-pulse" />
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

export default Foods;
