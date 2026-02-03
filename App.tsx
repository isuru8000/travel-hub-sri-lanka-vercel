
import React, { useState, useEffect, useMemo } from 'react';
import { Language, User, Destination } from './types.ts';
import Layout from './components/Layout.tsx';
import Hero from './components/Hero.tsx';
import PopularHighlights from './components/PopularHighlights.tsx';
import Destinations from './components/Destinations.tsx';
import Foods from './components/Foods.tsx';
import HeritageMusic from './components/HeritageMusic.tsx';
import TraditionalMedicine from './components/TraditionalMedicine.tsx';
import Phrasebook from './components/Phrasebook.tsx';
import TravelEssentials from './components/TravelEssentials.tsx';
import Festivals from './components/Festivals.tsx';
import CategoriesSection from './components/CategoriesSection.tsx';
import StorySection from './components/StorySection.tsx';
import AIModal from './components/AIModal.tsx';
import Quiz from './components/Quiz.tsx';
import VRExperience from './components/VRExperience.tsx';
import VRShowcase from './components/VRShowcase.tsx';
import HeritageCollection from './components/HeritageCollection.tsx';
import SearchPortal from './components/SearchPortal.tsx';
import LoginModal from './components/LoginModal.tsx';
import Contact from './components/Contact.tsx';
import Marketplace from './components/Marketplace.tsx';
import Hotels from './components/Hotels.tsx';
import Transport from './components/Transport.tsx';
import BookingDestinations from './components/BookingDestinations.tsx';
import NexusRewards from './components/NexusRewards.tsx';
import ScrollControls from './components/ScrollControls.tsx';
import TravelStore from './components/TravelStore.tsx';
import DestinationDetail from './components/DestinationDetail.tsx';
import IslandMapManifold from './components/IslandMapManifold.tsx';
import LegacyMuseum from './components/LegacyMuseum.tsx';
import VRTripFuture from './components/VRTripFuture.tsx';
import { supabase } from './lib/supabase.ts';
import { Sparkles, Compass, ShieldCheck, Star, MapPin, ArrowRight, Database, Box, Layers, Zap, Lock, Scan, Map as MapIcon, Heart, Globe, Library } from 'lucide-react';

type View = 'home' | 'destinations' | 'map' | 'hotels' | 'transport' | 'booking-destinations' | 'about' | 'foods' | 'music' | 'interests' | 'medicine' | 'phrases' | 'essentials' | 'festivals' | 'memories' | 'quiz' | 'vr-experience' | 'vr-showcase' | 'search' | 'contact' | 'marketplace' | 'community' | 'shop' | 'destination-detail' | 'legacy-archive' | 'vr-trip';

