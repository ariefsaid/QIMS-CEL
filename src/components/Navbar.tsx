import Link from 'next/link';                                                                                                                      
                                                                                                                                                    
 const Navbar = () => {                                                                                                                             
   return (                                                                                                                                         
     <nav className="flex items-center justify-between p-4 bg-blue-500">                                                                            
       <div className="text-white">                                                                                                                 
         <Link href="/dashboard">                                                                                                                   
           <a className="text-lg font-bold">QIMS</a>                                                                                                
         </Link>                                                                                                                                    
       </div>                                                                                                                                       
       <div className="flex space-x-4 text-white">                                                                                                  
         <Link href="/dashboard">                                                                                                                   
           <a>Dashboard</a>                                                                                                                         
         </Link>                                                                                                                                    
         <Link href="/profile">                                                                                                                     
           <a>Profile</a>                                                                                                                           
         </Link>                                                                                                                                    
       </div>                                                                                                                                       
     </nav>                                                                                                                                         
   );                                                                                                                                               
 };                                                                                                                                                 
                                                                                                                                                    
 export default Navbar;                  