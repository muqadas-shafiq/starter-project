import React from 'react'
import {Link} from "react-router-dom"
import Images from '../data'
const Portfolio = ({
  heading = 'Our work',
  subHeading = 'From concept to success: see our solutions in action',
  projectName = 'Uni Hub',
  description = 'Olumitech created an outstanding and multipurpose campus platform for a client. Whether you want to know about the events happening in the campus, or looking to get some services done or simply wish to buy or sell some stuff, UniHub got you covered.',
  moreDes = 'We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions.',
  src = Images?.workImg ,
  href= "/work"
}) => {
  
  return (
    <>
    <h1  className='flex items-center justify-center w-full font-bungee text-5xl font-semibold text-black my-2'>Projects</h1>
    <div className='text-secondary min-h-screen w-full px-6 lg:px-20 font-poppins flex py-10 gap-10'>
    <div  className=' max-w-[60%]'>
     
     <img src={src} alt="workImg"/>
  
 </div>
       <div className=' max-w-[40%]'>
       
        <p className='lg:w-[600px] pt-2 pb-3'>{subHeading}</p>
        <hr className='border-t-4 border-tirtry mb-6 lg:w-[200px]' />
        <h1 className='text-3xl font-semibold font-poppins mb-4 text-secondary'>
          {projectName}
        </h1>
        <p>{description}</p>
        <br />
        <br />
        <p>{moreDes}</p>
        <div className='py-4'>
          <Link to={href} className='py-2 px-6 bg-forth text-secondary font-semibold rounded-full'>Case Details</Link>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default Portfolio
