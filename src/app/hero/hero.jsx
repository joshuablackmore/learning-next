'use client'
import React from 'react'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div className='flex h-screen justify-center items-center border border-b-black'>
        <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='hero-img flex h-[60%] w-[100%] bg-cover bg-no-repeat md:h-[80%] max-w-[1480px] max-h-[900px] '
        >
            
        </motion.div>
       
        
    </div>
  )
}

export default Hero