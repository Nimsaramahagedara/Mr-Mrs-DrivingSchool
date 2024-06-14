import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
type Props = {
    onClick?: any,
    children: any
}
const Button: React.FC<Props> = ({ onClick, children }) => {
    return (
        <button className='bg-amber-400 px-4 py-3 rounded-full text-black hover:bg-amber-500 flex items-center justify-center gap-1 font-semibold text-nowrap' onClick={onClick}>
            {children}
            <CiCirclePlus size={32} color='#fff' />
        </button>)
}

export default Button