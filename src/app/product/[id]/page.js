"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:9000/api/v1/products/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );
  }

  if (!product) return <div className="text-center">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
    <p className="flex jus">
    <a 
        href="/catalog" 
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Products
      </a>
    </p>

      <div className="grid lg:grid-cols-[100px_1fr_1fr] gap-6 lg:gap-12">
        {/* Thumbnails */}
        <div className="hidden lg:flex flex-col gap-4">
          {product.image?.main_images.map((img, index) => (
            <div 
              key={index} 
              className={`border-2 ${index === 0 ? 'border-red-600' : 'border-gray-300'} rounded-lg p-2 cursor-pointer`}
            >
              <img
                src={`http://localhost:9000/${img}`}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center bg-white rounded-lg p-8">
          <img
            src={`http://localhost:9000/${product.image.main_images[0]}`}
            alt={product.name}
            className="w-full max-w-md h-auto object-contain transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              <span className="text-blue-600">{product.name.split(' ')[0]}</span>
              <span className="text-red-600">{product.name.split(' ')[1]}</span>
            </h1>
            <button className="bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors w-fit mb-4">
              Купить в розницу
            </button>
            <hr className="border-t-2 border-gray-300 w-full" />
            <p className="text-lg text-gray-600 mt-4">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
