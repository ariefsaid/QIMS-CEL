import useAuth from '../hooks/useAuth';
                                                                                                                                                    
 const withAuth = (Component: React.ComponentType) => {                                                                                             
   const Auth = (props: any) => {                                                                                                                   
     const router = useRouter();                                                                                                                    
                                                                                                                                                    
    useAuth();
                                                                                                                                                    
     return <Component {...props} />;                                                                                                               
   };                                                                                                                                               
                                                                                                                                                    
   return Auth;                                                                                                                                     
 };                                                                                                                                                 
                                                                                                                                                    
 export default withAuth;'use client';
