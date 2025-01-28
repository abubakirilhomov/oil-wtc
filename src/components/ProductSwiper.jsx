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

  // Fetch products on mount
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

  // Helper: break the products array into chunks of `size`
  const chunkArray = (array, size) =>
    array.reduce(
      (acc, _, i) =>
        (i % size === 0 ? acc.push(array.slice(i, i + size)) : acc, acc),
      []
    );

  // Adjust the chunk size to show a certain number of products per slide
  const productChunks = chunkArray(products, 6);

  // Helper: build a proper image URL with a fallback
  const buildImageUrl = (imgPath) => {
    if (!imgPath) return "https://via.placeholder.com/300x200";
    // Ensure there's only one slash between host and path
    // e.g., if imgPath already starts with '/', it won’t double-up
    if (!imgPath.startsWith("/")) imgPath = `/${imgPath}`;
    return `https://bakend-wtc.onrender.com${imgPath}`;
  };

  return (
    <div className="p-14">
      {/* Header with arrows */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-black">
          Вся продукция Sintec
        </h1>
        <div className="flex items-center gap-7">
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
      </div>

      {/* Loading state */}
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
            // Swiper needs to know about the ref elements before init
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className="px-10 max-w-[80%]"
        >
          {productChunks.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {chunk.map((product) => {
                  // Check if main_images or all_images exist, then build the image URL
                  const mainImages = product?.image?.main_images || [];
                  const allImages = product?.image?.all_images || [];

                  let displayImage = null;
                  if (mainImages.length > 0) {
                    displayImage = buildImageUrl(mainImages[0]);
                  } else if (allImages.length > 0) {
                    displayImage = buildImageUrl(allImages[0]);
                  } else {
                    displayImage = "https://via.placeholder.com/300x200";
                  }

                  return (
                    <Link
                      key={product._id}
                      href={`/products/`}
                    >
                      <div className="relative card card-compact bg-opacity-55 hover:bg-opacity-100 duration-300 bg-primaryBlue shadow-xl p-4">
                        <img
                          src={displayImage}
                          alt={product.name || "No Name"}
                          className="w-full h-52 object-cover rounded-lg z-[999] duration-300"
                          onError={(e) => {
                            // Fallback if the image fails to load
                            e.target.src = "https://via.placeholder.com/300x200";
                          }}
                        />
                        <h3 className="text-lg mb-2 mt-3 text-center text-white">
                          {product.name || "No Name"}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductSwiper;
