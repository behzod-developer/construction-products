import React from 'react'

import './Swiper.css'
import Swiper from 'swiper'
import {SwiperSlide} from 'swiper/react'


function Swipers() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='comment-card-1 comment-card'></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Swipers