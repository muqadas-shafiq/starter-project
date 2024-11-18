import React from 'react';
import pizza from '../assets/pizza-slice.jpg'

const Footer = () => {
  return (
    <div 
      className='min-h-screen text-white flex justify-center items-center gap-12 bg-cover bg-center relative flex-col md:flex-row'
      style={{ backgroundImage: `url(${pizza})` }}
    >
      {/* Overlay background */}
      <div className='absolute inset-0 bg-black opacity-50'></div>
      
      {/* Content Wrapper */}
      <div className="relative flex gap-12 md:flex-row flex-col">
        <div className='min-h-[250px] w-[250px] bg-white rounded-3xl flex items-center text-black flex-col z-10'>
          <h1 className='text-2xl mt-5 font-bold'>FIND US</h1>
          <p className='text-[19px] my-4 ml-2'>Block 5 2D1 <br /> GreenTown Lahore </p>
          <p className='font-bold text-[19px]'>NY-86263748</p>
        </div>
        
        <div className='min-h-[250px] w-[250px] bg-white rounded-3xl flex items-center text-black flex-col z-10'>
          <h1 className='text-2xl mt-5 font-bold'>HOURS</h1>
          <p className='font-bold mt-2'>Monday-Saturday</p>
          <p className='text-[19px] mt-2'>7pm-7am</p>
          <p className='font-bold mt-2'>Sunday</p>
          <p className='text-[19px] mt-2'>10pm-7am</p>
        </div>
        
        <div className='min-h-[250px] w-[250px] bg-white rounded-3xl flex items-center text-black flex-col z-10'>
          <h1 className='text-2xl mt-5 font-bold'>CALL US</h1>
          <p className='text-red-600 font-bold mt-5'>1(0300-53722)</p>
          <hr className='border-t-3 w-full border-red-400 px-10' />
          <p className='text-red-600 font-bold mt-5'>2(0300-53722)</p>
          <hr className='border-t-3 w-full border-red-400' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
