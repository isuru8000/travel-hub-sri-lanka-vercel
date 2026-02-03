
import { createClient } from '@supabase/supabase-js';

/**
 * Robust environment variable lookup.
 */
const getEnv = (key: string): string => {
  try {
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
      return process.env[key] as string;
    }
    if (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env[key]) {
      return (import.meta as any).env[key] as string;
    }
  } catch (e) {
    // Silent catch
  }
  return '';
};

const VITE_SUPABASE_URL = getEnv('VITE_SUPABASE_URL');
const VITE_SUPABASE_ANON_KEY = getEnv('VITE_SUPABASE_ANON_KEY');

// Determine if we are in mock mode (no real keys provided)
export const IS_MOCK_AUTH = !VITE_SUPABASE_URL || !VITE_SUPABASE_ANON_KEY || VITE_SUPABASE_URL.includes('placeholder');

/**
 * Creates a stable mock Supabase client to prevent application crashes.
 */
const createMockClient = () => ({
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    onAuthStateChange: (callback: any) => {
      // Allow manual triggering for demo purposes
      (window as any).__triggerMockLogin = (userData: any) => {
        callback('SIGNED_IN', { user: userData });
      };
      return { data: { subscription: { unsubscribe: () => {} } } };
    },
    signInWithOAuth: () => Promise.reject(new Error("Supabase keys not configured")),
    signOut: () => Promise.resolve({ error: null }),
  }
} as any);

/**
 * Initialize Supabase client with safety guard.
 */
const createSafeClient = () => {
  if (IS_MOCK_AUTH) {
    console.warn('Supabase keys missing or invalid. Authentication running in MOCK mode.');
    return createMockClient();
  }

  try {
    return createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      }
    });
  } catch (err) {
    console.error('Supabase initialization failed, falling back to mock:', err);
    return createMockClient();
  }
};

export const supabase = createSafeClient();
