"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ProductSwiper = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://bakend-wtc.onrender.com/api/v1/products"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const chunkArray = (array, size) =>
    array.reduce(
      (acc, _, i) =>
        (i % size === 0 ? acc.push(array.slice(i, i + size)) : acc, acc),
      []
    );

  const productChunks = chunkArray(products, 6);

  return (
    <div className="p-14 bg-[#f8f6f1]">
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-black">Линейка Масел</h1>
        <h2 className="text-4xl text-red-600 font-bold">LEMARC</h2>
        <p className="text-lg mt-4 max-w-md">
          Высокотехнологичные смазочные материалы Lemarc закрывают широкий
          спектр потребностей в обслуживании различного оборудования и техники.
        </p>
      </div>
      <div className="flex justify-end container max-w-[90%] mb-10 items-center mt-4 gap-7">
        <div
          ref={prevRef}
          className="swiper-button-prev4 cursor-pointer text-4xl text-gray-700 hover:text-primaryBlue"
        >
          <FaChevronLeft className="text-2xl" />
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next3 cursor-pointer text-4xl text-gray-700 hover:text-primaryBlue"
        >
          <FaChevronRight className="text-2xl" />
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg text-gray-500"></div>
        </div>
      ) : (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className="px-10 max-w-[80%]"
        >
          {productChunks.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-3 gap-4">
                {chunk.map((product) => (
                  <Link key={product._id} href="/products">
                    <div className="relative card card-compact bg-opacity-55 hover:bg-opacity-100 duration-300 bg-primaryBlue shadow-xl">
                      <img
                        src={`https://bakend-wtc.onrender.com//${product.image.main_images}`}
                        alt={product.name}
                        className="w-full h-52 object-cover rounded-lg z-[999] duration-300"
                      />
                      <h3 className="text-lg mb-2 mt-3 text-center text-white">
                        {product.name || "No Name"}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductSwiper;
