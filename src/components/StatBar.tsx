import React from 'react'
import { FaShuttleVan } from "react-icons/fa";
import { MdTwoWheeler } from "react-icons/md";
import wheel from '../assets/wheel.png'
const StatBar = () => {
  return (
    <div className='w-full flex flex-col xl:flex-row items-center justify-center gap-10 bg-black p-5'>
      <h2 className='text-white xl:text-lg text-sm'>Our Traning Types</h2>
      <div className='flex items-center justify-center w-max gap-2 cursor-pointer'>
        <FaShuttleVan className='text-amber-500 hover:text-amber-600 text-xl xl:text-3xl'/>
        <span className='text-white xl:text-lg text-sm'>VAN / CAR</span>
      </div>
      <div className='flex items-center justify-center w-max gap-2 cursor-pointer'>
        <img src={wheel} className='w-5 xl:w-8 hover:brightness-75'/>
        <span className='text-white xl:text-lg text-sm'>THREE WHEELER</span>
      </div>
      <div className='flex items-center justify-center w-max gap-2 cursor-pointer'>
      <MdTwoWheeler className='text-amber-500 hover:text-amber-600 text-xl xl:text-3xl'/>
        <span className='text-white xl:text-lg text-sm'>MOTORCYCLE</span>
      </div>
    </div>
  )
}

export default StatBar