"use client";

import React, { useEffect, useState } from "react";
import { use } from "react"; // Import the `use` function from React

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);

  // Unwrap the `params` Promise
  const { id } = use(params);

  useEffect(() => {
    // Fetch product data only if id exists
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

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-6">{product.name}</h2>
      <img
        src={`http://localhost:9000/${product.image.main_images[0]}`}
        alt={product.name}
        className="w-full h-80 object-cover mb-4"
      />
      <p className="text-lg mb-4">Category: {product.category}</p>
      <p className="text-lg font-bold mb-4">Price: {product.price} UZS</p>
      <p className="text-lg mb-4">Description: {product.description}</p>
      <a
        href={`http://localhost:9000/${product.product_info_pdf}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Download Product Info
      </a>
    </div>
  );
};

export default ProductPage;
