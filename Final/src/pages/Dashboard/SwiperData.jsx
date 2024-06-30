
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./swiperData.css"
import { Sendperson } from './Transfer';




export default function SwiperData() {
    return ( 
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                Sendperson.map((item, index) => (
                    <SwiperSlide>
                        <div className='livia' key={index}>
                            <img className='personClass' src={item.personİmg} alt="" />
                            <p>{item.name}</p>
                            <p>{item.workArea}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
            {/* <SwiperSlide>Slide 3</SwiperSlide> */}
            {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
    )
}