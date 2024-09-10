import React from 'react'
import Curve from './Curve'

type Props = {
  className?: string
  bgPrimary: boolean
  children?: React.ReactNode
  childClassName?: string
  style?: React.CSSProperties
  id?: string
}
const Container: React.FC<Props> = ({ className, bgPrimary = true, children, childClassName, style, id }) => {
  return (
    <section id={id} className={`min-h-screen relative ${bgPrimary ? 'bg-[#050A1E] rounded-br-[50px] lg:rounded-br-[300px] rounded-tl-[50px] lg:rounded-tl-[15vw]' : 'bg-[#050A1E]'}  overflow-hidden ${className}`} style={bgPrimary ? style : undefined}>
      {
        !bgPrimary ? <div className={`w-full min-h-screen bg-white rounded-br-[50px] lg:rounded-br-[25%] rounded-tl-[50px] lg:rounded-tl-[15vw] overflow-hidden ${childClassName}`} style={!bgPrimary ? style : undefined}>
          {children}
        </div> :
          children
      }


    </section>
  )
}

export default Container