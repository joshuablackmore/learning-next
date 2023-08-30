"use client";
import React, { use, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import Image from "next/image";

interface heroProps {
  heading : string,
  intro: PortableTextBlock[]
}

const HeroClient: React.FC<heroProps> = ({ heading, intro }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [bioSlider, setBioSlider] = useState(false);

  const handleBioSlider = () => {
    setBioSlider(!bioSlider)
  }
  
  const profPic =
    "https://cdn.sanity.io/images/7gqekvwy/production/f2c223bda4880132ba053f98d50c5f98e8f06e95-1331x687.jpg?w=2000&fit=max&auto=format&dpr=2";


  return (
    <div className="h-screen">
        <div className=" min-h-[275px] relative border-b h-[50%] md:h-[60%] lg:h-[70%] xl:h-[100%]">
            <Image
            alt="hero image"
            src={profPic}
            fill={true}
            objectFit="cover"
            className="object-left opacity-0 duration-700"
            onLoadingComplete={(image) => {
                image.classList.remove('opacity-0')
                setImageLoaded(true)
            }}
            />

        
            {imageLoaded && (
            <motion.div 
            initial={{y:-50}}
            animate={{y:0}}
            transition={{ duration: 1, delay: 1 }}
            className="absolute flex-col right-0 left-100 top-0 bottom-0 h-full w-[50%] items-end hidden 2xl:flex z-10 ">
              <button 
              className=" bg-hi-light2 hover:bg-hi-light1 flex justify-end h-12 items-center text-light2 px-12 text-2xl z-50 rounded-bl-lg"
              onClick={handleBioSlider}
              >
              click for bio</button>
              </motion.div>)}
            

          <AnimatePresence>
            {bioSlider && (
            <motion.div 
            initial={{ translateX: "100%" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: "100%" }}
            transition={{ duration: 1 }}
            
            className="hidden 2xl:flex flex-col justify-center items-center space-y-36 absolute bg-dark1/70 right-0 left-100 top-0 bottom-0 w-[50%] text-2xl text-light1">
              <h1 className="text-4xl">{heading}</h1>
              <div className=" mx-6">
              <PortableText value={intro} />
              </div>
              </motion.div> 
              )} 
          </AnimatePresence>
        </div>
        
         
        <div className=" flex flex-col min-h-[375px] h-[50%] 2xl:hidden">
          {imageLoaded &&  
          <motion.div 
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col px-6 md: m-auto gap-12 h-[75%]">
            <h1 className="text-4xl ">{heading}</h1>
            <div className="text-md sm:text-2xl">
            <PortableText value={intro} />
            </div>
            </motion.div> 
            }
        </div>
       
        </div>
  );
};

export default HeroClient;
