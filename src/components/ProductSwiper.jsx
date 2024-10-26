'use client';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductSwiper = () => {
  const [products, setProducts] = useState([]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/v1/products').then(res => res.json());
      setProducts(response);
      console.log("Response: ", response);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Helper function to truncate text
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
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
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="px-10"
      >
        {products.map((product, index) => (
          <SwiperSlide 
            key={product._id} 
            className={`flex flex-col items-center relative group ${index !== 0 ? 'border-l border-black' : ''}`}
          >
            <img
              src={`http://localhost:9000/${product.image.main_images}`}
              alt={product.name}
              className="w-40 h-64 object-cover rounded-lg group-hover:opacity-50 transition-opacity duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-xs p-4">
                <h3 className="text-2xl font-bold mb-2 text-black">{product.name}</h3>
                <p className="text-md text-gray-700 mb-1">
                  {truncateText(product.description, 20)}
                </p>
                <p className="text-lg ">
                  Price: ${product.price} {product.discount_price && `(Discount: $${product.discount_price})`}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center mt-4 gap-7 ">
        <div
          ref={prevRef}
          className="swiper-button-prev1 cursor-pointer text-4xl text-gray-700 hover:text-gray-900"
        >
          <FaArrowLeft className="text-2xl" />
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next0 cursor-pointer text-4xl text-gray-700 hover:text-gray-900"
        >
          <FaArrowRight className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductSwiper;