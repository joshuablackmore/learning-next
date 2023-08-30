"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { instaMedia } from "./page";


const ClientInsta:React.FC<instaMedia> = ({ media_url, media_type, id, caption }) => {

  
  return (
    <div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            key={id}
            className="flex flex-col justify-center items-center border-b sm:border-b-light1 m-2"
          >
            {media_type === 'IMAGE' ? (
            <>
              <Image
              loading="lazy"
              src={media_url}
              width="450"
              height="300"
              className="m-2 rounded-md"
              alt="insta feed"
            /> 
            <p className="mx-4 ">{caption}</p>
            </> 
            
            ): 
            <>
            <video 
            src={media_url}
            controls
            className="m-2 rounded-md"
            autoPlay
            muted
            playsInline
            
            >
            </video> 
            <p className="mx-4 ">{caption}</p>
            </>
            }
           
          </motion.div>
    
    </div>
  );
};

export default ClientInsta;
