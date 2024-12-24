// Layout.js

"use client";

import React, { createContext, useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const CategoryContext = createContext();

const Layout = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showCategory, setShowCategory] = useState(false);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/v1/categories");
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategoryData();
  }, []);

  const handleCheckboxChange = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleCategory = () => setShowCategory(!showCategory);

  return (
    <CategoryContext.Provider
      value={{ selectedCategories, handleCheckboxChange }}
    >
      <div className="flex min-h-screen">
        <aside className="w-1/4 p-4 mr-8 fixed top-16 h-[calc(100vh-4rem)] z-[1] bg-white shadow-md flex flex-col">
          <div className="space-y-4 mb-4">
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleCategory}
              >
                <h2 className="font-semibold text-gray-700">Категория</h2>
                {showCategory ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showCategory && (
                <div className="pl-4 mt-2 space-y-1">
                  {category.map((cat) => (
                    <label key={cat._id} className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-indigo-600"
                        checked={selectedCategories.includes(cat.category_name)}
                        onChange={() => handleCheckboxChange(cat.category_name)}
                      />
                      <span className="ml-2 text-gray-700">
                        {cat.category_name}
                      </span>
                    </label>
                  ))}
                </div>
              )}
              <hr className="my-2 border-t-2 border-gray-400" />
            </div>
          </div>
        </aside>

        <section className="flex-1 ml-96">{children}</section>
      </div>
    </CategoryContext.Provider>
  );
};

export default Layout;
