import React from 'react'
import Curve from './Curve'

type Props = {
  className?: string
  bgPrimary: boolean
  children?: React.ReactNode
  childClassName?:string
}
const Container: React.FC<Props> = ({ className, bgPrimary = true, children, childClassName }) => {
  return (
    <section className={`min-h-screen relative ${bgPrimary ? 'bg-[#050A1E] rounded-br-[50px] md:rounded-br-[25%] rounded-tl-[50px] md:rounded-tl-[15vw]' : 'bg-[#050A1E]'}  overflow-hidden ${className}`}>
      {
        !bgPrimary ? <div className={`w-full min-h-screen bg-white rounded-br-[50px] md:rounded-br-[25%] rounded-tl-[50px] md:rounded-tl-[15vw] overflow-hidden ${childClassName}`}>
          {children}
        </div> :
          children
      }


    </section>
  )
}

export default Container