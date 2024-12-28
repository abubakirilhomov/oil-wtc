"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner() {
  const slides = [
    {
      _id: "1",
      type: "video",
      media: "/Main_banner_winter.mp4",
      link: "https://example.com",
    },
    {
      _id: "2",
      type: "image",
      media:
        "https://sinteclubricants.ru/novaya-glavnaya-test/img/slide_2.webp",
    },
    {
      _id: "3",
      type: "video",
      media:
        "https://sinteclubricants.ru/upload/iblock/1ee/iqcex9rbf19cced34a1ndi2a487ydsof/Hor.mp4",
      link: "https://example.com",
    },
    {
      _id: "4",
      type: "image",
      media:
        "https://sinteclubricants.ru/novaya-glavnaya-test/img/slide_1.webp",
    },
  ];

  return (
    <div className="relative mt-10">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass:
            "!w-10 !h-2 rounded-none !bg-primaryBlue opacity-50",
          bulletActiveClass: "!opacity-100",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="max-w-[100%]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id}>
            {slide.link ? (
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-full">
                  {slide.type === "video" ? (
                    <video
                      src={slide.media}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={slide.media}
                      alt={`Slide ${slide._id}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </a>
            ) : (
              <div className="w-full h-full">
                {slide.type === "video" ? (
                  <video
                    src={slide.media}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={slide.media}
                    alt={`Slide ${slide._id}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомные кнопки */}
      <button className="custom-prev absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-opacity-0 text-primaryBlue rounded-full p-3">
        <GrPrevious size={33} />
      </button>
      <button className="custom-next absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-opacity-0 text-primaryBlue rounded-full p-3">
        <GrNext size={33} />
      </button>
      <div className="custom-pagination justify-center absolute bottom-4 left-4 z-10 flex space-x-2"></div>
    </div>
  );
}
