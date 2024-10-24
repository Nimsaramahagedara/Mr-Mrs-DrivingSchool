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

}

export default function Slider({ }: Props) {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper bg-white"

        >
            <SwiperSlide className='bg-white rounded-full relative'>
                <div className='bg-white rounded-none lg:rounded-full overflow-hidden'>
                    <YoutubeVideo link='https://youtu.be/VIVaqt4VhKc?si=m8DzWafjUekAj95h' />
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-white rounded-full relative'>
                <div className='bg-white rounded-none lg:rounded-full overflow-hidden'>
                    <YoutubeVideo link='https://youtu.be/VIVaqt4VhKc?si=m8DzWafjUekAj95h' />
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-white rounded-full relative'>
                <div className='bg-white rounded-none lg:rounded-full overflow-hidden'>
                    <YoutubeVideo link='https://youtu.be/VIVaqt4VhKc?si=m8DzWafjUekAj95h' />
                </div>
            </SwiperSlide>

        </Swiper>
    )
}