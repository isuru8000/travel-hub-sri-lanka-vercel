
import React, { useState, useMemo } from 'react';
import { Language } from '../types.ts';
import { 
  Gem, 
  MapPin, 
  Star, 
  Waves, 
  Wind, 
  Zap, 
  Target, 
  ArrowRight,
  ShieldCheck,
  Radio,
  Building2,
  Calendar,
  Users,
  ChevronDown,
  Activity,
  Database,
  Sparkles,
  Compass
} from 'lucide-react';
import HotelModal from './HotelModal.tsx';

const LUXURY_HOTELS = [
  {
    id: 'h1',
    name: { EN: 'Cinnamon Grand Colombo', SI: 'සිනමන් ග්‍රෑන්ඩ් කොළඹ' },
    location: 'Colombo',
    price: 180,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
    ],
    tag: 'ULTRA-PREMIUM',
    rating: 5,
    description: {
      EN: "The benchmark of luxury in the capital. Cinnamon Grand offers an unparalleled urban sanctuary with world-class dining, elite wellness facilities, and high-fidelity comfort in the heart of Colombo.",
      SI: "අගනුවර සුඛෝපභෝගීත්වයේ සලකුණ. සිනමන් ග්‍රෑන්ඩ් ලෝක මට්ටමේ ආහාර සමඟ අසමසම නාගරික අත්දැකීමක් ලබා දෙයි."
    },
    amenities: [
      { icon: <Building2 size={18} />, label: { EN: "Grand Lobby", SI: "විශාල ශාලාව" } },
      { icon: <Waves size={18} />, label: { EN: "Infinity Pool", SI: "පිහිනුම් තටාකය" } },
      { icon: <Activity size={18} />, label: { EN: "Gym Node", SI: "ව්‍යායාම මධ්‍යස්ථානය" } },
      { icon: <Wind size={18} />, label: { EN: "Spa Archive", SI: "සම සුවතා" } }
    ],
    reviews: [
      { user: 'Alexander P.', rating: 5, date: '2026.03.12', comment: { EN: 'Unmatched fidelity in service and atmosphere.', SI: 'විශිෂ්ට සේවාවක් සහ අපූර්ව පරිසරයක්.' } }
    ]
  },
  {
    id: 'h2',
    name: { EN: 'Galadari Hotel Colombo', SI: 'ගලදාරී හෝටලය කොළඹ' },
    location: 'Colombo Fort',
    price: 120,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    ],
    tag: 'HERITAGE VIEW',
    rating: 4,
    description: {
      EN: "Strategically located overlooking the Indian Ocean and the Presidential Precinct. Galadari offers classic comfort with the best views of the capital's historic and modern skyline.",
      SI: "ඉන්දියන් සාගරයට මුහුණලා පිහිටි ගලදාරී හෝටලය, කොළඹ නගරයේ අලංකාර දර්ශන සමඟ සාම්ප්‍රදායික සුවපහසුව ලබා දෙයි."
    },
    amenities: [
      { icon: <Waves size={18} />, label: { EN: "Ocean Pool", SI: "මුහුදු තටාකය" } },
      { icon: <Wind size={18} />, label: { EN: "Spa", SI: "ස්පා" } },
      { icon: <Users size={18} />, label: { EN: "Executive Hub", SI: "ප්‍රභූ මධ්‍යස්ථානය" } }
    ],
    reviews: []
  }
];

