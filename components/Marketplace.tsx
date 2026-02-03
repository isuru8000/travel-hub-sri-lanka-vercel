import React, { useState, useMemo, useEffect } from 'react';
import { Language } from '../types.ts';
import { 
  Gem, 
  Zap, 
  Crown, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Star,
  Sparkles,
  Loader2,
  CheckCircle2,
  Lock,
  CreditCard,
  ChevronRight,
  Info,
  Utensils,
  Car,
  Plane,
  Radio,
  QrCode,
  Download,
  Printer,
  X,
  Wallet,
  ShieldQuestion,
  Fingerprint,
  // Added missing Scan icon import to fix the build error on line 420
  Scan
} from 'lucide-react';

interface MarketplaceProps {
  language: Language;
}

const PREMIUM_PACKAGES = [
  {
    id: 'p1',
    title: { EN: 'Ancient Majesty Tour', SI: 'පුරාණ රාජකීය සංචාරය' },
    price: 1299,
    duration: '7 Days',
    type: 'ALL-INCLUSIVE',
    image: 'https://plus.unsplash.com/premium_photo-1661954483883-edd65eac3577?q=80&w=1170&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: { EN: 'Highland Tea Retreat', SI: 'කඳුකර තේ අත්දැකීම' },
    price: 850,
    duration: '4 Days',
    type: 'WELLNESS',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
  }
];

const FUTURE_NODES = [
  {
    id: 'f1',
    title: { EN: 'Secret Jungle Expedition', SI: 'රහස් වනාන්තර සංචාරය' },
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
    type: 'EXPLORATION'
  },
  {
    id: 'f2',
    title: { EN: 'Sapphire Waters Yachting', SI: 'නිල්වන් සාගර යාත්‍රා' },
    image: 'https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=800&q=80',
    type: 'LUXURY'
  },
  {
    id: 'f3',
    title: { EN: 'Heritage Hot Air Balloon', SI: 'උරුම ගුවන් බැලුන්' },
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    type: 'ADVENTURE'
  }
];

