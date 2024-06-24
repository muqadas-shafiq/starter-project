import React from 'react'
import { Link } from 'react-router-dom'
const BookACallButton = () => {
  return (
    <div>
        <Link to={"/"} className=' bg-forth text-white py-4 px-10 rounded-full border hover:bg-white hover:text-forth border-forth font-semibold  font-poppins'>Book a call</Link>
    </div>
  )
}

export default BookACallButton