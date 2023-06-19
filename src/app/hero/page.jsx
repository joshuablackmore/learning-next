'use client'
import React from 'react'
import {motion} from 'framer-motion'

const Hero = ( { text }) => {

    const words = text.split(" ")
    


  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: 
        { 
        type: "spring",
        bounce: 0.4,
        duration: 2.5 }}}

    className='flex items-center justify-center h-screen text-4xl font-bold '>
        {words.map((word, index) => <motion.span className=' mr-4' key={index}>{word}</motion.span >)}
    </motion.div>
  )
}

export default Hero