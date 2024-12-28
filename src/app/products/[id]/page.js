// pages/products/[id].jsx или app/products/[id]/page.jsx

"use client";

<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Для Next.js App Router
import Link from "next/link";
import productsData from "@/data/products"; // Импорт локальных данных продуктов
>>>>>>> 1a860336e80023c76d993dc01e674e390538badd

const ProductPage = () => {
  const [product, setProduct] = useState(null);
<<<<<<< HEAD

=======
  const [mainImage, setMainImage] = useState(""); // Хранение текущего главного изображения
  const [availableImages, setAvailableImages] = useState([]); // Список изображений
  const params = useParams();
>>>>>>> 1a860336e80023c76d993dc01e674e390538badd
  const { id } = params;

  useEffect(() => {
    if (id) {
      const foundProduct = productsData.find((prod) => prod._id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        const images = [foundProduct.image.main_images, ...(foundProduct.secondary_images || [])];
        setAvailableImages(images);
        setMainImage(images[0]); // Устанавливаем главное изображение
      } else {
        console.error("Product not found");
        setProduct(null);
      }
    }
  }, [id]);

  if (!product)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Продукт не найден.</p>
      </div>
    );

  const secondaryImages = product.image?.secondary_images || [];

  return (
<<<<<<< HEAD
    <div className="max-w-7xl mx-auto mt-8 pt-24 flex">
      {/* Левая часть с дополнительными изображениями */}
      <div className="w-1/5 space-y-4">
        {secondaryImages.length > 0 ? (
          secondaryImages.map((img, index) => (
            <img
              key={index}
              src={`http://localhost:9000/${img}`}
              alt={`Image ${index + 1}`}
              className="w-full h-28 object-cover rounded-lg shadow"
            />
          ))
        ) : (
          <p className="text-left text-lg text-gray-600">Нет дополнительных изображений.</p>
=======
    <div className="max-w-7xl mx-auto mt-8 pt-24 flex flex-col md:flex-row mb-10">
      <div className="w-full md:w-1/5 space-y-4">
        {availableImages.length > 0 ? (
          availableImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Изображение ${index + 1}`}
              className={`w-full h-28 object-cover rounded-lg shadow cursor-pointer ${mainImage === img ? "ring-2 ring-blue-500" : ""}`}
              onClick={() => setMainImage(img)} // Обновление главного изображения при клике
            />
          ))
        ) : (
          <p className="text-left text-lg text-gray-600">
            Нет дополнительных изображений.
          </p>
>>>>>>> 1a860336e80023c76d993dc01e674e390538badd
        )}
      </div>

      {/* Центральное изображение */}
<<<<<<< HEAD
      <div className="flex-1 mx-8">
        <img
          src={`http://localhost:9000/${product.image.main_images[0]}`}
=======
      <div className="w-full md:w-3/5 mx-8">
        <img
          src={mainImage}
>>>>>>> 1a860336e80023c76d993dc01e674e390538badd
          alt={product.name}
          className="w-full h-[600px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Правая часть с текстом */}
<<<<<<< HEAD
      <div className="w-1/3 space-y-6">
=======
      <div className="w-full md:w-1/3 space-y-6 mt-8 md:mt-0">
>>>>>>> 1a860336e80023c76d993dc01e674e390538badd
        {/* Название */}
        <h2 className="text-5xl font-bold text-gray-800">{product.name}</h2>

        {/* Кнопки */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100 transition duration-300">
            Купить в розницу
          </button>
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
            Купить онлайн
          </button>
        </div>

        {/* Описание и характеристики */}
        <p className="text-lg text-gray-700">
          <strong>Описание:</strong> {product.description}
        </p>
        <p className="text-lg text-gray-700">
          <strong>Категория:</strong> {product.category}
        </p>
        <p className="text-lg text-gray-700">
<<<<<<< HEAD
          <strong>Цена:</strong> {product.price} UZS
        </p>
        <p className="text-lg text-gray-700">
          <strong>Наличие:</strong> {product.stock > 0 ? "В наличии" : "Нет в наличии"}
=======
          <strong>Цена:</strong> {product.price.toLocaleString()} UZS
        </p>
        <p className="text-lg text-gray-700">
          <strong>Наличие:</strong>{" "}
          {product.stock > 0 ? "В наличии" : "Нет в наличии"}
>>>>>>> 1a860336e80023c76d993dc01e674e390538badd
        </p>
        <p className="text-lg text-gray-700">
          <strong>Объем:</strong> {product.volume || "N/A"}
        </p>
        <p className="flex items-center text-lg text-gray-700">
          <strong>Рейтинг:</strong>
          <span className="ml-2 text-yellow-500">
            {"★".repeat(product.rating)}{" "}
            {"☆".repeat(5 - product.rating)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
