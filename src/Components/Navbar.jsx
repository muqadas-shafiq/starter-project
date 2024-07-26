
import React, { useState, useEffect } from "react";


import { Link } from "react-router-dom";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosMenu,
  IoIosClose,
} from "react-icons/io";
import Megadropdown from "./MegaDropDown";

import MegaDropDownIndustries from "./MegaDropDownForIndustries";


const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  // useEffect(async()=>{
  //    const session = await auth()

  // },[])
  const handleMouseEnter = (item) => {
    if (window.innerWidth >= 768) {
      // only handle hover on desktop
      setHovered(item);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      // only handle hover on desktop
      setHovered(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleIndustriesDropdown = () => {
    setIndustriesDropdownOpen(!industriesDropdownOpen);
  };

  const toggleCompanyDropdown = () => {
    setCompanyDropdownOpen(!companyDropdownOpen);
  };

  return (
    <div className={`fixed w-full z-10 text-secondary bg-fifth`}>
      <div className="flex justify-center  items-center px-1 md:px-28 py-5">
      
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
          </button>
        </div>
        <div className={`hidden md:flex gap-6 font-semibold`}>
          <ul className="flex gap-6 font-semibold">
            <Link
              to={"/"}
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
              className={`${hovered === "home" ? "text-tirtry" : ""}`}
            >
              Home
            </Link>
            <li>
              <Link
                to={"/about"}
                onMouseEnter={() => handleMouseEnter("Company")}
                onMouseLeave={handleMouseLeave}
                className={`flex gap-2 justify-center items-center transition-all duration-150 ${
                  hovered === "Company" ? "text-tirtry" : ""
                }`}
              >
                About{" "}
             
              </Link>
           
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/services"
                className={`flex gap-2 justify-center items-center transition-all duration-150 ${
                  hovered === "services" ? "text-tirtry" : ""
                }`}
              >
                Services{" "}
                {hovered === "services" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </Link>
              {hovered === "services" && (
                <div
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Megadropdown />
                </div>
              )}
            </li>
            <li>
              <Link
                to={"/"}
                onMouseEnter={() => handleMouseEnter("Industries")}
                onMouseLeave={handleMouseLeave}
                className={`flex gap-2 justify-center items-center transition-all duration-150 ${
                  hovered === "Industries" ? "text-tirtry" : ""
                }`}
              >
                Industries{" "}
                {hovered === "Industries" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}{" "}
              </Link>
              {hovered === "Industries" && (
                <div
                  onMouseEnter={() => handleMouseEnter("Industries")}
                  onMouseLeave={handleMouseLeave}
                >
                  <MegaDropDownIndustries />
                </div>
              )}
            </li>

            <Link
              to={"/work"}
              onMouseEnter={() => handleMouseEnter("work")}
              onMouseLeave={handleMouseLeave}
              className={`${hovered === "work" ? "text-tirtry" : ""}`}
            >
              Our Work
            </Link>

         
            <Link
              to={"/contact"}
              onMouseEnter={() => handleMouseEnter("contact")}
              onMouseLeave={handleMouseLeave}
              className={`${hovered === "contact" ? "text-tirtry" : ""}`}
            >
              Contact
            </Link>
          
          </ul>
        </div>
     
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start bg-white px-2 text-black">
          <Link to={"/"} className="py-1" onClick={toggleMenu}>
            Home
          </Link>
          <div className="py-1" onClick={toggleMenu}>
    
    <Link to={"/about"} className="w-full">
      About
    </Link>

</div>
          <div className="py-1" onClick={toggleServicesDropdown}>
            <div className="flex justify-between w-full items-center">
              <Link to="/services" className="w-full">
                Services
              </Link>
              {servicesDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          <div onClick={toggleMenu}>
          {servicesDropdownOpen && <Megadropdown />}
          </div>
          </div>
          <div className="py-1" onClick={toggleIndustriesDropdown}>
            <div className="flex justify-between w-full items-center">
              <Link to={"/"} className="w-full">
                Industries
              </Link>
              {industriesDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div onClick={toggleMenu}>
            {industriesDropdownOpen && <MegaDropDownIndustries />}
            </div>
          </div>
          <Link to={"/work"} className="py-1" onClick={toggleMenu}>
            Our Work
          </Link>
         
       
          <Link to={"/contact"} className="py-1" onClick={toggleMenu}>
            Contact
          </Link>
        
        </div>
      )}
    </div>
  );
};

export default Navbar;
