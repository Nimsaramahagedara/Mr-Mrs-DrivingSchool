import React from 'react'

type Props = {
    className: string,
    bgPrimary: boolean
}
const Curve: React.FC<Props> = ({ className, bgPrimary }) => {
    return (
        <div className={` ${className} ${bgPrimary ? 'bg-[#050A1E]' : 'bg-white'}`}>
            <div className='relative'>
                <div className={`w-full ${bgPrimary ? 'bg-white' : 'bg-[#050A1E]'} aspect-square rounded-tl-full`}>

                </div>
            </div>
        </div>
    )
}

export default Curve