// components/ProductSwiper.jsx

"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import productsData from "@/data/products"; // Импорт локальных данных продуктов

const ProductSwiper = () => {
  // Инициализация локальных продуктов
  const [products] = useState(productsData);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const truncateText = (text, limit) => {
    if (typeof text !== "string") {
      return "Нет описания"; // Запасной вариант для нестроковых или неопределенных текстов
    }
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div className="p-14 bg-[#f8f6f1]">
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-black">Линейка Масел</h1>
        <h2 className="text-4xl text-red-600 font-bold">LEMARC</h2>
        <p className="text-lg mt-4 max-w-md">
          Высокотехнологичные смазочные материалы Lemarc закрывают широкий спектр
          потребностей в обслуживании различного оборудования и техники.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 3000, // Увеличенный интервал для лучшего пользовательского опыта
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="px-10"
      >
        {products.map((product) => (
          <SwiperSlide
            key={product._id}
            className="flex flex-col items-center relative group border-l border-black"
          >
            <Link href={`/products/${product._id}`}>
              <div className="relative">
                <Image
                  src={product.image.main_images}
                  alt={product.name}
                  width={240} // Увеличенная ширина изображения
                  height={360} // Увеличенная высота изображения
                  className="object-cover rounded-lg group-hover:opacity-50 transition-opacity duration-300"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-xs p-4">
                    <h3 className="text-2xl font-bold mb-2 text-black">
                      {product.name || "Без названия"}
                    </h3>
                    <p className="text-md text-gray-700 mb-1">
                      {truncateText(product.description, 50)}
                    </p>
                    <p className="text-lg">
                      Цена: {product.price.toLocaleString()} UZS{" "}
                      {product.discount_price &&
                        ` (Скидка: ${product.discount_price.toLocaleString()} UZS)`}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-4">
              <div className="flex gap-2 mt-2">
                {product.image.all_images?.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Дополнительное изображение ${index + 1}`}
                    width={60} // Маленькие изображения
                    height={60}
                    className="object-cover rounded shadow-sm"
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кнопки навигации */}
      <div className="flex items-center mt-4 gap-7">
        <div
          ref={prevRef}
          className="swiper-button-prev4 cursor-pointer text-4xl text-gray-700 hover:text-gray-900"
        >
          <FaArrowLeft className="text-2xl" />
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next3 cursor-pointer text-4xl text-gray-700 hover:text-gray-900"
        >
          <FaArrowRight className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductSwiper;
