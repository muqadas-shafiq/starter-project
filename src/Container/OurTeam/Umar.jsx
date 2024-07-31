import React from 'react';
import Images from '../../data';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
const Umar = () => {
  const { Techniqal } = Images;

  return (
    <div >
       
    <div className='w-full min-h-screen bg-[#f6f2ec] flex flex-col justify-center lg:px-20 lg:pt-40 pt-30 font-poppins'>
<div className='flex'>
<Link to="/our-team" className=' my-5 bg-tirtry p-2 text-secondary rounded-full'><IoMdArrowRoundBack/></Link>
</div>
      <div className="lg:flex justify-between items-start  min-h-[50vh] mb-20">
        <div data-aos="fade-right"
         data-aos-duration="1000"
         className='lg:w-1/2 flex items-center justify-center'>
          <img src={Techniqal} alt="helog" className=' h-[500px]'/>
        </div>
        <div  data-aos="fade-up"
     data-aos-duration="900" className='lg:w-1/2 flex flex-col justify-between  min-h-[50vh]  lg:min-h-[70vh]'>
          <div className='flex items-start flex-col p-12'>
            <h1 className=' font-semibold text-3xl'>UMAR MEO</h1>
            <p >An experienced technical advisor with a wealth of expertise in software development and technology strategy. Umar provides guidance on technical roadmap, architecture, and innovation, ensuring Olumi Tech Company stays ahead of the curve.</p>
          </div>
          <div className='flex items-start flex-col p-12'>
            <h1 className=' font-semibold text-3xl'>3+ Years with OlumiTech

</h1>
            <p >For more than 3 years, UMAR has been a key contributor to OlumiTech, playing a vital role in our groundbreaking projects and helping us achieve our goals.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Umar;
