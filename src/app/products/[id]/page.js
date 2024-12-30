"use client";

import React, { useEffect, useState } from "react";

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);

  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch(`https://bakend-wtc.onrender.com/api/v1/products/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const secondaryImages = product.image?.secondary_images || [];


  return (
    <div className="max-w-7xl mx-auto mt-8 pt-24 flex">
      {/* Левая часть с дополнительными изображениями */}
      <div className="w-1/5 space-y-4">
        {secondaryImages.length > 0 ? (
          secondaryImages.map((img, index) => (
            <img
              key={index}
              src={`https://bakend-wtc.onrender.com/${img}`}
              alt={`Image ${index + 1}`}
              className="w-full h-28 object-cover rounded-lg shadow"
            />
          ))
        ) : (
          <p className="text-left text-lg text-gray-600">Нет дополнительных изображений.</p>
        )}
      </div>

      {/* Центральное изображение */}
      <div className="flex-1 mx-8">
        <img
          src={`https://bakend-wtc.onrender.com//${product.image.main_images[0]}`}
          alt={product.name}
          className="w-full h-[600px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Правая часть с текстом */}
      <div className="w-1/3 space-y-6">
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
          <strong>Цена:</strong> {product.price} UZS
        </p>
        <p className="text-lg text-gray-700">
          <strong>Наличие:</strong> {product.stock > 0 ? "В наличии" : "Нет в наличии"}
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