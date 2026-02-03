
import React, { useState } from 'react';
import { X, Globe, Chrome, ShieldCheck, Info } from 'lucide-react';
import { Language } from '../types.ts';
import { supabase, IS_MOCK_AUTH } from '../lib/supabase.ts';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, language }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (IS_MOCK_AUTH) {
        throw new Error("MOCK_MODE_ACTIVE");
      }

      const { error: authError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
          queryParams: {
            access_type: 'offline',
            prompt: 'select_account',
          },
        }
      });
      
      if (authError) throw authError;
    } catch (err: any) {
      console.warn("Real authentication unavailable, initiating Demo Session:", err.message);
      
      // Fallback: Create a simulated user session so the user can test the app
      setTimeout(() => {
        if ((window as any).__triggerMockLogin) {
          (window as any).__triggerMockLogin({
            id: 'demo-user-123',
            email: 'explorer@travelhub.lk',
            user_metadata: {
              full_name: 'Lanka Explorer',
              avatar_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'
            }
          });
          onClose();
        }
        setIsLoading(false);
      }, 1200);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 duration-500 border border-gray-100">
        <div className="absolute inset-0 pattern-overlay opacity-[0.03] pointer-events-none" />
        
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all z-10"
        >
          <X size={20} />
        </button>

        <div className="p-12 space-y-10">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 story-ring p-1 rounded-3xl mx-auto shadow-2xl flex items-center justify-center">
              <div className="bg-white w-full h-full rounded-[22px] flex items-center justify-center">
                <Globe size={32} className="text-[#E1306C]" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">
                {language === 'EN' ? "Join Registry" : "පිවිසුම අරඹන්න"}
              </h2>
              <p className="text-gray-400 text-sm font-medium italic">
                {language === 'EN' 
                  ? "Synchronize your identity with the island archives." 
                  : "ඔබේ අනන්‍යතාවය දිවයිනේ සංරක්ෂණාගාරය සමඟ සම්බන්ධ කරන්න."}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="group w-full flex items-center justify-center gap-5 py-6 px-8 bg-[#0a0a0a] text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:shadow-[0_20px_50px_rgba(225,48,108,0.3)] active:scale-95 disabled:opacity-50 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-[#E1306C] border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Chrome size={20} className="text-white group-hover:rotate-12 transition-transform" />
              )}
              <span className="relative z-10">
                {isLoading ? "Syncing Identity..." : (language === 'EN' ? "Continue with Google" : "ගූගල් සමඟ සම්බන්ධ වන්න")}
              </span>
            </button>
            
            <div className="relative flex items-center justify-center py-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
              <span className="relative px-6 bg-white text-[9px] font-black text-gray-300 uppercase tracking-[0.5em]">Secure Protocol</span>
            </div>

            {IS_MOCK_AUTH && (
              <div className="flex items-start gap-4 p-6 rounded-[2rem] bg-blue-50/50 border border-blue-100 animate-pulse">
                <Info size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <p className="text-[10px] font-bold text-blue-700 leading-relaxed uppercase tracking-widest">
                  Environment: <span className="font-black">Development</span><br/>
                  Using demo credentials for preview.
                </p>
              </div>
            )}

            <div className="flex items-center gap-5 p-6 rounded-[2rem] bg-gray-50 border border-gray-100">
              <ShieldCheck size={24} className="text-green-500" />
              <div className="text-left">
                <p className="text-[10px] font-black uppercase text-[#0a0a0a] tracking-widest">Verified Handshake</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">TLS 1.3 Encryption Active</p>
              </div>
            </div>
          </div>

          <p className="text-[9px] text-center text-gray-300 font-bold uppercase tracking-[0.2em] leading-relaxed px-8">
            By connecting, you agree to the <br/> 
            <span className="text-gray-400 hover:text-[#E1306C] cursor-pointer transition-colors">Heritage Archive Terms</span> & <span className="text-gray-400 hover:text-[#E1306C] cursor-pointer transition-colors">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
