
import React, { useState, useEffect, useRef } from 'react';
import { Language, User, Memory } from '../types.ts';
import { 
  Zap, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Camera, 
  Share2, 
  Lock, 
  Gem, 
  Activity,
  Award,
  Loader2,
  CheckCircle2,
  X,
  History,
  Target,
  Image as ImageIcon,
  Quote,
  Send,
  Star,
  Wand2,
  Plus,
  Compass,
  MapPin,
  Heart,
  MessageSquare,
  Users,
  Radio,
  Database,
  Gift,
  Trophy,
  Upload,
  FileImage
} from 'lucide-react';
import { refineTravelStory } from '../services/gemini.ts';

interface NexusRewardsProps {
  language: Language;
  user: User | null;
  onLogin: () => void;
  setView: (view: any) => void;
}

const INITIAL_MEMORIES: Memory[] = [
  {
    id: 'm1',
    userName: 'Alexander P.',
    location: 'Sigiriya',
    title: 'Echoes of the Sky Fortress',
    story: 'Standing atop the Lion Rock at dawn, I felt the weight of centuries. The mist clinging to the jungle canopy felt like a bridge between eras.',
    image: 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=800&q=80',
    likes: 412,
    date: '2026-03-12',
    rating: 5,
    tags: ['ancient', 'sunrise']
  },
  {
    id: 'm2',
    userName: 'Elena M.',
    location: 'Ella',
    title: 'Mist in the Tea Valley',
    story: 'The scent of damp earth and fresh tea leaves is something I’ll never forget. The blue train winding through the hills is pure magic.',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    likes: 285,
    date: '2026-03-05',
    rating: 5,
    tags: ['mountains', 'tea']
  }
];

