"use client";

import React, { useEffect, useState } from "react";
import { use } from "react";

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);

  const { id } = use(params);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:9000/api/v1/products/${id}`)
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

  if (!product) return <div className="text-center mt-20 text-lg">Loading...</div>;

  return (
    <div className="pt-20 min-h-screen ">
      <div className="flex flex-col lg:flex-row items-start gap-10 justify-between">
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src={`http://localhost:9000/${product.image.main_images[0]}`}
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{product.name}</h2>
          <p className="text-xl text-gray-600 mb-2">{product.category}</p>
          <p className="text-2xl font-bold text-gray-800 mb-6">{product.price} UZS</p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{product.description}</p>
          <a
            href={`http://localhost:9000/${product.product_info_pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
          >
            Скачать описание продукта
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
