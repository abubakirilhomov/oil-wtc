import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper';
import { FaArrowLeft } from "react-icons/fa6";

// Import Swiper core and required modules
SwiperCore.use([Navigation, Pagination, Mousewheel]);

const ProductionSwiperL3 = ({ images, title }) => {
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
    <div className="w-full h-auto md:h-screen flex flex-col bg-white max-w-[90%] mx-auto">
      {/* Top section for titles */}
      <div className="w-full bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
          {title}
        </h2>
      </div>
  
      {/* Bottom section for Swiper */}
      <div className="w-full flex-grow relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{ clickable: true, type: 'bullets', el: '.custom-pagination' }}
          className="h-[300px] md:h-[500px] rounded-lg"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {isMobile && (
                <div className="absolute bottom-2 left-0 w-full text-center bg-opacity-60 bg-black text-white py-2">
                  {item.title}
                </div>
              )}
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

export default ProductionSwiperL3;
