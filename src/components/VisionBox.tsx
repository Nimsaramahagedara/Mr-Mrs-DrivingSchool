import React from 'react'
import { motion } from 'framer-motion'
type Props = {
  title: string
  desc: string,
  className: string
}

const VisionBox: React.FC<Props> = ({ title, desc, className }) => {
  return (
    <motion.div
      whileInView={{ rotateX: 0, opacity:1 }}
      initial={{rotateX:90, opacity:0}}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ perspective: 1000 }} // Add perspective to the parent for 3D effect
      className={`px-4 py-4 lg:p-5 space-y-5 hover:border-gray-100 hover:bg-white transition-all hover:shadow-md border-transparent border cursor-pointer rounded-xl ${className}`}>
      <h2 className='text-amber-500 font-semibold text-xl'>{title}</h2>
      <p className='text-xs lg:text-sm'>{desc}</p>
    </motion.div>
  )
}

export default VisionBox