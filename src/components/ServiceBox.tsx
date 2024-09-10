import React from 'react'
import img from '../assets/Services/1.png'
import numIcon from '../assets/Services/numShape.png'
import { motion } from 'framer-motion'
type Props = {
    title: string,
    titlePart2: string,
    desc: string,
    img: any,
}
type CompoType = {
    p: Props,
    index: number
}

const ServiceBox: React.FC<CompoType> = ({ p, index }) => {
    return (
        <motion.div className='flex items-stretch justify-center gap-2 bg-[#FDF4E4] relative p-3 transition-all cursor-pointer'
            whileInView={{ rotateX: 0, opacity: 1 }}
            initial={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, border:'2px solid white' }}
            style={{ perspective: 1000 }}
        >
            <div className='flex items-start flex-col justify-start gap-2 w-7/12'>
                <h6 className='text-amber-400 text-lg lg:text-xl'>{p.title} <span>{p.titlePart2}</span></h6>

                <p className='text-xs'>{p.desc}</p>
            </div>
            <div className='w-5/12'>
                <img src={p.img} className='w-full h-full object-contain' />
            </div>
            <div className='w-8 h-8 absolute top-1 right-1 bg-cover bg-center px-4 py-2' style={{ backgroundImage: `url(${numIcon})` }}>
                <span className=''>{index}</span>
            </div>

        </motion.div>
    )
}
export default ServiceBox