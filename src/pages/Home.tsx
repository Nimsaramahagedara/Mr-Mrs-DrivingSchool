import Container from '../components/Container'
import TopNav from '../components/TopNav'
import MainSection from '../sections/MainSection'
import VisionSection from '../sections/VisionSection'
import AboutUsSection from '../sections/AboutUsSection'
import Section05 from '../sections/Section05'
import Section06 from '../sections/Section06'
import Section07 from '../sections/Section07'
import VideoSection from '../sections/VideoSection'

const Home = () => {
  return (
    <main className='relative'>
      <TopNav />
      <MainSection />
      <VisionSection />
      <AboutUsSection />
      <VideoSection />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section06 />
      <Section07 />
    </main>
  )
}

export default Home