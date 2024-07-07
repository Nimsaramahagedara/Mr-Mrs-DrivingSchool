import React from 'react'
import Container from '../components/Container'
import logoBig from '../assets/logo-big-shade.png'
import ServiceBox from '../components/ServiceBox'
import img1 from '../assets/Services/1.png';
import img2 from '../assets/Services/2.png';
import img3 from '../assets/Services/3.png';
import img4 from '../assets/Services/4.png';
import img5 from '../assets/Services/5.png';
import img6 from '../assets/Services/6.png';
import img7 from '../assets/Services/7.png';
import img8 from '../assets/Services/8.png';
import img9 from '../assets/Services/9.png';
import img10 from '../assets/Services/10.png';
import img11 from '../assets/Services/11.png';
import img12 from '../assets/Services/12.png';
import ProgressBar from '../components/ProgressBar';
const Services = () => {
  const services = [
    {
      title: 'Comprehensive Driving ',
      titlePart2: 'Training Services',
      desc: 'We offer professional Auto car and Manual van training, as well as Three-Wheeler and Scooter motorbike training, available for both individuals and groups. Our expert instructors will guide you through the process of obtaining your driving license with confidence.',
      img: img1
    },
    {
      title: 'Theory and Practical ',
      titlePart2: 'Knowledge',
      desc: 'Our training covers all the theoretical knowledge required for safe driving. We ensure that our students understand the rules of the road, traffic regulations, and essential safety practices before they start driving on the road.',
      img: img2
    },
    {
      title: 'Driving License ',
      titlePart2: 'Exam Preparation',
      desc: 'We help students prepare for their driving license exams by focusing on past papers and model papers. Our practice sessions will boost your confidence and ensure a higher chance of success.',
      img: img3
    },
    {
      title: 'Refresher Training ',
      titlePart2: 'for Licensed Drivers',
      desc: 'For those who already have a driving license but need to improve their skills, we offer tailored training programs to enhance your driving abilities and confidence on the road.',
      img: img4
    },
    {
      title: 'Convenience ',
      titlePart2: 'at Your Doorstep',
      desc: 'Enjoy the convenience of onpremises training at your office or home. Our instructors will come to you, saving you time and effort.',
      img: img5
    },
    {
      title: 'Tailor-made ',
      titlePart2: 'Corporate Packages',
      desc: 'We offer special packages for corporate clients, customized to match their specific needs. Whether its for employee training or fleet drivers, we have you covered.',
      img: img6
    },
    {
      title: 'Flexible Learning ',
      titlePart2: 'Hours',
      desc: 'We understand your busy schedule. Therefore, we offer flexible learning hours for both theory and practical sessions, allowing you to learn at your own pace.',
      img: img7
    },
    {
      title: 'Essential Mechanical ',
      titlePart2: 'Knowledge',
      desc: 'Alongside driving skills, we provide essential mechanical knowledge to ensure that you can handle minor vehicle issues confidently during your journeys.',
      img: img8
    },
    {
      title: 'Step-by-Step ',
      titlePart2: 'Course Structure',
      desc: 'Our training is designed to be progressive and easy to follow. We ensure that you learn and master each aspect of driving step-by-step to become a skilled and responsible driver.',
      img: img9
    },
    {
      title: 'Friendly and Supportive ',
      titlePart2: 'Service',
      desc: 'Our team of instructors is friendly, patient, and dedicated to providing the best learning experience. We create a comfortable environment to make your learning journey enjoyable.',
      img: img10
    },
    {
      title: 'Affordable ',
      titlePart2: 'Pricing',
      desc: 'We believe in providing high-quality training at affordable charges. Our competitive pricing ensures that everyone can access our top-notch driving instruction.',
      img: img11
    },
    {
      title: 'Workshops for Government and ',
      titlePart2: 'Private Organizations',
      desc: 'We conduct workshops focusing on essential mechanical knowledge and road rules and regulations for both government and private sector organizations. These workshops promote road safety and responsible driving practices among employees.',
      img: img12
    }
  ]
  return (
    <Container bgPrimary={false} childClassName=''>
      <div className='mt-20 mb-10 lg:w-2/3 px-10 lg:px-0 mx-auto'>
        <h2 className='text-xl lg:text-3xl mb-2 uppercase text-amber-400'>Services</h2>
        <div className='w-1/2'>
        <ProgressBar />
        </div>

      </div>

      <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2c w-full px-5 lg:px-0 lg:w-5/6 mx-auto gap-5 mb-10 lg:mb-20 z-10 relative'>
        {
          services.map((s, idx) => (
            <ServiceBox p={s} index={idx + 1} />
          ))
        }

      </div>
      <img src={logoBig} className='w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0' />
    </Container>
  )
}

export default Services