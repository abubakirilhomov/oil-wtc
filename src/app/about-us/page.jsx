"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const LayoutsPage = () => {
  const [layouts, setLayouts] = useState([]);
  const [filteredLayouts, setFilteredLayouts] = useState([]);
  const [layoutTypes, setLayoutTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = "https://bakend-wtc.onrender.com//api/v1";

  useEffect(() => {
    const fetchLayoutTypes = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/layout-type`);
        setLayoutTypes(response.data);
      } catch (error) {
        console.error("Ошибка при получении типов макетов:", error);
        setError("Не удалось загрузить типы макетов.");
      }
    };

    fetchLayoutTypes();
  }, []);

  useEffect(() => {
    const fetchAllLayouts = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `${API_BASE_URL}/layout/about`;
        const response = await axios.get(url);
        setLayouts(response.data);
        setFilteredLayouts(response.data); // Инициализация отфильтрованных макетов
      } catch (error) {
        console.error("Ошибка при получении макетов:", error);
        setError("Не удалось загрузить макеты.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllLayouts();
  }, []);

  const truncateText = (text, maxLength) => {
    if (typeof text !== "string") return "";
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const handleTypeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedType(selectedValue);

    if (selectedValue === "all") {
      setFilteredLayouts(layouts); // Показываем все макеты
    } else {
      const filtered = layouts.filter((layout) => layout.type === selectedValue);
      setFilteredLayouts(filtered);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Пресса о нас</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <h2 className="text-6xl font-medium text-white-700">
         О нас
        </h2>
        <select
          id="layoutType"
          value={selectedType}
          onChange={handleTypeChange}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
        >
          <option value="all">Все типы</option>
          {layoutTypes.map((type) => (
            <option key={type._id} value={type.type}>
              {type.type}
            </option>
          ))}
        </select>
      </div>

      {/* Состояние загрузки */}
      {loading && (
        <div className="flex justify-center items-center">
          <div className="text-xl text-gray-500">Загрузка...</div>
        </div>
      )}

      {/* Состояние ошибки */}
      {error && (
        <div className="text-center text-red-500 mb-4">
          {error}
        </div>
      )}

      {/* Сетка макетов */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLayouts.length > 0 ? (
            filteredLayouts.map((layout) => (
              <div
                key={layout._id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={`https://bakend-wtc.onrender.com//${layout.images[0]}`}
                  alt={layout.title}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200'; }}
                  className="w-full h-48 object-cover"
                  style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                />
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(layout.date).toLocaleDateString()}
                  </p>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">{layout.title}</h2>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {truncateText(layout.description[0], 120)}
                  </p>
                  <Link href={`/about-us/${layout._id}`} className="mt-auto text-blue-600 font-semibold hover:underline">
                    Читать далее &raquo;
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center col-span-full text-gray-600">
              Нет доступных записей.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LayoutsPage;
