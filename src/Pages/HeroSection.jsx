import React from 'react'
import home from '../assets/home-banner-image.png'
const HeroSection = () => {
  return (
    <div className='flex min-h-screen max-w-full  bg-black md:bg-black text-white justify-between items-center '>
        <div className='h-[50%] flex flex-col px-20 '>
           
            <h1 className='flex text-6xl md:text-6xl font-bold '>Life is a <br /> combination <br /> of magic And pizza</h1>
            <h3 className='text-4xl pt-6'>- Pizzeria</h3>
            <button className=' h-16 w-56 border-4 md:border-orange-600 rounded-full mt-12 font-bold-400 text-[20px] cursor-pointer sm:border-red-600' >VIEW MENU</button>
        </div>
        <div className=' min-h-[90%] bg-cover px-28 hidden md:block'>

            < img src={home}/>
        </div>
    </div>
  )
}

export default HeroSection