import shapeTop from '../assets/shape-0.png'
import squareTop from '../assets/square.png'
import cross from '../assets/cross.png'
import StatBar from './StatBar'
const Section01 = () => {
  return (
    <section className='min-h-screen relative bg-[#050A1E] rounded-br-[30%]'>
      <div className='absolute top-0 left-0 w-32 xl:w-60 aspect-square'>
        <img src={shapeTop} alt="top" className='w-full h-full object-cover' />
      </div>
      <div className='absolute top-0 right-0 w-32 xl:w-60 aspect-square'>
        <img src={squareTop} alt="top" className='w-full h-full object-cover' />
      </div>
      <div className='absolute bottom-20 left-5 w-8 xl:w-10'>
        <img src={cross} alt="top" className='w-full h-full object-contain' />
      </div>
    <div className='flex items-center justify-center'>

    </div>

      <StatBar />
    </section>
  )
}

export default Section01