import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineSwipeRightAlt } from "react-icons/md";
const ExploreMeButton = ({to}) => {
  return (
    <div>
        <Link to={to} className=' bg-forth text-white py-2 px-6 rounded-full border hover:bg-forth hover:border border-forth hover:text-forth  font-poppins flex items-center gap-2 hover:gap-3 transition-all duration-200'>Explore Me <MdOutlineSwipeRightAlt className='text-2xl'/></Link>
    </div>
  )
}

export default ExploreMeButton