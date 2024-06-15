import Container from '../components/Container'
import TopNav from '../components/TopNav'
import MainSection from '../sections/MainSection'
import VisionSection from '../sections/VisionSection'
import AboutUsSection from '../sections/AboutUsSection'
import Section06 from '../sections/Section06'
import Section07 from '../sections/Section07'
import VideoSection from '../sections/VideoSection'
import ContactUs from '../sections/ContactUs'

const Home = () => {
  return (
    <main className='relative'>
      <TopNav />
      <MainSection />
      <VisionSection />
      <AboutUsSection />
      <VideoSection />
      <ContactUs />
      <Section06 />
      <Section07 />
      <Section06 />
      <Section07 />
    </main>
  )
}

export default Home