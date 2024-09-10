
import Container from '../components/Container'
import testBg from '../assets/testimonialBackground.png'
import RotatingSquare from '../components/RotatingSquare'
import ThreeTriangle from '../components/ThreeTriangle'
import ProgressBar from '../components/ProgressBar'
import ReviewCard from '../components/ReviewCard'
import { Testimonials } from '../config/config'
import { Carousel } from 'react-responsive-carousel'

const Testimonial = () => {
  const TestimonialCount = Testimonials.length
  const testPerPage = 4
  const pageCount = Math.ceil(TestimonialCount / testPerPage)

  return (
    <Container bgPrimary className='min-h-screen relative bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${testBg})` }} id='testimonial'>
      <ThreeTriangle classNames='bottom-20 left-20' />
      <div id='testimonial' className='w-full min-h-screen  relative' >
        <div className='mt-20 mb-10 lg:w-3/4 px-10 lg:px-0 mx-auto' id='service'>
          <h2 className='text-xl lg:text-3xl mb-2 uppercase text-amber-400'>Testimonial</h2>
          <div className='w-1/2'>
            <ProgressBar />
          </div>

        </div>
        <Carousel autoPlay swipeable={false} showArrows={false} infiniteLoop className='px-5' showThumbs={false}>
          {
            new Array(pageCount).fill(0).map((_, i) => (
              <div className='flex items-start justify-center gap-5 flex-wrap min-h-[70vh] mb-20 lg:mb-5 lg:my-5' key={i}>
                {
                  new Array(testPerPage).fill(0).map((_, j) => {
                    if(i * testPerPage + j >= TestimonialCount) return
                    return <ReviewCard key={j} {...Testimonials[i * testPerPage + j]} className={`${j < 2 ? 'lg:-translate-x-1/3 lg:mt-8' : 'lg:translate-x-1/3 lg:-mt-8' }`} />
                  })
                }
              </div>
            ))
          }
        </Carousel>
      </div>
      <RotatingSquare className='bottom-0 -left-20' />
    </Container>
  )
}
export default Testimonial