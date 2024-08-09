import { useEffect } from 'react';                                                                                                                 
 import { useRouter } from 'next/router';                                                                                                           
 import { supabase } from '../lib/supabase';                                                                                                        
                                                                                                                                                    
 const withAuth = (Component: React.ComponentType) => {                                                                                             
   const Auth = (props: any) => {                                                                                                                   
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
     }, []);                                                                                                                                        
                                                                                                                                                    
     return <Component {...props} />;                                                                                                               
   };                                                                                                                                               
                                                                                                                                                    
   return Auth;                                                                                                                                     
 };                                                                                                                                                 
                                                                                                                                                    
 export default withAuth;'use client';
