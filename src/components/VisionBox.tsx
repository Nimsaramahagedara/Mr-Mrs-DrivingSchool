import React from 'react'

type Props = {
    title: string
    desc: string,
    className:string
}

const VisionBox : React.FC<Props> = ({title, desc, className}) => {
  return (
    <div className={`p-5 space-y-5 hover:border-gray-100 hover:bg-white transition-all hover:shadow-md border-transparent border cursor-pointer rounded-xl ${className}`}>
        <h2 className='text-amber-500 font-semibold text-xl'>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default VisionBox