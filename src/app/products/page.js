"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // For icons

const Products = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error("Error fetching categories:", error));

    fetch("http://localhost:9000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

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
                  {category.map((cat) => (
                    <label
                      key={cat._id}
                      className="flex items-center bg-gray-50 px-3 py-2 rounded-md hover:bg-gray-200"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.category_name)}
                        onChange={() =>
                          handleCheckboxChange(cat.category_name)
                        }
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

        <main className="w-3/4 p-4">
          <h2 className="text-6xl font-extrabold mb-8 text-gray-900 leading-tight">
            Для грузовых и тяжелых коммерческих автомобилей
          </h2>
          
          <div className="grid grid-cols-2 gap-12 mt-12">
            {filteredProducts.map((product) => (
              <Link href={`/products/${product._id}`} key={product._id}>
                <div className="flex flex-col h-full w-5/6 p-6 border-2 rounded-lg shadow-xl bg-gradient-to-r from-gray-50 via-gray-100 to-white cursor-pointer transition-transform transform hover:scale-105">
                  <img
                    src={`http://localhost:9000/${product.image.main_images[0]}`}
                    alt={product.name}
                    className="w-full h-[400px] object-cover rounded-lg mb-4"
                  />
                  <div className="mt-auto text-center">
                    <h3 className="text-3xl font-bold">{product.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
