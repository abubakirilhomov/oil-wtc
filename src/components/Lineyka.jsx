"use client";

import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "PREMIUM 9000",
    description:
      "Линейка моторных масел Sintec Platinum 7000 c технологией Molyguard\tсодержит комплекс противоизносных компонентов с органическим\tмолибденом. Органический молибден препятствует прямому соприкосновению деталей двигателя как",
    image: "https://sinteclubricants.ru/novaya-glavnaya-test/img/pack_premium.png",
    image1: "https://sinteclubricants.ru/novaya-glavnaya-test/img/premium9000.svg",
    cornerImage: "https://sinteclubricants.ru/novaya-glavnaya-test/img/ultra-min.png",
  },
  {
    id: 2,
    name: "PLATINUM 7000",
    description:
      "Основа продуктов флагманской линейки Premium 9000 – передовая технология Ultrasynth, разработанная на основе полностью синтетических базовых масел высшего класса. В рецептурах используются современные импортные пакеты присадок, сертифицированные по стандарту ACEA.",
    image: "https://sinteclubricants.ru/novaya-glavnaya-test/img/plat7000.png",
    image1: "https://sinteclubricants.ru/novaya-glavnaya-test/img/premium7000.svg",
    cornerImage: "https://sinteclubricants.ru/novaya-glavnaya-test/img/moly-min.png",
  },
  {
    id: 3,
    name: "EXTRALIFE 5000/7000",
    description:
      "Линейка синтетических моторных масел, разработанных специально для\tавтомобилей с большим пробегом.  Технология ActieSeal позволяет предотвратить протечки за счёт добавления\tспециального кондиционера, сохраняющего эластичность материалов резиновых\tуплотнений, что особо актуально для автомобилей с пробегом более 150 000 км.\tУсиленный пакет присадок обеспечивает дополнительную защиту.",
    image: "https://sinteclubricants.ru/novaya-glavnaya-test/img/extralife.png",
    image1: "https://sinteclubricants.ru/novaya-glavnaya-test/img/ExtraLife.svg",
    cornerImage: "https://sinteclubricants.ru/novaya-glavnaya-test/img/seal-min.png",
  },
  {
    id: 4,
    name: "LUXE 5000",
    description:
      "Качественные полусинтетические масла для легковых автомобилей, соответствующие\tстандарту API SL/CF. Выпускаются в самых популярных для российского рынка\tвязкостях 5W-30, 5W-40 и 10W-40. За счет применения группы компонентов\tCleanAgent, моющие свойства Sintec Luxe 5000 на 25% выше требований отраслевых\tстандартов.",
    image: "https://sinteclubricants.ru/novaya-glavnaya-test/img/luxe5000.png",
    image1: "https://sinteclubricants.ru/novaya-glavnaya-test/img/luxe5000.svg",
    cornerImage: "https://sinteclubricants.ru/novaya-glavnaya-test/img/clean-min.png",
  },
];

const Lineyka = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const getBackgroundClass = (name) => {
    switch (name) {
      case "PREMIUM 9000":
        return "bg-[rgba(203,162,117,1)]"; // rgba(203, 162, 117, 255)
      case "PLATINUM 7000":
        return "bg-[rgba(207,15,28,1)]"; // rgba(207, 15, 28, 255)
      case "EXTRALIFE 5000/7000":
        return "bg-[rgba(36,133,147,1)]"; // rgba(36, 133, 147, 255)
      case "LUXE 5000":
        return "bg-[rgba(161,161,160,1)]"; // rgba(161, 161, 160, 255)
      default:
        return "bg-gray-200"; // Default background color
    }
  };
  

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex justify-between items-center mb-6 p-6 bg-gradient-to-r to-orange-200 rounded-lg">
        <h1 className="text-4xl font-bold text-black text-center w-full">
          ЛИНЕЙКИ МОТОРНЫХ МАСЕЛ
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8">
      <div className="flex flex-col gap-3 w-full md:w-1/5">
  {products.map((product) => (
    <button
      key={product.id}
      onClick={() => setSelectedProduct(product)}
      className={`p-3 rounded-md transition-all border flex items-center gap-3 ${
        selectedProduct.id === product.id
          ? `shadow-md border-[#f58c25] ${getBackgroundClass(product.name)}`
          : "bg-white border-gray-200 hover:bg-gray-100 hover:shadow-lg"
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-contain"
      />
      <div className="flex flex-col items-start">
        <p
          className={`font-bold text-left text-lg ${
            selectedProduct.id === product.id ? "text-white" : "text-black"
          }`}
        >
          {product.name}
        </p>
      </div>
    </button>
  ))}
</div>




        <div
  className={`flex-1 p-6 border rounded-lg shadow-lg relative transition-all`}
  style={{ width: "85%", height: "500px", maxWidth: "900px" }}
>
  <div className="absolute top-[5px] right-12 transition-transform">
    <img
      src={selectedProduct.cornerImage}
      alt="Corner"
      className="w-32 h-32 object-contain"
    />
  </div>
  <h2
    className={`text-4xl font-bold mb-4 text-white py-3 px-6 rounded-md text-center transition-all ${getBackgroundClass(
      selectedProduct.name
    )}`}
  >
    {selectedProduct.name}
  </h2>
  <div className="flex flex-col md:flex-row gap-6">
    <div className="flex flex-col items-center md:w-1/2">
      {/* Смещение основного изображения вверх */}
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-full h-64 object-contain rounded-md transition-transform -translate-y-9"
      />
      {/* Смещение дополнительного изображения вверх */}
      <img
        src={selectedProduct.image1}
        alt={selectedProduct.name}
        className="w-full h-24 object-contain rounded-md -translate-y-9"
      />
    </div>

    <div className="flex flex-col justify-between md:w-1/2">
      <p className="text-lg text-gray-700 mb-4 font-bold leading-relaxed">
        {selectedProduct.description}
      </p>
      <div className="flex gap-4 mt-auto">
        <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg">
          Подобрать масло
        </button>
        <button className="bg-[#f1f1f1] px-6 py-3 rounded-full text-lg border text-red-600 border-red-600 hover:bg-[#e0e0e0]">
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
