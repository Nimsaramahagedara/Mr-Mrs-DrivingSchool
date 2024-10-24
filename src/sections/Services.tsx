import React from 'react'
import Container from '../components/Container'
import logoBig from '../assets/logo-big-shade.png'
import ServiceBox from '../components/ServiceBox'

import ProgressBar from '../components/ProgressBar';
import { SERVICES } from '../config/config';
import SwiperSlider from '../components/SwiperSlider';
const Services = () => {

  return (
    <Container bgPrimary={false} childClassName='min-h-fit pb-10 lg:min-h-screen' className='min-h-fit lg:min-h-screen' id='service'>
      <div className='mt-20 mb-10 lg:w-3/4 px-10 lg:px-0 mx-auto'>
        <h2 className='text-xl lg:text-3xl mb-2 uppercase text-amber-400'>Services</h2>
        <div className='w-1/2'>
          <ProgressBar />
        </div>

      </div>

      <div className='hidden lg:grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2c w-full px-5 lg:px-0 lg:w-5/6 mx-auto gap-5 mb-10 lg:mb-20 z-10 relative max-w-5xl'>
        {
          SERVICES.map((s, idx) => (
            <ServiceBox p={s} index={idx + 1} key={idx} />
          ))
        }

      </div>
      <div className='px-3 lg:hidden'>
        <SwiperSlider Slides={SERVICES.map((s, idx) => (
          <ServiceBox p={s} index={idx + 1} key={idx} />
        ))} />
      </div>
      <img src={logoBig} className='w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0' />
    </Container>
  )
}

export default Services