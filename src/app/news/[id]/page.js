
import React from 'react';


// Fetch data for individual news based on ID
export async function generateMetadata({ params }) {
  const response = await fetch(`https://bakend-wtc.onrender.com//api/v1/news/${params.id}`);
  const newsItem = await response.json();

  return {
    title: newsItem.title,
  };
}

const NewsDetail = async ({ params }) => {
  const response = await fetch(`https://bakend-wtc.onrender.com//api/v1/news/${params.id}`);
  const newsItem = await response.json();

  // Render loading state if the data isn't available
  if (!newsItem) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
      <p className="text-gray-500 mb-4">{new Date(newsItem.date).toLocaleDateString()}</p>
      <img src={newsItem.images[0]} alt={newsItem.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg">{newsItem.descriptions}</p>
    </div>
  );
};

export default NewsDetail;
