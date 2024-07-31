import React from 'react';
import Images from '../../data';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
const AmirIlyas = () => {
  const { FounderPerson } = Images;

  return (
    <div >
       
    <div className='w-full min-h-screen bg-[#f6f2ec] flex flex-col justify-center lg:px-20 pt-20 font-poppins'>
<div className='flex'>
<Link to="/our-team" className=' my-5 bg-tirtry p-2 text-secondary rounded-full'><IoMdArrowRoundBack/></Link>
</div>
      <div className="flex justify-between items-start bg-blue-50 min-h-[50vh] mb-20">
        <div data-aos="fade-right"
         data-aos-duration="1000"
         className='w-1/2'>
          <img src={FounderPerson} alt="helog" />
        </div>
        <div  data-aos="fade-up"
     data-aos-duration="900" className='w-1/2 flex flex-col justify-between  min-h-[70vh]'>
          <div className='flex items-start flex-col p-12'>
            <h1 className=' font-semibold text-3xl'>AMIR ILYAS</h1>
            <p className=' w-[250px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla, dignissimos</p>
          </div>
          <div className='flex items-start flex-col p-12'>
            <h1 className=' font-semibold text-3xl'>3+</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla, dignissimos</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AmirIlyas;
