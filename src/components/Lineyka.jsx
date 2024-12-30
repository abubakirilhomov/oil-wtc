'use client';

import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'PREMIUM 9000',
    description:
      'Основа продуктов флагманской линейки Premium 9000 – передовая технология Ultrasynth, разработанная на основе полностью синтетических базовых масел высшего класса. В рецептурах используются современные импортные пакеты присадок, сертифицированные по стандарту ACEA.  Основа продуктов флагманской линейки Premium 9000 – передовая технология Ultrasynth, разработанная на основе полностью синтетических базовых масел высшего класса. В рецептурах используются современные импортные пакеты присадок, сертифицированные по стандарту ACEA.',
    image: 'https://sinteclubricants.ru/novaya-glavnaya-test/img/pack_premium.png',
  },
  {
    id: 2,
    name: 'PLATINUM 7000',
    description:
      'Основа продуктов флагманской линейки Premium 9000 – передовая технология Ultrasynth, разработанная на основе полностью синтетических базовых масел высшего класса. В рецептурах используются современные импортные пакеты присадок, сертифицированные по стандарту ACEA.Основа продуктов флагманской линейки Premium 9000 – передовая технология Ultrasynth, разработанная на основе полностью синтетических базовых масел высшего класса. В рецептурах используются современные импортные пакеты присадок, сертифицированные по стандарту ACEA.',
    image: 'https://sinteclubricants.ru/novaya-glavnaya-test/img/plat7000.png',
  },
  {
    id: 3,
    name: 'EXTRALIFE 5000/7000',
    description:
      'Основа продуктов флагманской линейки Premium 9000 – передовая технология Ultrasynth, разработанная на основе полностью синтетических базовых масел высшего класса. В рецептурах используются современные импортные пакеты присадок, сертифицированные по стандарту ACEA.Основа продуктов флагманской линейки Premium 9000 – передовая технология Ultrasynth, разработанная на основе полностью синтетических базовых масел высшего класса. В рецептурах используются современные импортные пакеты присадок, сертифицированные по стандарту ACEA.',
    image: 'https://sinteclubricants.ru/novaya-glavnaya-test/img/extralife.png',
  },
  {
    id: 4,
    name: 'LUXE 5000',
    description: 'Основа продуктов флагманской линейки Premium 9000 – передовая технология Ultrasynth, разработанная на основе полностью синтетических базовых масел высшего класса. В рецептурах используются современные импортные пакеты присадок, сертифицированные по стандарту ACEA.Основа продуктов флагманской линейки Premium 9000 – передовая технология Ultrasynth, разработанная на основе полностью синтетических базовых масел высшего класса. В рецептурах используются современные импортные пакеты присадок, сертифицированные по стандарту ACEA.',
    image: 'https://sinteclubricants.ru/novaya-glavnaya-test/img/luxe5000.png',
  },
];

const Lineyka = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Заголовок и кнопка */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-[#333333]">ЛИНЕЙКИ МОТОРНЫХ МАСЕЛ</h1>
        <button className="bg-[#d70026] text-white px-9 py-3 rounded-full text-lg hover:bg-[#b5001f]">Перейти в каталог</button>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Список продуктов */}
        <div className="flex flex-col gap-4 w-full md:w-1/6">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`p-4 rounded-lg transition-all border ${
                selectedProduct.id === product.id
                  ? 'bg-[#ffe7d6] border-[#f58c25] shadow-md'
                  : 'bg-white border-gray-200 hover:bg-gray-100 hover:shadow-lg'
              } flex items-center gap-4`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-contain"
              />
              <p className="font-bold text-left text-[#333333]">{product.name}</p>
            </button>
          ))}
        </div>

        {/* Детальная информация */}
        <div className="flex-1 p-6 border rounded-lg bg-white shadow-lg relative">
  <h2 className="text-5xl font-bold mb-6 text-center text-[#d70026]">
    {selectedProduct.name}
  </h2>
  <div className="flex flex-col md:flex-row gap-6">
    {/* Левая часть с изображением */}
    <div className="flex flex-col items-center md:w-1/2">
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-full h-64 object-contain rounded-md"
      />
      {/* Дополнительное изображение */}
      {selectedProduct.id === 1 && (
        <img
          src="https://sinteclubricants.ru/novaya-glavnaya-test/img/premium9000.svg"
          alt="Дополнительное изображение"
          className="w-1/5 mt-4"
        />
      )}
    </div>

    {/* Правая часть с описанием */}
    <div className="flex flex-col justify-between md:w-1/2">
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        {selectedProduct.description}
      </p>
      <div className="flex gap-4 mt-auto">
        <button className="bg-[#d70026] text-white px-6 py-3 rounded-full text-lg hover:bg-[#b5001f]">
          Подобрать масло
        </button>
        <button className="bg-[#f1f1f1] px-6 py-3 rounded-full text-lg hover:bg-[#e0e0e0]">
          О технологии
        </button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Lineyka;
