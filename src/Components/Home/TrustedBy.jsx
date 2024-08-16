import React from 'react';
import "./styles.css"
const TrustedBy = () => {
  return (
    <div className='text-black max-w-full min-h-screen flex flex-col items-start justify-center lg:py-10 p-6'>
      <h1 
        data-aos="fade-up"
        data-aos-duration="500" 
        className='flex items-center justify-center w-full font-bungee text-5xl font-semibold text-black my-10'>
        MY RECENT PROJECTS!
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
            <span className="case-study-text">Case Study 1</span>
          </div>
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
            <span className="case-study-text">Case Study 2</span>
          </div>
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
            <span className="case-study-text">Case Study 3</span>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
            <span className="case-study-text">Case Study 4</span>
          </div>
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
            <span className="case-study-text">Case Study 5</span>
          </div>
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
            <span className="case-study-text">Case Study 6</span>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
            <span className="case-study-text">Case Study 7</span>
          </div>
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
            <span className="case-study-text">Case Study 8</span>
          </div>
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
            <span className="case-study-text">Case Study 9</span>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
            <span className="case-study-text">Case Study 10</span>
          </div>
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
            <span className="case-study-text">Case Study 11</span>
          </div>
          <div className="relative case-study">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
            <span className="case-study-text">Case Study 12</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBy;
