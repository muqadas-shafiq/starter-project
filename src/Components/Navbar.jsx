
import React, { useState, useEffect } from "react";

import Images from "../data";
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
  const {LOGO} = Images
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [shake, setShake] = useState(false);
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
  useEffect(() => {
    const interval = setInterval(() => {
      setShake((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const handleLinkClick = () => {
    setHovered(false);
  };
  return (
    <div className={`fixed w-full z-10 text-secondary bg-fifth`}>
      <div className="flex justify-between  items-center px-1 md:px-28 py-5">
     <Link to="/">
     <div>
        <img src={LOGO} alt="LOGO" width={200} />
      </div>
     </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
          </button>
        </div>
        <div className={`hidden md:flex gap-6 font-semibold`}>
          <ul className="flex gap-6 font-semibold text-lg">
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
                  <Megadropdown onLinkClick={handleLinkClick} />
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
                  <MegaDropDownIndustries onLinkClick={handleLinkClick}/>
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
              to={"/our-team"}
              onMouseEnter={() => handleMouseEnter("our-team")}
              onMouseLeave={handleMouseLeave}
              className={`${hovered === "our-team" ? "text-tirtry" : ""}`}
            >
              Our Team
            </Link>

         
           
          
          </ul>
         
        </div>
        <div className={`bg-tirtry text-secondary font-semibold font-poppins tracking-wider py-2 px-3 rounded lg:flex hidden ${shake ? "shake" : ""}`}>
          <Link
              to={"/contact"}
              onMouseEnter={() => handleMouseEnter("contact")}
              onMouseLeave={handleMouseLeave}
              className={`${hovered === "contact" ? "text-black" : ""} `}
            >
              Contact Us
            </Link>
          </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start bg-fifth px-2 text-white">
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
          <Link to={"/our-team"} className="py-1" onClick={toggleMenu}>
            Our Team
          </Link>
         
       
          <Link to={"/contact"} className="py-1" onClick={toggleMenu}>
            Contact Us
          </Link>
        
        </div>
      )}
    </div>
  );
};

export default Navbar;
