"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Для иконок
import ProductSwiper from "@/components/ProductSwiper"; // Если хотите включить Swiper здесь
import productsData from "@/data/products"; // Импорт локальных данных продуктов
import Image from "next/image"; // Импорт компонента Image

const Products = () => {
  const [showCategory, setShowCategory] = useState(false);

  // Инициализация категорий с локальными данными
  const [categories] = useState([
    { _id: "1", category_name: "Синтетические масла" },
    { _id: "2", category_name: "Минеральные масла" },
    { _id: "3", category_name: "Полусинтетические масла" },
    { _id: "4", category_name: "ДВС масла" },
    { _id: "5", category_name: "Трансмиссионные масла" },
    // Добавьте больше категорий по необходимости
  ]);

  // Инициализация продуктов с локальными данными
  const [products] = useState(productsData);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products); // Инициализация всеми продуктами

  // Обновление отфильтрованных продуктов на основе выбранных категорий
  useEffect(() => {
    if (selectedCategories.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          selectedCategories.includes(product.category)
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategories, products]);

  const toggleCategory = () => setShowCategory(!showCategory);

  const handleCheckboxChange = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col items-start min-h-screen pt-16">
      <div className="flex w-full max-w-7xl mx-auto mt-8">
        {/* Боковая панель */}
        <aside className="w-1/4 p-4 mr-8 bg-gray-100 rounded-lg shadow-md">
          <div className="space-y-4">
            <div>
              <div
                className="flex justify-between items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-md"
                onClick={toggleCategory}
              >
                <h2 className="font-semibold text-lg">Категория</h2>
                {showCategory ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showCategory && (
                <div className="pl-4 mt-2 space-y-1 flex flex-col">
                  {categories.map((cat) => (
                    <label
                      key={cat._id}
                      className="flex items-center bg-gray-50 px-3 py-2 rounded-md hover:bg-gray-200"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.category_name)}
                        onChange={() => handleCheckboxChange(cat.category_name)}
                        className="accent-blue-500"
                      />
                      <span className="ml-2">{cat.category_name}</span>
                    </label>
                  ))}
                </div>
              )}
              <hr className="my-4 border-t-2 border-gray-300" />
            </div>
          </div>
        </aside>

        {/* Основное содержимое */}
        <main className="w-3/4 p-4">
          <h2 className="text-6xl font-extrabold mb-8 text-gray-900 leading-tight">
            Для грузовых и тяжелых коммерческих автомобилей
          </h2>

          {/* Включение компонента ProductSwiper */}
          <ProductSwiper />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link href={`/products/${product._id}`} key={product._id}>
                  <div className="flex flex-col h-full w-full p-6 border-2 rounded-lg shadow-xl bg-gradient-to-r from-gray-50 via-gray-100 to-white cursor-pointer transition-transform transform hover:scale-105">
                    <Image
                      src={product.image.main_images[0]}
                      alt={product.name}
                      width={600} 
                      height={400}
                      className="w-full h-[400px] object-cover rounded-lg mb-4"
                    />
                    <div className="mt-auto text-center">
                      <h3 className="text-3xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-xl text-gray-600 col-span-2">
                Нет продуктов, соответствующих выбранным категориям.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
