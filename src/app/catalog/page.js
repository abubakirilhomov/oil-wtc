"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch categories and products in parallel
    Promise.all([
      fetch("http://localhost:9000/api/v1/categories").then((res) => res.json()),
      fetch("http://localhost:9000/api/v1/products").then((res) => res.json()),
    ])
      .then(([categoriesData, productsData]) => {
        setCategories(categoriesData);
        setProducts(productsData);
        setFilteredProducts(productsData); // Initialize filtered products
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("There was an issue loading data.");
        setIsLoading(false);
      });
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

  const handleCheckboxChange = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg text-red-600"></span>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="flex w-full max-w-7xl mx-auto mt-8">
      {/* Sidebar with Fixed Positioning */}
      <aside
        className="w-1/4 p-4 space-y-4 bg-white shadow-md py-24"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div>
          <h2 className="font-semibold">Категория</h2>
          <div className="pl-4 mt-2 space-y-1 flex flex-col">
            {categories.length > 0 ? (
              categories.map((cat) => (
                <label key={cat._id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.category_name)}
                    onChange={() => handleCheckboxChange(cat.category_name)}
                  />
                  <span className="ml-2">{cat.category_name}</span>
                </label>
              ))
            ) : (
              <p>No categories available</p>
            )}
          </div>
          <hr className="my-2 border-t-2 border-gray-400" />
        </div>
      </aside>

      {/* Adjust main content to account for the fixed sidebar */}
      <main className="flex-1 p-4 ml-[25%]">
        <h2 className="text-4xl font-bold mb-6">
          Для грузовых и тяжелых коммерческих автомобилей
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link href={`/product/${product._id}`} key={product._id}>
                <div className="p-6 border rounded-lg shadow-lg bg-white text-center cursor-pointer">
                  <img
                    src={`http://localhost:9000/${product.image.main_images[0]}`}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="font-bold">{product.price} UZS</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No products found for the selected categories.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
