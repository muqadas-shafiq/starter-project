import React, { useRef, useState } from 'react';
import "./stylesTeam.css";
import { Swiper, SwiperSlide   } from 'swiper/react';
import Images from '../../data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import {Link} from "react-router-dom"
const OurTeam = () => {
  const { Techniqal, CEOPerson, designerPerson, SEoPerson } = Images;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full min-h-screen bg-[#f6f2ec] flex flex-col justify-center lg:px-20'>
      <div className="lg:flex justify-between items-center">
        <div className='lg:w-1/3'>
          <h1 
          data-aos="fade-down" 
          data-aos-duration="900" 
          className='lg:text-9xl text-4xl font-poppins'>MEET <span className='text-tirtry italic'>OUR</span> TEAM</h1>
        </div>
        <div className='lg:w-2/3'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className={`mySwiper `}
            autoplay={{ // Add autoplay settings
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            <SwiperSlide >
              <Link to={"/our-team/Founder"}>
              <img src={CEOPerson} alt='helo' className='absolute' />
              <div className={`relative flex items-start justify-end flex-col h-full px-4 ${activeIndex === 0 ? 'block' : 'hidden'}`}>
                <p data-aos="fade-right"
                data-aos-duration="900" 
                className='bg-secondary px-4 py-1 border-b-2 border-tirtry italic'> Founder of OlumiTech</p>
                <p data-aos="fade-right"
                data-aos-duration="900" 
                 data-aos-delay="300" className='bg-secondary px-4 py-1 border-b-2 mt-2 border-tirtry '>Amir Ilyas</p>
                <p data-aos="fade-right" data-aos-delay="400" 
                data-aos-duration="900" 
                className='bg-secondary px-4 py-1 border-b-2 mt-2 border-tirtry '>Digital Marketing Team Lead</p>
              </div></Link>
            
            </SwiperSlide>
            <SwiperSlide>
             <Link to="/our-team/seo-team-lead">
             <img src={SEoPerson} alt='helo' className='absolute' />
              <div className={`relative flex items-start justify-end flex-col h-full px-4 ${activeIndex === 1 ? 'block' : 'hidden'}`}>
                {/* <p data-aos="fade-right" className='bg-secondary px-4 py-1 border-b-2 border-tirtry'> </p> */}
                <p data-aos="fade-right" data-aos-delay="300" className='bg-secondary px-4 py-1 border-b-2 mt-2 border-tirtry '>Raja Waheed</p>
                <p data-aos="fade-right" data-aos-delay="400" className='bg-secondary px-4 py-1 border-b-2 mt-2 border-tirtry '>SEO Team Lead</p>
              </div></Link>
            </SwiperSlide>
            <SwiperSlide>
             <Link to="/our-team/designer">
             <img src={designerPerson} alt='helo' className='absolute' />
              <div className={`relative flex items-start justify-end flex-col h-full px-4 ${activeIndex === 2 ? 'block' : 'hidden'}`}>
                {/* <p data-aos="fade-right" className='bg-secondary px-4 py-1 border-b-2 border-tirtry'> Founder of OlumiTech</p> */}
                <p data-aos="fade-right" data-aos-delay="300" className='bg-secondary px-4 py-1 border-b-2 mt-2 border-tirtry'>Hamza Ali</p>
                <p data-aos="fade-right" data-aos-delay="400" className='bg-secondary px-4 py-1 border-b-2 mt-2 border-tirtry'>Graphic design Team Lead</p>
              </div>
             </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/our-team/techniqal-advisor">
            <img src={Techniqal} alt='helo' className='absolute' />
              <div className={`relative flex items-start justify-end flex-col h-full px-4 ${activeIndex === 3 ? 'block' : 'hidden'}`}>
                {/* <p data-aos="fade-right" className='bg-secondary px-4 py-1 border-b-2 border-tirtry'> Founder of OlumiTech</p> */}
                <p data-aos="fade-right" data-aos-delay="300" className='bg-secondary px-4 py-1 border-b-2 mt-2 border-tirtry'>Umar Meo</p>
                <p data-aos="fade-right" data-aos-delay="400" className='bg-secondary px-4 py-1 border-b-2 mt-2 border-tirtry'>Technical Advisor Team Lead</p>
              </div>
            </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
