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

    <div>
        <div>
        
             <AnimatePresence>
                {!nav &&
            <div className='hidden sm:flex flex-row space-x-8 justify-center font-bold m-4'>
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
        


            
        <div className={nav ? 'fixed items-center justify-end top-0 w-full z-10 px-10 sm:hidden' : 'flex items-center justify-end absolute top-0 w-full z-10 px-10 sm:hidden'}>
            <div onClick={handleNav} className='flex z-10 m-2 justify-end sm:hidden bg-transparent'>
                { !nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30} /> }
            </div>
        </div>
        
        <div className={!nav ? 'fixed h-screen w-[60%] left-[-100%] ease-out duration-700' : 'fixed h-screen w-[60%] bg-slate-200 border border-r-pink-300 left-0 right-0 transition-all ease-out duration-200'} > 
            <AnimatePresence>
                {nav &&
            <div onClick={handleNav} className=' flex text-black pt-30 flex-col space-y-8 uppercase font-bold m-8'>
            {navigationLinks.map((link, index) => (
              
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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
