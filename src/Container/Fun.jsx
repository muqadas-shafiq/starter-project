import React from 'react'
import paper from '../assets/paper.png'
import rock from '../assets/rock.png'
import scissors from '../assets/scissors.png'

const Fun = () => {
  return (
    <div className='w-full min-h-screen  gap-5 bg-red-500 flex flex-col justify-center items-center px-20'>
   <h2  className='text-white text-2xl font-bold-700'>Let's play</h2>
        <div className='flex  justify-center items-center h-[90%] w-full gap-10'>
        <div >
        <img src={paper} alt="" />
    </div>
    <div>
        <img src={rock} alt="" />
    </div>
    <div>
        <img src={scissors} alt="" />
        </div>
            </div> 
        

    </div>  

    
  
  )
}

export default Fun