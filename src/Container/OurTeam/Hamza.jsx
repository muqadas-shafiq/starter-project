import React from 'react';
import Images from '../../data';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
const Hamza = () => {
  const { designerPerson } = Images;

  return (
    <div >
       
    <div className='w-full min-h-screen bg-[#f6f2ec] flex flex-col justify-center lg:px-20 lg:pt-40 pt-30 font-poppins'>
<div className='flex'>
<Link to="/our-team" className=' my-5 bg-tirtry p-2 text-secondary rounded-full'><IoMdArrowRoundBack/></Link>
</div>
      <div className="lg:flex justify-between items-start  min-h-[50vh] mb-20">
        <div data-aos="fade-right"
         data-aos-duration="1000"
         className='lg:w-1/2 flex items-center justify-center'>
          <img src={designerPerson} alt="helog" className=' h-[500px]'/>
        </div>
        <div  data-aos="fade-up"
     data-aos-duration="900" className='w-1/2 flex flex-col justify-between  min-h-[50vh]  lg:min-h-[70vh]'>
          <div className='flex items-start flex-col p-12'>
            <h1 className=' font-semibold text-3xl'>HAMZA ALI</h1>
            <p >Creative genius and skilled designer with a passion for crafting stunning visual experiences. Hamza brings ideas to life through innovative design solutions, ensuring Olumi Tech Company projects exceed aesthetic and functional expectations.</p>
          </div>
          <div className='flex items-start flex-col p-12'>
            <h1 className=' font-semibold text-3xl'>3+</h1>
            <p>With over 3 years at OlumiTech,HAMZA has demonstrated exceptional skills and dedication, significantly impacting our team's success and innovation.

</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hamza;
