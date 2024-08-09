import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';
import { User as SupabaseUser } from '@supabase/auth-js'; // Import the Supabase User type


type User = {
  id: string;
  email: string; // Ensure email is a required string
  // Add other properties as needed
};

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '', // Provide a default value for email
        });
      } else {
    setUser(null);
    router.push('/login');
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
  };
  }, [router]);

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    setUser({
      id: data.user.id,
      email: data.user.email || '', // Provide a default value for email
    });
};

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
    router.push('/login');
  };

  return { user, login, logout };
};

export default useAuth;
