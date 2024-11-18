import React from 'react'
import pizza from '../assets/pizza-olive.jpg'
import tomato from '../assets/tomato-piza.jpg'

const Items = () => {
  return (
    <div className=' bg-black text-white flex justify-center items-center flex-col mt-16 '>

        <h1 className='text-6xl mt-16 font-bold'>Italy Pizza Menu</h1>

       <div className='flex justify-between items-center px-20 my-10 gap-10 p-4'>

       <div className=' bg-white text-black flex flex-col justify-start items-start rounded-3xl '>
           <div className=' p-8'>
           <img src={pizza} className=' rounded-3xl ' />
            <h1 className='mt-5 text-3xl'>Delicious  Pizza</h1>
            <p className='text-1xl  mt-3'>sit amet consectetur adipisicing elit. Ea officiis est fugit numquam </p>
           </div>
        </div>

       
        <div className=' bg-white text-black flex flex-col justify-start items-start rounded-3xl '>
           <div className=' p-8'>
           <img src={pizza} className=' rounded-3xl ' />
            <h1 className='mt-5 text-3xl'>Delicious  Pizza</h1>
            <p className='text-1xl  mt-3'>sit amet consectetur adipisicing elit. Ea officiis est fugit numquam </p>
           </div>
        </div>
        
        <div className=' bg-white text-black flex flex-col justify-start items-start rounded-3xl '>
           <div className=' p-8'>
           <img src={pizza} className=' rounded-3xl ' />
            <h1 className='mt-5 text-3xl'>Delicious  Pizza</h1>
            <p className='text-1xl  mt-3'>sit amet consectetur adipisicing elit. Ea officiis est fugit numquam </p>
           </div>
        </div>

       </div>
       <div className='flex my-12 gap-10  px-20'>

       <div className=' bg-white text-black flex flex-col justify-start items-start rounded-3xl   '>
           <div className=' p-8'>
           <img src={pizza} className=' rounded-3xl ' />
            <h1 className='mt-5 text-3xl'>Delicious  Pizza</h1>
            <p className='text-1xl  mt-3'>sit amet consectetur adipisicing elit. Ea officiis est fugit numquam </p>
           </div>
        </div>

        <div className=' bg-white text-black flex flex-col justify-start items-start rounded-3xl '>
           <div className=' p-8'>
           <img src={pizza} className=' rounded-3xl ' />
            <h1 className='mt-5 text-3xl'>Delicious  Pizza</h1>
            <p className='text-1xl  mt-3'>sit amet consectetur adipisicing elit. Ea officiis est fugit numquam </p>
           </div>
        </div>
 
        <div className=' bg-white text-black flex flex-col justify-start items-start rounded-3xl '>
           <div className=' p-8'>
           <img src={pizza} className=' rounded-3xl ' />
            <h1 className='mt-5 text-3xl'>Delicious  Pizza</h1>
            <p className='text-1xl  mt-3'>sit amet consectetur adipisicing elit. Ea officiis est fugit numquam </p>
           </div>
        </div>
</div>


    </div>
  )
}

export default Items