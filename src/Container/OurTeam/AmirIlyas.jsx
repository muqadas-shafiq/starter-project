import React from 'react';
import Images from '../../data';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
const AmirIlyas = () => {
  const { FounderPerson } = Images;

  return (
    <div >
       
    <div className='w-full min-h-screen bg-[#f6f2ec] flex flex-col justify-center lg:px-20 lg:pt-40 pt-30 font-poppins'>
<div className='flex'>
<Link to="/our-team" className=' my-5 bg-tirtry p-2 text-secondary rounded-full'><IoMdArrowRoundBack/></Link>
</div>
      <div className="lg:flex justify-between items-start bg-blue-50 min-h-[50vh] mb-20">
        <div data-aos="fade-right"
         data-aos-duration="1000"
         className='lg:w-1/2'>
          <img src={FounderPerson} alt="helog" />
        </div>
        <div  data-aos="fade-up"
     data-aos-duration="900" className='lg:w-1/2 flex flex-col justify-between  min-h-[50vh]  lg:min-h-[70vh]'>
          <div className='flex items-start flex-col p-6 lg:p-12'>
            <h1 className=' font-semibold text-3xl'>AMIR ILYAS</h1>
            <p >Founder and driving force behind Olumi Tech Company, Amir Ilyas combines entrepreneurial spirit with technical expertise to propel innovation and growth. His visionary leadership shapes the company direction and inspires excellence.</p>
          </div>
          <div className='flex items-start flex-col p-6 lg:p-12'>
            <h1 className=' font-semibold text-3xl'>3+</h1>
            <p >Driven by a passion for technology, AMIR ILYAS established OlumiTech more than 3 years ago, shaping its path with visionary leadership and unwavering commitment.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AmirIlyas;
