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

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
<ParticlesComponent id="particles"/>
<div className="divBg flex-col lg:flex-row text-start flex items-center lg:justify-start justify-center  max-w-full    lg:pt-10 min-h-screen lg:px-28 px-6 py-6 mx-auto">
        <div className="  lg:mt-10 mt-16">
          <p
            data-aos="fade-down"
            data-aos-duration="900"
            className=" font-poppins  text-secondary font-semi-bold"
          >

OlumiTech - Your technology partner for a brighter future
 

          </p>
          <div
  data-aos="fade-down"
  data-aos-duration="800"
  className="text-secondary text-4xl lg:text-7xl py-4 font-overlock font-bold"
>
  At Olumi, we specialize
  <div className="flex items-center">
    <span>in{" "}</span>
    <span className="ml-2 text-3xl lg:text-7xl"> {/* Adjust margin as needed */}
      <ReactTyped
        strings={[
          "Software Development",
          "Digital Designs",
          "Apps Development",
          "3D / VR / AR",
          "SEO",
          "Digital Marketing",
          " AI Solution",
          "Cloud Solution"
        ]}
        typeSpeed={40}
        backSpeed={50}
        showCursor={false}
        loop
        className="text-tirtry"
      />
    </span>
  </div>
  <span>Services</span>
</div>

          <div
           
            className=" mt-4 flex gap-4 justify-start items-center"
          >
            <BookACallButton />
            <GetandEstimateButtn/>
          </div>
        </div>
        {/* <div className=" hidden  lg:flex items-start justify-start  ">
<img src="/8382.png" alt="homeImg" width={600} />

        </div> */}
      </div>

      <TrustedBy />
    

      <OurServicesSection />
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
