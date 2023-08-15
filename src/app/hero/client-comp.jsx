"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import Image from "next/image";


const HeroClient = ({ heading, intro }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const profPic =
    "https://cdn.sanity.io/images/7gqekvwy/production/f2c223bda4880132ba053f98d50c5f98e8f06e95-1331x687.jpg?w=2000&fit=max&auto=format&dpr=2";


  return (
    <div className="h-screen overflow-auto">
        <div className="relative border-b h-[60%] md:h-[60%] lg:h-[70%] xl:h-[100%]">
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
        </div>
         
        <div className=" flex flex-col m-auto min-h-[375px] h-[40%]">
          {imageLoaded &&  
          <motion.div 
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col px-6 md: m-auto gap-12">
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
