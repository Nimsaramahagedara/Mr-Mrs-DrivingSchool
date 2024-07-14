import React from 'react'
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
    { src: image1, alt: 'Image 1', width: 'w-full', height: 'h-64' },
    { src: image2, alt: 'Image 2', width: 'w-full', height: 'h-48' },
    { src: image3, alt: 'Image 3', width: 'w-full', height: 'h-72' },
    { src: image4, alt: 'Image 4', width: 'w-full', height: 'h-56' },
    { src: image5, alt: 'Image 5', width: 'w-full', height: 'h-64' },
    { src: image6, alt: 'Image 2', width: 'w-full', height: 'h-48' },
    { src: image7, alt: 'Image 3', width: 'w-full', height: 'h-72' },
    { src: image8, alt: 'Image 4', width: 'w-full', height: 'h-56' },
    { src: image9, alt: 'Image 5', width: 'w-full', height: 'h-64' },
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
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:w-2/3 mx-auto w-full">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-square hover:scale-105 transition duration-300 cursor-pointer" style={{ height: image.height }}>
            <img
              src={image.src}
              alt={image.alt}
              className={`object-cover w-full h-full`}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Gallery

