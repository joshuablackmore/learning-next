"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'

type blogParams = {
  title : string,
  image : string,
  slug :  string,
  excerpt : string
}

const BlogClient : React.FC<blogParams> = ({ title, image, slug, excerpt }) => {
  return (
      <div>
      <motion.div 
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex rounded-xl justify-center items-center h-[250px] relative border shadow-lg shadow-dark3 hover:shadow-none overflow-hidden active:bg-hi-light1">
        <Image
          className="transition-opacity opacity-0 duration-[0.5s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          loading="lazy"
          src={image}
          alt={title}
          objectFit="cover"
          fill={true}
          
        />
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-dark3/75 hover:bg-dark3/0 transition-all duration-300'/>
      
      <div className="z-50 flex flex-col items-center text-light1 mt-4">
        <h1 className="text-xl font-bold mb-4">{title}</h1>
        <p>{excerpt}</p>
        <Link href={`blog/${slug}`} className="bg-hi-light1 z-50 hover:bg-hi-light2 active:bg-dark3 rounded-md p-1 mt-4">Read more...</Link>
      </div>
      
      </motion.div>

      
    </div>
  );
};

export default BlogClient;
