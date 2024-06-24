import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from 'react-router-dom'
const GetandEstimateButtn = () => {
  return (
    <div>
    <Link to={"/"} className=' flex gap-3 items-center border bg-secondary text-primary py-4 px-8 rounded-full hover:bg-forth hover:text-white font-semibold  font-poppins'>Get an Estimate <FaArrowTrendUp/></Link>
</div>
  )
}

export default GetandEstimateButtn