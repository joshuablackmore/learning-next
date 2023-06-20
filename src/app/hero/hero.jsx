'use client'
import React from 'react'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div className='flex h-screen sm:h-[calc(100dvh_-_30px)] justify-center items-center'>
        <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='hero-img flex h-[60%] w-[100%] bg-cover bg-no-repeat sm:h-[80%] lg:h-[100%]'
        >
            
        </motion.div>
       
        
    </div>
  )
}

export default Hero