import React from 'react'

export type TestimonialType = {
    title: string,
    name: string,
    occupation: string
    imgUrl: string
}

function ReviewCard(props: TestimonialType) {
    const { title, name, occupation, imgUrl } = props
    return (
        <div className='flex items-center justify-center gap-10 bg-white/50 max-w-[610px] p-10'>
            {/* Content */}
            <div>
                <h2 className='text-xl lg:text-2xl mb-5'>{title}</h2>
                <div className='flex items-center gap-10'>
                    <div className='w-5 h-5 bg-blue-900 relative'>
                        <div className='bg-amber-600 absolute w-10 h-[2px] top-1/2 left-2'>

                        </div>
                    </div>
                    <div>
                        <h6 className='text-sm font-semibold'>{name}</h6>
                        <p className='text-xs'>{occupation}</p>
                    </div>
                </div>

            </div>
            {/* Image */}
            <div>
                <img src={imgUrl} className='w-full h-full object-contain' />
            </div>
        </div>
    )
}

export default ReviewCard