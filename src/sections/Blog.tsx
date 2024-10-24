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
import SwiperSlider from '../components/SwiperSlider'
import { BLOG_POSTS } from '../config/config'
const Blog = () => {
  // const blogCount = Blogs.length
  // const testPerPage = 4
  // const pageCount = Math.ceil(blogCount / testPerPage)
  return (
    <Container bgPrimary className='relative min-h-fit pb-20 lg:min-h-screen' id='blog'>
      <div className='mt-20 mb-10 lg:w-3/4 px-5 gap-3 lg:px-0 mx-auto flex items-start justify-between'>

        <div className='w-full md:w-1/2'>
          <h2 className='text-xl lg:text-3xl mb-2 uppercase text-amber-400'>Blog</h2>
          <ProgressBar />
        </div>
        <Button>Load More</Button>
      </div>
      <div className='h-full w-auto items-center justify-center hidden lg:flex'>
        <Carousel autoPlay infiniteLoop swipeable={false} showArrows={false} showThumbs={false} className='max-w-5xl mx-auto'>
          {
            new Array(3).fill(0).map((_, i) => (
              <div className='grid lg:grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 md:grid-cols-2 w-full px-5 lg:px-0 lg:w-4/6 mx-auto gap-5 mb-10 lg:mb-20 z-10 relative' key={i}>
                {
                  BLOG_POSTS.slice(i,i+3).map(b=>(
                    <BlogCard blog={b}/>
                  ))
                }
              </div>
            ))
          }
        </Carousel>
      </div>
      <div className='block lg:hidden bg-blue-900'>
        <SwiperSlider effect='flip' Slides={BLOG_POSTS.map((_, i) => (
          <BlogCard blog={_} key={i} className='h-52'/>
        ))} />
      </div>

      <img src={colorLight} className='w-1/2 lg:w-1/4 absolute top-1/2 left-0 -translate-y-1/2 z-0' />

      <ThreeCross className='bottom-20 left-5' />
      <ThreeTriangle classNames='bottom-1/2 right-20 flex-col z-10' />
      <RotatingSquare className='md:-top-20 right-0' />
    </Container>
  )
}

export default Blog