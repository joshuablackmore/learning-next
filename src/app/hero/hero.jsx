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
    <div className='flex items-center flex-col h-screen bg-light1 box-border landscape:flex-row z-50 '>

        <div className='min-h-[395px] h-[50%] w-[100%] md:h-[60%] lg:h-[90%] xl:h-[100%] max-w-[1180px] flex items-center  '>
            {imageLoaded && (
            <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='flex justify-center h-full w-full bg-cover'
            >
                <img src={imageSrc} className='flex object-cover h-full landscape:h-[85%] '></img>
                </motion.div>
            )}
            </div>
            
        

            <div className='h-[50%] w-[100%] flex items-center landscape:h-[85%] landscape:self-start landscape:overflow-y-scroll '>
                {imageLoaded && (
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: 0.8, duration: 1.5 }}
                className=' h-full w-full flex items-start m-2 md:mx-2 xl:mx-20  '>
                <div className=' mt-6'>
                    <h1 className=' m-2 text-2xl'>I paint and draw things</h1>
                    <p className=' pt-6 py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iure quae minus! Corporis est enim nulla? Totam, labore ipsam! Corporis est ullam facere veritatis sit perspiciatis nulla ea earum hic?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cupiditate quos voluptas hic, beatae saepe voluptate rerum voluptates eveniet asperiores eos enim perspiciatis in animi velit esse, exercitationem ut eius.</p>
                </div>
                
                
                </motion.div>
            )}
            </div>
                
            
    </div> 

        
        
       
        
    
  )
}

export default Hero