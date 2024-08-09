import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        router.push('/login');
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [router]);

  const login = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    setUser(user);
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
