import Link from 'next/link';                                                                                                                      
                                                                                                                                                    
 const Navbar = () => {                                                                                                                             
   return (                                                                                                                                         
     <nav className="flex items-center justify-between p-4 bg-blue-500">                                                                            
       <div className="text-white">                                                                                                                 
         <Link href="/" className="text-lg font-bold">                                                                                                                   
           QIMS                                                                                                
         </Link>                                                                                                                                    
       </div>                                                                                                                                       
       <div className="flex space-x-4 text-white">                                                                                                  
         <Link href="/dashboard">                                                                                                                   
           Dashboard                                                                                                                         
         </Link>                                                                                                                                    
         <Link href="/profile">                                                                                                                     
           Profile                                                                                                                       
         </Link>                                                                                                                                    
       </div>                                                                                                                                       
     </nav>                                                                                                                                         
   );                                                                                                                                               
 };                                                                                                                                                 
                                                                                                                                                    
 export default Navbar;                  