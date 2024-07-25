'use client'

import React from 'react';

import CountUp from 'react-countup';
const Cards = ({ number, text }) => {
  return (
    <div className='max-w-[300px] px-4 flex flex-col items-center text-center gap-4 rounded-2xl border-l-8 border-forth'>
     
        <h1 className='lg:text-7xl text-4xl mt-[-30px]  '> 
           <CountUp start={0} end={parseInt(number)} duration={2} delay={2} />
           </h1>
      
      <p className='font-poppins text-sm text-black font-semibold'>{text}</p>
    </div>
  );
};

export default Cards;
