
import { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { TbPhoneCalling } from "react-icons/tb";
import ParticlesComponent from "../particles";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("response", response);
      // const result = await response.json();
      // if (response.ok) {
      //   alert(result.message);
      // } else {
      //   alert(result.error);
      // }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen  lg:flex justify-center items-center  text-secondary lg:px-20 p-6">
       <ParticlesComponent id="particles"/>
      <div className="lg:flex justify-between">
        <div className=" lg:w-1/2 flex flex-col mt-20 pr-10 border-r-2  border-tirtry">
        <h1 className=" lg:text-5xl text-3xl mb-10 font-poppins font-bold">Contact Us</h1>
          <h1 className="text-2xl lg:text-3xl font-semibold font-heading capitalize tracking-wider  ">
          We&apos;re here to help! Reach out to us directly via email or give us a call on WhatsApp to discuss your project. We look forward to hearing from you!
          </h1>
         <div className="lg:flex gap-4 items-center space-y-3 py-10 text-black ">
          <div className=" flex flex-col items-start bg-white p-5 rounded space-y-3 w-[280px]">
            <h1 className=" text-4xl text-tirtry "><BiLogoGmail/></h1>
            <p className=" text-lg tracking-wider font-semibold font-poppins">Olumitech@gmail.com</p>
          </div>
          <div className=" flex flex-col items-start bg-white p-5 rounded space-y-3 w-[280px] ">
            <h1 className=" text-4xl text-tirtry ">
              <TbPhoneCalling/>
             
            </h1>
            <p  className=" text-lg tracking-wider font-poppins font-semibold">+92 312 4401327</p>
          </div>
         </div>
        </div>
        <div className=" lg:w-1/2 px-6 mt-20">
        <h1 className=" lg:text-5xl text-3xl mb-10 font-poppins font-bold text-tirtry">Get an Estimate</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-10  justify-between">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b-2 border-tirtry bg-transparent py-2 focus:outline-none outline-none"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b-2 border-tirtry bg-transparent py-2 focus:outline-none outline-none"
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-b-2 border-tirtry bg-transparent py-2 focus:outline-none outline-none"
                placeholder="Phone Number"
              />
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleChange}
                className="border-b-2 border-tirtry bg-transparent py-2 focus:outline-none outline-none"
                placeholder="Country"
              />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="outline-0 mt-10 p-2.5 w-full text-sm bg-transparent border-b-2 border-tirtry focus:outline-none outline-none"
              placeholder="Message"
            ></textarea>
            <div>
              <button
                type="submit"
                className="py-3 lg:px-20 p-6 bg-tirtry mt-10 rounded-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
