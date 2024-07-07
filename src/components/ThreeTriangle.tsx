import React from 'react'
import { motion } from 'framer-motion'
import triangle1 from '../assets/triangle-1.png'
import triangle2 from '../assets/triangle-2.png'
type Props = {
    classNames: string
}

function ThreeTriangle({ classNames}: Props) {
    return (
        <div className={`flex items-center justify-center gap-3 absolute w-max ${classNames}`}>
            <motion.img src={triangle1} className='w-5 lg:w-7' animate={
                {
                    x: [0, -10, 0],
                    transition: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 2,
                    },
                }
            } />
            <motion.img src={triangle2} className='w-5 lg:w-7' animate={
                {
                    x: [0, -10, 0],
                    transition: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 2,
                    },
                }
            } />
            <motion.img src={triangle2} className='w-5 lg:w-7' animate={
                {
                    x: [0, -5, 0],
                    transition: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 2,
                    },
                }
            } />
        </div>
    )
}

export default ThreeTriangle