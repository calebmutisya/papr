"use client"
import React from 'react'
import ShadowCard from './ui/ShadowCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

function TopStories() {
  return (
    <div className='bg-mylightgrey pt-[46px] pb-[46px]'>
        <div>
            <h1 className='mb-[30px] text-center'>Top Stories</h1>
            <div>
               <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  centeredSlides={true}
                  slidesPerView={1.5}
                  spaceBetween={20}
                  className="w-full"
                  breakpoints={{
                    640: {
                      slidesPerView: 1.5,
                    },
                    1024: {
                      slidesPerView: 2.5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <ShadowCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ShadowCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ShadowCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ShadowCard/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ShadowCard/>
                  </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default TopStories
