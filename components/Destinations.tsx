import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Language, Destination } from '../types.ts';
import { DESTINATIONS, UI_STRINGS } from '../constants.tsx';
import { 
  Search, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ArrowRight, 
  X, 
  RotateCcw,
  Landmark,
  Waves,
  PawPrint,
  Mountain,
  LayoutGrid,
  Compass,
  Loader2,
  History,
  Target,
  Cpu,
  Scan,
  Zap,
  Activity,
  Database,
  Brain,
  Sparkles
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ITEMS_PER_PAGE = 6;

interface DestinationsProps {
  language: Language;
  onSelectDestination: (dest: Destination) => void;
}

const Destinations: React.FC<DestinationsProps> = ({ language, onSelectDestination }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [isGeneratingInsight, setIsGeneratingInsight] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  const headerBgImage = "https://images.unsplash.com/photo-1552423814-147ccca2344c?q=80&w=2070&auto=format&fit=crop";
  const pageBodyBg = "https://images.unsplash.com/photo-1516466723207-a1690421c693?q=80&w=2012&auto=format&fit=crop";

  const categories = [
    { id: 'all', EN: 'All', SI: 'සියල්ල', icon: LayoutGrid },
    { id: 'ancient', EN: 'Ancient', SI: 'පුරාණ', icon: Landmark },
    { id: 'beach', EN: 'Beaches', SI: 'වෙරළ', icon: Waves },
    { id: 'wildlife', EN: 'Wildlife', SI: 'වනජීවී', icon: PawPrint },
    { id: 'mountains', EN: 'Hills', SI: 'කඳුකරය', icon: Mountain },
  ];

  const popularSearches = [
    { EN: "Sigiriya", SI: "සීගිරිය" },
    { EN: "Ella", SI: "ඇල්ල" },
    { EN: "Anuradhapura", SI: "අනුරාධපුර" },
    { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }
  ];

  const locations = useMemo(() => {
    const unique = Array.from(new Set(DESTINATIONS.map(d => d.location)));
    return ['all', ...unique];
  }, []);

  const searchMatches = useMemo(() => {
    return DESTINATIONS.filter(d => {
      const matchesLocation = locationFilter === 'all' || d.location === locationFilter;
      const matchesSearch = d.name.EN.toLowerCase().includes(search.toLowerCase()) || 
                            d.name.SI.includes(search);
      return matchesLocation && matchesSearch;
    });
  }, [locationFilter, search]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: searchMatches.length };
    categories.forEach(cat => {
      if (cat.id !== 'all') {
        counts[cat.id] = searchMatches.filter(d => d.category === cat.id).length;
      }
    });
    return counts;
  }, [searchMatches, categories]);

  const filteredDestinations = useMemo(() => {
    return searchMatches.filter(d => {
      const matchesCategory = categoryFilter === 'all' || d.category === categoryFilter;
      return matchesCategory;
    });
  }, [searchMatches, categoryFilter]);

  const dynamicSuggestions = useMemo(() => {
    if (search.length < 2) return [];
    return DESTINATIONS
      .filter(d => 
        d.name.EN.toLowerCase().includes(search.toLowerCase()) || 
        d.name.SI.includes(search)
      )
      .slice(0, 5);
  }, [search]);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (search.length > 3) {
      const timer = setTimeout(async () => {
        setIsGeneratingInsight(true);
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `As an elite Sri Lanka travel archivist, provide a one-sentence high-fidelity summary about: ${search}. If it's a specific place, mention its aura. Language: ${language === 'SI' ? 'Sinhala' : 'English'}.`,
          });
          setAiInsight(response.text || null);
        } catch (e) {
          console.error("Insight generation failed", e);
        } finally {
          setIsGeneratingInsight(false);
        }
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setAiInsight(null);
    }
  }, [search, language]);

  useEffect(() => {
    setCurrentPage(1);
    if (search) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 800);
      return () => clearTimeout(timer);
    }
  }, [categoryFilter, locationFilter, search]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalPages = Math.ceil(filteredDestinations.length / ITEMS_PER_PAGE);
  const paginatedDestinations = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDestinations.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredDestinations, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setCategoryFilter('all');
    setLocationFilter('all');
    setSearch('');
    setCurrentPage(1);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (name: string) => {
    setSearch(name);
    setShowSuggestions(false);
  };

  return (
    <section id="destinations" className="min-h-screen pb-32 bg-[#fafafa] relative overflow-hidden" aria-labelledby="destinations-title">
      
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{ 
          backgroundImage: `url('${pageBodyBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Hero Section */}
      <div className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col items-center overflow-hidden pt-6 md:pt-12">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] scale-110" 
          style={{ backgroundImage: `url('${headerBgImage}')`, transform: `scale(${1.1 + scrollPos / 8000})` }}
          role="presentation"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#010105]/95 via-[#010105]/75 to-[#fafafa]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_80%)]" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-6 flex flex-col items-center pt-8 md:pt-12">
          {/* Title Area */}
          <div className="space-y-4 md:space-y-8 animate-in fade-in slide-in-from-top-8 duration-1000 flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.4em] mx-auto shadow-2xl mb-2">
              <Scan size={12} className="text-[#0EA5E9] animate-pulse" />
              SPATIAL_REGISTRY_PORTAL
            </div>
            
            <div className="relative px-6 py-5 md:px-16 md:py-10">
              <h2 id="destinations-title" className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-heritage font-bold text-white tracking-tighter leading-none whitespace-nowrap flex items-center justify-center gap-4 md:gap-10 uppercase">
                <span>REALITY</span>
                <span className="bg-[#0EA5E9] px-4 py-2 md:px-12 md:py-4 text-white shadow-[0_0_60px_rgba(14,165,233,0.4)]">PORTALS.</span>
              </h2>
            </div>
          </div>

          {/* SEARCH BAR - ENHANCED VISIBILITY */}
          <div className="w-full max-w-xl mx-auto relative mt-10 md:mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 z-[70] px-2 md:px-0" ref={searchWrapperRef}>
            <div className={`relative group p-0.5 rounded-[3rem] md:rounded-[4rem] transition-all duration-500 ${isFocused ? 'shadow-[0_0_100px_rgba(14,165,233,0.25)]' : 'shadow-[0_30px_70px_rgba(0,0,0,0.3)]'}`}>
              
              <div className={`relative flex items-center bg-white border border-[#0EA5E9]/20 backdrop-blur-sm rounded-[2.8rem] md:rounded-[3.8rem] transition-all duration-500 overflow-hidden ${isFocused ? 'scale-[1.005] border-[#0EA5E9]/50 ring-2 ring-[#0EA5E9]/30 shadow-[inset_0_0_15px_rgba(14,165,233,0.05)]' : 'scale-100 hover:border-gray-400 hover:shadow-[0_20px_80px_rgba(0,0,0,0.4)]'}`}>
                <div className="pl-6 md:pl-8 text-gray-500 shrink-0">
                  {isSearching ? (
                    <Loader2 size={24} className="animate-spin text-[#0EA5E9]" />
                  ) : (
                    <Search size={24} className={`${isFocused ? 'text-[#0EA5E9]' : 'text-gray-600'} transition-colors duration-300`} />
                  )}
                </div>

                <input 
                  type="text" 
                  aria-label={UI_STRINGS.searchPlaceholder[language]}
                  placeholder={UI_STRINGS.searchPlaceholder[language]}
                  value={search}
                  onFocus={() => { setShowSuggestions(true); setIsFocused(true); }}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowSuggestions(true);
                  }}
                  className="w-full px-4 md:px-6 py-5 md:py-8 bg-transparent text-lg md:text-3xl font-heritage font-bold focus:outline-none placeholder:text-gray-500 placeholder:italic text-[#0a0a0a] subpixel-antialiased"
                />

                <div className="flex items-center gap-3 pr-6 md:pr-8">
                  {search && (
                    <button onClick={() => { setSearch(''); setShowSuggestions(false); }} className="p-2 text-gray-400 hover:text-red-500 transition-all active:scale-90">
                      <X size={20} />
                    </button>
                  )}
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-[1.2rem] md:rounded-[1.8rem] flex items-center justify-center border transition-all duration-500 ${isFocused ? 'bg-[#0EA5E9] text-white border-transparent shadow-[0_0_20px_rgba(14,165,233,0.5)] rotate-12' : 'bg-gray-100 text-gray-400 border-gray-200'}`}>
                     <Target size={22} className={isFocused ? 'brightness-125' : ''} />
                  </div>
                </div>
              </div>
            </div>

            {showSuggestions && (
              <div className="absolute top-[calc(100%-1.5rem)] left-0 right-0 bg-white/99 backdrop-blur-2xl border border-gray-200 rounded-b-[4rem] shadow-[0_80px_200px_rgba(0,0,0,0.6)] pt-16 pb-10 z-20 animate-in slide-in-from-top-6 duration-500 overflow-hidden">
                <div className="max-h-[350px] md:max-h-[450px] overflow-y-auto no-scrollbar px-8 md:px-12 space-y-8 md:space-y-10">
                  {search.length >= 2 && dynamicSuggestions.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-[10px] font-black text-[#0EA5E9] uppercase tracking-[0.5em] mb-4">Neural_Matches</p>
                      {dynamicSuggestions.map((dest) => (
                        <button key={dest.id} onClick={() => handleSuggestionClick(dest.name[language])} className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center justify-between rounded-[2.5rem] transition-all group/sug">
                          <div className="flex items-center gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.8rem] overflow-hidden shadow-xl border border-gray-100 group-hover/sug:rotate-3 transition-all duration-700">
                              <img src={dest.image} className="w-full h-full object-cover transition-transform duration-[6s] group-hover/sug:scale-125" alt="" />
                            </div>
                            <div className="space-y-0.5">
                               <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest leading-none">{dest.location}</p>
                               <span className="text-lg md:text-2xl font-heritage font-bold text-[#0a0a0a] group-hover/sug:insta-text-gradient transition-all">{dest.name[language]}</span>
                            </div>
                          </div>
                          <ArrowRight size={20} className="text-gray-200 group-hover/sug:text-[#0EA5E9] group-hover/sug:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="space-y-6">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] mb-4">Frequent_Trajectories</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {popularSearches.map((s, i) => (
                        <button key={i} onClick={() => handleSuggestionClick(s[language])} className="text-left px-8 py-5 bg-gray-50 hover:bg-white rounded-[2rem] md:rounded-[2.5rem] flex items-center gap-6 transition-all border border-transparent hover:border-[#0EA5E9]/30 hover:shadow-xl active:scale-95 group/pop">
                          <History size={16} className="text-gray-300 group-hover/pop:text-[#0EA5E9]" />
                          <span className="text-sm md:text-lg font-bold text-gray-600 group-hover/pop:text-[#0a0a0a]">{s[language]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CATEGORY FILTERS */}
          <div className="w-full max-w-4xl mx-auto mt-10 md:mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 z-50">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="flex flex-row overflow-x-auto no-scrollbar gap-2 md:gap-3 bg-white/10 backdrop-blur-md p-1.5 md:p-2 rounded-full border border-white/10 shrink-0 shadow-lg">
                {categories.map(cat => (
                  <button 
                    key={cat.id} 
                    onClick={() => setCategoryFilter(cat.id)} 
                    className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all text-[9px] md:text-[10px] font-black uppercase tracking-widest relative group/cat whitespace-nowrap ${categoryFilter === cat.id ? 'bg-white text-[#0a0a0a] shadow-xl' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    <cat.icon size={12} className={categoryFilter === cat.id ? 'text-[#0EA5E9]' : ''} />
                    <span>{language === 'EN' ? cat.EN : cat.SI}</span>
                    {categoryCounts[cat.id] > 0 && (
                      <span className={`text-[8px] px-1.5 py-0.5 rounded font-black transition-all ${categoryFilter === cat.id ? 'bg-[#0a0a0a]/5 text-[#0a0a0a]' : 'bg-white/10 text-white/40'}`}>
                        {categoryCounts[cat.id]}
                      </span>
                    )}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-2 w-full md:w-auto">
                <div className="relative flex-grow">
                  <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="appearance-none px-6 md:px-8 py-2 md:py-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer shadow-lg text-white transition-all focus:border-[#0EA5E9]/40 w-full min-w-[140px]">
                    <option value="all" className="text-black">{UI_STRINGS.allRegions[language]}</option>
                    {locations.filter(l => l !== 'all').map(loc => <option key={loc} value={loc} className="text-black">{loc}</option>)}
                  </select>
                  <ChevronDown size={12} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                </div>
                {(categoryFilter !== 'all' || locationFilter !== 'all' || search) && (
                  <button onClick={resetFilters} className="p-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-red-400 hover:bg-red-500 hover:text-white transition-all active:scale-90 shadow-lg"><RotateCcw size={14} /></button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12 md:mt-20 relative z-20 space-y-16">
        {/* AI Insight Section */}
        {(isGeneratingInsight || aiInsight) && (
          <div className="animate-in fade-in slide-in-from-top-6 duration-1000 max-w-5xl mx-auto">
            <div className="bg-[#0a0a0a] p-10 md:p-16 rounded-[4rem] relative overflow-hidden group shadow-[0_60px_120px_rgba(0,0,0,0.3)] border border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.12)_0%,transparent_60%)] animate-pulse" />
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] text-white group-hover:rotate-6 transition-transform duration-[2000ms]">
                 <Brain size={200} />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-white/5 backdrop-blur-3xl rounded-[2rem] md:rounded-[2.5rem] border border-white/10 flex items-center justify-center text-[#0EA5E9] shadow-2xl relative overflow-hidden shrink-0">
                   <Sparkles size={40} className="relative z-10" />
                </div>
                <div className="space-y-4 md:space-y-6 flex-grow text-center md:text-left">
                  <span className="text-[10px] md:text-[12px] font-black text-[#0EA5E9] uppercase tracking-[0.8em]">Neural_Synthesis</span>
                  {isGeneratingInsight ? (
                    <div className="flex items-center justify-center md:justify-start gap-4 h-10">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-bounce" />
                      </div>
                    </div>
                  ) : (
                    <h4 className="text-2xl md:text-5xl font-heritage font-medium text-white/95 leading-tight italic">
                      "{aiInsight}"
                    </h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 pt-8">
          {paginatedDestinations.length > 0 ? paginatedDestinations.map((dest, idx) => {
            return (
              <div key={dest.id} className="group text-left bg-white rounded-[4rem] md:rounded-[5rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col hover:-translate-y-4 transition-all duration-1000 animate-in slide-in-from-bottom-12" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="relative h-[380px] md:h-[480px] overflow-hidden cursor-pointer" onClick={() => onSelectDestination(dest)}>
                  <img src={dest.image} alt={dest.name[language]} className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                  
                  <div className="absolute top-8 md:top-10 left-8 md:left-10">
                     <div className="px-5 md:px-6 py-2 bg-white/95 backdrop-blur-md rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#0a0a0a] shadow-2xl">
                        {dest.category} archive
                     </div>
                  </div>

                  <div className="absolute bottom-10 md:bottom-12 left-10 md:left-12 right-10 md:right-12 space-y-4">
                     <div className="flex items-center gap-3 text-[#0EA5E9]">
                        <MapPin size={16} />
                        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">{dest.location}</span>
                     </div>
                     <h3 className="text-4xl md:text-5xl font-heritage font-bold text-white tracking-tighter leading-[0.9] uppercase">
                        {dest.name[language]}
                     </h3>
                  </div>
                </div>
                <div className="p-10 md:p-14 space-y-8 flex-grow flex flex-col justify-between">
                  <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed italic border-l-4 md:border-l-[6px] border-[#0EA5E9]/10 pl-8 md:pl-10 py-2">
                    "{dest.shortStory[language]}"
                  </p>
                  <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                       <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Node Synced</span>
                    </div>
                    <button onClick={() => onSelectDestination(dest)} className="w-14 h-14 md:w-16 md:h-16 rounded-[1.8rem] md:rounded-[2rem] bg-gray-50 flex items-center justify-center text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-[0_15px_30px_rgba(14,165,233,0.3)]">
                       <ArrowRight size={28} />
                    </button>
                  </div>
                </div>
              </div>
            );
          }) : (
            <div className="col-span-full py-32 md:py-48 text-center space-y-10 animate-in fade-in duration-1000">
               <div className="w-28 h-28 md:w-32 md:h-32 bg-gray-50 rounded-[3rem] flex items-center justify-center mx-auto text-gray-200">
                  <Search size={48} />
               </div>
               <div className="space-y-4">
                  <h3 className="text-4xl md:text-6xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">No Registry Matches</h3>
                  <p className="text-gray-400 font-medium italic max-w-xl mx-auto text-base md:text-xl leading-relaxed px-6">
                    The requested coordinates or category synchronization returned no results for "{search}".
                  </p>
               </div>
               <button onClick={resetFilters} className="px-12 py-5 bg-[#0a0a0a] text-white rounded-full font-black text-[10px] md:text-[12px] uppercase tracking-[0.4em] shadow-xl hover:scale-110 active:scale-95 transition-all">Initialize Reset Sync</button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 md:gap-8 pt-20 md:pt-32">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="w-16 h-16 md:w-20 md:h-20 rounded-[1.8rem] md:rounded-[2rem] border border-gray-200 bg-white text-gray-300 hover:text-[#0EA5E9] disabled:opacity-10 shadow-xl flex items-center justify-center transition-all"><ChevronLeft size={32} /></button>
            <div className="flex gap-2 md:gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => handlePageChange(i + 1)} className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.8rem] text-sm md:text-base font-black shadow-lg transition-all ${currentPage === i + 1 ? 'bg-[#0a0a0a] text-white scale-110' : 'bg-white border border-gray-100 text-gray-400 hover:text-[#0a0a0a]'}`}>{i + 1}</button>
              ))}
            </div>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="w-16 h-16 md:w-20 md:h-20 rounded-[1.8rem] md:rounded-[2rem] border border-gray-200 bg-white text-gray-300 hover:text-[#0EA5E9] disabled:opacity-10 shadow-xl flex items-center justify-center transition-all"><ChevronRight size={32} /></button>
          </div>
        )}
      </div>

      {/* Registry Footer */}
      <div className="max-w-7xl mx-auto px-12 pt-32 pb-16 opacity-10 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-gray-100 mt-16">
         <div className="flex items-center gap-6">
            <Database size={24} />
            <span className="text-[10px] font-black uppercase tracking-[0.8em]">End_Of_Spatial_Registry</span>
         </div>
         <Activity size={24} className="animate-pulse" />
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
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Destinations;