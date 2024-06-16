import React from 'react'
import img from '../assets/Services/1.png'
import numIcon from '../assets/Services/numShape.png'
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
        <div className='flex items-stretch justify-center gap-2 bg-[#FDF4E4] relative p-3'>
            <div className='flex items-start flex-col justify-start gap-2 w-7/12'>
                <h6 className='text-amber-400 text-lg lg:text-xl'>{p.title} <span>{p.titlePart2}</span></h6>

                <p className='text-xs'>{p.desc}</p>
            </div>
            <div className='w-5/12'>
                <img src={p.img} className='w-full h-full object-contain' />
            </div>
            <div className='w-8 h-8 absolute top-1 right-1 bg-cover bg-center px-4 py-2' style={{backgroundImage:`url(${numIcon})`}}>
                <span className=''>{index}</span>
            </div>

        </div>
    )
}
export default ServiceBox