import React from 'react'
import squareTop from '../assets/square.png'
import { motion } from 'framer-motion'
type Props = {}

function RotatingSquare({}: Props) {
  return (
    <motion.div className='absolute md:-top-20 right-0 w-32 xl:w-60 aspect-square' animate={
        {
          rotateZ: [0, 360],
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
          },
        }
      }>
        <img src={squareTop} alt="top" className='w-full h-full object-cover' />
      </motion.div>
  )
}

export default RotatingSquare