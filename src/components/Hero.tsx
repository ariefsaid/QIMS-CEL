import React from 'react';                                                                  
 import Link from 'next/link';                                                               
                                                                                             
 const Hero: React.FC = () => {                                                              
   return (                                                                                  
     <div className="hero min-h-screen">                                         
       <div className="hero-content text-center">                                            
         <div className="max-w-md">                                                          
           <h1 className="text-5xl font-bold">QIMS: Revolutionizing Quality Inspection       
 Management</h1>                                                                             
           <p className="py-6">                                                              
             Streamline Your Inspection Processes Across Indonesia                           
           </p>                                                                              
           <p className="py-6">                                                              
             QIMS is a cutting-edge, mobile-first platform designed to transform how compani 
 manage quality inspections. Our system empowers inspectors, project managers, and executive 
 with real-time data and powerful tools.                                                     
           </p>                                                                              
           <div className="mt-8 flex gap-x-4 justify-center">                                
             <Link                                                                           
               href="/register"                                                              
               className="btn btn-primary"                                                   
             >                                                                               
               Get Started                                                                   
             </Link>                                                                         
             <Link                                                                           
               href="#"                                                                      
               className="btn btn-secondary"                                                 
             >                                                                               
               Request a Demo                                                                
             </Link>                                                                         
           </div>                                                                            
         </div>                                                                              
       </div>                                                                                
     </div>                                                                                  
   );                                                                                        
 };                                                                                          
                                                                                             
 export default Hero;    