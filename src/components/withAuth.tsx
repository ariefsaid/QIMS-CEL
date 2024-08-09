import { useEffect } from 'react'; // Import useEffect from 'react'
import { useRouter } from 'next/router'; // Import useRouter from 'next/router'
import useAuth from '../hooks/useAuth'; // Import useAuth from the correct path

const withAuth = (Component: React.ComponentType) => {
  const Auth = (props: any) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/login');
      }
    }, [user, router]);

    return user ? <Component {...props} /> : null;
   };                                                                                                                                               
                                                                                                                                                    
   return Auth;                                                                                                                                     
 };                                                                                                                                                 
                                                                                                                                                    
 export default withAuth;'use client';
