import React from 'react'
import Container from '../components/Container'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import YoutubeVideo from '../components/YoutubeVideo'
import Slider from '../components/Slider'
import noTurnImg from '../assets/no-u-turn-sign.png'
import roadSign from '../assets/road-sign.png'
const VideoSection = () => {
  return (
    <Container bgPrimary={false} childClassName='flex items-center justify-center w-full lg:flex-row flex-col'>
      <div className='w-full px-5 lg:px-0 lg:w-2/3 mx-auto flex flex-col-reverse py-10 lg:py-0 lg:flex-row items-center justify-between'>
        <div className='w-full lg:w-2/6 space-y-5 lg:px-5'>
          <h4 className='text-amber-400 text-xl md:text-4xl font-semibold'>Free Tutorials</h4>
          <ProgressBar />
          <h6>“Lorem ipsum Sunt cupidatat reprehenderit cillum reprehenderit incididunts”</h6>

          <p className=' text-sm font-light tracking-widest'>Founded in September of 2022, Mr & Mrs Driving School is a reputable and registered business operating in the driving school industry. Approved by the Department of Motor Traffic, we are dedicated to providing comprehensive and high-quality driving education to aspiring drivers.</p>

          <h6 className='text-lg md:text-xl font-semibold'><span className='bg-amber-400'></span>Lorem ipsum</h6>
          <span className='text-gray-500'>SEO & Founder</span>
          <Button>Load More</Button>
        </div>
        <div className='w-full lg:w-3/6 space-y-5 px-5'>
          {/* <YoutubeVideo link='https://youtu.be/Cu5hhxP_prE?si=q2z-Jfnaa2UIVte3'/> */}
          <Slider/>
        </div>
      </div>
    <img src={roadSign} className='absolute w-1/3 top-0 left-0 z-0' />
    <img src={noTurnImg} className='absolute w-20 lg:w-32 top-0 right-0 lg:right-20 z-0' />
    </Container>
  )
}

export default VideoSection