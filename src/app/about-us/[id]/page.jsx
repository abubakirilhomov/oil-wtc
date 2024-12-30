"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation"; // Import useRouter for navigation
import axios from "axios";

const LayoutDetails = () => {
  const [layout, setLayout] = useState(null);
  const params = useParams();
  const { id } = params;
  const router = useRouter(); // Initialize router

  useEffect(() => {
    if (!id) return;

    const fetchLayout = async () => {
      try {
        const response = await axios.get(`https://bakend-wtc.onrender.com/api/v1/layout/about/${id}`);
        setLayout(response.data);
      } catch (error) {
        console.error("Error fetching layout details:", error);
      }
    };

    fetchLayout();
  }, [id]);

  if (!layout) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 mt-14 px-4">
     
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <img
          src={`https://bakend-wtc.onrender.com//${layout.images[0]}`}
          alt={layout.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{layout.title}</h1>
          <p className="text-sm text-gray-500 mb-4">
            {new Date(layout.date).toLocaleDateString()}
          </p>
          <div className="text-gray-700 mb-4 space-y-2">
            {layout.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Type:</strong> {layout.type}
          </p>  
        </div>
        
      </div>
      <div className="flex justify-end items-center mt-2">
      <a
      href="/about-us"
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        &larr; Back
      </a>
      </div>
    </div>
  );
};

export default LayoutDetails;
