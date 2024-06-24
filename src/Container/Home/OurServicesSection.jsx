import React, { useState } from 'react';
import { FaAngleDown, FaPaintRoller } from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";
import { SiCodesignal } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import ExploreMeButton from '../../Components/Buttons/ExploreMeButton';
import { FaCloud } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
const OurServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Software Development');
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  const toggleDescription = (id) => {
    setVisibleDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const Services = [
    {
      id: 1,
      h3: 'Software Development',
      src: FaPaintRoller,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/',
    },
    {
      id: 2,
      h3: 'Digital Design',
      src: MdDesignServices,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/',
    },
    {
      id: 3,
      h3: 'AI Solutions',
      src: SiAntdesign,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/',
    },
  
    {
      id: 4,
      h3: 'SEO',
      src: TbSeo,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/',
    },
    {
      id: 5,
      h3: 'Graphic Design',
      src: SiCodesignal,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/',
    },
    {
      id: 6,
      h3: 'Cloud Solution',
      src: FaCloud,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/',
    },
  ];

  

 

  // {visibleDescriptions[service.id] && (
  //   <div className=' h-[200px] fixed w-full bg-white text-primary top-52 z-40 left-0'>
  //     <p>{service.des}</p>
  //   </div>
  // )}
  return (
    <div className='w-full min-h-screen trustedDiv bg-forth flex flex-col items-center justify-center py-10 px-28 mt-10 text-secondary'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 data-aos='fade-up' data-aos-duration='500' className='font-overlock text-5xl mb-4 font-semibold text-center'>
            Our Services
          </h1>
          <p data-aos='fade-up' data-aos-duration='500' className='font-poppins w-[500px] text-center'>
            Explore Our Comprehensive Service Offerings Solutions Tailored to Your Needs
          </p>
          <hr className='mt-3 w-[200px] border-t-4 border-secondary items-center mx-auto' />
        </div>
       
      </div>
      <div data-aos='fade-up' data-aos-duration='600' className='grid grid-cols-3 justify-between items-start gap-2 pt-20'>
        {Services.map((service) => (
          <div key={service.id}  onClick={() => toggleDescription(service.id)} className='relative max-w-[590px]  min-h-[100px] bg-[#082140] text-secondary font-poppins p-6 flex gap-4 transition-all duration-200 shadow-lg'>
            <div className='flex flex-col gap-4 text-center'>
              <div className='flex gap-4 items-center'>
                <div className='border-2 border-forth p-6 flex items-center w-12 justify-center rounded-full h-12'>
                  <p className='text-secondary text-xl'>{<service.src />}</p>
                </div>
                <h3 className='font-poppins font-semibold text-xl text-secondary'>{service.h3}</h3>
              </div>
            
              {visibleDescriptions[service.id] && (
                <div className=' absolute h-[350px] w-[1100px] ml-3 bg-white text-primary z-40 left-0 mt-2 pt-6 px-10 font-poppins transition-all duration-150'>
                  <div className=' flex justify-end items-center'>
                  <button  onClick={() => toggleDescription(service.id)}><IoMdCloseCircle className=' text-2xl'/></button>
                  </div>
              <div className=' flex flex-col items-start justify-start text-start '>
              <h1 className='py-4 font-semibold capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam, facere a animi laboriosam sapiente illum quam impedit et ut recusandae explicabo delectus beatae deserunt officia consectetur temporibus incidunt. Animi?</p>
              <br />
             
              <p className='mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus est, culpa suscipit atque sapiente cum id? Corrupti vitae non labore ut, nobis, libero placeat dolores voluptas eligendi iste aliquid.</p>
           <div className='mt-3'>
           <ExploreMeButton/>
           </div>
              </div>
                 
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
  
};

export default OurServicesSection;
