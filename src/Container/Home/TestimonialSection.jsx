import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const keenSliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderRef.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });

      const keenSliderPrev = document.getElementById('keen-slider-previous');
      const keenSliderNext = document.getElementById('keen-slider-next');

      const keenSliderPrevDesktop = document.getElementById('keen-slider-previous-desktop');
      const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

      keenSliderPrev?.addEventListener('click', () => keenSliderRef.current.prev());
      keenSliderNext?.addEventListener('click', () => keenSliderRef.current.next());

      keenSliderPrevDesktop?.addEventListener('click', () => keenSliderRef.current.prev());
      keenSliderNextDesktop?.addEventListener('click', () => keenSliderRef.current.next());
    }

    return () => keenSliderRef.current?.destroy();
  }, []);

  return (
    <section className=" bg-secondary font-poppins">
          <div 
   
   className=' bg-secondary  flex flex-col items-start justify-center  px-28'>
      
    {/* <p className=' font-poppins'>Wellcome to <span className='text-md text-forth font-semibold'>INFOLATCH</span></p> */}
<h1  className=' font-overlock text-4xl font-semibold text-forth mt-10 mb-4'>Don't just take our word for it...</h1>
<hr  className=' pt-4 w-[200px] border-t-4 border-forth'/>
<p className=' text-sm font-poppins w-[600px]'>Testimonials that speak for themselves
</p>
</div>
      <div className="mx-auto max-w-[1340px] px-4 pb-12 sm:px-6 lg:me-0 lg:pb-16 lg:pe-0 lg:ps-8 xl:pb-24">

        <div className=" flex flex-col justify-center items-center">

          <div className="-mx-6 lg:col-span-2 lg:mx-0 ">
            <div ref={sliderRef} id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide w-[800px]">
                <blockquote className="flex h-full flex-col justify-between bg-gray-100  p-6 shadow-sm sm:p-8 lg:p-12 mt-6">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {/* SVG Stars */}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-tirtry sm:text-3xl">Stayin' Alive</p>
                      <p className="mt-4 leading-relaxed ">
                        No, Rose, they are not breathing. And they have no arms or legs … Where are
                        they? <span> You know what? If we come across somebody</span> with no arms or legs, do we
                        bother resuscitating them? I mean, what quality of life do we have there?
                      </p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium  sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
                
              </div>

              {/* Repeat similar blocks for additional slides */}
              
            </div>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4 justify-end">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-tirtry p-3 text-tirtry transition hover:bg-tirtry hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-tirtry p-3 text-tirtry transition hover:bg-tirtry hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
