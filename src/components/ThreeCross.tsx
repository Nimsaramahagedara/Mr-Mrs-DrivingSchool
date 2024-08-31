import React from 'react'
import cross from '../assets/cross.png'
type Props = {
    className:string
}

function ThreeCross({className }: Props) {
    return (
        <div className={`absolute w-6 xl:w-8 z-10 ${className}`}>
            <img src={cross} alt="top" className='w-full h-full object-contain' />
        </div>
    )
}

export default ThreeCross