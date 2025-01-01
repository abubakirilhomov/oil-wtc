"use client";

import React, { useEffect, useState } from "react";

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [id, setId] = useState(null);

  // 1. Получаем id из params
  useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    unwrapParams();
  }, [params]);

  // 2. Делаем запрос на сервер, если id определён
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

  // 3. Пока товар не загружен, показываем «Загрузка...»
  if (!product) {
    return (
      <div className="text-center text-lg font-semibold text-gray-600">
        Загрузка...
      </div>
    );
  }

  // 4. Обрабатываем ситуацию, если массивы изображений могут быть undefined
  const mainImages = product?.image?.main_images || [];
  const secondaryImages = product?.image?.secondary_images || [];
  const allImages = product?.image?.all_images || [];

  return (
    <div className="container min-h-screen max-w-7xl mx-auto mt-8 space-y-6">
      {/* Пример: выводим все изображения (all_images) в сетке */}
      <div className="grid grid-cols-4 gap-4">
        {allImages.length > 0 ? (
          allImages.map((img, idx) => (
            <img
              key={idx}
              src={`https://bakend-wtc.onrender.com${img}`}
              alt={`all_images_${idx}`}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          ))
        ) : (
          <p className="col-span-4 text-lg text-gray-600">
            Нет доступных изображений.
          </p>
        )}
      </div>

      {/* Пример: выводим основное изображение, если оно есть */}
      <div className="flex space-x-8">
        {/* Левая колонка: дополнительные изображения */}
        <div className="w-1/5 space-y-4">
          {secondaryImages.length > 0 ? (
            secondaryImages.map((img, index) => (
              <img
                key={index}
                src={`https://bakend-wtc.onrender.com${img}`}
                alt={`secondary_image_${index}`}
                className="w-full h-28 object-cover rounded-lg shadow-md"
              />
            ))
          ) : (
            <p className="text-left text-lg text-gray-600">
              Нет дополнительных изображений.
            </p>
          )}
        </div>

        {/* Центральное (основное) изображение */}
        <div className="flex-1 mx-8">
          {mainImages.length > 0 ? (
            <img
              src={`https://bakend-wtc.onrender.com${mainImages[0]}`}
              alt={product.name}
              className="w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
          ) : (
            <p className="text-lg text-gray-600">Нет основного изображения.</p>
          )}
        </div>

        {/* Правая часть с описанием товара */}
        <div className="w-1/3 space-y-6">
          {/* Название */}
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            {product.name}
          </h2>

          {/* Кнопки */}
          <div className="flex space-x-4">
            <button className="px-6 py-3 border border-primaryBlue text-primaryBlue rounded-full hover:bg-primaryBlue hover:text-white transition duration-300">
              Купить в розницу
            </button>
            <button className="px-6 py-3 bg-primaryBlue text-white rounded-full hover:bg-blue-900 transition duration-300">
              Купить онлайн
            </button>
          </div>

          {/* Описание и характеристики */}
          <div className="space-y-2">
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
              <strong>Наличие:</strong>{" "}
              {product.stock > 0 ? "В наличии" : "Нет в наличии"}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Объем:</strong> {product.volume || "N/A"}
            </p>
            <p className="flex items-center text-lg text-gray-700">
              <strong>Рейтинг:</strong>
              <span className="ml-2 text-yellow-500">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
