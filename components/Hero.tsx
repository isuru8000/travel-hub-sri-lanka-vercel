
import React, { useState, useEffect } from 'react';
import { Language, User } from '../types.ts';
import { Box, Orbit, Layers, ShieldCheck, Activity, ChevronRight } from 'lucide-react';

interface HeroProps {
  language: Language;
  setView: (view: any) => void;
  user: User | null;
}

const Hero: React.FC<HeroProps> = ({ language, setView, user }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5)
      });
    };
    
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // User-provided cinematic aerial view of Sri Lanka (Updated)
  const heroBgImage = "https://i.pinimg.com/1200x/2a/63/1d/2a631d3d6664c0c84bf78db4a758a2a9.jpg";

  return (
    <div className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-[#020205]" style={{ perspective: '2000px' }}>
      
      {/* Background Layer with Parallax and Enhancements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out brightness-[0.6] saturate-[1.15]" 
          style={{ 
            backgroundImage: `url('${heroBgImage}')`,
            transform: `scale(${1.1 + scrollPos / 6000}) translate3d(${mousePos.x * 25}px, ${mousePos.y * 25}px, 0)`,
            willChange: 'transform'
          }}
        >
          {/* Multi-layered cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020205]/60 via-transparent to-[#020205]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05)_0%,transparent_80%)]" />
        </div>
        
        {/* Floating Atmospheric Particles */}
        <div className="absolute inset-0 opacity-30">
           <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-[160px] animate-pulse" />
           <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-7xl w-full px-8 flex flex-col items-center text-center">
        
        <div className="flex flex-col items-center gap-6 mb-12 animate-in fade-in slide-in-from-top-12 duration-1000">
           <div className="px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-3xl flex items-center gap-4 border border-white/20">
             <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping shadow-[0_0_10px_#F59E0B]" />
             Registry_Sync_v6.4
           </div>
        </div>
        
        <div className="space-y-6 mb-16 animate-in fade-in zoom-in-95 duration-1000 delay-200">
          <h1 className="text-5xl sm:text-7xl md:text-[11rem] font-heritage font-bold leading-[0.8] tracking-tighter uppercase select-none">
            {language === 'EN' ? (
              <>
                <span className="block text-xl md:text-4xl font-light tracking-[0.3em] text-white/90 mb-6 drop-shadow-lg">Welcome To</span>
                <span className="bg-gradient-to-b from-[#fde68a] via-[#f59e0b] to-[#b45309] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(245,158,11,0.35)]">SRI LANKA</span>
              </>
            ) : (
              <>
                <span className="block text-xl md:text-4xl font-light tracking-[0.3em] text-white/90 mb-6 drop-shadow-lg">අයුබෝවන්</span>
                <span className="bg-gradient-to-b from-[#fde68a] via-[#f59e0b] to-[#b45309] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(245,158,11,0.35)]">ශ්‍රී ලංකාව</span>
              </>
            )}
          </h1>
          
          <div className="flex flex-col items-center">
             <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent rounded-full shadow-[0_0_30px_#F59E0B] mb-10 opacity-60" />
             <p className="font-sans text-sm md:text-lg font-bold text-white/50 max-w-2xl leading-relaxed tracking-[0.45em] uppercase drop-shadow-2xl px-4 text-center">
               {language === 'EN' 
                 ? "Step into a multi-dimensional reconstruction of the world's most mysterious island."
                 : "ලොව අබිරහස් දූපතක බහු-මාන ප්‍රතිනිර්මාණයට පිවිසෙන්න."}
             </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <button 
            onClick={() => setView('destinations')}
            className="group relative px-14 py-7 bg-white text-[#050508] rounded-2xl font-black text-[13px] uppercase tracking-[0.4em] transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_40px_100px_rgba(255,255,255,0.2)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]" />
            <span className="relative z-10 flex items-center gap-5">
              Explore
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button 
            onClick={() => setView('vr-trip')}
            className="group relative px-14 py-7 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-2xl font-black text-[13px] text-white uppercase tracking-[0.4em] transition-all duration-700 hover:bg-white/10 hover:border-[#F59E0B]/50 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-5">
              3D World
              <Orbit size={22} className="text-[#F59E0B] animate-spin-slow" />
            </span>
          </button>
        </div>
      </div>

      {/* Futuristic Grid Floor Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] opacity-[0.08] pointer-events-none"
           style={{ 
             backgroundImage: `linear-gradient(#F59E0B 1.5px, transparent 1.5px), linear-gradient(90deg, #F59E0B 1.5px, transparent 1.5px)`, 
             backgroundSize: '100px 100px',
             transform: 'perspective(1200px) rotateX(65deg) scale(3)',
             maskImage: 'linear-gradient(to top, black, transparent 90%)'
           }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .shadow-3xl {
          box-shadow: 0 0 60px rgba(245,158,11,0.2);
        }
      `}} />
    </div>
  );
};

export default Hero;
