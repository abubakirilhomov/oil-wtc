import React from 'react';
import { FaTrain, FaFlask, FaWarehouse, FaTruck, FaCogs } from 'react-icons/fa';
import { MdStorage, MdOutlineProductionQuantityLimits } from 'react-icons/md';

const ProductionProcess = () => {
  return (
    <div className="relative max-w-7xl mx-auto p-8">
      {/* First row of cards */}
      <div className="flex items-start justify-between mb-16 relative z-10">
        <div className="w-1/4 bg-white p-4 rounded-lg relative">
          <FaTrain className="text-4xl text-blue-500 mb-4" />
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 mb-4"></div>
          <h3 className="text-2xl font-bold mb-3">Доставка сырья</h3>
          <ul className="list-none">
            <li className="flex items-start mb-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 mt-1"></span>
              Собственный железнодорожный путь от Киевского направления МЖД
            </li>
          </ul>
        </div>

        <div className="w-1/4 bg-white p-4 rounded-lg relative">
          <MdStorage className="text-4xl text-pink-500 mb-4" />
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 mb-4"></div>
          <h3 className="text-2xl font-bold mb-3">Прием и хранение компонентов</h3>
          <ul className="list-none">
            <li className="flex items-start mb-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 mt-1"></span>
              Базовые масла — 14 резервуаров
            </li>
            <li className="flex items-start mb-2">
              <span className="w-3 h-3 rounded-full bg-pink-500 mr-2 mt-1"></span>
              Присадки — 11 резервуаров
            </li>
            <li className="flex items-start mb-2">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2 mt-1"></span>
              Упаковка — 800 паллетомест
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2 mt-1"></span>
              Контроль качества
            </li>
          </ul>
        </div>

        <div className="w-1/4 bg-white p-4 rounded-lg relative">
          <FaCogs className="text-4xl text-red-500 mb-4" />
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 mb-4"></div>
          <h3 className="text-2xl font-bold mb-3">Блендинг масел</h3>
          <ul className="list-none">
            <li className="flex items-start mb-2">
              <span className="w-3 h-3 rounded-full bg-pink-500 mr-2 mt-1"></span>
              3 автоматических блендера
            </li>
            <li className="flex items-start mb-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 mt-1"></span>
              Потоковый смеситель
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2 mt-1"></span>
              Контроль качества
            </li>
          </ul>
        </div>
      </div>

      {/* Second row of cards */}
      <div className="flex items-start justify-between mb-16 relative z-10">
        <div className="w-1/2 bg-white p-4 rounded-lg relative">
          <FaFlask className="text-4xl text-blue-500 mb-4" />
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 mb-4"></div>
          <h3 className="text-2xl font-bold mb-3">Лаборатория</h3>
          <ul className="list-none">
            <li className="flex items-start">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 mt-1"></span>
              Контроль качества на всех этапах производства
            </li>
          </ul>
        </div>

        <div className="w-1/2 bg-white p-4 rounded-lg relative">
          <MdOutlineProductionQuantityLimits className="text-4xl text-pink-500 mb-4" />
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 mb-4"></div>
          <h3 className="text-2xl font-bold mb-3">Хранение полуфабриката</h3>
          <ul className="list-none">
            <li className="flex items-start mb-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 mt-1"></span>
              16 резервуаров
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2 mt-1"></span>
              Контроль качества
            </li>
          </ul>
        </div>
      </div>

      {/* Third row of cards */}
      <div className="flex items-start justify-between relative z-10">
        <div className="w-1/3 bg-white p-4 rounded-lg relative">
          <FaWarehouse className="text-4xl text-blue-500 mb-4" />
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 mb-4"></div>
          <h3 className="text-2xl font-bold mb-3">6 линий розлива</h3>
          <ul className="list-none">
            <li className="flex items-start mb-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 mt-1"></span>
              1 л, 4 л, 20 л, 2×208 л, 1000 л
            </li>
            <li className="flex items-start">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2 mt-1"></span>
              Контроль качества
            </li>
          </ul>
        </div>

        <div className="w-1/3 bg-white p-4 rounded-lg relative">
          <FaWarehouse className="text-4xl text-pink-500 mb-4" />
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 mb-4"></div>
          <h3 className="text-2xl font-bold mb-3">Хранение готовой продукции</h3>
          <ul className="list-none">
            <li className="flex items-start">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 mt-1"></span>
              8000 паллетомест
            </li>
          </ul>
        </div>

        <div className="w-1/3 bg-white p-4 rounded-lg relative">
          <FaTruck className="text-4xl text-orange-500 mb-4" />
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 mb-4"></div>
          <h3 className="text-2xl font-bold mb-3">Доставка готовой продукции</h3>
          <ul className="list-none">
            <li className="flex items-start">
              <span className="w-3 h-3 rounded-full bg-orange-500 mr-2 mt-1"></span>
              Доставка во все регионы России и страны СНГ
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductionProcess;
