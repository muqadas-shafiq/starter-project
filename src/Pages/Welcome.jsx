
import React from 'react'
import pizza from '../assets/pizza-olive.jpg'
const Welcome = () => {
  return (
    <div className='flex min-h-[900] justify-between items-center mt-24 font-poppins flex-col md:flex-row '>
       <div className='min-w-[70%]  flex bg-cover md:px-28  '>

< img src={pizza} className='rounded-3xl '/>
</div>
        <div className=' h-[50%] max-w-[50%] flex  items-baseline flex-col md:px-10  md:mt-0 sm:mt-5 '>
            <h3 className='text-3xl md:pl-28 py-7'>WelCome To </h3>
            <h2 className='text-5xl font-bold md:py-8 md:pl-8 py-7 '>John's Pizzeria</h2>
            <p className='text-2xl  '> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate asperiores <br /> vitae saepe ea molestias, nulla, nihil ipsa dolorem,eum quas quos. <br /> Itaque aut dolorum soluta quae adipisci, doloremque temporibus illum.</p>
            <div className=' flex flex-col items-center justify-center max-w-full '>
            <ul className=" text-2xl mt-8 font-sans list-disc list-inside  ">
  <li>Tasty, fresh food</li>
  <li>Fast delivery</li>
  <li>Best pizza in NYC</li>
</ul>
<button className=' h-16 w-56 border-4 border-orange-600 rounded-full mt-12 font-bold-400 text-[20px] cursor-pointer' >SEE OUR MENU</button>
            </div>

        </div>
     
        
    </div>
  )
}

export default Welcome