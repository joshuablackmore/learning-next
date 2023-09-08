"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillInstagram } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";

const Nav2 = () => {
  const pathname = usePathname();

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    window.addEventListener("orientationchange", closeNav);

    return () => {
      window.removeEventListener("orientationchange", closeNav);
    };
  }, [nav]);

  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/insta", label: "Instagram" },
    { path: "/blog", label: "Blog" },
    { path: "/contact2", label: "Contact" },
    { path: "https://www.instagram.com/petedblackmore", label: <AiFillInstagram size={30} />},
  ];

  return (
    <>
      <div className="box-border">
        {/* large sreen nav */}
        <div>
          {!nav && (
            <div className="z-50 hidden xl:flex bg-light1 flex-row justify-between h-[60px] space-x-8 xl:right-0 xl:pr-20 font-bold items-center border-b fixed w-full">
              <div className="flex ml-2 xl:text-3xl">
                <Link href="./" onClick={closeNav}>
                  <h1>
                    <span className="text-dark3 font-extrabold">Peter</span>
                    <span className="text-dark2 font-light">Blackmore</span>
                  </h1>
                </Link>
              </div>
              <div className="flex flex-row space-x-6">
                {navigationLinks.map((link, index) => {
                  const isActive = pathname === link.path;
                  return (
                    <motion.div
                      className="text-dark3 hover:text-hi-light1 text-xl"
                      key={index}
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.path}
                        className={isActive ? "text-hi-light1" : ""}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* small screen nav */}
        <div className="fixed border-b w-[100%] bg-light1  z-[700] xl:hidden">
          <div className="flex items-center justify-between w-full ">
            <div className="flex ml-2 text-2xl lg:text-3xl">
              <Link href="./" onClick={closeNav}>
                <h1>
                  <span className="text-fontDark1 font-extrabold">Peter</span>
                  <span className="text-fontDark1 font-light">Blackmore</span>
                </h1>
              </Link>
            </div>

            <div
              onClick={handleNav}
              className="flex z-10 m-2 justify-end xl:hidden bg-transparent"
            >
              {!nav ? (
                <AiOutlineMenu size={30} />
              ) : (
                <AiOutlineClose size={30} />
              )}
            </div>
          </div>
        </div>
        {/* slider */}
        <AnimatePresence>
          {nav && (
            <motion.div
              className=" flex items-center justify-center z-[500] h-[100%] fixed w-[100%] bg-hi-light2 text-dark3  border-b left-0 right-0"
              initial={{ opacity: 0, translateY: "-100%" }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 1, translateY: "-100%" }}
              transition={{ duration: 0.4 }}
            >
              <div
                onClick={handleNav}
                className="flex text-xl md:text-xl lg:text-2xl flex-col space-y-8 uppercase font-bold items-center"
              >
                {navigationLinks.map((link, index) => {
                  const isActive = pathname === link.path;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 }}
                      style={{ opacity: 0 }}
                    >
                      <Link
                        href={link.path}
                        className={isActive ? " text-hi-light1" : ""}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
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
