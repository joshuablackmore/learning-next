"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './styles.module.css';

const Nav2 = () => {
  const router = useRouter();

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  }

  useEffect(() => {
      
    window.addEventListener('orientationchange', closeNav);

    return () => {
      window.removeEventListener('orientationchange', closeNav);
    };
  }, [nav]);

  const navigationLinks = [
    { path: '/insta', label: 'Instagram' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="box-border">
        {/* large sreen nav */}
        <div>
          {!nav && (
            <div className="hidden xl:flex bg-light1 flex-row justify-between h-[60px] space-x-8 xl:right-0 xl:pr-20 font-bold items-center">
              <div className="flex ml-2 md:text-xl lg:text-2xl">
              <Link href='./' onClick={closeNav}>
                 <h1>
              <span className="text-dark3 font-extrabold">Peter</span>
              <span className="text-dark1">Blackmore</span>
                </h1>
            </Link>
              </div>
              <div className="flex flex-row space-x-6">
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
          )}
        </div>

        {/* small screen nav */}
        <div className='fixed border-b w-[100%] bg-light1  z-[700] xl:hidden'>
         <div className='  flex items-center justify-between w-full '>
          <div className="flex ml-2 text-lg md:text-xl lg:text-2xl">
          <Link href='./' onClick={closeNav}>
            <h1>
              <span className="text-dark3 font-extrabold">Peter</span>
              <span className="text-dark1">Blackmore</span>
            </h1>
            </Link>
          </div>

          <div onClick={handleNav} className="flex z-10 m-2 justify-end xl:hidden bg-transparent">
            {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </div>
        </div>
        </div>
        {/* slider */}
        <AnimatePresence>
          {nav && (
            <motion.div
              className="z-[500] absolute w-[100%] h-[35%] bg-gradient-to-b from-dark1 to-dark3 text-light1 border-b left-0 right-0"
              initial={{ opacity: 0, translateY: '-100%' }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 1, translateY: '-100%' }}
              transition={{ duration: 0.3 }}
            >
              <div
                onClick={handleNav}
                className="flex sm:text-lg md:text-xl lg:text-2xl pt-20 flex-col space-y-8 uppercase font-bold m-8"
              >
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    style={{ opacity: 0 }}
                  >
                    <Link href={link.path}>{link.label}</Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {nav && <div className={styles.dim} onClick={handleNav}></div>}
    </>
  );
};

export default Nav2;
