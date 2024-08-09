import useAuth from '../hooks/useAuth';
                                                                                                                                                    
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
