"use client";
import React, { useEffect, useState } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const [newsType, setNewsType] = useState(''); // Track the selected news type

  useEffect(() => {
    fetch('http://localhost:9000/api/v1/news')
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filter news to display only those with the selected newsType or show all if no filter is selected
  const filteredNews = newsType ? news.filter(item => item.news_type === newsType) : news;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Новости</h1>
      
      <div className="flex flex-wrap gap-4 mb-8">
        {['test1', 'test'].map((type, index) => (
          <button
            key={index}
            onClick={() => setNewsType(type)}
            className={`px-4 py-2 border border-black rounded-full text-sm font-medium hover:bg-gray-200 transition ${
              newsType === type ? 'bg-gray-200' : ''
            }`}
          >
            {type}
          </button>
        ))}
        {/* Add a button to clear the filter */}
        <button
          onClick={() => setNewsType('')}
          className="px-4 py-2 border border-black rounded-full text-sm font-medium hover:bg-gray-200 transition"
        >
          Все
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredNews.map((item) => (
          <div key={item._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={item.images[0]} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString()}</p>
              <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
              <p className="text-gray-700 mt-2">{item.descriptions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default News;
