import React from 'react'
import Container from '../components/Container'
import aboutUsImage from '../assets/about-us-banner.png'
import shape1 from '../assets/shape-1.png'
import shape2 from '../assets/shape-2.png'
import roadSign from '../assets/circle-sign.png'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import triangle1 from '../assets/triangle-1.png'
import triangle2 from '../assets/triangle-2.png'
import { motion } from 'framer-motion'
import Counter from '../components/Counter'
import ThreeTriangle from '../components/ThreeTriangle'
const AboutUsSection = () => {
  return (
    <Container bgPrimary className='flex items-center flex-col justify-center overflow-visible'>
      <div className='w-40 absolute -top-32 right-10 z-0'>
        <motion.img
          animate={{ rotateZ: 360, x: 0 }} transition={{ duration: 30 }} src={shape1} className='w-full h-full object-contain' />
      </div>
      <div className='flex items-start justify-center flex-col lg:flex-row w-full lg:w-5/6 mx-auto gap-20 lg:gap-5 mt-10 lg:mt-0'>
        <div className='px-5 w-3/4 mx-auto mt-10 md:mt-0 lg:w-2/6 relative'>
          <motion.img initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }} src={aboutUsImage} className='w-full h-full object-contain z-10 relative' />
          <div className='w-20 md:w-40 absolute -bottom-10 md:-bottom-20 -left-10 z-0'>
            <motion.img
              animate={{ rotateZ: 360, x: 0 }} transition={{ duration: 30 }} src={shape2} className='w-full h-full object-contain' />
          </div>
        </div>
        <div className='w-full lg:w-3/6 space-y-5 px-5'>
          <h4 className='text-amber-400 text-xl md:text-4xl font-semibold'>ABOUT US</h4>

          <h6 className='text-white text-lg md:text-xl font-semibold'>We are Since <span className='text-amber-400'>2022 to Present </span>in Kekanadura, Matara.</h6>
          <ProgressBar />
          <p className='text-white text-sm font-light tracking-widest'>Founded in September of 2022, Mr & Mrs Driving School is a reputable and registered business operating in the driving school industry. Approved by the Department of Motor Traffic, we are dedicated to providing comprehensive and high-quality driving education to aspiring drivers.</p>
          <p className='text-white text-sm font-light tracking-widest'>Our roots in the driving school industry date back to 1972 when Mr. H.K.Somapala, the grandfather of the current owners of Mr & Mrs Driving School, established the first driving school in our family. With a rich heritage and decades of experience, we have nurtured a deep understanding of driving education and safety.</p>
          <p className='text-white text-sm font-light tracking-widest'>At Mr & Mrs Driving School, we take immense pride in upholding the values and principles set by Mr.Somapala. Our commitment to excellence and personalized training has earned us a stellar reputation in the industry. We strive to create a safe and supportive environment for learners, empowering them with the skills and knowledge required to become confident and responsible drivers.</p>
          <Button>Read More</Button>
        </div>
      </div>
      <div className='flex items-center justify-center gap-5 mx-auto my-8 lg:w-2/3 w-full'>
        <div className='bg-white p-[1px] w-full'></div>
        <p className='w-max md:text-nowrap text-center text-white text-lg md:text-xl'>Consent Finished this Achievement in 3 Years</p>
        <div className='bg-white p-[1px] w-full'></div>
      </div>
      <div className='flex items-center justify-between w-full px-5 lg:px-0 lg:w-2/3 mb-10 lg:mb-0'>
        <div className='w-max'>
          <Counter target={1372} />
          <p className='text-gray-400 text-xs lg:text-xl'>Training Candidates</p>
        </div>
        <div className='w-max'>
          <div className='flex items-center justify-start gap-2'>
            <Counter target={23} />
            <span className='text-amber-400 text-2xl lg:text-6xl font-bold'>+</span>
          </div>
          <p className='text-gray-400 text-xs lg:text-xl'>Years Experience</p>
        </div>
        <div className='w-max'>
          <div className='flex items-center justify-start gap-2'>
            <Counter target={38} />
            <span className='text-amber-400 text-2xl lg:text-6xl font-bold'>+</span>
          </div>

          <p className='text-gray-400 text-xs lg:text-xl'>Expert Trainers</p>
        </div>
        <div className='w-max'>
          <Counter target={1372} />
          <p className='text-gray-400 text-xs lg:text-xl'>Satisfaction Rate</p>
        </div>
      </div>


      <div className='w-1/4 absolute top-1/2 -translate-y-1/2 right-0 z-0'>
        <img src={roadSign} className='w-full h-full object-contain' />
      </div>


      {/* <div className='flex  items-center justify-center gap-3 absolute  w-max'>
        <motion.img src={triangle1} className='w-5 lg:w-7' animate={
          {
            x: [0, -10, 0],
            transition: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2,
            },
          }
        } />
        <motion.img src={triangle2} className='w-5 lg:w-7' animate={
          {
            x: [0, -10, 0],
            transition: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2,
            },
          }
        } />
        <motion.img src={triangle2} className='w-5 lg:w-7' animate={
          {
            x: [0, -5, 0],
            transition: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2,
            },
          }
        } />
      </div> */}
        <ThreeTriangle classNames='flex-col bottom-24 right-8 md:right-24'/>
    </Container>
  )
}

export default AboutUsSection