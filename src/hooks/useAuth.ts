// src/hooks/useAuth.ts

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

type User = {
  id: string;
  email: string;
  role: string;
};

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        // Fetch user role from your database
        const { data, error } = await supabase
          .from('users')
          .select('role')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.error('Error fetching user role:', error);
          return;
        }

        setUser({
          id: session.user.id,
          email: session.user.email || '',
          role: data.role,
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      // Fetch user role after successful login
      const { data: roleData, error: roleError } = await supabase
        .from('users')
        .select('role')
        .eq('id', data.user.id)
        .single();

      if (roleError) throw roleError;

      setUser({
        id: data.user.id,
        email: data.user.email || '',
        role: roleData.role,
      });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;