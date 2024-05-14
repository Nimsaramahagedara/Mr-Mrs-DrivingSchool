import shapeTop from '../assets/shape-0.png'
import squareTop from '../assets/square.png'
import cross from '../assets/cross.png'
import StatBar from './StatBar'
import mainImage from '../assets/main-image.png'
import { CiCirclePlus } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import triangle1 from '../assets/triangle-1.png'
import triangle2 from '../assets/triangle-2.png'
const Section01 = () => {
  return (
    <section className='min-h-screen relative bg-[#050A1E] rounded-br-[10%] md:rounded-br-[30%]'>
      <div className='absolute top-0 left-0 w-32 xl:w-60 aspect-square'>
        <img src={shapeTop} alt="top" className='w-full h-full object-cover' />
      </div>
      <div className='absolute top-0 right-0 w-32 xl:w-60 aspect-square'>
        <img src={squareTop} alt="top" className='w-full h-full object-cover' />
      </div>
      <div className='absolute bottom-20 left-5 w-8 xl:w-10'>
        <img src={cross} alt="top" className='w-full h-full object-contain' />
      </div>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-center text-white w-full px-10 lg:px-0 lg:w-2/3 mx-auto pt-10 lg:pt-0 min-h-screen'>
        <div className='w-full lg:w-1/2 space-y-5'>
          <p>Work With Consen</p>
          <h1 className='text-4xl lg:text-6xl '>Welcome to <span className='text-amber-400'>Mr & Mrs </span> Driving School  </h1>
          <p>Lorem ipsum Sunt cupidatat reprehenderit cillum reprehenderit incididunt
            consequat aute et proident tempor occaecat.</p>
          <div className='w-full bg-amber-200 rounded-full overflow-hidden'>
              <div className='p-[2px] bg-amber-400 w-1/3'>
              </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start gap-5 lg:gap-10'>
                <button className='bg-amber-400 px-4 py-3 rounded-full text-black hover:bg-amber-500 flex items-center justify-center gap-1 font-semibold text-nowrap'>Work Together <CiCirclePlus size={32} color='#fff'/></button>
                <Link to={''} className='flex items-center justify-start gap-3 text-red-500 hover:text-red-300'>
                  <div className='p-4 border border-red-500 hover:border-red-300 rounded-full'>
                  <FaPhoneAlt size={22} color=''/>
                  </div>
                    <div>
                      <h6 className='text-sm text-gray-500'>Call Everyday</h6>
                      <h4 className='text-xl text-white'>0775 737 727</h4>
                    </div>
                </Link>
          </div>
        </div>
        <div className='w-full lg:w-1/2 relative'>
          <img src={mainImage} className='w-full h-full object-contain' />
          <div className='flex items-center justify-center gap-3 absolute top-0 right-0 w-max'>
              <img src={triangle1} className='w-5 lg:w-8'/>
              <img src={triangle2} className='w-5 lg:w-8'/>
              <img src={triangle2} className='w-5 lg:w-8'/>
        </div>
        </div>
      </div>


      <StatBar />
    </section>
  )
}

export default Section01