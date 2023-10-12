"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillInstagram } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import { navigationLinks } from "./links";
import { useActiveSectionContext } from "../../../../context/active-section-context";

const Nav2 = () => {
  const pathname = usePathname();
  const { activeSection, setActiveSection } = useActiveSectionContext();

  const [nav, setNav] = useState(false);
  const handleNav = (): void => {
    setNav(!nav);
  };

  const closeNav = (): void => {
    setNav(false);
  };

  useEffect(() => {
    window.addEventListener("orientationchange", closeNav);

    return () => {
      window.removeEventListener("orientationchange", closeNav);
    };
  }, [nav]);

  return (
    <>
      <div className="box-border">
        {/* large sreen nav */}
        <div>
          {!nav && (
            <div className="fixed z-50 hidden h-[60px] w-full flex-row items-center justify-between space-x-8 border-b bg-light1 font-bold xl:right-0 xl:flex xl:pr-20">
              <div className="ml-2 flex xl:text-3xl">
                <Link href="./" onClick={closeNav}>
                  <h1>
                    <span className="font-extrabold text-dark3">Peter</span>
                    <span className="font-light text-dark2">Blackmore</span>
                  </h1>
                </Link>
              </div>
              <div className="flex flex-row space-x-12">
                {navigationLinks.map((link, index) => {
                  return (
                    <motion.div
                      className={
                        activeSection === link.label
                          ? `text-xl text-hi-light1`
                          : `text-xl text-dark3 hover:text-hi-light2  `
                      }
                      key={index}
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.path}
                        onClick={() => setActiveSection(link.label)}
                        className="relative"
                      >
                        {link.label}
                        {link.label === activeSection && (
                          <motion.span
                            layoutId="activeSection"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 25,
                            }}
                            className="absolute bottom-0 left-0 right-0 top-7 -z-10 h-[4px] rounded-full bg-hi-light1"
                          ></motion.span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* small screen nav */}
        <div className="fixed z-[700] w-[100%] border-b  bg-light1 xl:hidden">
          <div className="flex w-full items-center justify-between ">
            <div className="ml-2 flex text-2xl lg:text-3xl">
              <Link href="./" onClick={closeNav}>
                <h1>
                  <span className="font-extrabold text-fontDark1">Peter</span>
                  <span className="font-light text-fontDark1">Blackmore</span>
                </h1>
              </Link>
            </div>

            <div
              onClick={handleNav}
              className="bg-transparent z-10 m-2 flex justify-end xl:hidden"
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
              className=" fixed left-0 right-0 z-[500] flex h-[100%] w-[100%] items-center justify-center  border-b bg-hi-light2 text-dark3"
              initial={{ translateY: "-100%" }}
              animate={{ translateY: 0 }}
              exit={{ translateY: "-100%" }}
              transition={{ duration: 0.4 }}
            >
              <div
                onClick={handleNav}
                className="flex flex-col items-center space-y-8 text-xl font-bold uppercase md:text-xl lg:text-2xl"
              >
                {navigationLinks.map((link, index) => {
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
                        className={
                          activeSection === link.label ? " text-hi-light1" : ""
                        }
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
