import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper';
import { FaArrowLeft } from "react-icons/fa6";

// Import Swiper core and required modules
SwiperCore.use([Navigation, Pagination, Mousewheel]);

const ProductionSwiperL2 = ({ images, title }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint at 768px
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTitleClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Slide to the corresponding image
    }
  };

  return (
    <div className="w-full h-auto md:h-screen justify-center flex flex-col md:flex-row bg-white">
      {/* Right side for titles */}
      <div className="w-full md:w-1/2 p-4 md:p-8 overflow-y-auto bg-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-800">
          {title}
        </h2>
        <div className="h-[4px] md:h-[6px] w-full mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-orange-500"></div>
        <ul className="">
          {images.map((item, index) => (
            <li
              key={index}
              className={`border-b cursor-pointer transition-all hover:bg-gray-100 px-2 py-2 md:py-4 flex items-center justify-between ${
                activeIndex === index ? 'font-bold text-blue-600' : ''
              }`}
              onClick={() => handleTitleClick(index)} // Navigate to the clicked image
            >
              <span className="text-sm md:text-lg text-gray-700 font-medium">
                {item.title}
              </span>
              {activeIndex === index && (
                <span className="text-xl md:text-2xl text-gray-400 group-hover:text-gray-600 animate-rotate-arrow">
                 <FaArrowLeft />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
  
      {/* Left side for Swiper */}
      <div className="w-full md:w-1/2 relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Set the Swiper instance
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track the active index
          direction={isMobile ? 'horizontal' : 'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{ clickable: true, type: 'bullets', el: '.custom-pagination' }}
          className="h-[200px] md:h-full"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-t-md md:rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination absolute bottom-4 left-4"></div>
      </div>
  
      <style jsx>{`
        .animate-rotate-arrow {
          display: inline-block;
          animation: rotateArrow 0.1s ease-in-out forwards;
        }
  
        @keyframes rotateArrow {
          from {
            transform: rotate(-90deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ProductionSwiperL2;
