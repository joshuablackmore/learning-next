"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'



const Nav2 = () => {

    const router = useRouter();

    const [nav, setNav] = useState(false)
            const handleNav = () => {
            setNav(!nav)
            };

    useEffect(() => {
        const closeNav = () => {
            setNav(false)
        }
        window.addEventListener('orientationchange', closeNav);
    
        return () => {
            window.removeEventListener('orientationchange', closeNav);
        }

    },[nav])

    const navigationLinks = [
        { path: '/', label: 'Home' },
        { path: '/insta', label: 'Instagram' },
        { path: '/listofposts', label: 'Posts' },
        { path: '/about', label: 'About' },
        { path: '/blog', label: 'Blog'},
        { path: '/contact', label: 'Contact' },
      ];
    
  return (

    <div className='box-border '>
        <div>
        
             <AnimatePresence>
                {!nav &&
            <div className='hidden xl:flex absolute flex-row space-x-8 xl:right-0 xl:pr-20 font-bold h-10 xl:text-3xl border border-red-400'>
            
                {navigationLinks.map((link, index) => (
                
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    
                >
                    <Link href={link.path}>{link.label}</Link>
                </motion.div>
                ))}

            </div>
}
            </AnimatePresence>
        </div>
        


            
        <div className={nav ? 'flex items-center justify-between top-0 w-full z-50 border border-b-black xl:hidden' : 'flex items-center justify-between top-50 w-full z-800 xl:hidden border border-b-black'}>
        
                <div className='flex m-2 justify-end xl:hidden sm:text-lg md:text-xl lg:text-2xl'>
                    <h1>Peter Blackmore</h1>
                </div>

                <div onClick={handleNav} className='flex z-10 m-2 justify-end xl:hidden bg-transparent'>
                    { !nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30} /> }
                </div>
                
                
        </div>
        
        <div className={!nav ? 'fixed h-screen w-[50%] left-[-100%] ease-out duration-700' : 'fixed h-screen w-[50%] sm:w-[40%] lg:w-[30%] bg-slate-200 border border-r-slate-300 left-0 right-0 transition-all ease-out duration-200 z-10'} > 
            <AnimatePresence>
                {nav &&
            <div onClick={handleNav} className=' flex text-black sm:text-lg md:text-xl lg:text-2xl pt-30 flex-col space-y-8 uppercase font-bold m-8'>
            {navigationLinks.map((link, index) => (
              
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ opacity: 0 }} // Add this line
              >
                <Link href={link.path}>{link.label}</Link>
              </motion.div>
            ))}
            </div>
}
            </AnimatePresence>
        </div>
    </div>
    
  )
}

export default Nav2
