import React from 'react'
import slice from '../assets/pizza-slice.jpg'

const Taste = () => {
  return (
    <div className='flex min-h-screen  justify-between items-center font-poppins px-14 flex-col sm:flex-row'>
        <div className='min-h-[50%] max-w-[50%] flex flex-col px-10 '>
            <h1 className='flex text-6xl sm:text-4xl font-bold'>The taste of Italy</h1>
            <h3 className='text-2xl sm:text-3xl pt-6 font-bold mt-14'>Wood-Fired ovens</h3>
            <hr className='border-t-3 w-full mt-6 border-gray-400' /> 
            <div className='text-[17px] pt-8 sm:text-[22px] '>
            <p>- Lorem ipsum  adipisicing lorem </p>
            <p>- Lorem ipsum  adipisicing lorem ipsum  </p>
            <p>- Lorem ipsum  adipisicing lorem </p>
            <p>- Lorem ipsum  adipisicing lorem adipisicing  </p>
            </div>
        </div>
        <div className='flex justify-center items-center max-w-[50%] bg-cover gap-8 flex-col min-h-full my-8'>
          <div className='flex justify-center bg-cover gap-8'>
              <img src={slice} className='max-w-[300px] min-h-[350px] rounded-3xl'  />
              <img src={slice} className='max-w-[300px] min-h-[350px] rounded-3xl' />
          </div>
          <div className='flex justify-center bg-cover gap-8'>
              <img src={slice} className='max-w-[300px] min-h-[350px] rounded-3xl'  />
              <img src={slice} className='max-w-[300px] min-h-[350px] rounded-3xl' />
          </div>
        </div>
    </div>
  )
}

export default Taste
