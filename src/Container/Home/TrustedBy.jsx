import React from 'react'
import "./home.css"
import { RiGlobeFill } from "react-icons/ri";
import { TbCloudSnow } from "react-icons/tb";
import { SiMicrostrategy } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiAntdesign } from "react-icons/si";
import Cards from '../../Components/Cards/Cards'
import './home.css'



//data-aos="fade-down"
   //  data-aos-duration="1000"
const TrustedBy = () => {


    const renderOne = () => {
        return <TbCloudSnow />;
    };
    const renderTwo = () => {
        return <SiMicrostrategy />;
    };
    const renderthree = () => {
        return <IoNewspaperOutline />;
    };
    const renderfour = () => {
        return <SiAntdesign />;
    };

  return (
    <div 
   
     className=' bg-secondary  w-full min-h-[700px]  flex flex-col items-start justify-center py-10 px-28'>
        
      {/* <p className=' font-poppins'>Wellcome to <span className='text-md text-forth font-semibold'>INFOLATCH</span></p> */}
<h1  data-aos="fade-up"
     data-aos-duration="500" className=' font-overlock text-5xl font-semibold text-forth my-10'>What Makes Us Distant</h1>
<hr  className=' pt-4 w-[200px] border-t-4 border-forth'/>
<p className=' text-sm font-poppins w-[600px]'>We create easy experiences for a connected world through custom software development, digital design, AI solutions, and cloud solutions.
</p>
<div  data-aos="fade-up"
     data-aos-duration="600" className=' flex justify-between w-full mt-20'>
    <Cards
    number={"600"}
    text={"We have transformed over 600 clients in more than 24 countries"}
    />
    <Cards
    number={"40"}
    text={"We have transformed over 600 clients in more than 24 countries"}
    />
    <Cards
    number={"2500+"}
    text={"We have transformed over 600 clients in more than 24 countries"}
    />
  
   
  
   
</div>
    </div>
  )
}

export default TrustedBy