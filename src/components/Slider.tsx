import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import YoutubeVideo from './YoutubeVideo';
type Props = {
    children: React.ReactNode
}

export default function Slider({ children }: Props) {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper bg-white"

        >
            <SwiperSlide className='bg-white rounded-full overflow-hidden'>
                <YoutubeVideo link='https://youtu.be/Cu5hhxP_prE?si=q2z-Jfnaa2UIVte3' />
            </SwiperSlide>
            <SwiperSlide className='bg-white rounded-full overflow-hidden'>
                <YoutubeVideo link='https://youtu.be/YwgNpObouB0?si=_Hawrz06LC-ajuKF' />
            </SwiperSlide>
            <SwiperSlide className='bg-white rounded-full overflow-hidden'>
                <YoutubeVideo link='https://youtu.be/Cu5hhxP_prE?si=q2z-Jfnaa2UIVte3' />
            </SwiperSlide>


        </Swiper>
    )
}