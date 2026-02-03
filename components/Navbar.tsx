
import React, { useState, useEffect } from 'react';
import { Language, User } from '../types.ts';
import { 
  Globe, 
  User as UserIcon, 
  LogOut, 
  Menu, 
  X, 
  Heart, 
  ShoppingCart, 
  Search, 
  Compass, 
  Map, 
  Radio, 
  ChevronRight, 
  Library, 
  ChevronDown, 
  Box, 
  Zap, 
  Landmark, 
  Calendar,
  Utensils,
  Music,
  Activity,
  Languages,
  Sprout,
  Mountain,
  Backpack,
  ShieldCheck,
  Briefcase,
  Building2,
  Car,
  Route
} from 'lucide-react';

/**
 * TravelHubLogo Component - Named export for LoadingScreen
 */
export const TravelHubLogo: React.FC<{ size?: number; className?: string }> = ({ size = 40, className = "" }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute inset-0 bg-[#0EA5E9] rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
      <circle cx="50" cy="50" r="48" fill="#0a0a0a" stroke="url(#logo_grad_blue)" strokeWidth="2" />
      <path d="M50 25C40 25 32 33 32 50C32 67 40 75 50 75C60 75 68 67 68 50C68 33 60 25 50 25Z" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
      <text x="50" y="65" textAnchor="middle" fill="white" fontSize="45" fontWeight="bold" fontFamily="serif">T</text>
      <defs>
        <linearGradient id="logo_grad_blue" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0EA5E9" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

interface NavItem {
  id: string;
  label: { EN: string; SI: string };
  icon?: React.ReactNode;
  hasDropdown?: boolean;
  items?: { id: string; label: { EN: string; SI: string }; icon: React.ReactNode }[];
}

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  setView: (view: any) => void;
  currentView: string;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  language, 
  setLanguage, 
  setView, 
  currentView,
  user,
  onLogin,
  onLogout
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { id: 'destinations', label: { EN: 'Reality Portals', SI: 'යථාර්ථ පිවිසුම්' }, icon: <Map size={14} /> },
    { 
      id: 'heritage-nav', 
      label: { EN: 'Heritage', SI: 'උරුමය' }, 
      icon: <Landmark size={14} />,
      hasDropdown: true,
      items: [
        { id: 'foods', label: { EN: 'Food', SI: 'ආහාර' }, icon: <Utensils size={14} /> },
        { id: 'phrases', label: { EN: 'Language', SI: 'භාෂාව' }, icon: <Languages size={14} /> },
        { id: 'music', label: { EN: 'Music', SI: 'සංගීතය' }, icon: <Music size={14} /> },
        { id: 'medicine', label: { EN: 'Medicine', SI: 'වෙදකම' }, icon: <Activity size={14} /> },
        { id: 'festivals', label: { EN: 'Festivals', SI: 'උත්සව' }, icon: <Calendar size={14} /> },
      ]
    },
    { 
      id: 'booking-nav', 
      label: { EN: 'Booking', SI: 'ඇණවුම්' }, 
      icon: <Briefcase size={14} />,
      hasDropdown: true,
      items: [
        { id: 'marketplace', label: { EN: 'Packages', SI: 'පැකේජ' }, icon: <Box size={14} /> },
        { id: 'hotels', label: { EN: 'Hotels', SI: 'හෝටල්' }, icon: <Building2 size={14} /> },
        { id: 'transport', label: { EN: 'Transport', SI: 'ප්‍රවාහනය' }, icon: <Car size={14} /> },
        { id: 'booking-destinations', label: { EN: 'Routes', SI: 'මංපෙත්' }, icon: <Route size={14} /> },
      ]
    },
    { id: 'community', label: { EN: 'Nexus', SI: 'සමූහය' }, icon: <Heart size={14} /> },
    { id: 'shop', label: { EN: 'Gear', SI: 'භාණ්ඩ' }, icon: <ShoppingCart size={14} /> },
    { 
      id: 'future-nav', 
      label: { EN: 'Future', SI: 'අනාගතය' }, 
      icon: <Zap size={14} className="text-[#0EA5E9]" />,
      hasDropdown: true,
      items: [
        { id: 'legacy-archive', label: { EN: 'Legacy', SI: 'පුරාණ' }, icon: <Library size={14} /> },
        { id: 'vr-trip', label: { EN: 'VR Trip', SI: 'VR චාරිකාව' }, icon: <Box size={14} /> }
      ]
    },
  ];

  const handleNav = (id: string) => {
    setView(id);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[98%] max-w-7xl bg-white/95 backdrop-blur-2xl border border-gray-200 rounded-full shadow-[0_25px_60px_rgba(0,0,0,0.12)] ${isScrolled ? 'py-1 px-5' : 'py-2.5 px-8'}`}>
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-4 cursor-pointer group shrink-0" onClick={() => handleNav('home')}>
          {/* Fix: removed unintended assignment in prop expression which caused 'Cannot find name size' error */}
          <TravelHubLogo size={isScrolled ? 34 : 42} />
          <div className="flex flex-col items-start leading-none transition-all duration-700">
            <h1 className="text-xl md:text-2xl font-heritage font-black tracking-tight uppercase text-[#0a0a0a]">Travel Hub</h1>
            <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] mt-0.5 text-gray-400">Heritage_Sync</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div 
              key={link.id} 
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => !link.hasDropdown && handleNav(link.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-500 relative group/link ${
                  currentView === link.id || (link.hasDropdown && link.items?.some(i => i.id === currentView))
                    ? 'bg-gray-100 text-[#0a0a0a]' 
                    : 'text-gray-500 hover:text-[#0a0a0a] hover:bg-gray-50'
                }`}
              >
                <span className="opacity-70 group-hover/link:opacity-100 transition-opacity">{link.icon}</span>
                {link.label[language]}
                {link.hasDropdown && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`} />}
              </button>

              {/* Dropdown Menu */}
              {link.hasDropdown && activeDropdown === link.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-white rounded-[2.5rem] shadow-[0_40px_120px_rgba(0,0,0,0.18)] border border-gray-100 overflow-hidden p-2">
                    <div className="grid grid-cols-1 gap-1">
                      {link.items?.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleNav(subItem.id)}
                          className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                            currentView === subItem.id ? 'bg-[#0EA5E9]/10 text-[#0EA5E9]' : 'text-gray-500 hover:bg-gray-50 hover:text-[#0a0a0a]'
                          }`}
                        >
                          <span className="opacity-80 scale-90">{subItem.icon}</span>
                          {subItem.label[language]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="h-8 w-px bg-gray-100 mx-4" />

          <div className="flex items-center gap-4">
            <button onClick={() => setLanguage(language === 'EN' ? 'SI' : 'EN')} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-[10px] font-black uppercase tracking-widest bg-white text-gray-600 hover:border-[#0EA5E9]/40 shadow-sm">
              <Globe size={13} className="text-[#0EA5E9]" />
              {language}
            </button>

            {user ? (
              <button onClick={() => handleNav('community')} className="w-10 h-10 rounded-full border-2 border-white shadow-lg overflow-hidden group">
                 <img src={user.photo} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </button>
            ) : (
              <button onClick={onLogin} className="px-8 py-3 bg-[#0a0a0a] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-md">Registry</button>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-3 rounded-2xl bg-gray-100 border border-gray-200 text-[#0a0a0a]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer - UPDATED TO BLACK THEME */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-full mt-4 bg-[#0a0a0a]/95 backdrop-blur-3xl rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/10 p-8 flex flex-col gap-8 animate-in slide-in-from-top-4 duration-500 max-h-[85vh] overflow-y-auto w-full">
          {/* Header Identity in Mobile Menu */}
          <div className="flex items-center gap-5 px-6 py-4 bg-white rounded-[2.5rem] shadow-xl">
             <TravelHubLogo size={32} />
             <div className="flex flex-col items-start leading-none">
                <span className="text-sm font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">TRAVEL HUB</span>
                <span className="text-[7px] font-black text-gray-400 uppercase tracking-[0.3em]">HERITAGE_SYNC</span>
             </div>
          </div>

          <div className="space-y-4">
            {navLinks.map((link) => (
              <div key={link.id} className="space-y-3">
                <button
                  onClick={() => !link.hasDropdown && handleNav(link.id)}
                  className={`w-full flex items-center justify-between p-6 rounded-[2.5rem] transition-all duration-500 border ${
                    currentView === link.id || (link.hasDropdown && link.items?.some(i => i.id === currentView))
                      ? 'bg-white text-[#0a0a0a] border-transparent shadow-2xl scale-[1.02]' 
                      : 'bg-white/5 text-white/60 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={currentView === link.id ? 'text-[#0EA5E9]' : ''}>{link.icon}</span>
                    <span className="text-lg font-heritage font-bold uppercase tracking-widest">{link.label[language]}</span>
                  </div>
                  {link.hasDropdown && <ChevronDown size={20} className={activeDropdown === link.id ? 'rotate-180 transition-transform' : 'transition-transform'} />}
                </button>

                {link.hasDropdown && (
                  <div className="grid grid-cols-2 gap-3 px-2">
                    {link.items?.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleNav(subItem.id)}
                        className={`flex items-center gap-4 p-5 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] transition-all border ${
                          currentView === subItem.id 
                            ? 'bg-[#0EA5E9]/20 text-[#0EA5E9] border-[#0EA5E9]/40 shadow-lg' 
                            : 'bg-white/[0.03] text-white/30 border-white/5 hover:text-white/60 hover:bg-white/5'
                        }`}
                      >
                        <span className="opacity-60">{subItem.icon}</span>
                        {subItem.label[language]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
             <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => { setLanguage(language === 'EN' ? 'SI' : 'EN'); setIsMenuOpen(false); }} 
                  className="py-6 rounded-[2.5rem] bg-white/5 border border-white/10 text-white/60 font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-white/10 transition-all"
                >
                  <Globe size={18} className="text-[#0EA5E9]" />
                  {language === 'EN' ? 'සිංහල' : 'ENGLISH'}
                </button>

                {user ? (
                  <button 
                    onClick={onLogout} 
                    className="py-6 bg-red-500/10 border border-red-500/20 text-red-500 rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.3em] hover:bg-red-500 hover:text-white transition-all"
                  >
                    DISCONNECT
                  </button>
                ) : (
                  <button 
                    onClick={onLogin} 
                    className="py-6 bg-white text-[#0a0a0a] rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    SYNC_REGISTRY
                  </button>
                )}
             </div>
             
             {/* Decorative Footer info */}
             <div className="flex justify-center items-center gap-4 pt-4 opacity-20">
                <Activity size={14} className="text-[#0EA5E9] animate-pulse" />
                <span className="text-[8px] font-black text-white uppercase tracking-[0.6em]">Neural_Link_Stable_v4.5</span>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
