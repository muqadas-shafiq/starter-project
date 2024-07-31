import React from "react";
import Images from "../../data";
import GetandEstimateButtn from "../../components/GetandEstimateButtn";
import BookACallButton from "../../components/BookACallButton";
import GetConsultingSection from "../../components/GetConsultingSection";
import { IoMdArrowDropright } from "react-icons/io";
import ParticlesComponent from "../../components/particles";

import BenefitsUs from "../services/BenefitsWorkWithUs";

const AboutPage = () => {
  const {groupTwo,singleTwo, group} = Images
  return (
    <>
      <div className="">
      <ParticlesComponent id="particles"/>
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className="  text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Your Partner for Ultimate Success
            </h1>
            <p className=" font-poppins pt-6">
              Infolatach Ltd is expanding steadily, thanks to the dedicated
              efforts of our team. In a relatively short time, we have achieved
              prominence as an IT consulting and software development firm. We
              value our clients and their needs, and as a result, the clients
              respect us for our tireless efforts, time control, transparency,
              and consistency while providing top-notch services. Come to us
              with your vision, and we will design game-changing solutions for
              you!
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={group}
          alt="helo"
          className=" w-full minh-screen"
          width={1000}
          height={500}
        />
      </div>
      <div className=" flex lg:flex-row flex-col justify-between items-start py-20 lg:px-28 p-6 gap-10 min-h-screen w-full bg-white">
        <div className=" lg:w-1/2">
          <h1 className=" text-4xl font-heading mb-4 font-semibold uppercase text-forth">
            Our story{" "}
          </h1>
          <p className=" lg:text-sm">
            OlumiTech emerged in the technology landscape with a vision to
            propel businesses into the digital age. With a foundation built on
            meticulous planning and strategic networking, Olumi has
            established a robust network that ensures service delivery of the
            highest caliber, personalized to meet the unique needs of each
            client.<br /> <br />Olumi is supported by a team of experienced
            professionals from various fields within the technology sector. This
            team encompasses IT consultants, web designers, developers, data
            scientists, and cyber engineers.<br /> <br /> Together, we are committed to
            providing comprehensive digital solutions tailored to meet the
            needs of our clients, regardless of the project&apos;s scale. <br /> <br />
             The
            collective expertise ensures that Olumi can handle a wide array
            of digital challenges, delivering quality results consistently. For
            those seeking an IT partner that not only promises but consistently
            delivers business excellence, Olumi represents the perfect ally.
            <br /><br />
            Olumi invites businesses to embark on a transformative journey,
            leveraging dedication, expertise, and a global perspective to
            elevate their ventures to unprecedented heights. <br /> <br />With Olumi,
            businesses can experience the difference that commitment, skill, and
            a forward-thinking approach make in achieving their digital
            transformation goals.
            <br />
          
          </p>
        </div>
        <div className=" lg:w-1/2 flex items-end justify-end bg-white">
          <img src={singleTwo} alt="helo" width={500} height={400} />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row justify-between items-start py-20 lg:px-28 p-6 gap-10 min-h-screen w-full bg-secondary">
        <div className=" lg:w-1/2">
          <img src={groupTwo} alt="helo" width={500} height={500} />
        </div>
        <div className=" lg:w-1/2 ">
          <h1 className=" text-4xl font-heading mb-6 font-semibold uppercase text-forth">
            Our Mission{" "}
          </h1>
          <p className=" lg:text-2xl mb-6">
            We prioritize our clients and, hence, develop inventive,
            consumer-centric digital solutions to solve real-world problems
            while empowering your business and accelerating it beyond your
            expectations.
            <br />
            <br />
            Create products and services that are premium quality and match your
            requirements so that you get scalable solutions to outpace your
            competition.
            <br />
            <br />
            Foster long-lasting relationships with our clients so they come back
            to us with all their digital needs, and we can grow together.
          </p>
        </div>
      </div>
      <BenefitsUs />
      <div className=" py-20 px-20 min-h-[500px] flex flex-col items-center justify-start bg-white">
        <h1 className=" text-4xl font-heading text-forth font-semibold mb-10">
          Our Goals
        </h1>
        <ul className="flex flex-col gap-5 font-poppins text-center">
          <li>
            {" "}
            We strategize our solutions to help you revolutionize your business and produce the desired results.

          </li>
          <li>
            {" "}
            We create aesthetically inspiring software solutions for your business to take it to new heights.

          </li>
          <li>
            {" "}
            We assist in transforming your ideas into well-executed projects.
            </li>
          <li>
            {" "}
            Our team works with you to solve any challenges along the way.
            </li>
        </ul>
      </div>
      <GetConsultingSection
        heading={" Interested in different services?"}
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
    </>
  );
};

export default AboutPage;
