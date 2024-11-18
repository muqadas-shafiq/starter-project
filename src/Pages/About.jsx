import React from 'react';
import pizza from '../assets/pizza-slice.jpg';

const About = () => {
  return (
    <div
      className="min-h-screen max-w-full flex justify-center items-center gap-10 relative mb-10 text-white"
      style={{
        backgroundImage: `url(${pizza})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="py-16 md:py-24 flex flex-col md:flex-row justify-center w-full items-center gap-10">
        <div className="w-[90%] md:w-[40%] bg-white/10 backdrop-blur-lg flex flex-col justify-center items-baseline rounded-3xl pl-10 shadow-lg py-8">
          <h1 className="text-5xl my-10">Pizza</h1>
          <div className="flex flex-col">
            <h2 className="text-2xl my-2 font-bold">New York</h2>
            <p className="text-[20px] font-poppins">
              Lorem ipsum, dolor sit <br /> amet consectetur adipisicing <br />
              elit. Pariatur!
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl my-2 font-bold">Deep dish pan</h2>
            <p className="text-[20px] font-poppins">
              Lorem ipsum, dolor sit <br /> amet consectetur adipisicing <br />
              elit. Pariatur!
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl my-2 font-bold">Sicilian</h2>
            <p className="text-[20px] font-poppins">
              Lorem ipsum, dolor sit <br /> amet consectetur adipisicing <br />
              elit. Pariatur!
            </p>
          </div>
        </div>

        <div className="w-[90%] md:w-[40%] bg-white/10 backdrop-blur-lg flex flex-col justify-center items-baseline rounded-3xl pl-10 shadow-lg py-8">
          <h1 className="text-5xl my-10">Specialty Pizza</h1>
          <div className="flex flex-col">
            <h2 className="text-2xl my-2 font-bold">New York special</h2>
            <p className="text-[20px] font-poppins">
              Lorem ipsum, dolor sit <br /> amet consectetur adipisicing <br />
              elit. Pariatur!
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl my-2 font-bold">Vegetarian</h2>
            <p className="text-[20px] font-poppins">
              Lorem ipsum, dolor sit <br /> amet consectetur adipisicing <br />
              elit. Pariatur!
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl my-2 font-bold">Pepperoni</h2>
            <p className="text-[20px] font-poppins">
              Lorem ipsum, dolor sit <br /> amet consectetur adipisicing <br />
              elit. Pariatur!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
