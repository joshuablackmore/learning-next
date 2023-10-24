"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../../../context/active-section-context";
import { HiDownload } from "react-icons/hi";

interface heroProps {
  heading: string;
  intro: PortableTextBlock[];
}

const HeroClient: React.FC<heroProps> = ({ heading, intro }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [bioSlider, setBioSlider] = useState(false);
  const profPic =
    "https://cdn.sanity.io/images/7gqekvwy/production/f2c223bda4880132ba053f98d50c5f98e8f06e95-1331x687.jpg?w=2000&fit=max&auto=format&dpr=2";

  /* active section */
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView]);

  return (
    <div ref={ref} className="h-screen">
      <div className=" relative h-[50%] min-h-[275px] border-b md:h-[60%] lg:h-[70%] xl:h-[100%] 2xl:h-[calc(100%-60px)] ">
        <Image
          alt="hero image"
          src={profPic}
          fill={true}
          objectFit="cover"
          className="object-left opacity-0 duration-700"
          onLoadingComplete={(image) => {
            image.classList.remove("opacity-0");
            setImageLoaded(true);
          }}
        />

        {imageLoaded && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="left-100 absolute bottom-0 right-0 top-0 z-10 hidden h-full w-[50%] flex-col items-end xl:flex "
          >
            <button
              className=" z-50 flex h-12 items-center justify-end rounded-bl-lg bg-hi-light2 px-12 text-2xl text-light2 hover:bg-hi-light1"
              onClick={() => setBioSlider(!bioSlider)}
            >
              click for bio
            </button>
          </motion.div>
        )}

        <AnimatePresence>
          {bioSlider && (
            <motion.div
              initial={{ translateX: "100%" }}
              animate={{ translateX: 0 }}
              exit={{ translateX: "100%" }}
              transition={{ duration: 0.8 }}
              className="left-100 absolute bottom-0 right-0 top-0 hidden w-[50%] flex-col justify-center gap-20 bg-dark1/70 text-2xl text-light1 xl:flex"
            >
              <h1 className="mx-6 text-4xl">{heading}</h1>
              <div className=" mx-6 w-[70%] leading-relaxed">
                <PortableText value={intro} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className=" flex h-[50%] min-h-[375px] flex-col xl:hidden">
        {imageLoaded && (
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="m-auto flex h-[75%] flex-col gap-12 px-6"
          >
            <h1 className="text-4xl ">{heading}</h1>
            <div className="text-md flex-1 sm:text-2xl">
              <PortableText value={intro} />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroClient;
