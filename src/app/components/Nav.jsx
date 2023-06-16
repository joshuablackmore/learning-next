"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useRouter } from 'next/navigation'



const Nav = () => {

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

    },[])

    const navigationLinks = [
        { path: '/', label: 'Home' },
        { path: '/insta', label: 'Instagram' },
        { path: '/listofposts', label: 'Posts' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
      ];
    
  return (
    <>
    <div>
        <div className='hidden sm:flex flex-row space-x-8 justify-center font-bold m-4'>
            <Link href='/'>Home</Link>
            <Link href='/insta'>Instagram</Link>
            <Link href='/listofposts'>Posts</Link>
            <Link href='/about'>About</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact'>Contact</Link>
            
        </div>

            
        <div className={nav ? 'fixed items-center justify-end top-0 w-full z-10 px-10 sm:hidden' : 'flex items-center justify-end absolute top-0 w-full z-10 px-10 sm:hidden'}>
            <div onClick={handleNav} className='flex z-10 m-2 justify-end sm:hidden bg-transparent'>
                { !nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30} /> }
            </div>
        </div>
        
        <div className={!nav ? 'fixed h-screen w-[60%] left-[-100%] ease-out duration-1000' : 'fixed h-screen w-[60%] bg-slate-200 border border-r-pink-300 left-0 right-0 transition-all ease-in duration-700'} > 
            <div onClick={handleNav} className=' flex text-black pt-30 flex-col space-y-8 uppercase font-bold m-8'>
            <Link href='/'>Home</Link>
            <Link href='/insta'>Instagram</Link>
            <Link href='/listofposts'>Posts</Link>
            <Link href='/about'>About</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact'>Contact</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav
