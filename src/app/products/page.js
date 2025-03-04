"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Products = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://bakend-wtc.onrender.com/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error("Error fetching categories:", error));

    fetch("https://bakend-wtc.onrender.com/api/v1/products")
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
    <div className="container flex flex-col min-h-screen">
      <div className="flex w-full max-w-7xl mx-auto mt-8">
        {/* Sidebar */}
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

        {/* Main Content */}
        <main className="w-3/4 p-4">
          <h2 className="text-4xl font-extrabold mb-8 text-gray-900 leading-tight">
            Для грузовых и тяжелых коммерческих автомобилей
          </h2>

          <div className="grid grid-cols-2 gap-8 mt-8">
            {filteredProducts.map((product) => (
              <Link href={`/products/${product._id}`} key={product._id}>
                <div className="flex flex-col h-full w-full p-4 border rounded-lg shadow-md bg-gradient-to-r from-gray-50 via-gray-100 to-white cursor-pointer transition-transform transform hover:scale-105">
                  <img
                    src={
                      product?.image?.main_images?.length
                        ? 
                          `https://bakend-wtc.onrender.com${product.image.main_images[0]}`
                        : // Fallback if there's no `main_images` array
                          "https://via.placeholder.com/300x200"
                    }
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    onError={(e) => {
                      // Fallback if the image URL fails
                      e.target.src = "https://via.placeholder.com/300x200";
                    }}
                  />
                  <div className="mt-auto text-center">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
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
