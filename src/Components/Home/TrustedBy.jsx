import React from 'react'

import { RiGlobeFill } from "react-icons/ri";
import { TbCloudSnow } from "react-icons/tb";
import { SiMicrostrategy } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiAntdesign } from "react-icons/si";
import { AiFillFire } from "react-icons/ai";
import { AiFillMerge } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";
import Cards from '../Cards/Cards';



//data-aos="fade-down"
   //  data-aos-duration="1000"
const TrustedBy = () => {


  

  return (
    <div 
   
     className=' bg-[#fff0e6] text-black  max-w-full min-h-[600px]  flex flex-col items-start justify-center lg:py-10 lg:px-28 p-6'>
        
      {/* <p className=' font-poppins'>Wellcome to <span className='text-md text-secondary font-semibold'>Olumi</span></p> */}
<h1  data-aos="fade-up"
     data-aos-duration="500" className=' font-overlock text-5xl font-semibold text-black my-10'>What Makes us Stand out! 
</h1>
<hr  className=' pt-4 w-[200px] border-t-4 border-forth'/>
<p className=' text-sm font-poppins max-w-[600px]'>We helped clients skyrocket their businesses with our targeted strategies.



</p>
<div  data-aos="fade-up"
     data-aos-duration="600" className='flex lg:flex-row flex-col gap-20 justify-between w-full mt-20'>
    <Cards
   
    number={"100+"}
    text={"We have earned loyal clients by completing projects successfully while ensuring customer satisfaction."}
    />
    <Cards
  
    number={"500+"}
    text={"Our collaborations with reputable businesses have helped us become a trustworthy digital firm.  "}
    />
    <Cards
   
    number={" 50+"}
    text={"Our team consists of expert designers, developers, marketers, analysts, and IT enthusiasts who bring creativity and perfection to your project. "}
    />
  
   
  
   
</div>
    </div>
  )
}

export default TrustedBy