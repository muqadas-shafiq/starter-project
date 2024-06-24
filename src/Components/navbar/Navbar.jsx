import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ServicesDropdown from './ServicesDropdown';

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (item) => {
    setHovered(item);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div className={`flex justify-between py-6 px-28 fixed w-full font-poppins text-[15px] top-0 left-0 right-0 z-10 text-primary bg-white`}>
        <div>INFOLATCH</div>
        <div>
          <ul className='flex gap-6'>
            <li onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >Home</li>
            <li onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
              className='flex gap-2 justify-center items-center transition-all duration-150'
            >Services {hovered === "services" ? <IoIosArrowUp /> : <IoIosArrowDown />} </li>
            <li onMouseEnter={() => handleMouseEnter("Industries")}
              onMouseLeave={handleMouseLeave}
              className='flex gap-2 justify-center items-center transition-all duration-150'
            >Industries {hovered === "Industries" ? <IoIosArrowUp /> : <IoIosArrowDown />} </li>
            <li onMouseEnter={() => handleMouseEnter("work")}
              onMouseLeave={handleMouseLeave}
            >Our Work</li>
            <li onMouseEnter={() => handleMouseEnter("Company")}
              onMouseLeave={handleMouseLeave}
              className='flex gap-2 justify-center items-center transition-all duration-150'
            >Company {hovered === "Company" ? <IoIosArrowUp /> : <IoIosArrowDown />} </li>
            <li onMouseEnter={() => handleMouseEnter("Blog")}
              onMouseLeave={handleMouseLeave}
              className={`${hovered === "Blog" ? 'underline' : ''}`}
            >Blog</li>
          </ul>
        </div>
        <button className='border-2 border-primary text-primary font-semibold rounded-full py-2 px-6 text-sm'>Contact US</button>
      </div>

      <div>
        {hovered === "services" && (
          <div
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
            className='absolute w-full top-[72px] z-0'
          >
            <ServicesDropdown />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
