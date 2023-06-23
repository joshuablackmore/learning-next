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

    <div className='box-border'>
        <div>
             
                {!nav &&
            <div className='hidden bg-light1 xl:flex flex-row justify-between h-[60px] space-x-8 xl:right-0 xl:pr-20 font-bold items-center'>
            
                <div className='flex ml-2 md:text-xl lg:text-2xl'>
                    <h1><span className=' text-dark3 font-bold'>Peter</span><span className=' font-light text-dark1'>Blackmore</span></h1>
                </div>
                    <div className='flex flex-row space-x-6'>
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

                


            </div>
}
            
        </div>
        


            
        <div className={nav ? 'flex bg-light1 items-center justify-between top-0 w-full z-50 xl:hidden' : 'flex bg-light1 items-center justify-between top-50 w-full z-800 xl:hidden '}>
        
                <div className='flex ml-2 text-lg md:text-xl lg:text-2xl'>
                    <h1><span className='text-dark3 font-extrabold'>Peter</span><span className=' text-dark1'>Blackmore</span></h1>
                </div>

                <div onClick={handleNav} className='flex z-10 m-2 justify-end xl:hidden bg-transparent'>
                    { !nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30} /> }
                </div>
                
                
        </div>
        
        <div className={!nav ? 'fixed h-screen left-[-100%] w-[50%] ease-out duration-700' : 'fixed h-screen w-[50%] sm:w-[40%] lg:w-[30%] bg-gradient-to-b from-dark1 to-dark3 text-light1 border-r left-0 right-0 transition-all ease-out duration-200 z-10'} > 
            <AnimatePresence>
                {nav &&
            <div onClick={handleNav} className=' flex sm:text-lg md:text-xl lg:text-2xl pt-10 flex-col space-y-8 uppercase font-bold m-8'>
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
