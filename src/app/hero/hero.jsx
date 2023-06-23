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
    <div className=' bg-light1 box-border flex flex-col h-screen sm:items-center'>
            {imageLoaded && (
            <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=' left-11 border border-dark3 hero-img flex h-3/4  w-[100%] bg-cover bg-no-repeat md:h-[80%] max-w-[1480px] max-h-[900px] '
            >
                <img
            src={imageSrc}
            alt='Hero Image'
            style={{ display: 'none' }}
            
          />
                </motion.div>
            )}
        
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1.5 }}
            className='flex flex-col justify-start pt-6 m-4 md:m-10 xl:mx-40'>

            <h1 className=' text-2xl font-extrabold text-dark3'>I paint and draw things</h1>
            <p className='text-dark2' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iure quae minus! Corporis est enim nulla? Totam, labore ipsam! Corporis est ullam facere veritatis sit perspiciatis nulla ea earum hic?</p>
        </motion.div>
       </div>
        

        
        
       </>
        
    
  )
}

export default Hero