import React from 'react';
import Images from '../../data';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
const Raja = () => {
  const { SEoPerson } = Images;

  return (
    <div >
       
    <div className='w-full min-h-screen bg-[#f6f2ec] flex flex-col justify-center lg:px-20 lg:pt-40 font-poppins pt-30'>
<div className='flex'>
<Link to="/our-team" className=' my-5 bg-tirtry p-2 text-secondary rounded-full'><IoMdArrowRoundBack/></Link>
</div>
      <div className="lg:flex justify-between items-start  min-h-[50vh] mb-20">
        <div data-aos="fade-right"
         data-aos-duration="1000"
         className='lg:w-1/2 flex items-center justify-center'>
          <img src={SEoPerson} alt="helog" className=' h-[500px]'/>
        </div>
        <div  data-aos="fade-up"
     data-aos-duration="900" className='lg:w-1/2 flex flex-col justify-between min-h-[50vh]  lg:min-h-[70vh]'>
          <div className='flex items-start flex-col p-6 lg:p-12'>
            <h1 className=' font-semibold text-3xl'>RAJA WAHEED</h1>
            <p >Results-driven SEO expert with a knack for boosting online visibility. Raja leads the SEO team with expertise in keyword strategy, link building, and content optimization, ensuring clients dominate search engine rankings. </p>
          </div>
          <div className='flex items-start flex-col p-6 lg:p-12'>
            <h1 className=' font-semibold text-3xl'>3+ Years with OlumiTech</h1>
            <p >His data-driven approach and mastery of search engine dynamics deliver top-tier results, catapulting clients to the forefront of online visibility.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Raja;
