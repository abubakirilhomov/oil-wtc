'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner() {
  const [slides, setSlides] = useState([]);

  const fetchBanners = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/v1/banners');
      const data = await response.json();
      setSlides(data.data); // Assuming the data is in the "data" field
    } catch (error) {
      console.error('Error fetching banners:', error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-black opacity-50',
          bulletActiveClass: '!opacity-100',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide._id}>
            <div className="relative flex flex-col md:flex-row w-full md:h-[500px] lg:h-[700px] ">
              <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16">
                <h2 className=" text-5xl font-bold md:text-5xl lg:text-6xl  bg-gradient-to-r from-blue-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 mb-6">
                  {slide.description}
                </p>
                {slide.buttonText && (
                  <button className="bg-transparent border border-gray-400 text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 w-max">
                    {slide.buttonText}
                  </button>
                )}
              </div>
              <div className="flex-1">
                <img
                  src={`http://localhost:9000${slide.images[0]}`}
                  alt={slide.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination absolute bottom-4 left-4 z-10 flex space-x-2"></div>
    </div>
  );
}
