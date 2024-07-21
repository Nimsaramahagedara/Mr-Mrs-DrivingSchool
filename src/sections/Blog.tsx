import React from 'react'
import Container from '../components/Container'
import RotatingSquare from '../components/RotatingSquare'
import ThreeCross from '../components/ThreeCross'
import ThreeTriangle from '../components/ThreeTriangle'
import ProgressBar from '../components/ProgressBar'
import colorLight from '../assets/color-light.png'
import Button from '../components/Button'
import BlogCard from '../components/BlogCard'
import { Carousel } from 'react-responsive-carousel';
const Blog = () => {
  return (
    <Container bgPrimary className='relative'>
      <div className='mt-20 mb-10 lg:w-2/3 px-5 gap-3 lg:px-0 mx-auto flex items-start justify-between'>

        <div className='w-full md:w-1/2'>
          <h2 className='text-xl lg:text-3xl mb-2 uppercase text-amber-400'>Blog</h2>
          <ProgressBar />
        </div>
        <Button>Load More</Button>
      </div>
      <Carousel autoPlay infiniteLoop>
        {
          new Array(3).fill(0).map((_, i) => (
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 md:grid-cols-2 w-full px-5 lg:px-0 lg:w-4/6 mx-auto gap-5 mb-10 lg:mb-20 z-10 relative'>
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          ))
        }
      </Carousel>
      <img src={colorLight} className='w-1/2 lg:w-1/4 absolute top-1/2 left-0 -translate-y-1/2 z-0' />

      <ThreeCross />
      <ThreeTriangle classNames='bottom-1/2 right-20 flex-col z-10' />
      <RotatingSquare />
    </Container>
  )
}

export default Blog