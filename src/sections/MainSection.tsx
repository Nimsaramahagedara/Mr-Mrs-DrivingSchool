import shapeTop from '../assets/shape-0.png'
import squareTop from '../assets/square.png'
import cross from '../assets/cross.png'
import StatBar from '../components/StatBar'
import mainImage from '../assets/main-image.png'
import { CiCirclePlus } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import triangle1 from '../assets/triangle-1.png'
import triangle2 from '../assets/triangle-2.png'
import { motion } from 'framer-motion'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import ThreeCross from '../components/ThreeCross'
import ThreeTriangle from '../components/ThreeTriangle'
import RotatingSquare from '../components/RotatingSquare'
const MainSection = () => {

  const moveAnimation = {
    x: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 2,
    },
  };

  return (
    <section id='home' className='min-h-screen relative bg-[#050A1E] rounded-br-[50px] md:rounded-br-[300px] overflow-hidden'>
      <div className='absolute top-0 left-0 w-32 xl:w-60 aspect-square'>
        <img src={shapeTop} alt="top" className='w-full h-full object-cover' />
      </div>
      <RotatingSquare className='md:-top-20 right-0'/>
      <ThreeCross className='bottom-20 left-5'/>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-center text-white w-full px-5 lg:px-0 lg:w-2/3 mx-auto pt-10 lg:pt-0 min-h-screen'>
        <div className='w-full lg:w-1/2 space-y-5'>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-6 before:h-0.5 before:bg-amber-500">Work With Consen
          </motion.p>
          <motion.h1 className='text-4xl lg:text-6xl '
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}>
            Welcome to <span className='text-amber-400'>Mr & Mrs </span> Driving School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            Lorem ipsum Sunt cupidatat reprehenderit cillum reprehenderit incididunt
            consequat aute et proident tempor occaecat.
          </motion.p>
          <ProgressBar />
          <div className='flex flex-col lg:flex-row items-start gap-5 lg:gap-10'>
            <Button>
              Work Together
            </Button>
            <Link to={''} className='flex items-center justify-start gap-3 text-red-500 hover:text-red-300'>
              <div className='p-4 border border-red-500 hover:border-red-300 rounded-full'>
                <FaPhoneAlt size={22} color='' />
              </div>
              <div>
                <h6 className='text-sm text-gray-500'>Call Everyday</h6>
                <h4 className='text-xl text-white'>0775 737 727</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className='w-full lg:w-1/2 relative'>
          <motion.img src={mainImage} className='w-full h-full object-contain'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
          </motion.img>
          <ThreeTriangle classNames='top-0 right-0' />
        </div>
      </div>


      <StatBar />
    </section>
  )
}

export default MainSection