'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState('')


    useEffect(() => {
        const image = new Image();
        image.src = 'pete-cropped.jpg';
        image.onload = () => {
            setImageSrc(image.src)
            setImageLoaded(true)
        };
        console.log(image)
    }, []);

    
    
  return (
<>
    <div className='flex flex-col xl:flex-row h-screen m-auto pt-[46px] '>
       

            
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
                            <h1 className=' m-2 text-2xl'>I paint and draw things</h1>
                            <p className=' pt-6 py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iure quae minus! Corporis est enim nulla? Totam, labore ipsam! Corporis est ullam facere veritatis sit perspiciatis nulla ea earum hic?</p>
                            
                        </div>
                        
                        
                        </motion.div>
                    )}
                    </div>
                      
              
    </div>

        
        
       
</>       
    
  )
}

export default Hero