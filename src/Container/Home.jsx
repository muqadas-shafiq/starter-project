import React from "react";
import BookACallButton from "../components/BookACallButton";
import ExploreMeButton from "../components/ExploreMeButton";
import GetandEstimateButtn from "../components/GetandEstimateButtn";
import OurServicesSection from "../components/Home/OurServicesSection";
import CloudSection from "../components/Home/CloudSection";
import { ReactTyped } from "react-typed";
import Resorces from "../components/Home/Resorces";
import TestimonialSlider from "../components/Home/TestimonialSection";
import TrustedBy from "../components/Home/TrustedBy";
import ParticlesComponent from "../components/particles";
import { FaRegHandPointRight } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
<ParticlesComponent id="particles"/>
<div className="divBg  text-start flex flex-col  justify-center  max-w-full    lg:pt-10 min-h-screen  px-20 pt-20 ">
   <div className="flex justify-between items-center ">
   <h1 className=" font-bungee text-8xl">FULL-STACK</h1>
   <div >
   <p className=" bg-secondary rounded-full py-3 w-[350px] flex justify-center font-poppins uppercase font-semibold italic items-center gap-3">Projects <span><FaRegHandPointRight/></span></p>
   </div>
   </div>


   <div className="flex justify-between items-center">
  
   <div>
   <p className=" text-secondary w-[450px] italic font-poppins capitalize">My goal is to write maintainable, clean
and understandable code to process
development was enjoyable.</p>
   </div>
   <h1 className=" font-bungee text-8xl text-secondary">Developer</h1>
   </div>





<div className=" flex justify-center items-center mt-10 gap-3 font-poppins italic">
  <div className=" py-2 px-6 border border-secondary rounded-full text-secondary">
    <p>FRONT-END </p>
  </div>
  <div className=" py-2 px-6 border border-secondary rounded-full text-secondary">
    <p>BACKEND</p>
  </div>
  <div className=" py-2 px-6 border border-secondary rounded-full text-secondary">
    <p>DATABASE</p>
  </div>
  <div className=" py-2 px-6 border border-secondary rounded-full text-secondary">
    <p>API&apos;s</p>
  </div>
 
</div>
   
      </div>

      <TrustedBy />
    

      {/* <OurServicesSection /> */}
      <CloudSection />
      {/* <hr className="border-t-2 px-28 border-forth"/> */}
      <Resorces />
      <TestimonialSlider />
      {/* <TestimonialSection/> */}
      {/* <div className=" flex items-center justify-center flex-col py-14 px-28 font-poppins">
        <h1 className=" text-2xl absolute py-2 px-4 bg-white text-forth font-semibold">
          Trusted By
        </h1>
        <hr className=" border-t-2 border-forth w-full " />
      </div>
      <div className="logos">
        <div className="logos-slide">
          <Image height={150} width={150} src="/logos/1.svg" alt="0" />
          <Image height={150} width={150} src="/logos/2.svg" alt="two" />
          <Image height={150} width={150} src="/logos/3.svg" alt="two" />
          <Image height={150} width={150} src="/logos/4.svg" alt="two" />
          <Image height={150} width={150} src="/logos/5.svg" alt="two" />
          <Image height={150} width={150} src="/logos/6.svg" alt="two" />
          <Image height={150} width={150} src="/logos/7.svg" alt="two" />
          <Image height={150} width={150} src="/logos/8.svg" alt="two" />
        </div>
      </div>
      <div className="px-28">
        <hr className=" border-t-2 border-forth w-full " />
      </div> */}
      {/* <Link href='https://wa.me/03446743886?text=Hello%20there' className="bottom-10 right-10  fixed">
        <Image height={50} width={50} src="/whatsapp.png" alt="sas" width={60} />
      </Link> */}
    </div>
  );
}

export default Home
