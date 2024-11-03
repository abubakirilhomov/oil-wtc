"use client";

import React, { useState, useEffect } from 'react';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch all news
    fetch('http://localhost:9000/api/v1/news')
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error('Error fetching news:', error));

    // Fetch all categories
    fetch('http://localhost:9000/api/v1/news-category')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  // Filter news based on the selected category
  const filteredNews = selectedCategory
    ? news.filter(item => item.news_type === selectedCategory)
    : news;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Новости</h1>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => setSelectedCategory(category.category_name)}
            className={`px-4 py-2 border border-black rounded-full text-sm font-medium hover:bg-gray-200 transition ${
              selectedCategory === category.category_name ? 'bg-gray-200' : ''
            }`}
          >
            {category.category_name}
          </button>
        ))}
        {/* Button to clear the filter */}
        <button
          onClick={() => setSelectedCategory('')}
          className="px-4 py-2 border border-black rounded-full text-sm font-medium hover:bg-gray-200 transition"
        >
          Все
        </button>
      </div>

      {/* Display news */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredNews.map((item) => (
          <a key={item._id} href={`/news/${item._id}`}>
            <div className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src={item.images[0]} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString()}</p>
                <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                <p className="text-gray-700 mt-2">{item.descriptions.substring(0, 100)}...</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
