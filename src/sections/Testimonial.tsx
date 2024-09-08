
import Container from '../components/Container'
import testBg from '../assets/testimonialBackground.png'
import RotatingSquare from '../components/RotatingSquare'
import ThreeTriangle from '../components/ThreeTriangle'
import ProgressBar from '../components/ProgressBar'
import ReviewCard from '../components/ReviewCard'
import { Testimonials } from '../config/config'

const Testimonial = () => {
  return (
    <Container bgPrimary className='min-h-screen relative bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${testBg})` }}>
      <ThreeTriangle classNames='bottom-20 left-20' />
      <div id='testimonial' className='w-full min-h-screen  relative' >
        <div className='mt-20 mb-10 lg:w-2/3 px-10 lg:px-0 mx-auto' id='service'>
          <h2 className='text-xl lg:text-3xl mb-2 uppercase text-amber-400'>Testimonial</h2>
          <div className='w-1/2'>
            <ProgressBar />
          </div>

        </div>
        <div className='flex items-center justify-center gap-5 flex-wrap'>
          {
            Testimonials.map((item, key) => (
              <ReviewCard key={key} {...item} />
            ))
          }
        </div>
      </div>
      <RotatingSquare className='bottom-0 -left-20' />
    </Container>
  )
}
export default Testimonial