import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!session) {
        router.push('/login');
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [router]);

  return null;
};

export default useAuth;