const NexusRewards: React.FC<NexusRewardsProps> = ({ language, user, onLogin, setView }) => {
  const [memories, setMemories] = useState<Memory[]>(INITIAL_MEMORIES);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [newMemory, setNewMemory] = useState<Partial<Memory>>({
    title: '',
    location: '',
    story: '',
    rating: 5,
    image: ''
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5)
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const handleRefine = async () => {
    if (!newMemory.story || isRefining) return;
    setIsRefining(true);
    const refined = await refineTravelStory(newMemory.story, language);
    setNewMemory(prev => ({ ...prev, story: refined }));
    setIsRefining(false);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert("Invalid file type. Registry only accepts visual fragments (images).");
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setNewMemory(prev => ({ ...prev, image: e.target?.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      onLogin();
      return;
    }

    if (!newMemory.image) {
      alert("Please upload a visual fragment to complete the archival process.");
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      const memory: Memory = {
        id: `m${Date.now()}`,
        userName: user.name,
        location: newMemory.location || 'Unknown Node',
        title: newMemory.title || 'Untitled Memory',
        story: newMemory.story || '',
        image: newMemory.image || 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=800&q=80',
        likes: 0,
        date: new Date().toISOString().split('T')[0],
        rating: newMemory.rating || 5,
        tags: ['community']
      };

      setMemories([memory, ...memories]);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setShowForm(false);
        setNewMemory({ title: '', location: '', story: '', rating: 5, image: '' });
      }, 2000);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#010101] text-white pt-32 pb-40 relative overflow-hidden">
      {/* CYBER-HERITAGE BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ perspective: '2000px' }}>
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />
         <div 
           className="absolute inset-0 opacity-[0.1] transition-transform duration-1000 ease-out" 
           style={{ 
             backgroundImage: `linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)`, 
             backgroundSize: '100px 100px', 
             transform: `rotateX(75deg) translateY(200px) scale(3) rotateZ(${mousePos.x * 5}deg)`,
             maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)' 
           }} 
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 space-y-24">
        
        {/* Community Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 border-b border-white/5 pb-20">
          <div className="space-y-10">
            <div className="flex flex-col items-start gap-6">
               <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 text-[#0EA5E9] text-[10px] font-black uppercase tracking-[0.5em] shadow-3xl animate-pulse">
                  <Users size={14} fill="currentColor" /> Community_Hub_v4.5
               </div>
               <div className="h-16 w-[1px] bg-gradient-to-b from-[#0EA5E9] to-transparent"></div>
            </div>
            
            <h1 className="text-6xl md:text-[10rem] font-heritage font-bold tracking-tighter leading-[0.8] uppercase text-white">
              VOYAGER <br/><span className="italic insta-text-gradient">NETWORK.</span>
            </h1>
            
            <p className="text-gray-500 max-w-xl text-xl md:text-2xl font-light italic leading-relaxed">
              "Every archival engagement mints essence. Synchronize your journey to unlock future manifolds."
            </p>
          </div>

          <div className="relative group w-full lg:w-auto">
            <button 
              onClick={() => user ? setShowForm(true) : onLogin()}
              className="group relative px-12 py-8 bg-white border border-white/10 rounded-[3rem] shadow-[0_30px_70px_rgba(255,255,255,0.1)] hover:scale-105 transition-all overflow-hidden flex items-center gap-6"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#0EA5E9] shadow-inner group-hover:rotate-12 transition-transform">
                  <Plus size={28} />
               </div>
               <div className="text-left space-y-1">
                  <p className="text-[10px] font-black text-[#0EA5E9] uppercase tracking-[0.4em]">Initialize Registry</p>
                  <p className="text-2xl font-heritage font-bold uppercase text-[#0a0a0a]">Upload Memoir</p>
               </div>
               <ArrowRight size={20} className="text-[#0a0a0a]/30 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* UPLOAD FORM SECTION */}
        {showForm && (
          <div className="bg-white rounded-[5rem] p-10 md:p-20 shadow-[0_80px_180px_rgba(14,165,233,0.2)] border border-white animate-in slide-in-from-bottom-20 duration-1000 relative overflow-hidden">
             {isSuccess && (
                <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-12 space-y-10 animate-in fade-in duration-500">
                   <div className="relative">
                      <div className="w-40 h-40 bg-green-500/10 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                         <CheckCircle2 size={80} className="text-green-500" />
                      </div>
                      <div className="absolute -inset-4 border-2 border-dashed border-green-500/20 rounded-full animate-spin-slow" />
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-5xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Memoir Archived</h4>
                      <p className="text-gray-500 text-xl font-medium italic">"Synchronization with the public community registry complete."</p>
                   </div>
                </div>
             )}

             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-gray-100 pb-16 mb-16">
                <div className="space-y-6">
                   <div className="flex items-center gap-4 text-[#0EA5E9]">
                      <Radio className="w-5 h-5 animate-pulse" />
                      <span className="text-[12px] font-black uppercase tracking-[0.6em]">Neural_Archive_Portal</span>
                   </div>
                   <h3 className="text-4xl md:text-7xl font-heritage font-bold text-[#0a0a0a] tracking-tighter uppercase leading-none">
                      New <span className="italic insta-text-gradient">Entry.</span>
                   </h3>
                </div>
                <button onClick={() => setShowForm(false)} className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-all">
                   <X size={28} />
                </button>
             </div>

             <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 relative z-10">
                <div className="lg:col-span-7 space-y-12">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] ml-2">Destination Node</label>
                         <div className="relative group">
                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0EA5E9] transition-colors" size={20} />
                            <input 
                               required
                               type="text" 
                               value={newMemory.location}
                               onChange={(e) => setNewMemory(p => ({...p, location: e.target.value}))}
                               className="w-full pl-16 pr-8 py-7 bg-gray-50 border-2 border-transparent rounded-[2.5rem] focus:bg-white focus:border-[#0EA5E9]/20 outline-none transition-all font-bold text-lg shadow-inner text-[#0a0a0a]"
                               placeholder="Ex: Galle Fort Lighthouse"
                            />
                         </div>
                      </div>
                      <div className="space-y-4">
                         <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] ml-2">Registry Title</label>
                         <div className="relative group">
                            <Compass className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0EA5E9] transition-colors" size={20} />
                            <input 
                               required
                               type="text" 
                               value={newMemory.title}
                               onChange={(e) => setNewMemory(p => ({...p, title: e.target.value}))}
                               className="w-full pl-16 pr-8 py-7 bg-gray-50 border-2 border-transparent rounded-[2.5rem] focus:bg-white focus:border-[#0EA5E9]/20 outline-none transition-all font-bold text-lg shadow-inner text-[#0a0a0a]"
                               placeholder="Poetic title of your journey..."
                            />
                         </div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div className="flex justify-between items-center px-2">
                         <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em]">The Narrative</label>
                         <button 
                           type="button" 
                           onClick={handleRefine}
                           disabled={!newMemory.story || isRefining}
                           className="flex items-center gap-3 px-5 py-2 bg-[#0EA5E9]/5 text-[#0EA5E9] border border-[#0EA5E9]/20 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#0EA5E9] hover:text-white transition-all disabled:opacity-30"
                         >
                            {isRefining ? <Loader2 size={12} className="animate-spin" /> : <Wand2 size={12} />}
                            Refine with AI
                         </button>
                      </div>
                      <div className="relative">
                         <Quote size={40} className="absolute top-8 left-8 text-gray-100 pointer-events-none" />
                         <textarea 
                           required
                           rows={6}
                           value={newMemory.story}
                           onChange={(e) => setNewMemory(p => ({...p, story: e.target.value}))}
                           className="w-full px-12 py-12 bg-gray-50 border-2 border-transparent rounded-[3.5rem] focus:bg-white focus:border-[#0EA5E9]/20 outline-none transition-all font-medium italic text-xl shadow-inner text-gray-600 resize-none"
                           placeholder="Relive your steps through prose..."
                         />
                      </div>
                   </div>
                </div>

                <div className="lg:col-span-5 space-y-12">
                   <div className="space-y-4">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] ml-2">Visual Data (Device Sync)</label>
                      <input 
                         type="file" 
                         ref={fileInputRef} 
                         onChange={handleFileSelect} 
                         className="hidden" 
                         accept="image/*"
                      />
                      <div 
                         onDragOver={handleDragOver}
                         onDragLeave={handleDragLeave}
                         onDrop={handleDrop}
                         onClick={() => fileInputRef.current?.click()}
                         className={`relative group h-[340px] rounded-[3.5rem] overflow-hidden border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center text-center p-8 ${
                            isDragging ? 'border-[#0EA5E9] bg-[#0EA5E9]/5' : 'border-gray-200 bg-gray-50 hover:border-[#0EA5E9]/40 hover:bg-white'
                         } ${newMemory.image ? 'border-solid' : ''}`}
                      >
                         {newMemory.image ? (
                           <>
                             <img src={newMemory.image} className="absolute inset-0 w-full h-full object-cover animate-in fade-in zoom-in duration-700" alt="Preview" />
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <div className="flex flex-col items-center gap-4">
                                   <button 
                                      type="button" 
                                      onClick={(e) => { e.stopPropagation(); setNewMemory(p => ({...p, image: ''})); }} 
                                      className="bg-white text-black px-6 py-3 rounded-2xl shadow-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                                   >
                                      Clear Fragment
                                   </button>
                                   <p className="text-white text-[9px] font-black uppercase tracking-widest">Click to Replace</p>
                                </div>
                             </div>
                           </>
                         ) : (
                           <div className="space-y-6">
                              <div className="w-24 h-24 bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-[#0EA5E9] group-hover:scale-110 transition-all mx-auto">
                                 {isDragging ? <Upload size={40} className="animate-bounce" /> : <FileImage size={40} />}
                              </div>
                              <div className="space-y-2">
                                 <p className="text-sm font-bold text-[#0a0a0a] uppercase tracking-widest">
                                    {isDragging ? 'Drop Fragment Now' : 'Select From Device'}
                                 </p>
                                 <p className="text-[10px] text-gray-400 font-medium italic">Drag & drop or tap to browse photos</p>
                              </div>
                              <div className="pt-4 flex justify-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                 <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                 <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                              </div>
                           </div>
                         )}
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] ml-2">Resonance Level</label>
                      <div className="flex justify-between items-center bg-gray-50 p-6 rounded-[2.5rem] shadow-inner border border-gray-100">
                         <div className="flex gap-4">
                            {[1,2,3,4,5].map(s => (
                               <button 
                                 key={s} 
                                 type="button"
                                 onClick={() => setNewMemory(p => ({...p, rating: s as any}))}
                                 className={`transition-all duration-300 ${s <= (newMemory.rating || 0) ? 'text-yellow-400 scale-125' : 'text-gray-200 hover:text-yellow-200'}`}
                               >
                                  <Star size={32} fill="currentColor" />
                               </button>
                            ))}
                         </div>
                         <span className="text-3xl font-heritage font-black text-[#0a0a0a] mr-4 opacity-40">{newMemory.rating}/5</span>
                      </div>
                   </div>

                   <button 
                     type="submit"
                     disabled={isSubmitting || !newMemory.image}
                     className="w-full h-24 bg-[#0a0a0a] text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.6em] flex items-center justify-center gap-8 hover:bg-[#0EA5E9] hover:shadow-[0_40px_80px_rgba(14,165,233,0.3)] transition-all active:scale-95 group/btn relative overflow-hidden disabled:opacity-20 disabled:cursor-not-allowed"
                   >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                      {isSubmitting ? (
                        <Loader2 size={32} className="animate-spin text-white" />
                      ) : (
                        <>
                           Commit Archive
                           <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transition-all group-hover/btn:rotate-12">
                              <Send size={24} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                           </div>
                        </>
                      )}
                   </button>
                </div>
             </form>
          </div>
        )}

        {/* MEMOIRS GRID - Updated with gap-10 md:gap-16 pt-8 */}
        <div className="space-y-24">
           <div className="flex flex-col items-center text-center space-y-10">
              <div className="inline-flex items-center gap-6 text-[#0EA5E9] opacity-80">
                 <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#0EA5E9]"></div>
                 <Database size={28} className="animate-spin-slow" />
                 <span className="text-[12px] font-black uppercase tracking-[0.8em]">Public_Memoir_Feed</span>
                 <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#0EA5E9]"></div>
              </div>
              <h2 className="text-5xl md:text-[8rem] font-heritage font-bold text-white tracking-tighter uppercase leading-none">
                 LIVED <span className="insta-text-gradient italic">STORIES.</span>
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 pt-8">
             {memories.map((m, idx) => (
               <div 
                 key={m.id}
                 className="group relative bg-white rounded-[4rem] overflow-hidden border border-gray-100 transition-all duration-1000 hover:border-[#0EA5E9]/30 hover:-translate-y-4 shadow-2xl"
               >
                  <div className="relative h-96 overflow-hidden">
                     <img src={m.image} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt={m.title} />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                     
                     <div className="absolute top-10 right-10 flex gap-1">
                        {Array.from({ length: m.rating }).map((_, i) => (
                           <Star key={i} size={10} className="text-yellow-400 fill-current shadow-2xl" />
                        ))}
                     </div>

                     <div className="absolute bottom-8 left-8 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl border-2 border-white/40 overflow-hidden shadow-2xl bg-gray-900">
                           <img src={`https://ui-avatars.com/api/?name=${m.userName}&background=0EA5E9&color=fff`} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                           <p className="text-[10px] font-black text-white uppercase tracking-widest mb-1">{m.userName}</p>
                           <div className="flex items-center gap-2 text-[8px] font-bold text-white/60 uppercase tracking-widest">
                              <History size={10} />
                              {m.date}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="p-12 space-y-8">
                     <div className="space-y-3">
                        <div className="flex items-center gap-3 text-[#0EA5E9]">
                           <MapPin size={14} />
                           <span className="text-[10px] font-black uppercase tracking-[0.4em]">{m.location}</span>
                        </div>
                        <h4 className="text-3xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter leading-tight group-hover:insta-text-gradient transition-all">
                           {m.title}
                        </h4>
                     </div>
                     
                     <div className="relative">
                        <Quote size={28} className="absolute -top-4 -left-4 text-[#0EA5E9]/10" />
                        <p className="text-base text-gray-500 font-light italic leading-relaxed pl-4 line-clamp-4">
                           "{m.story}"
                        </p>
                     </div>

                     <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-6">
                           <button className="flex items-center gap-2.5 text-gray-400 hover:text-[#0EA5E9] transition-colors group/stat">
                              <Heart size={18} className="group-hover/stat:fill-current" />
                              <span className="text-[11px] font-black">{m.likes}</span>
                           </button>
                           <button className="flex items-center gap-2.5 text-gray-400 hover:text-[#0a0a0a] transition-colors">
                              <MessageSquare size={18} />
                              <span className="text-[11px] font-black">Sync</span>
                           </button>
                        </div>
                        <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#0EA5E9] hover:text-white transition-all">
                           <Share2 size={16} />
                        </button>
                     </div>
                  </div>
               </div>
             ))}
           </div>
        </div>

        {/* REWARDS SECTION */}
        <div className="space-y-24 py-40 border-t border-white/5 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-60 bg-[#0EA5E9]/5 blur-[180px] rotate-12 pointer-events-none" />

           <div className="flex flex-col items-center text-center space-y-10 relative z-10">
              <div className="px-8 py-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] flex items-center gap-4 shadow-2xl backdrop-blur-md">
                 <Gem size={18} className="animate-bounce" />
                 Rewards_Synergy_Module
              </div>
              <h3 className="text-5xl md:text-[9rem] font-heritage font-bold text-white uppercase tracking-tighter leading-none">
                 COMING <span className="text-yellow-500 italic">SOON.</span>
              </h3>
              <p className="text-gray-500 text-lg md:text-2xl font-light italic leading-relaxed max-w-2xl mx-auto opacity-60">
                 "Our architectural bureau is synthesizing the Essence Economy. Future manifolds for point redemption and VIP access are under calibration."
              </p>
              
              <div className="pt-12">
                 <div className="flex items-center gap-10 opacity-20">
                    <Award size={40} />
                    <Gift size={40} />
                    <Trophy size={40} />
                 </div>
              </div>
           </div>
        </div>

        {/* Global Footer Sync Info */}
        <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30">
           <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                 <ShieldCheck size={28} className="text-green-500" />
                 <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest text-white">Identity_Locked</p>
                    <p className="text-[10px] font-bold text-white/60">Registry Sync v4.5</p>
                 </div>
              </div>
           </div>

           <div className="flex items-center gap-8">
              <div className="text-right">
                 <p className="text-[9px] font-black uppercase tracking-widest text-white">Next_Cycle_Target</p>
                 <p className="text-[10px] font-bold text-white/60">Q4 2026 ARCHIVE_UPDATE</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-600 shadow-inner">
                 <Activity size={28} />
              </div>
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-slow {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateY(500px); opacity: 0; }
        }
        .animate-scan-slow { animation: scan-slow 6s linear infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .shadow-3xl {
          box-shadow: 0 0 50px rgba(14,165,233,0.3);
        }
      `}} />
    </div>
  );
};

export default NexusRewards;
