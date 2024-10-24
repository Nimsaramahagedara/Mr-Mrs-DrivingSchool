import React from 'react'
import cross from '../assets/cross.png'
import redCross from '../assets/red-cross.png'
import whiteCross from '../assets/white-cross.png'
import {motion} from 'framer-motion'
type Props = {
    className: string
}

function ThreeCross({ className }: Props) {
    return (
        <div className={`absolute w-6 gap-3 flex flex-col xl:w-8 z-10 ${className}`}>
            <motion.div
                animate={{
                    rotate: [0, -180, 0, 180, 0],  // Rotate left, then back to center, then rotate right
                }}
                transition={{
                    duration: 4,  // Time for a full cycle (left to right)
                    ease: "easeInOut",
                    repeat: Infinity,  // Repeat indefinitely
                    repeatType: "mirror"  // Alternate between directions
                }}
            >
                <img src={whiteCross} alt="white-cross" className='w-full h-full object-contain' />
            </motion.div>
            <motion.div
                animate={{
                    rotate: [0, -180, 0, 180, 0],
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror"
                }}
            >
                <img src={redCross} alt="red-cross" className='w-full h-full object-contain' />
            </motion.div>
            <motion.div
                animate={{
                    rotate: [0, -180, 0, 180, 0],
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror"
                }}
            >
                <img src={whiteCross} alt="white-cross" className='w-full h-full object-contain' />
            </motion.div>
        </div>
    )
}

export default ThreeCross
