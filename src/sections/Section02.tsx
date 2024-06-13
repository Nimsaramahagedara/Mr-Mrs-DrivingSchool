import React from 'react'
import logoBig from '../assets/logo-big-shade.png'
import VisionBox from '../components/VisionBox'
import Curve from '../components/Curve'
import Container from '../components/Container'
const Section02 = () => {
    return (
        <Container bgPrimary={false} childClassName='flex items-center justify-center'>
            <img src={logoBig} className='w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0' />
            <div className='flex md:flex-row flex-col space-y-5 md:space-y-0 w-full items-start justify-between px-10 md:px-0 xl:w-2/3 mx-auto z-10'>
                <VisionBox
                    title='Vision'
                    desc='Our vision is to create a world-class driving school that empowers individuals with the skills and knowledge to become safe, confident, and responsible drivers. We strive to be a leading force in promoting road safety, reducing accidents, and building a community of skilled drivers who contribute to a safer and more sustainable future on the roads.'
                    className='text-left md:w-1/3 xl:w-1/4'
                />
                <VisionBox
                    title='Mission'
                    desc='At Mr & Mrs Driving School our mission is to empower individuals with the knowledge, skills, and confidence to become safe, responsible, and proficient drivers. We are committed to providing high-quality, comprehensive, and accessible driver education programs that prioritize safety, professionalism, and excellence.'
                    className='md:text-center md:w-1/3 xl:w-1/4'
                />
                <VisionBox
                    title='Vision'
                    desc='Safety First Empowering Education Personalized Approach Positive Learning Environment Customer Satisfaction Community Engagement Continuous Improvement'
                    className='md:text-right md:w-1/3 xl:w-1/4'
                />
            </div>
        </Container>
    )
}

export default Section02