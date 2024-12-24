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
    <div className="flex flex-col min-h-screen w-full ">
      <div className="flex w-full max-w-7xl mx-auto mt-8">
        <aside className="w-1/4 p-4 mr-8 mt-12">
          <div className="space-y-4">
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleCategory}
              >
                <h2 className="font-semibold">Категория</h2>
                {showCategory ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showCategory && (
                <div className="pl-4 mt-2 space-y-1 flex flex-col">
                  {category.map((cat) => (
                    <label key={cat._id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.category_name)}
                        onChange={() =>
                          handleCheckboxChange(cat.category_name)
                        }
                      />
                      <span className="ml-2">{cat.category_name}</span>
                    </label>
                  ))}
                </div>
              )}
              <hr className="my-2 border-t-2 border-gray-400" /> 
            </div>
          </div>
        </aside>

        <main className="w-3/4 p-4 mt-11">
          <h2 className="text-4xl font-bold mb-6">
            Для грузовых и тяжелых коммерческих автомобилей
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link href={`/products/${product._id}`} key={product._id}>
                <div className="p-6 border rounded-lg shadow-lg bg-white text-center cursor-pointer">
                  <img
                    src={`http://localhost:9000/${product.image.main_images[0]}`}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="text-green-600 font-bold">{product.price} UZS</p>
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