const Marketplace: React.FC<MarketplaceProps> = ({ language }) => {
  const [bookingState, setBookingState] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    isCheckoutOpen: false,
    isProcessing: false,
    processStep: 0,
    isSuccess: false,
    paymentMethod: 'card' as 'card' | 'wallet' | 'ledger',
    bookingId: ''
  });

  const processingSteps = [
    { label: "Initializing Gateway...", icon: <Zap size={18} /> },
    { label: "Verifying Identity Hash...", icon: <Fingerprint size={18} /> },
    { label: "Securing Financial Tunnel...", icon: <Lock size={18} /> },
    { label: "Finalizing Registry Sync...", icon: <Radio size={18} className="animate-pulse" /> }
  ];

  const handleCheckoutTrigger = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingState.destination) return;
    setBookingState(prev => ({ ...prev, isCheckoutOpen: true }));
  };

  const executePayment = async () => {
    setBookingState(prev => ({ ...prev, isProcessing: true, processStep: 0 }));
    
    // Simulate multi-step processing
    for (let i = 0; i < processingSteps.length; i++) {
      setBookingState(prev => ({ ...prev, processStep: i }));
      await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 500));
    }

    setBookingState(prev => ({ 
      ...prev, 
      isProcessing: false, 
      isSuccess: true, 
      isCheckoutOpen: false,
      bookingId: `LNK-${Math.random().toString(36).substring(2, 9).toUpperCase()}`
    }));
  };

  const selectedPackage = useMemo(() => {
    return PREMIUM_PACKAGES.find(p => p.title.EN === bookingState.destination);
  }, [bookingState.destination]);

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* SUCCESS CONFIRMATION MODAL */}
      {bookingState.isSuccess && (
        <div className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 animate-in fade-in duration-700">
          <div className="bg-white rounded-[4rem] w-full max-w-2xl overflow-hidden shadow-[0_80px_200px_rgba(0,0,0,0.8)] relative group">
             <div className="absolute inset-0 pattern-overlay opacity-[0.03] pointer-events-none" />
             
             <div className="bg-[#0a0a0a] p-12 text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E1306C] animate-pulse" />
                <div className="w-24 h-24 bg-[#E1306C]/10 border border-[#E1306C]/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                   <CheckCircle2 size={48} className="text-[#E1306C]" />
                </div>
                <h2 className="text-4xl font-heritage font-bold text-white uppercase tracking-tighter">Sync Successful</h2>
                <div className="flex items-center justify-center gap-4">
                   <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Registry_ID:</span>
                   <span className="text-lg font-black text-[#E1306C] tracking-widest">{bookingState.bookingId}</span>
                </div>
             </div>

             <div className="p-12 space-y-10 bg-white">
                <div className="space-y-6">
                   <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Active Node</p>
                      <p className="text-lg font-bold text-[#0a0a0a]">{bookingState.destination}</p>
                   </div>
                   <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Temporal Range</p>
                      <p className="text-base font-bold text-[#0a0a0a]">{bookingState.checkIn} — {bookingState.checkOut}</p>
                   </div>
                   <div className="flex justify-between items-center">
                      <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Manifest Size</p>
                      <p className="text-base font-bold text-[#0a0a0a]">{bookingState.guests} Individuals</p>
                   </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-between border border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <QrCode size={32} className="text-[#0a0a0a]" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black text-[#E1306C] uppercase tracking-widest">Visual_Pass</p>
                        <p className="text-xs text-gray-400 font-medium italic">Present at registry entry</p>
                      </div>
                   </div>
                   <button className="p-4 hover:bg-white rounded-2xl transition-all hover:shadow-lg text-gray-300 hover:text-[#0a0a0a]">
                      <Download size={24} />
                   </button>
                </div>

                <div className="flex gap-4 pt-4">
                   <button 
                     onClick={() => setBookingState(prev => ({ ...prev, isSuccess: false }))}
                     className="flex-grow py-6 bg-[#0a0a0a] text-white rounded-[2rem] font-black text-[11px] uppercase tracking-[0.4em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                   >
                     Terminate Interface
                   </button>
                   <button className="w-16 h-16 bg-gray-50 text-gray-300 rounded-[2rem] flex items-center justify-center border border-gray-100 hover:text-[#0a0a0a] hover:bg-white transition-all">
                      <Printer size={20} />
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* CHECKOUT MANIFOLD MODAL */}
      {bookingState.isCheckoutOpen && (
        <div className="fixed inset-0 z-[250] bg-[#0a0a0a]/90 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="bg-white rounded-[4rem] w-full max-w-4xl overflow-hidden shadow-[0_100px_200px_rgba(0,0,0,0.6)] border border-white/20 animate-in zoom-in-95 duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Summary Panel */}
                <div className="bg-gray-50 p-12 md:p-16 space-y-12 border-r border-gray-100">
                   <div className="space-y-4">
                      <button onClick={() => setBookingState(p => ({...p, isCheckoutOpen: false}))} className="flex items-center gap-3 text-gray-400 hover:text-[#0a0a0a] transition-colors mb-8">
                         <X size={20} />
                         <span className="text-[10px] font-black uppercase tracking-widest">Abort_Checkout</span>
                      </button>
                      <div className="flex items-center gap-4 text-[#E1306C]">
                         <ShieldCheck size={24} />
                         <span className="text-[11px] font-black uppercase tracking-[0.5em]">Secure_Authorization</span>
                      </div>
                      <h3 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Manifest Summary.</h3>
                   </div>

                   <div className="space-y-8">
                      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex gap-6 items-center">
                         <div className="w-20 h-20 rounded-2xl overflow-hidden">
                            <img src={selectedPackage?.image || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=200'} className="w-full h-full object-cover" alt="" />
                         </div>
                         <div className="text-left space-y-1">
                            <p className="text-[9px] font-black text-[#E1306C] uppercase tracking-widest">Selected_Node</p>
                            <p className="text-xl font-bold text-[#0a0a0a] leading-tight">{bookingState.destination}</p>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                         <div className="bg-white p-6 rounded-3xl border border-gray-100">
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Check_In</p>
                            <p className="font-bold text-sm text-[#0a0a0a]">{bookingState.checkIn}</p>
                         </div>
                         <div className="bg-white p-6 rounded-3xl border border-gray-100">
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Guests</p>
                            <p className="font-bold text-sm text-[#0a0a0a]">{bookingState.guests} VOYAGERS</p>
                         </div>
                      </div>
                   </div>

                   <div className="pt-12 border-t border-gray-200">
                      <div className="flex justify-between items-end">
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Settlement</p>
                            <p className="text-5xl font-heritage font-black text-[#0a0a0a] tracking-tighter">${(selectedPackage?.price || 150) * bookingState.guests}</p>
                         </div>
                         <div className="flex items-center gap-2 text-green-500 opacity-60">
                            <Zap size={14} fill="currentColor" />
                            <span className="text-[9px] font-black uppercase tracking-widest">Protocol Sync: 100%</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Payment Processor Panel */}
                <div className="p-12 md:p-16 space-y-12 bg-white flex flex-col justify-center">
                   {bookingState.isProcessing ? (
                     <div className="space-y-12 animate-in fade-in duration-500 text-center">
                        <div className="relative w-32 h-32 mx-auto">
                           <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
                           <div 
                             className="absolute inset-0 rounded-full border-4 border-[#E1306C] border-t-transparent animate-spin" 
                             style={{ animationDuration: '1.5s' }}
                           />
                           <div className="absolute inset-0 flex items-center justify-center text-[#E1306C]">
                              {processingSteps[bookingState.processStep].icon}
                           </div>
                        </div>
                        <div className="space-y-4">
                           <h4 className="text-2xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Processing Transaction</h4>
                           <div className="flex flex-col items-center gap-4">
                              <p className="text-gray-400 text-sm font-medium italic animate-pulse">{processingSteps[bookingState.processStep].label}</p>
                              <div className="flex gap-2">
                                 {processingSteps.map((_, i) => (
                                   <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${i <= bookingState.processStep ? 'bg-[#E1306C] shadow-[0_0_10px_#E1306C]' : 'bg-gray-200'}`} />
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                   ) : (
                     <div className="space-y-10">
                        <div className="space-y-4">
                           <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Payment_Protocol</p>
                           <div className="grid grid-cols-3 gap-3">
                              {[
                                { id: 'card', icon: <CreditCard size={18} />, label: 'Card' },
                                { id: 'wallet', icon: <Wallet size={18} />, label: 'Nexus' },
                                { id: 'ledger', icon: <ShieldQuestion size={18} />, label: 'Crypto' }
                              ].map(method => (
                                <button
                                  key={method.id}
                                  onClick={() => setBookingState(p => ({ ...p, paymentMethod: method.id as any }))}
                                  className={`flex flex-col items-center gap-3 p-6 rounded-3xl border-2 transition-all ${bookingState.paymentMethod === method.id ? 'bg-[#0a0a0a] border-transparent text-white shadow-xl scale-105' : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-[#E1306C]/30'}`}
                                >
                                   {method.icon}
                                   <span className="text-[9px] font-black uppercase tracking-widest">{method.label}</span>
                                </button>
                              ))}
                           </div>
                        </div>

                        <div className="space-y-6">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-2">Identity Signature</label>
                              <input type="text" placeholder="ALEXANDER PIERCE" className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#E1306C]/30 font-bold uppercase tracking-widest text-xs" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-2">Secure Link Token (CVV/PIN)</label>
                              <input type="password" placeholder="••••" className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#E1306C]/30 font-bold tracking-[0.8em]" />
                           </div>
                        </div>

                        <div className="pt-6 space-y-6">
                           <button 
                             onClick={executePayment}
                             className="w-full py-8 bg-[#0a0a0a] text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.5em] shadow-[0_20px_60px_rgba(225,48,108,0.3)] hover:bg-[#E1306C] transition-all flex items-center justify-center gap-4 group/btn"
                           >
                              Confirm & Synchronize
                              <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                           </button>
                           <div className="flex items-center justify-center gap-3 text-gray-300">
                              <Lock size={14} />
                              <span className="text-[9px] font-black uppercase tracking-widest">TLS 1.3 End-to-End Encryption</span>
                           </div>
                        </div>
                     </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      )}

      {/* CINEMATIC HEADER (Existing) */}
      <div className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(#E1306C 1px, transparent 1px), linear-gradient(90deg, #E1306C 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-white" />
        <div className="relative text-center space-y-8 px-6 max-w-5xl animate-in fade-in zoom-in duration-1000">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
             <Crown size={16} className="text-yellow-500 animate-pulse" />
             High-Fidelity Booking Registry
          </div>
          <h2 className="text-6xl md:text-[10rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            ARCHIVE <br/><span className="italic insta-text-gradient">ACCESS.</span>
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 space-y-40">
        {/* Booking Form Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#E1306C] via-purple-500 to-blue-500 rounded-[5rem] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative bg-white/95 backdrop-blur-[60px] p-8 md:p-20 rounded-[5rem] shadow-2xl border border-gray-50 space-y-16">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-6xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Sync Configuration.</h3>
              <div className="w-32 h-1.5 insta-gradient rounded-full" />
            </div>

            <form onSubmit={handleCheckoutTrigger} className="grid grid-cols-1 xl:grid-cols-6 gap-10">
              <div className="xl:col-span-3 space-y-4">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] ml-4">Target Node</label>
                <select 
                  required
                  value={bookingState.destination}
                  onChange={(e) => setBookingState(prev => ({...prev, destination: e.target.value}))}
                  className="w-full px-10 py-8 bg-gray-50 border-2 border-transparent rounded-[3rem] focus:bg-white focus:border-[#E1306C]/20 outline-none transition-all font-bold text-xl appearance-none shadow-inner"
                >
                  <option value="">Select Registry...</option>
                  {PREMIUM_PACKAGES.map(p => <option key={p.id} value={p.title.EN}>{p.title[language]}</option>)}
                </select>
              </div>
              <div className="xl:col-span-2 grid grid-cols-2 gap-4">
                 <div className="space-y-4">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] ml-4">Arrival</label>
                    <input required type="date" value={bookingState.checkIn} onChange={e => setBookingState(p => ({...p, checkIn: e.target.value}))} className="w-full px-8 py-8 bg-gray-50 rounded-[3rem] shadow-inner font-bold" />
                 </div>
                 <div className="space-y-4">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] ml-4">Departure</label>
                    <input required type="date" value={bookingState.checkOut} onChange={e => setBookingState(p => ({...p, checkOut: e.target.value}))} className="w-full px-8 py-8 bg-gray-50 rounded-[3rem] shadow-inner font-bold" />
                 </div>
              </div>
              <div className="xl:col-span-1 pt-8">
                 <button type="submit" className="w-full h-full bg-[#0a0a0a] text-white rounded-[3rem] font-black text-xs uppercase tracking-widest hover:bg-[#E1306C] transition-all flex items-center justify-center gap-4 py-8 xl:py-0 shadow-2xl">
                    <Zap size={18} fill="currentColor" />
                    Checkout
                 </button>
              </div>
            </form>
          </div>
        </div>

        {/* PREMIUM PACKAGES PREVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {PREMIUM_PACKAGES.map((pkg) => (
             <div key={pkg.id} className="group relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100 transition-all duration-1000 hover:-translate-y-4">
                <img src={pkg.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-10 left-10">
                   <div className="px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">
                      {pkg.type}
                   </div>
                </div>
                <div className="absolute bottom-12 left-12 right-12 space-y-6">
                   <div className="space-y-2">
                      <p className="text-[11px] font-black text-[#E1306C] uppercase tracking-[0.4em] drop-shadow-lg">{pkg.duration} Experience</p>
                      <h4 className="text-4xl md:text-5xl font-heritage font-bold text-white tracking-tight uppercase leading-tight drop-shadow-2xl">{pkg.title[language]}</h4>
                   </div>
                   <div className="flex items-center justify-between pt-6 border-t border-white/20">
                      <p className="text-4xl font-heritage font-bold text-white">${pkg.price}<span className="text-sm font-light opacity-60 ml-2">/ per node</span></p>
                      <button 
                        onClick={() => setBookingState(p => ({...p, destination: pkg.title.EN}))}
                        className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all shadow-2xl active:scale-90"
                      >
                         <ArrowRight size={24} />
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* FUTURE NODES: THE BLUR SECTION (Existing) */}
        <div className="space-y-20">
           <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.6em] mx-auto animate-pulse">
                 {/* Added missing Scan icon import to fix the build error on line 420 */}
                 <Scan size={14} /> Phase_02_Registry_Expansion
              </div>
              <h3 className="text-5xl md:text-8xl font-heritage font-bold text-[#0a0a0a] tracking-tighter uppercase leading-none">
                 FUTURE <span className="text-blue-500 italic">MANIFOLDS.</span>
              </h3>
              <p className="text-gray-400 font-light italic text-xl">"Locked archival nodes currently undergoing high-fidelity calibration."</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {FUTURE_NODES.map((node, idx) => (
                <div key={node.id} className="group relative h-[500px] rounded-[4rem] bg-black overflow-hidden border border-white/5 shadow-2xl transition-all duration-1000 hover:border-blue-500/30">
                   <img src={node.image} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-all duration-1000 group-hover:scale-110" alt={node.title[language]} />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_20px_#3b82f6] opacity-0 group-hover:opacity-100 animate-scan-slow z-20" style={{ animationDelay: `${idx * 1.5}s` }} />
                   <div className="absolute inset-0 p-12 flex flex-col justify-between items-center text-center z-10">
                      <div className="px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/40">{node.type}</div>
                      <div className="w-24 h-24 rounded-[2.5rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-3xl group-hover:scale-110 transition-transform duration-700 relative">
                         <div className="absolute inset-0 border border-blue-500/10 rounded-[2.5rem] animate-ping" />
                         <Lock size={40} className="animate-pulse" />
                      </div>
                      <div className="space-y-4">
                         <h4 className="text-3xl font-heritage font-bold text-white uppercase tracking-tight">{node.title[language]}</h4>
                         <div className="flex flex-col items-center gap-3">
                            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em]">SYNCING PROTOCOL...</span>
                            <div className="w-12 h-1 bg-blue-500/20 rounded-full overflow-hidden"><div className="h-full bg-blue-500 animate-pulse w-1/3" /></div>
                         </div>
                      </div>
                   </div>
                   <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center pointer-events-none">
                      <div className="px-10 py-4 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-[0_0_40px_rgba(59,130,246,0.6)] animate-pulse">COMMING SOON</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-slow {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(500px); opacity: 0; }
        }
        .animate-scan-slow { animation: scan-slow 5s linear infinite; }
        .shadow-3xl { box-shadow: 0 0 50px rgba(59, 130, 246, 0.3); }
      `}} />
    </div>
  );
};

export default Marketplace;