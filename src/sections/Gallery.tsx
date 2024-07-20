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


const Gallery = () => {
  const images = [
    { src: image1, width: 420, height: 420 },
    { src: image2, width: 320, height: 210 },
    { src: image3, width: 320, height: 210 },
    { src: image4, width: 320, height: 210 },
    { src: image5, width: 320, height: 210 },
    { src: image6, width: 320, height: 210 },
    { src: image7, width: 320, height: 210 },
    { src: image8, width: 320, height: 210 },
    { src: image9, width: 320, height: 210 },
    // Add more images as needed
  ];
  return (
    <Container bgPrimary={false} childClassName=''>
      <div className='mt-20 gap-3 mb-10 lg:w-2/3 px-5 lg:px-0 mx-auto flex items-start justify-between'>

        <div className='w-full md:w-1/2'>
          <h2 className='text-xl lg:text-3xl mb-2 uppercase text-amber-400'>Gallery</h2>
          <ProgressBar />
        </div>
        <Button>Load More</Button>
      </div>
      <div className=' w-2/3 mx-auto'>
        <GridGallery images={images} defaultContainerWidth={320} />
      </div>

    </Container>
  )
}

export default Gallery







