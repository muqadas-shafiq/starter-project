import React,{useEffect} from 'react'
import Navbar from '../../Components/navbar/Navbar'
import aos from "aos"
import {homeContent} from "../../data"
import BookACallButton from '../../Components/Buttons/BookACallButton'
import GetandEstimateButtn from '../../Components/Buttons/GetandEstimateButtn'
import OurServicesSection from './OurServicesSection'
import PhoneImg from "../../assets/Minimalist 3.jfif"
import one from "../../assets/logos/1.svg"
import two from "../../assets/logos/2.svg"
import TestimonialSlider from './TestimonialSection'
import thre from "../../assets/logos/3.svg"
import four from "../../assets/logos/4.svg"
import five from "../../assets/logos/5.svg"
import six from "../../assets/logos/6.svg"
import seven from "../../assets/logos/7.svg"
import eight from "../../assets/logos/8.svg"
import TrustedBy from './TrustedBy'
import Footer from '../Footer/Footer'
import Resorces from './Resorces'
import CloudSection from './CloudSection'
import ContactInfo from './ContactInfo'
// import TestimonialSection from './TestimonialSection'
import { motion } from 'framer-motion';

const Home = () => {
 const {heading ,span, homeDescription} = homeContent
//  useEffect(() => {
 
//   const logosSlide = document.querySelector(".logos-slide");
//   const clone = logosSlide.cloneNode(true);
//   document.querySelector(".logos").appendChild(clone);
// }, []);
  return (
    <div>
      <Navbar/>
      <div className='divBg  flex items-center justify-start  w-full h-screen   pt-10  px-28 z-10'>
    
       <div className=' w-[750px] mt-10'>
       <p   data-aos="fade-down"
     data-aos-duration="900" className=' font-poppins  text-primary'>{homeDescription}</p>
<h1  data-aos="fade-down"
     data-aos-duration="800" className='text-primary text-3xl py-4 font-overlock font-bold '>{heading} <span className=' text-forth'>{span}</span></h1>

<div  data-aos="fade-down"
     data-aos-duration="1000" className=' mt-4 flex gap-4 justify-start items-center'>
  <BookACallButton/>
  <GetandEstimateButtn/>
</div>

       </div>
       <div className='check flex items-start justify-start mb-10 mr-20'></div>
      </div>
     
      <TrustedBy/>
      <CloudSection/>
    
      <OurServicesSection/>
      <Resorces/>
      <TestimonialSlider/>
      {/* <TestimonialSection/> */}
      <div className=' flex items-center justify-center flex-col py-14 px-28 font-poppins'>
      <h1 className=' text-2xl absolute py-2 px-4 bg-white text-forth font-semibold'>Trusted By</h1>
      <hr className=' border-t-2 border-forth w-full '/>
      </div>
      <div class="logos">
       
      <div class="logos-slide">
        <img src={one} alt='0'/>
        <img src={two}  alt='two'/>
        <img src={thre}  alt='two'/>
        <img src={four} alt='two' />
        <img src={five} alt='two'/>
        <img src={six} alt='two'/>
        <img src={seven} alt='two'/>
        <img src={eight} alt='two'/>
      </div>
    </div>
   <div className="px-28">
   <hr className=' border-t-2 border-forth w-full '/>
   </div>
     
      {/* <ContactInfo/> */}
      <Footer/>
     
    </div>
  )
}

export default Home