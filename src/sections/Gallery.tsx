import React from 'react'
import { Gallery as GridGallery } from "react-grid-gallery";
import Container from '../components/Container'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import image1 from '../assets/gallery/gallery (1).png'
import image2 from '../assets/gallery/gallery (2).png'
import image3 from '../assets/gallery/gallery (3).png'
import image4 from '../assets/gallery/gallery (4).png'
import image5 from '../assets/gallery/gallery (5).png'
import image6 from '../assets/gallery/gallery (6).png'
import image7 from '../assets/gallery/gallery (7).png'
import image8 from '../assets/gallery/gallery (8).png'
import image9 from '../assets/gallery/gallery (9).png'
import { MAX_WIDTH, MIN_WIDTH } from '../config/config';
import { getRandomNumber } from '../utils/screenFunctions';


const Gallery = () => {
  const images = [
    { src: image1},
    { src: image2},
    { src: image3},
    { src: image4},
    { src: image5},
    { src: image6},
    { src: image7},
    { src: image8},
    { src: image9},
    // Add more images as needed
  ];
  return (
    <Container bgPrimary={false} childClassName=''>
      <div id='gallery' className='mt-20 gap-3 mb-10 lg:w-3/4 px-5 lg:px-0 mx-auto flex items-start justify-between'>

        <div className='w-full md:w-1/2'>
          <h2 className='text-xl lg:text-3xl mb-2 uppercase text-amber-400'>Gallery</h2>
          <ProgressBar />
        </div>
        <Button>Load More</Button>
      </div>
      <div className='w-full px-10 md:px-20 mb-20'>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:px-5'>
        {
          images.slice(0, 4).map((image, index) => (
            <div className='aspect-square hover:scale-105 ease-in-out cursor-pointer duration-300 border-black border-2' style={{scale:`${getRandomNumber(MIN_WIDTH,MAX_WIDTH)}%`}} key={index}>
              <img src={image.src} className="w-full h-full object-cover" />
            </div>
          ))
        }
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 -translate-y-14 lg:px-5'>
        {
          images.slice(5).map((image, index) => (
            <div className='aspect-square hover:scale-105 ease-in-out cursor-pointer duration-300 border-black border-2 ' style={{scale:`${getRandomNumber(MIN_WIDTH,MAX_WIDTH)}%`}} key={index}>
              <img src={image.src} className="w-full h-full object-cover" />
            </div>
          ))
        }
      </div>
      </div>


    </Container>
  )
}

export default Gallery