const Hotels: React.FC<{ language: Language }> = ({ language }) => {
  const [selectedHotel, setSelectedHotel] = useState<any | null>(null);
  const [bookingState, setBookingState] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    isProcessingPayment: false,
    isSuccess: false,
    error: null as string | null
  });

  const onBook = (hotelName: string) => {
    setBookingState(prev => ({ ...prev, destination: hotelName }));
    const hotel = LUXURY_HOTELS.find(h => h.name.EN === hotelName);
    if (hotel) setSelectedHotel(hotel);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pb-32">
      {/* IMMERSIVE HEADER */}
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-[20000ms] animate-slow-zoom" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/90 to-[#fafafa]" />
        
        {/* Spatial Grid Effect */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{ backgroundImage: `linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

        <div className="relative text-center space-y-12 px-6 max-w-5xl animate-in fade-in zoom-in duration-1000">
          <div className="flex flex-col items-center gap-6">
             <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.6em] shadow-2xl">
                <Gem size={18} className="text-yellow-500 animate-bounce" />
                Heritage_Stay_Manifold
             </div>
             <div className="h-16 w-px bg-gradient-to-b from-[#0EA5E9] to-transparent" />
          </div>
          
          <h2 className="text-6xl md:text-[11rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_80px_rgba(0,0,0,1)]">
            STAY <br/><span className="italic insta-text-gradient">PORTAL.</span>
          </h2>
          
          <p className="text-white/40 text-xl md:text-3xl font-light italic leading-relaxed tracking-wide max-w-4xl mx-auto">
            "Seamless synchronization with the island's elite heritage hotels and ultra-luxury urban sanctuaries."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 space-y-24">
        {/* STATS HUD */}
        <div className="flex justify-center">
           <div className="bg-white/95 backdrop-blur-2xl border border-gray-100 px-12 py-10 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] flex flex-wrap items-center justify-center gap-16 md:gap-24">
              <div className="flex flex-col items-center gap-2">
                 <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Archived_Nodes</p>
                 <p className="text-4xl font-heritage font-bold text-[#0a0a0a]">02 UNITS</p>
              </div>
              <div className="hidden md:block h-12 w-px bg-gray-100" />
              <div className="flex flex-col items-center gap-2">
                 <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Fidelity_Level</p>
                 <p className="text-4xl font-heritage font-bold text-[#0EA5E9] uppercase tracking-tighter">MAXIMUM</p>
              </div>
              <div className="hidden md:block h-12 w-px bg-gray-100" />
              <div className="flex flex-col items-center gap-2">
                 <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Registry_Sync</p>
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping shadow-[0_0_10px_#22c55e]" />
                    <p className="text-4xl font-heritage font-bold text-[#0a0a0a]">STABLE</p>
                 </div>
              </div>
           </div>
        </div>

        {/* HOTEL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {LUXURY_HOTELS.map((hotel, idx) => (
            <div 
              key={hotel.id} 
              className="group relative h-[700px] bg-white rounded-[5rem] overflow-hidden border border-gray-100 shadow-xl transition-all duration-1000 hover:shadow-[0_80px_150px_rgba(0,0,0,0.12)] hover:-translate-y-4 animate-in slide-in-from-bottom-12"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-[65%] overflow-hidden">
                <img src={hotel.image} className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-110" alt={hotel.name[language]} />
                
                {/* Floating Indicators */}
                <div className="absolute top-10 left-10 p-2 bg-white/10 backdrop-blur-3xl rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <div className="px-8 py-4 bg-white/90 rounded-[2.2rem] text-[#0a0a0a] text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4">
                     <Radio size={16} className="text-[#E1306C] animate-pulse" />
                     Live_Sync_Ready
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 bg-[#0a0a0a] text-white px-16 py-10 rounded-tl-[5rem] shadow-2xl transition-all duration-700 group-hover:px-20">
                   <p className="text-[11px] font-black text-[#E1306C] uppercase tracking-[0.6em] mb-2 opacity-60">Nightly_Manifest</p>
                   <p className="text-5xl font-heritage font-bold tracking-tighter leading-none">$ {hotel.price}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
              </div>
              
              <div className="p-16 md:p-20 space-y-12 bg-white flex flex-col justify-between h-[35%]">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-400">
                     <MapPin size={18} className="text-[#E1306C] animate-pulse" />
                     <span className="text-[11px] font-black uppercase tracking-[0.5em]">{hotel.location}</span>
                  </div>
                  <h4 className="text-4xl md:text-5xl lg:text-6xl font-heritage font-bold text-[#0a0a0a] group-hover:insta-text-gradient transition-all duration-700 tracking-tight leading-none uppercase">{hotel.name[language]}</h4>
                </div>

                <div className="flex gap-6 items-center">
                  <button 
                    onClick={() => setSelectedHotel(hotel)}
                    className="flex-grow py-8 bg-gray-50 text-[#0a0a0a] rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.6em] border border-gray-100 hover:bg-[#0a0a0a] hover:text-white transition-all shadow-sm active:scale-95 flex items-center justify-center gap-4 group/specs"
                  >
                    Archive Specs
                    <Database size={16} className="text-[#E1306C] opacity-40 group-hover/specs:opacity-100 transition-opacity" />
                  </button>
                  <button 
                    onClick={() => onBook(hotel.name.EN)}
                    className="w-24 h-24 bg-[#0a0a0a] text-white rounded-[3rem] flex items-center justify-center hover:bg-[#E1306C] transition-all shadow-2xl active:scale-90 hover:rotate-12 group/btn"
                  >
                    <ArrowRight size={32} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Sequential ID decoration */}
              <div className="absolute top-10 right-10 text-[9px] font-black text-white/20 uppercase tracking-[0.6em] pointer-events-none">
                 Reg_Node_#0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER SYNC STATUS */}
        <div className="pt-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30">
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-5">
                 <ShieldCheck size={32} className="text-green-500" />
                 <div className="text-left space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Stays_Secure_Link</p>
                    <p className="text-[11px] font-bold text-gray-500">Verified Heritage Partner v4.2</p>
                 </div>
              </div>
              <div className="w-px h-16 bg-gray-100" />
              <div className="flex items-center gap-5">
                 <Compass size={32} className="text-[#0EA5E9]" />
                 <div className="text-left space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Traversal_Ready</p>
                    <p className="text-[11px] font-bold text-gray-500">Regional Sync Active</p>
                 </div>
              </div>
           </div>

           <div className="text-center md:text-right space-y-3">
              <p className="text-[11px] font-black uppercase tracking-[1em] text-[#0a0a0a] ml-[1em]">End_Of_Stay_Registry</p>
              <div className="flex justify-center md:justify-end gap-3">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200" />)}
              </div>
           </div>
        </div>
      </div>

      <HotelModal 
        hotel={selectedHotel} 
        onClose={() => setSelectedHotel(null)} 
        onBook={onBook} 
        bookingState={bookingState}
        setBookingState={setBookingState}
        language={language} 
      />

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
    </div>
  );
};

export default Hotels;
