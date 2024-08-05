
import React, { useState } from "react";
import BookACallButton from "../../../components/BookACallButton";
import GetandEstimateButtn from "../../../components/GetandEstimateButtn";
import GetConsultingSection from "../../../components/GetConsultingSection";

import Resorces from "../../../components/Home/Resorces";
import BenefitsUs from "../BenefitsWorkWithUs"

import { MdAdsClick, MdOutlineDeveloperMode } from "react-icons/md";
import ParticlesComponent from "../../../components/particles";
import { GiLowTide } from "react-icons/gi";
import { FaHighlighter } from "react-icons/fa";
import { PiUserCircleBold } from "react-icons/pi";
export default function ThreeDPage() {
  const [hoveredId, setHoveredId] = useState(null);
  const subServices = [
    {
      id: 1,
      icon: GiLowTide,
      heading: "Customer Engagement",
      description:
        "Integrating (AR) and (VR) solutions into your organizational processes enables enhanced control and efficiency across various business operations. From immersive virtual conferencing rooms and interactive kiosks to virtual fitting rooms for ecommerce and location-based AR gaming, our solutions span multiple industries. ",
    },
    {
      id: 2,
      icon: FaHighlighter,
      heading: "Achieve Goals",
      description:
        "Our extensive expertise in VR/AR has revealed its vast potential to transform businesses in various ways. VR/AR can be leveraged to captivate customers, enhance staff training, elevate data visualization, and even foster a more enjoyable work environment. Whether you are looking to drive engagement, boost productivity, or simply explore new possibilities, AR/VR offers a wide range of applications that can help you achieve your goals.",
    },
    
    {
      id: 4,
      icon: PiUserCircleBold,
      heading: "3D visualizations",
      description:
        "Bring your ideas to life with stunning 3D animations and visualizations. Our team creates detailed and accurate 3D models for architecture, product design, and more. Contact us today to learn more about our 3D solutions and how we can help your business thrive in the digital age.",
    },
  ];

  return (
    <>
      <div className="">
      <ParticlesComponent id="particles"/>
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className=" text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-10">
            Choose OlumiTech as your premier AR and VR solutions partner. 
            </h1>
            <p className=" font-poppins pt-6">
            We empower startups and enterprises to unlock the full potential of mixed reality technology, crafting immersive user experiences that leave a lasting impact. Our expert development team leverages a range of mobile development technologies, including Unity, MRTK, C# and C++, to tailor solutions that align perfectly with your technical requirements and vision. 
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
          {/* <div className=' flex items-start justify-end  mr-20  mt-20' >
            <img src='/webdev.png' alt="helo" width={500}/>
        </div> */}
        </div>
      </div>
      <div className="lg:px-20 p-6 py-20 min-h-screen text-primary bg-white">
        <h1 className="text-4xl font-heading font-bold text-forth">
        Enter a world of endless possibilities with our AR/VR/3D Solutions


        </h1>
        <div className="py-20 grid lg:grid-cols-2 gap-10">
          {subServices.map((service) => (
            <div
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              key={service.id}
              className="p-6 bg-secondary"
            >
              <div className="flex gap-5 items-center">
                <p
                  className={` transition-all duration-150 ease-in p-2 rounded-lg text-4xl ${
                    hoveredId === service.id
                      ? "bg-secondary text-primary"
                      : "bg-forth text-secondary "
                  }`}
                >
                  <service.icon />
                </p>
                <h2 className=" text-2xl font-poppins font-semibold text-forth">
                  {service.heading}
                </h2>
              </div>
              <p className=" my-6 font-poppins">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Resorces  />
      <BenefitsUs />
      <GetConsultingSection
        heading={
          " Explore new dimensions with OlumiTech Solutions."
        }
        text1={"Let dive into cutting-edge VR/AR/3D app development and transform your business!"}
        
      />
     
     

      {/* <GetConsultingSection
        heading={
          "Do You Want to Find Out How Doable Your Idea Is? Let’s Connect! "
        }
        text1={
          "Reach out to us today to start transforming your concept into a reality. "
        }
      /> */}
    </>
  );
}
