"use client";

import React, { useState } from "react";

import BookACallButton from "../../../components/BookACallButton";
import GetandEstimateButtn from "../../../components/GetandEstimateButtn";
import GetConsultingSection from "../../../components/GetConsultingSection";
import ParticlesComponent from "../../../components/particles";
import Resorces from "../../../components/Home/Resorces";
import BenefitsUs from "../BenefitsWorkWithUs"

import { LuLaptop2 } from "react-icons/lu";
import SoftwareOffers from "../SoftwareOffers";
import { BiMobileVibration } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";

const SoftwareServices = () => {
  const subServices = [
    {
      id: 1,
      name: " Software Developmen",
      icon: FaRegLightbulb,
    },
    {
      id: 2,
      name: "Web Development",
      icon: LuLaptop2,
    },
    {
      id: 3,
      name: "Mobile Development",
      icon: BiMobileVibration,
    },
    {
      id: 4,
      name: "SaaS Development",
      icon: FaNetworkWired,
    },
  ];

  return (
    <div>
      <div className="">
      <ParticlesComponent id="particles"/>
        <div className="   flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className="text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Tailored Software Development Services for a Bespoke Experience!
            </h1>
            <p className=" font-poppins pt-6">
            Olumi is your go-to software development partner that offers customized solutions for your business/ enterprise. We merge our expertise with your innovative ideas to tailor a software development strategy unique to your business requirements. Empower your business with our exceptional services to unlock its true potential and achieve new heights. Talk to our experts today!
              {/* Olumi has been serving leading enterprises and businesses
              across different industries with world-class software development
              services tailored to each client&apos; needs. Our professional
              developers leave no stone unturned in aligning your business goals
              with aesthetic and functional bespoke applications for improved
              productivity. Let us help you excel and be on top of your
              Competition with our exceptional and tailored software products. */}
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
        </div>
        <div className="lg:px-20 px-6 text-secondary font-poppins pb-10">
          <h1 className=" text-3xl font-semibold mb-6 capitalize tracking-wider max-w-[700px]">
            Our full-cycle software development approach
          </h1>
          <div className="flex flex-wrap lg:flex-row justify-between items-center gap-6">
            {subServices.map((service) => (
              <div key={service.id} className=" my-10 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <p className="border-2 p-4 rounded-full text-2xl">
                    <service.icon />
                  </p>
                  <hr className="  border-t-2 border-secondary w-[200px]" />
                </div>
                <h1 className="text-xl ">{service.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SoftwareOffers />
    </div>
  );
};

export default SoftwareServices;
