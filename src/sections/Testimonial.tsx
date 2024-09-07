
import Container from '../components/Container'
import testBg from '../assets/testimonialBackground.png'
import RotatingSquare from '../components/RotatingSquare'
import ThreeTriangle from '../components/ThreeTriangle'

const Testimonial = () => {
  return (
   <Container bgPrimary className='min-h-screen'>
    <div id='testimonial' className='w-full h-screen bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: `url(${testBg})` }}>
    <ThreeTriangle classNames='bottom-20 left-20' />

    </div>
    <RotatingSquare className='bottom-0 -left-20' />
   </Container>
  )
}
export default Testimonial