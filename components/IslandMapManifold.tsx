import React, { useState, useMemo, useRef } from 'react';
import { Language, Destination } from '../types.ts';
import { DESTINATIONS, UI_STRINGS } from '../constants.tsx';
import { 
  Compass, 
  MapPin, 
  Info, 
  ArrowRight, 
  Sparkles, 
  Target, 
  Search, 
  X,
  Zap,
  Layers,
  Database,
  Globe,
  Star,
  Activity,
  Maximize2,
  ChevronLeft
} from 'lucide-react';

interface IslandMapManifoldProps {
  language: Language;
  onSelectDestination: (dest: Destination) => void;
}

const IslandMapManifold: React.FC<IslandMapManifoldProps> = ({ language, onSelectDestination }) => {
  const [hoveredNode, setHoveredNode] = useState<Destination | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | Destination['category']>('all');

  const filteredNodes = useMemo(() => {
    return DESTINATIONS.filter(d => {
      const matchesSearch = d.name.EN.toLowerCase().includes(searchQuery.toLowerCase()) || d.name.SI.includes(searchQuery);
      const matchesCategory = categoryFilter === 'all' || d.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  const categoryColors = {
    ancient: '#F59E0B',
    beach: '#0EA5E9',
    wildlife: '#10B981',
    mountains: '#8B5CF6'
  };

  return (
    <div className="min-h-screen bg-[#050508] relative overflow-hidden flex flex-col pt-32 pb-12">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(#E1306C 1px, transparent 1px), linear-gradient(90deg, #E1306C 1px, transparent 1px)`, backgroundSize: '100px 100px', maskImage: 'radial-gradient(circle, black, transparent 80%)' }} />
      </div>

      <div className="max-w-[1800px] mx-auto w-full px-8 relative z-10 flex flex-col lg:flex-row gap-12 items-stretch h-full">
        
        {/* CONTROL SIDEBAR */}
        <div className="w-full lg:w-96 shrink-0 space-y-8 animate-in slide-in-from-left-8 duration-1000">
           <div className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 space-y-10 shadow-3xl">
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-[#0EA5E9]">
                    <Target size={20} className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">Geospatial_Interface</span>
                 </div>
                 <h2 className="text-4xl font-heritage font-bold text-white uppercase tracking-tighter">Global Map.</h2>
              </div>

              <div className="space-y-6">
                 <div className="relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#0EA5E9] transition-colors" size={20} />
                    <input 
                      type="text"
                      placeholder="Locate registry node..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-16 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold focus:outline-none focus:ring-4 focus:ring-[#0EA5E9]/10 transition-all"
                    />
                 </div>

                 <div className="grid grid-cols-2 gap-3">
                    {['all', 'ancient', 'mountains', 'beach', 'wildlife'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategoryFilter(cat as any)}
                        className={`px-4 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${
                          categoryFilter === cat 
                            ? 'bg-[#0EA5E9] text-white border-transparent shadow-[0_0_20px_rgba(14,165,233,0.4)]' 
                            : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                 <div className="flex items-center justify-between">
                    <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">Live Registry Nodes</p>
                    <span className="text-xl font-heritage font-black text-[#0EA5E9]">{filteredNodes.length}</span>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <Activity size={18} className="text-green-500 animate-pulse" />
                    <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Signal_Strength: Optimal</p>
                 </div>
              </div>
           </div>

           {/* Quick Legends */}
           <div className="bg-black/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 flex flex-wrap gap-8 justify-center shadow-2xl">
              {Object.entries(categoryColors).map(([cat, color]) => (
                <div key={cat} className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
                   <span className="text-[9px] font-black uppercase tracking-widest text-white/20">{cat}</span>
                </div>
              ))}
           </div>
        </div>

        {/* INTERACTIVE MAP HUB */}
        <div className="flex-grow bg-black/40 backdrop-blur-xl border border-white/5 rounded-[4rem] relative overflow-hidden group shadow-inner">
           <div className="absolute inset-0 pattern-overlay opacity-10 pointer-events-none" />
           
           {/* MAP ENGINE */}
           <div className="absolute inset-0 flex items-center justify-center p-20">
              <div className="relative h-full aspect-[3/4] transition-transform duration-[2000ms] group-hover:scale-105">
                 {/* Topographical Base */}
                 <img 
                   src="https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80" 
                   className="w-full h-full object-contain opacity-30 grayscale contrast-150 transition-all duration-1000 group-hover:opacity-50" 
                   alt="Lanka Terrain"
                   style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 95%)' }}
                 />
                 
                 {/* Nodes Layer */}
                 <div className="absolute inset-0">
                    {filteredNodes.map((node) => {
                      if (!node.coordinates) return null;
                      const isHovered = hoveredNode?.id === node.id;
                      const color = categoryColors[node.category] || '#ffffff';

                      return (
                        <div 
                          key={node.id}
                          className="absolute"
                          style={{ left: `${node.coordinates.x}%`, top: `${node.coordinates.y}%`, transform: 'translate(-50%, -50%)' }}
                          onMouseEnter={() => setHoveredNode(node)}
                          onMouseLeave={() => setHoveredNode(null)}
                          onClick={() => onSelectDestination(node)}
                        >
                          <div className={`relative cursor-pointer transition-all duration-500 ${isHovered ? 'scale-150' : 'scale-100'}`}>
                             <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: color, animationDuration: '3s' }} />
                             <div className="w-4 h-4 rounded-full border-2 border-white shadow-2xl relative z-10" style={{ backgroundColor: color }} />
                          </div>

                          {/* Hover Tooltip Shard */}
                          {isHovered && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 w-72 animate-in slide-in-from-bottom-4 zoom-in-95 duration-500 z-50 pointer-events-none">
                               <div className="bg-black/90 backdrop-blur-3xl border border-white/20 rounded-[3rem] p-2 shadow-[0_40px_100px_rgba(0,0,0,1)] overflow-hidden">
                                  <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-4 border border-white/5">
                                     <img src={node.image} className="w-full h-full object-cover" alt="" />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                     <div className="absolute bottom-4 left-6">
                                        <p className="text-[10px] font-black uppercase text-[#0EA5E9] tracking-widest">{node.location}</p>
                                     </div>
                                  </div>
                                  <div className="px-8 pb-8 pt-2 space-y-4">
                                     <h4 className="text-2xl font-heritage font-bold text-white uppercase tracking-tight">{node.name[language]}</h4>
                                     <p className="text-xs text-gray-400 font-medium italic line-clamp-2 leading-relaxed">"{node.shortStory[language]}"</p>
                                     <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                           <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                           <span className="text-[8px] font-black uppercase text-white/30">Entry_Available</span>
                                        </div>
                                        <ArrowRight size={14} className="text-white/40" />
                                     </div>
                                  </div>
                               </div>
                               <div className="w-[1px] h-10 bg-gradient-to-t from-white/30 to-transparent mx-auto" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                 </div>
              </div>
           </div>

           {/* Map HUD Components */}
           <div className="absolute top-10 right-10 flex flex-col gap-6">
              <div className="bg-black/60 backdrop-blur-3xl border border-white/10 p-6 rounded-3xl space-y-2 text-right">
                 <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">Uplink_Identity</p>
                 <p className="text-xl font-heritage font-black text-white tracking-[0.2em]">VOYAGER_01</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 hover:text-white transition-colors cursor-help">
                 <Maximize2 size={24} />
              </div>
           </div>

           <div className="absolute bottom-10 left-10 opacity-20">
              <Compass size={160} className="text-white animate-spin-slow" />
           </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-spin-slow { animation: spin 40s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .shadow-3xl { box-shadow: 0 40px 100px rgba(0,0,0,0.8); }
      `}} />
    </div>
  );
};

export default IslandMapManifold;