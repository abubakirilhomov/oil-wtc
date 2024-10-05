'use client'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper'; // Import directly from 'swiper'

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://lemarc.ru/uploads/banner_images/35da12d4a90c7285f1c4d07eda65f6c5.png',
    title: 'Набор QUALARD 5W-40 + Lemarc',
    subtitle: 'LEXPERT',
    description: 'Скоро в продаже!',
    buttonText: 'Проверить двигатель с LEXPERT!',
  },
  {
    image: 'https://lemarc.ru/uploads/banner_images/97d561f926ce8ae8027bfe3595c3cfa5.png',
    title: 'Защита двигателя',
    subtitle: 'теперь в наших руках',
    description: 'LEMARC x ATOMIC HEART',
  },
];

export default function Home() {
  return (
    <div className="relative mt-7">
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
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container relative flex flex-col md:flex-row w-full md:h-[500px] lg:h-[700px]">
              <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16">
                <h2 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  {slide.title}
                </h2>
                <h3 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-orange-500">
                  {slide.subtitle}
                </h3>
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
                  src={slide.image}
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
