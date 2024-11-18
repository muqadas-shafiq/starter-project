import React from 'react';


const Home = () => {
  return (
    <div className='flex justify-between h-screen '>
      <div className='w-[50%] text-center' >
       <img className='hidden lg:block h-full w-full' src="https://images.unsplash.com/photo-1541618335035-db88c53d3b3f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className='flex flex-col w-[50%] justify-center items-center lg:w-1/2'> 
      <div className='text-3xl text-center font-bold  lg:text-left'>
        <span>FarmMan</span>
      </div>
      <div className='text-3xl text-center font-bold  lg:text-left' >
        <h2 >Hello</h2>
        <h2>Welcome Back</h2>
      </div>
      <form className='mt-8 w-[80%] lg:w-96 mx-auto space-y-4'> 
        <h4>login To Manage your Account. </h4>
        <input className='border w-full py-2 px-4'
        type="email" placeholder='Email' />
        <input className='border w-full py-2 px-4'
        type="password" placeholder='Password' />
      <div>
      <span className='text-blue-600 text-1xl hover:text-blue-400 cursor-pointer'>Forgot Your Password?</span>
      </div>
        <button className='text-1xl text-white bg-green-700 w-full h-12 py-3'>
          Login
        </button>
      </form>
      <div>
        <h4 className='mt-3 font-bold'>OR</h4>
      </div>
      <div className='mt-2 font-bold-500 text-[18px]'>
        Don't have an account <span className='text-blue-900 text-[19px] hover:text-black'>signup </span>here
      </div>
      </div>
      
    </div>
  )
}

export default Home