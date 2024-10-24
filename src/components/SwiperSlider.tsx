import React from 'react'
import { EffectCards } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
type Props = {
    Slides: React.ReactNode[]
    effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'
}

function SwiperSlider({ Slides, effect = 'cards' }: Props) {
    return (
        <Swiper
            effect={effect}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper bg-white"

        >
            {
                Slides.map((node, key) => (
                    <SwiperSlide key={key}>{node}</SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default SwiperSlider