import React from 'react'
import squareTop from '../assets/square.png'
import { motion } from 'framer-motion'
type Props = {
  className:string
}

function RotatingSquare({className}: Props) {
  return (
    <motion.div className={`absolute w-32 xl:w-60 aspect-square ${className}`} animate={
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