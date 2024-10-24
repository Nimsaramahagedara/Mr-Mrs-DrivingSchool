import React from 'react'
import logoBig from '../assets/logo-big-shade.png'
import VisionBox from '../components/VisionBox'
import Curve from '../components/Curve'
import Container from '../components/Container'
import { VISION_MISSION } from '../config/config'
const VisionSection = () => {
    return (
        <Container bgPrimary={false} childClassName='flex items-center justify-center'>
            <img src={logoBig} className='w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0' />
            <div className='flex md:flex-row flex-col space-y-5 md:space-y-0 w-full items-start justify-between px-5 lg:px-10 md:px-0 xl:w-2/3 mx-auto z-10 max-w-5xl'>
                <VisionBox
                    title='Vision'
                    desc={VISION_MISSION.VISION}
                    className='text-left md:w-1/3 xl:w-1/4'
                />
                <VisionBox
                    title='Mission'
                    desc={VISION_MISSION.MISSION}
                    className='md:text-center md:w-1/3 xl:w-1/4'
                />
                <VisionBox
                    title='Vision'
                    desc={VISION_MISSION.OTHER}
                    className='md:text-right md:w-1/3 xl:w-1/4'
                />
            </div>
        </Container>
    )
}

export default VisionSection