export default function App() {
  const [language, setLanguage] = useState<Language>('EN');
  const [view, setView] = useState<View>('home');
  const [user, setUser] = useState<User | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [selectedDestinationData, setSelectedDestinationData] = useState<Destination | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view]);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (!supabase || !supabase.auth) {
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          name: session.user.user_metadata.full_name || session.user.email?.split('@')[0] || 'Explorer',
          email: session.user.email || '',
          photo: session.user.user_metadata.avatar_url || `https://ui-avatars.com/api/?name=${session.user.email}`
        });
      }
    }).catch(err => {
      console.warn("Session check failed:", err);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          name: session.user.user_metadata.full_name || session.user.email?.split('@')[0] || 'Explorer',
          email: session.user.email || '',
          photo: session.user.user_metadata.avatar_url || `https://ui-avatars.com/api/?name=${session.user.email}`
        });
        setIsLoginModalOpen(false);
      } else {
        setUser(null);
      }
    });

    return () => {
      if (subscription) subscription.unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = async () => {
    if (supabase?.auth) {
      await supabase.auth.signOut();
    }
    setUser(null);
  };

  const navigateToDestination = (dest: Destination) => {
    setSelectedDestinationData(dest);
    setView('destination-detail');
  };

  const renderContent = () => {
    switch (view) {
      case 'map':
        return <IslandMapManifold language={language} onSelectDestination={navigateToDestination} />;
      case 'legacy-archive':
        return <LegacyMuseum language={language} setView={setView} />;
      case 'vr-trip':
        return <VRTripFuture language={language} setView={setView} />;
      case 'community':
      case 'memories':
        return <NexusRewards language={language} user={user} onLogin={handleLogin} setView={setView} />;
      case 'marketplace':
        return <div className="pt-24"><Marketplace language={language} /></div>;
      case 'hotels':
        return <div className="pt-24"><Hotels language={language} /></div>;
      case 'transport':
        return <div className="pt-24"><Transport language={language} /></div>;
      case 'booking-destinations':
        return <div className="pt-24"><BookingDestinations language={language} setView={setView} /></div>;
      case 'shop':
        return <div className="pt-24"><TravelStore language={language} /></div>;
      case 'destinations':
        return <div className="pt-24"><Destinations language={language} onSelectDestination={navigateToDestination} /></div>;
      case 'destination-detail':
        return <DestinationDetail destination={selectedDestinationData} language={language} onBack={() => setView('destinations')} onSelect={navigateToDestination} />;
      case 'foods':
        return <div className="pt-24"><Foods language={language} /></div>;
      case 'music':
        return <div className="pt-24"><HeritageMusic language={language} /></div>;
      case 'medicine':
        return <div className="pt-24"><TraditionalMedicine language={language} /></div>;
      case 'phrases':
        return <div className="pt-24"><Phrasebook language={language} /></div>;
      case 'essentials':
        return <div className="pt-24"><TravelEssentials language={language} /></div>;
      case 'festivals':
        return <div className="pt-24"><Festivals language={language} /></div>;
      case 'interests':
        return <div className="pt-24"><CategoriesSection language={language} setView={setView} /></div>;
      case 'quiz':
        return <div className="pt-24"><Quiz language={language} setView={setView} /></div>;
      case 'vr-experience':
        return <div className="pt-24"><VRExperience language={language} setView={setView} /></div>;
      case 'vr-showcase':
        return <VRShowcase language={language} setView={setView} />;
      case 'search':
        return <SearchPortal language={language} />;
      case 'contact':
        return <div className="pt-24"><Contact language={language} /></div>;
      case 'home':
      default:
        return (
          <div className="relative">
            <Hero language={language} setView={setView} user={user} />
            <div className="relative z-10">
              <PopularHighlights language={language} onSelectDestination={navigateToDestination} setView={setView} />
              
              <div className="py-20 flex justify-center bg-white border-y border-gray-100 gap-8">
                <button 
                  onClick={() => setView('map')}
                  className="group relative px-12 py-6 bg-[#0a0a0a] text-white rounded-full font-black text-xs uppercase tracking-[0.4em] flex items-center gap-6 shadow-2xl hover:scale-105 active:scale-95 transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <MapIcon size={20} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
                  Initialize Global Map Manifold
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => setView('legacy-archive')}
                  className="group relative px-12 py-6 bg-white border border-gray-100 text-[#0a0a0a] rounded-full font-black text-xs uppercase tracking-[0.4em] flex items-center gap-6 shadow-xl hover:scale-105 active:scale-95 transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Library size={20} className="text-[#E1306C]" />
                  Access Legacy Archive
                  <ArrowRight size={16} />
                </button>
              </div>

              <section className="py-40 bg-[#020205] relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(225,48,108,0.1)_0%,transparent_50%)] animate-pulse" />
                 <div className="max-w-7xl mx-auto px-6 space-y-32 relative z-10">
                    <div className="text-center space-y-8">
                       <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-[#E1306C] text-[10px] font-black uppercase tracking-[0.6em] mx-auto animate-pulse">
                          <Scan size={14} /> Phase_02_Discovery_Module
                       </div>
                       <h2 className="text-5xl md:text-[9rem] font-heritage font-bold text-white tracking-tighter uppercase leading-none">
                          ANCIENT <span className="italic insta-text-gradient">HIGHLIGHTS.</span>
                       </h2>
                       <p className="text-gray-400 font-light italic text-xl max-w-2xl mx-auto opacity-70">
                          "Locked archival nodes currently undergoing high-fidelity calibration for the next cycle."
                       </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                       {[
                         { id: 'f1', title: 'Deep Sea Archeology', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80' },
                         { id: 'f2', title: 'Aerial Tea Trails', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80' },
                         { id: 'f3', title: 'Jaffna VR Reconstruction', image: 'https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=800&q=80' },
                         { id: 'f4', title: 'Delft Island Digital Twin', image: 'https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=800&q=80' },
                         { id: 'f5', title: 'Secret Jungle Monoliths', image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80' }
                       ].map((item, idx) => (
                         <div key={item.id} className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5 bg-black shadow-2xl">
                            <img src={item.image} className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 transition-transform duration-[6000ms]" />
                            <div className="absolute inset-0 backdrop-blur-3xl bg-black/40 group-hover:backdrop-blur-xl transition-all duration-1000" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center space-y-8">
                               <div className="w-20 h-20 rounded-[2rem] bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-[#E1306C] relative">
                                  <div className="absolute inset-0 border border-pink-500/20 rounded-[2rem] animate-ping" />
                                  <Lock size={32} className="animate-pulse" />
                               </div>
                               <div className="space-y-4">
                                  <h4 className="text-2xl font-heritage font-bold text-white uppercase tracking-tight opacity-40 group-hover:opacity-100 transition-opacity">{item.title}</h4>
                                  <div className="px-5 py-2 bg-[#E1306C] text-white rounded-full text-[9px] font-black uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(225,48,108,0.5)] animate-pulse">
                                     COMMING SOON
                                  </div>
                               </div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E1306C] shadow-[0_0_20px_#E1306C] animate-scan-slow" style={{ animationDelay: `${idx * 1.2}s` }} />
                         </div>
                       ))}
                    </div>
                 </div>
              </section>

              <HeritageCollection language={language} />
              <div className="py-32 px-4 relative overflow-hidden group border-y border-gray-50 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
                   <div className="w-full md:w-1/2 space-y-12">
                     <div className="inline-flex items-center gap-5 px-8 py-3 rounded-full bg-pink-500/5 border border-pink-500/10 text-[#E1306C] text-[11px] font-black uppercase tracking-[0.6em]">
                       <Sparkles size={18} className="animate-pulse" />
                       Archetype Synthesis
                     </div>
                     <h2 className="text-6xl md:text-[8rem] font-heritage font-bold text-[#0a0a0a] leading-[0.8] tracking-tighter uppercase">
                        Sync Your <br/><span className="insta-text-gradient italic">Soul.</span>
                     </h2>
                     <button 
                       onClick={() => setView('quiz')}
                       className="group relative px-20 py-10 bg-[#0a0a0a] text-white font-black rounded-[4rem] hover:scale-110 active:scale-95 transition-all shadow-[0_40px_100px_rgba(225,48,108,0.3)] flex items-center gap-8 overflow-hidden"
                     >
                       <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <Compass size={24} className="relative z-10 text-orange-400 group-hover:rotate-180 transition-transform duration-1000" />
                       <span className="relative z-10 uppercase tracking-[0.6em] text-[12px]">Begin Integration</span>
                     </button>
                   </div>
                </div>
              </div>
              <CategoriesSection language={language} setView={setView} />
              <StorySection language={language} setView={setView} />
            </div>
          </div>
        );
    }
  };

  return (
    <Layout language={language} setLanguage={setLanguage} setView={(v: any) => setView(v)} currentView={view} user={user} onLogin={handleLogin} onLogout={handleLogout}>
      <div className="overflow-x-hidden transition-all duration-300">
        {renderContent()}
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} language={language} />
      <AIModal language={language} />
      <ScrollControls />
    </Layout>
  );
}
