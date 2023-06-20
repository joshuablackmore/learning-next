
import Link from 'next/link'
import React from 'react'





const Nav3 = () => {


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

    </div>
    </>
  )
}

export default Nav3
