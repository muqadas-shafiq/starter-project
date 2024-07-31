import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import Images from "../../data";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {Link} from "react-router-dom"

export default function Footer(){
   const {LOGOpng} = Images
  return(
      <>
      <footer className="bg-white">
          <div className="min-h-[350px] bg-white text-black border-t w-full items-start flex justify-center px-6 lg:px-20 font-poppins py-10">

              <div className="lg:flex justify-between items-start w-full">
              <div >
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6268083081222!2d-0.11056392414385266!3d51.520062309779206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4dd9bf3689%3A0x81e904e52e4cb8f6!2s4787%203a%2C%2034-35%20Hatton%20Garden%2C%20London%20EC1N%208DX%2C%20UK!5e0!3m2!1sen!2s!4v1719565020122!5m2!1sen!2s" height="300" allowFullScreen="" width={300}referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  <div>
                      <h1 className="text-2xl font-semibold py-3 text-forth">Contacts</h1>
                      <ul className="flex flex-col space-y-6">
                      <li className="flex space-x-2"><IoLocation  className="border-2 border-forth text-primary p-2 rounded-full text-4xl"/><span>1566, 124 Walton Rd, Madina Colony, <br /> Lahore, Punjab 54000<br /></span></li>
                      
                          <li className="flex space-x-2"><MdEmail  className="border-2 border-forth text-primary p-2 rounded-full text-4xl"/> <span>contact@Olumi.uk </span></li>
                          <li className="flex space-x-2"><FaPhoneAlt className="border-2 border-forth text-primary p-2 rounded-full text-4xl"/><span>+92 312 4401327</span></li>
                          
                      </ul>
                      </div>
                  <div className="  text-start  flex flex-col">
                      <h1 className="text-2xl font-semibold py-3 text-forth">Quick Links</h1>
                      <ul className=" flex flex-col items-start gap-2">
                         <Link to="/">Home</Link>
                         <Link to="/about">About Us</Link>
                         <Link to="/contact">Contact Us</Link>
                         <Link to="/services">Services</Link>
                         <Link to="/services/webdev">Web Development</Link>
                         <Link to="/our-team">Our Team</Link>
                 
                         
                          
                      </ul>
                  </div>
                 
                 
                  <div className=" lg:text-start flex-flex-col">
                      <h1 className="text-2xl font-semibold py-3 text-forth">Follow Us</h1>
                      <ul className="flex lg:items-center lg:justify-start space-x-7 mt-8">
                          <Link to={"/"} className="border-2 border-forth text-primary p-2 rounded-full text-2xl"><FaFacebook/></Link>
                          <Link to={"/"}className="border-2 border-forth text-primary p-2 rounded-full text-2xl"><FaLinkedin/></Link>
                          <Link to={"/"}className="border-2 border-forth text-primary p-2 rounded-full text-2xl"><FaSquareXTwitter/></Link>
                      </ul>
                  </div>
              </div>
             
             
          </div>
         <div className=" lg:flex justify-between items-center px-6 gap-10 lg:px-28 pb-10">
         <div>
        <img src={LOGOpng} alt="logo" width={300}/>
     </div>
     <div className=" flex lg:flex-row flex-col gap-5 text-gray-500">
     <Link to="/privacy-policy">Privacy Policy</Link>
     <Link to="/cookies">Cookies</Link>
         <Link to="/terms-condition">Terms and Conditions</Link>
         
     </div>
     
         </div>
         <div className=" flex items-center justify-center">
            <p className=" py-2 text-gray-500">OlumiTech.com 2024 all rights reserved</p>
         </div>
      </footer>
      </>
  )
}
