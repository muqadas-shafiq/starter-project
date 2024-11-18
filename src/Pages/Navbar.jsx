import React from 'react'
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='min-h-16  flex justify-between px-20 items-center text-3xl '>
        <p className='font-poppins  text-gray-400'>Logo</p>
        <IoMenu />
    </div>
  )
}

export default Navbar