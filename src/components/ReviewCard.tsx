import React from 'react'
import { motion } from 'framer-motion'
export type TestimonialType = {
    title: string,
    name: string,
    occupation: string
    imgUrl: string
    className?: string
}

function ReviewCard(props: TestimonialType) {
    const { title, name, occupation, imgUrl, className } = props
    return (
        <motion.div 
        whileInView={{ rotateX: 0, opacity: 1 }}
        initial={{ rotateX: 90, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, border: '2px solid white' }}
        style={{ perspective: 1000 }}
        className={`flex items-start lg:items-stretch justify-center bg-white/50 lg:gap-4 max-w-[610px] px-4 lg:px-8 py-4 text-left ${className}`}>
            {/* Content */}
            <div className='lg:py-4 w-2/3 lg:w-1/2'>
                <h2 className='text-lg lg:text-2xl mb-5 text-left'>{title}</h2>
                <div className='flex items-center gap-10'>
                    <div className='w-5 h-5 bg-blue-900 relative aspect-square'>
                        <div className='bg-amber-600 absolute w-10 h-[2px] top-1/2 left-2'>

                        </div>
                    </div>
                    <div>
                        <h6 className='text-sm font-semibold'>{name}</h6>
                        <p className='text-xs text-nowrap'>{occupation}</p>
                    </div>
                </div>

            </div>
            {/* Image */}
            <div className='relative w-1/3 lg:w-1/2'>
                <div className='border-4 lg:border-8 border-amber-500 p-2 absolute top-0 left-0 w-full aspect-square' style={{ clipPath: 'inset(0 0 0 60px)' }}>

                </div>
                <div className='w-full aspect-square p-2 lg:p-4' >
                    <img src={imgUrl} className='w-full h-full object-contain' />
                </div>
            </div>

        </motion.div>
    )
}

export default ReviewCard