import React from 'react'
import cross from '../assets/cross.png'
type Props = {}

function ThreeCross({ }: Props) {
    return (
        <div className='absolute bottom-20 left-5 w-6 xl:w-8 z-10'>
            <img src={cross} alt="top" className='w-full h-full object-contain' />
        </div>
    )
}

export default ThreeCross