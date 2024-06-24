import React from 'react'
import CloudImg from "../../assets/cloud.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import "./home.css"


// import required modules

const CloudSection = () => {
  return (
    <div className='w-full min-h-[500px] px-28 py-10 relative font-poppins'>
      <div className='flex items-center'>
        <div className='h-[300px] w-[800px]  z-20 bg-transparent relative'>
          <div className='absolute top-0 left-0 p-4'>
          <Swiper
          
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper shadow-lg bottom-4"
      >
        <SwiperSlide>
       <div className=' flex justify-center items-center flex-col py-20'>
       <h2 className='text-xl font-bold px-10'>Cloud and Emerging Technologies</h2>
              <p className=' px-20'>
                Whether you have already started or yet to begin your cloud adoption, the right partner can fast-track your organization's digital transformation and empower your business to stay ahead of the curve.
              </p>
       </div>
            
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex justify-center items-center flex-col py-20'>
       <h2 className='text-xl font-bold px-10'>Cloud and Emerging Technologies</h2>
              <p className=' px-20'>
                Whether you have already started or yet to begin your cloud adoption, the right partner can fast-track your organization's digital transformation and empower your business to stay ahead of the curve.
              </p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex justify-center items-center flex-col py-20'>
       <h2 className='text-xl font-bold px-10'>Cloud and Emerging Technologies</h2>
              <p className=' px-20'>
                Whether you have already started or yet to begin your cloud adoption, the right partner can fast-track your organization's digital transformation and empower your business to stay ahead of the curve.
              </p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex justify-center items-center flex-col py-20'>
       <h2 className='text-xl font-bold px-10'>Cloud and Emerging Technologies</h2>
              <p className=' px-20'>
                Whether you have already started or yet to begin your cloud adoption, the right partner can fast-track your organization's digital transformation and empower your business to stay ahead of the curve.
              </p>
       </div>
        </SwiperSlide>
       
      </Swiper>
          </div>
        </div>
        <div className='ml-[-30px]'>
          <img src={CloudImg} alt="cloud" width={700} className='relative z-10' />
        </div>
      </div>
    </div>
  )
}

export default CloudSection
