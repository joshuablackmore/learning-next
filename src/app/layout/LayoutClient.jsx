"use client"

import { motion } from "framer-motion";
import Image from "next/image"
import { useState } from "react";

export default function LayoutClient() {
    const [imageLoaded, setImageLoaded] = useState(false)
   const profPic =
    "https://cdn.sanity.io/images/7gqekvwy/production/f2c223bda4880132ba053f98d50c5f98e8f06e95-1331x687.jpg?w=2000&fit=max&auto=format&dpr=2";

   

    return (
        <div className="h-screen overflow-auto">
        <div className="relative border-b h-[60%] md:h-[60%] lg:h-[70%] xl:h-[100%]">
            <Image
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
         
        <div className=" flex flex-col m-auto min-h-[375px] h-[40%] bg-hi-light2">
          {imageLoaded &&  
          <motion.div 
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col px-6 md: m-auto border gap-12">
            <h1 className="text-4xl ">title</h1>
            <div className="text-md sm:text-2xl">
                <h2>I'm an artist based in Huntingdon, Cambridge.</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi, alias consectetur sunt cupiditate quibusdam deserunt, ab, id optio voluptates magni. Ab alias culpa ad error hic rem dolorem beatae!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor est fugit quidem at expedita ad atque ut, odit esse facere odio corrupti qui nobis dolores aliquid architecto modi iusto.</p>
            </div>
            </motion.div> 
            }
        </div>
       
        </div>
    )
}