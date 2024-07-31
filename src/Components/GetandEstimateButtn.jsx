import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import {Link} from "react-router-dom"
const GetandEstimateButtn = () => {
  return (
    <div>
       <Link to="/contact" className="relative">
        <span className=" absolute px-6 top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
        <span className="flex items-center gap-3 fold-bold relative  h-full w-full rounded border-2 border-black bg-tirtry px-1 whitespace-nowrap lg:px-6 py-3 text-base font-bold text-white transition duration-100 hover:bg-white hover:text-tirtry">Get an Estimate <FaArrowTrendUp/></span>
    </Link>
   
</div>
  )
}

export default GetandEstimateButtn