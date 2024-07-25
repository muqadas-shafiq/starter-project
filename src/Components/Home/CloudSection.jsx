
import React from "react";
import { PiAirplaneInFlight } from "react-icons/pi";
import { SiVorondesign } from "react-icons/si";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { GiAbstract039 } from "react-icons/gi";
import { GrDocumentTest } from "react-icons/gr";
import { SiPlanetscale } from "react-icons/si";
import { AiTwotoneBuild } from "react-icons/ai";
import { FaLayerGroup } from "react-icons/fa";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./home.css";


const CloudSection = () => {
  const cloudData = [
    {id: 1, name: "Planning", icon : GiPlantsAndAnimals},
    {id: 2, name: "Designing", icon : SiVorondesign},
    {id: 3, name: "Defining", icon : GiAbstract039},
    {id: 4, name: "Building", icon : AiTwotoneBuild},
    {id: 5, name: "Testing", icon : GrDocumentTest},
    {id: 6, name: "Deployment", icon : SiPlanetscale},
    {id: 7, name: "Mantainance", icon : FaLayerGroup},
  ]
  return (
    <div className="bg-secondary w-full min-h-screen px-6 lg:px-20 py-20 flex items-center justify-center flex-col font-poppins z-0 ">
<h1 className=" text-5xl text-fifth font-semibold font-heading text-center">Our development process is designed to efficiently deliver high-quality, customized solutions.
</h1>
{/* <p className=" font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}
<div className=" mt-20 flex flex-wrap gap-10 text-center items-center justify-center">
  {cloudData.map(item =>(
    <div key={item.id} className=" flex flex-col items-center justify-center gap-4 w-[250px] ">
    <div className=" p-4 bg-[#e28181] rounded-full ">
      <p className=" p-4 text-3xl bg-[#B43F3F] rounded-full text-white"><item.icon/></p>
    </div>
    <h2 className=" text-fifth font-poppins capitalize font-semibold">{item.name}</h2>
    </div>
  ))}
  
 
</div>
     
    </div>
  );
};

export default CloudSection;
