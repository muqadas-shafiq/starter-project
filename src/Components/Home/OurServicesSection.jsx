
import React, { useState } from 'react';
import { FaAngleDown, FaPaintRoller } from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";
import { SiCodesignal, SiAntdesign } from "react-icons/si";
import { FaCloud } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import ExploreMeButton from '../ExploreMeButton';

const OurServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Software Development');
  const [height, setHeight] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [show, setShow] = useState(false);

  const toggleDescription = (id) => {
    setActiveId(prevId => {
      const newActiveId = prevId === id ? null : id;
      setHeight(newActiveId !== null);
      return newActiveId;
    });
  };

  const Services = [
    {
      id: 1,
      h3: 'Software Development',
      src: FaPaintRoller,
      des: `At Olumi, we specialize in creating custom software solutions that are reliable, scalable, and tailored to your  specific needs.Our expertise includes:`,
      li: `Enterprise software development`,
      li2: "Integrated solutions",
      li3: "Custom application development",
      des2: "Partner with us for comprehensive support, from design to deployment, and benefit from our bespoke software solutions that help businesses to stand out in the market, reach new heights and achieve business goals. ",
      to: '/services',
    },
    {
      id: 2,
      h3: 'Digital Design',
      src: MdDesignServices,
      des: 'Our team of digital design experts is dedicated to crafting tailored solutions that not only personify your brand but also provide a seamless experience for your consumers across all platforms and devices.From concept to launch, we will partner with you to create:',
      li: `Wireframes and prototypes that bring your vision to life`,
      li2: "UX/UI designs that delight and engage",
      li3: "Product designs that exceed expectations",
      des2: "Our goal is to create a digital presence that perfectly captures your brand's essence, values, and personality, setting you up for success in the digital landscape ",
      to: '/design',
    },
    {
      id: 3,
      h3: 'AI Solutions',
      src: SiAntdesign,
      des: `Our expert team designs and implements tailored AI solutions that cater to each client${`&apos;s`} specific needs, ensuring:`,
      li: `Optimized project costs and minimized risks`,
      li2: "Enhanced operational efficiency through automation",
      li3: "Actionable insights for strategic decision-making",
      des2: "Our seasoned IT professionals collaborate closely with clients to design and implement bespoke AI solutions that address unique challenges and goals. ",
      to: '/ai-service',
    },
    {
      id: 4,
      h3: 'SEO',
      src: TbSeo,
      des: 'In a crowded digital landscape, a strategic SEO plan is crucial for success. Our team of experts will help you:',
      li: ` Identify and capitalize on key opportunities`,
      li2: "Develop a content strategy that resonates with your audience",
      li3: "Build high-quality links to enhance your online credibility",
      des2: " work together to create a customized SEO plan that drives real results and takes your business to the next level. ",
      to: '/services/seo',
    },
    {
      id: 5,
      h3: 'Digital marketing',
      src: SiCodesignal,
      des: 'Our full-service, versatile, and dynamic digital marketing services are your first bet to the design strategies that will help you attract new clients and retain the old ones as well.',
      li: `- Enterprise software development`,
      li2: "- Integrated solutions",
      li3: "- Custom application development",
      des2: "Our content marketing strategy can help you deliver the right content and information to your audience that will create an impeccable image of your business. Lets; create magic with our content marketing services",
      to: '/services/digital-marketing',
    },
    {
      id: 6,
      h3: 'Cloud Solution',
      src: FaCloud,
      des: 'Our ultimate cloud solutions enable businesses to enhance their productivity while reducing their overheads and reduced time-to-market while switching to the cloud atmosphere seamlessly. ',
      li: `- Enterprise software development`,
      li2: "- Integrated solutions",
      li3: "- Custom application development",
      des2: "Our Cloud DevOps solutions help businesses simplify their operations so that they become faster andbetter. Team Olumi will enable you to use futuristic software delivery for unparalleled agility and velocity. ",
      to: '/cloud-service',
    },
  ];

  return (
    <div className={`w-full ${height ? `lg:min-h-[900px] ${activeId > 3 ? 'min-h-[1350px]' : 'min-h-[1200px]'}` : 'min-h-screen'} transition-all duration-200 trustedDiv  flex flex-col items-center justify-start py-10 px-6 lg:py-20 lg:px-28  text-secondary`}>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-overlock text-5xl mb-4 font-semibold text-center'>
            Our Services
          </h1>
          <p className='font-poppins lg:w-[500px]  text-center'>
          Explore Our Comprehensive Service Offerings and Solutions Tailored to Your Specific Needs
          </p>
          <hr className='mt-3 lg:w-[200px] border-t-4 border-tirtry items-center mx-auto' />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-start gap-2 pt-20 relative'>
        {Services.map((service) => (
          <div key={service.id} >
            <div onClick={() => toggleDescription(service.id)} className={`max-w-[590px] min-h-[100px] ${activeId === service.id ? 'bg-white text-forth' : 'bg-[#123139] text-secondary'} font-poppins p-6 flex gap-4 transition-all duration-200 shadow-lg cursor-pointer`}>
              <div className='flex flex-col gap-4 text-center'>
                <div className='flex gap-4 items-center'>
                  <div className='border-2 border-forth p-6 flex items-center w-12 justify-center rounded-full h-12'>
                    <p className={`${activeId === service.id ? 'text-primary' : 'text-secondary'} text-2xl`}>{<service.src />}</p>
                  </div>
                  <h3 className={`  font-poppins font-semibold lg:text-xl text-sm whitespace-nowrap ${activeId === service.id ? 'text-primary' : 'text-secondary'}`}>{service.h3}</h3>
                </div>
              </div>
            </div>
            {activeId === service.id && (
              <div className={`flex justify-start mx-auto left-0  flex-col absolute lg:h-[390px] lg:w-[1062px] bg-white text-primary z-40 py-2 lg:py-6 p-4 lg:px-10 font-poppins transition-all duration-150`}>
                <div className='hidden lg:flex justify-end items-center'>
                  <button onClick={() => toggleDescription(service.id)}><IoMdCloseCircle className='text-3xl text-forth' /></button>
                </div>
                <div className='flex flex-col items-start justify-start text-start'>
                  <h1 className='py-4 font-semibold capitalize text-forth text-2xl'> {service.h3}</h1>
                  <p className='text-sm lg:text-md '>{service.des}</p>
                <div className=' my-2'>
                <li>{service?.li}</li>
                  <li>{service?.li2}</li>
                  <li>{service?.li3}</li>
                </div>
                  <p className=' mt-4 text-sm lg:text-md'>{service.des2}</p>
                  <div className='mt-6'>
                    <ExploreMeButton to={service.to} />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesSection;
