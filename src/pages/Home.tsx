import Container from '../components/Container'
import TopNav from '../components/TopNav'
import MainSection from '../sections/MainSection'
import VisionSection from '../sections/VisionSection'
import AboutUsSection from '../sections/AboutUsSection'
import VideoSection from '../sections/VideoSection'
import ContactUs from '../sections/ContactUs'
import Services from '../sections/Services'
import Blog from '../sections/Blog'
import Gallery from '../sections/Gallery'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Home = () => {
  return (
    <main className='relative'>
      <TopNav />
      <MainSection />
      <VisionSection />
      <AboutUsSection />
      <VideoSection />
      <ContactUs />
      <Services />
      <Blog />
      <Gallery/>
    </main>
  )
}

export default Home