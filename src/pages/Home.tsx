import Container from '../components/Container'
import TopNav from '../components/TopNav'
import MainSection from '../sections/MainSection'
import VisionSection from '../sections/VisionSection'
import AboutUsSection from '../sections/AboutUsSection'
import Section07 from '../sections/Section07'
import VideoSection from '../sections/VideoSection'
import ContactUs from '../sections/ContactUs'
import Services from '../sections/Services'

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
      <Section07 />
      <Section07 />
    </main>
  )
}

export default Home