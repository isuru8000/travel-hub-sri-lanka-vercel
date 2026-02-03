
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
  ChevronDown
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
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    tag: 'ULTRA-PREMIUM',
    rating: 5,
    description: {
      EN: "The benchmark of luxury in the capital. Cinnamon Grand offers an unparalleled urban sanctuary with world-class dining.",
      SI: "අගනුවර සුඛෝපභෝගීත්වයේ සලකුණ. සිනමන් ග්‍රෑන්ඩ් ලෝක මට්ටමේ ආහාර සමඟ අසමසම නාගරික අත්දැකීමක් ලබා දෙයි."
    },
    amenities: [
      { icon: <Building2 size={18} />, label: { EN: "Grand Lobby", SI: "විශාල ශාලාව" } },
      { icon: <Waves size={18} />, label: { EN: "Infinity Pool", SI: "පිහිනුම් තටාකය" } }
    ],
    reviews: []
  },
  {
    id: 'h2',
    name: { EN: 'Galadari Hotel Colombo', SI: 'ගලදාරී හෝටලය කොළඹ' },
    location: 'Colombo Fort',
    price: 120,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
    ],
    tag: 'HERITAGE VIEW',
    rating: 4,
    description: {
      EN: "Strategically located overlooking the Indian Ocean, Galadari offers classic comfort with the best views of the skyline.",
      SI: "ඉන්දියන් සාගරයට මුහුණලා පිහිටි ගලදාරී හෝටලය, කොළඹ නගරයේ අලංකාර දර්ශන සමඟ සාම්ප්‍රදායික සුවපහසුව ලබා දෙයි."
    },
    amenities: [
      { icon: <Waves size={18} />, label: { EN: "Ocean Pool", SI: "මුහුදු තටාකය" } },
      { icon: <Wind size={18} />, label: { EN: "Spa", SI: "ස්පා" } }
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

  // Fix: Defined the missing onBook function to handle individual hotel booking selections
  const onBook = (hotelName: string) => {
    setBookingState(prev => ({ ...prev, destination: hotelName }));
    const hotel = LUXURY_HOTELS.find(h => h.name.EN === hotelName);
    if (hotel) setSelectedHotel(hotel);
  };

  return (
    <div className="min-h-screen bg-white pb-32">
      <div className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-white" />
        <div className="relative text-center space-y-8 px-6">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
             <Gem size={16} className="text-yellow-500" />
             Heritage Stays Registry
          </div>
          <h2 className="text-6xl md:text-[10rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            STAY <br/><span className="italic insta-text-gradient">PORTAL.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-2xl font-light italic leading-relaxed tracking-wide">
            "Seamless synchronization with the island's elite heritage hotels and boutiques."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
        {LUXURY_HOTELS.map((hotel) => (
          <div key={hotel.id} className="group relative bg-white rounded-[4rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-1000 hover:shadow-2xl hover:-translate-y-4">
            <div className="relative h-96 overflow-hidden">
              <img src={hotel.image} className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110" alt={hotel.name[language]} />
              <div className="absolute top-10 left-10 p-1.5 bg-white/10 backdrop-blur-3xl rounded-[2rem] border border-white/20 shadow-2xl">
                <div className="px-8 py-4 bg-white/80 rounded-[1.8rem] text-[#0a0a0a] text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                   <Radio size={14} className="text-[#E1306C] animate-pulse" />
                   High_Res Archive
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-[#0a0a0a] text-white px-12 py-8 rounded-tl-[4rem]">
                 <p className="text-[11px] font-black text-[#E1306C] uppercase tracking-[0.4em] mb-1">Nightly_Manifest</p>
                 <p className="text-4xl font-heritage font-bold">$ {hotel.price}</p>
              </div>
            </div>
            
            <div className="p-16 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                   <MapPin size={14} className="text-[#E1306C]" />
                   <span className="text-[10px] font-bold uppercase tracking-[0.4em]">{hotel.location}</span>
                </div>
                <h4 className="text-4xl md:text-5xl font-heritage font-bold text-[#0a0a0a] group-hover:insta-text-gradient transition-all">{hotel.name[language]}</h4>
              </div>
              <div className="flex gap-6 pt-4">
                <button 
                  onClick={() => setSelectedHotel(hotel)}
                  className="flex-grow py-6 bg-gray-50 text-[#0a0a0a] rounded-[2rem] font-black text-[11px] uppercase tracking-[0.4em] border border-gray-100 hover:bg-[#0a0a0a] hover:text-white transition-all shadow-sm"
                >
                  Archive Specs
                </button>
                <button 
                  // Fix: Assigned the now-defined onBook function to the individual hotel cards
                  onClick={() => onBook(hotel.name.EN)}
                  className="w-20 h-20 bg-[#0a0a0a] text-white rounded-[2rem] flex items-center justify-center hover:bg-[#E1306C] transition-all shadow-2xl active:scale-90"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <HotelModal 
        hotel={selectedHotel} 
        onClose={() => setSelectedHotel(null)} 
        // Fix: Properly passed the defined onBook function to the HotelModal component
        onBook={onBook} 
        bookingState={bookingState}
        setBookingState={setBookingState}
        language={language} 
      />
    </div>
  );
};

export default Hotels;
