import Container from '../components/Container'
import TopNav from '../components/TopNav'
import MainSection from '../sections/MainSection'
import VisionSection from '../sections/VisionSection'
import AboutUsSection from '../sections/AboutUsSection'
import Section04 from '../sections/Section04'
import Section05 from '../sections/Section05'
import Section06 from '../sections/Section06'
import Section07 from '../sections/Section07'

const Home = () => {
  return (
    <main className='relative'>
      <TopNav />
      <MainSection />
      <VisionSection />
      <AboutUsSection />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section06 />
      <Section07 />
    </main>
  )
}

export default Home