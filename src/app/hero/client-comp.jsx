'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'






const HeroClient = ({ heading, intro }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState('')
    const profPic = 'https://cdn.sanity.io/images/7gqekvwy/production/f2c223bda4880132ba053f98d50c5f98e8f06e95-1331x687.jpg?w=2000&fit=max&auto=format&dpr=2'


    useEffect(() => {
        const image = new Image();
        image.src = profPic;
        image.onload = () => {
            setImageSrc(image.src)
            setImageLoaded(true)
        };
        // console.log(image)
    }, []);

    
    
  return (
<>
    <div className='flex flex-col xl:flex-row h-screen m-auto pt-[46px] xl:pt-0 border-b'>
       
         
                {imageLoaded && (
                <motion.div
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex min-h-[395px] h-[50%] md:h-[60%] lg:h-[80%] xl:h-[100%] justify-center '
                >
                    <img src={imageSrc} alt='hero pic' className=' object-cover xl:object-left '></img>
                    </motion.div>
                )}
            
           
                    <div className='h-[50%] w-[100%] flex items-center   '>
                        {imageLoaded && (
                        <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 0.8, duration: 1.5 }}
                        className=' h-full w-full flex items-start m-2 md:mx-2 xl:mx-20  '>
                        <div className=' my-6'>
                            <h1 className=' m-2 text-2xl'>{heading}</h1>
                            <div className='pl-2 pt-8'><PortableText value={intro[0]} /></div>
                            
                        </div>
                        
                        
                        </motion.div>
                    )}
                    </div>
                      
              
    </div>

        
        
       
</>       
    
  )
}

export default HeroClient