"use client";

import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "PREMIUM 9000",
    description:
      "Линейка моторных масел Sintec Platinum 7000 c технологией Molyguard	содержит комплекс противоизносных компонентов с органическим	молибденом. Органический молибден препятствует прямому соприкосновению деталей двигателя как",
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
      "Линейка синтетических моторных масел, разработанных специально для	автомобилей с большим пробегом.  Технология ActieSeal позволяет предотвратить протечки за счёт добавления	специального кондиционера, сохраняющего эластичность материалов резиновых	уплотнений, что особо актуально для автомобилей с пробегом более 150 000 км.	Усиленный пакет присадок обеспечивает дополнительную защиту.",
    image: "https://sinteclubricants.ru/novaya-glavnaya-test/img/extralife.png",
    image1:"https://sinteclubricants.ru/novaya-glavnaya-test/img/ExtraLife.svg",
    cornerImage: "https://sinteclubricants.ru/novaya-glavnaya-test/img/seal-min.png",
  },
  {
    id: 4,
    name: "LUXE 5000",
    description:
      "Качественные полусинтетические масла для легковых автомобилей, соответствующие	стандарту API SL/CF. Выпускаются в самых популярных для российского рынка	вязкостях 5W-30, 5W-40 и 10W-40. За счет применения группы компонентов	CleanAgent, моющие свойства Sintec Luxe 5000 на 25% выше требований отраслевых	стандартов.",
    image: "https://sinteclubricants.ru/novaya-glavnaya-test/img/luxe5000.png",
    image1:"https://sinteclubricants.ru/novaya-glavnaya-test/img/luxe5000.svg ",
    cornerImage: "https://sinteclubricants.ru/novaya-glavnaya-test/img/clean-min.png",
  },
];


const Lineyka = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Заголовок с градиентным фоном */}
      <div className="flex justify-between items-center mb-6 p-6 bg-gradient-to-r to-orange-200 rounded-lg">
        <h1 className="text-4xl font-bold text-black text-center w-full">
          ЛИНЕЙКИ МОТОРНЫХ МАСЕЛ
        </h1>
      </div>

      {/* Список продуктов и отображение выбранного */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex flex-col gap-4 w-full md:w-1/5">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`p-4 rounded-lg transition-all border ${
                selectedProduct.id === product.id
                  ? "bg-[#ffe7d6] border-[#f58c25] shadow-md"
                  : "bg-white border-gray-200 hover:bg-gray-100 hover:shadow-lg"
              } flex items-center gap-4`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-contain"
              />
              
              <div className="flex flex-col items-start">
                <p className="font-bold text-left text-[#333333]">
                  {product.name}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div
  className={`flex-1 p-6 border rounded-lg bg-white shadow-lg relative transition-all ${
    selectedProduct.id === 4 ? "bg-gray-100" : ""
  } ${selectedProduct ? "scale-105" : ""}`}
  style={{ width: "85%", height: "500px", maxWidth: "900px" }}
>
  <div className="absolute top-[5px] right-12 transition-transform"> {/* CornerImage */}
    <img
      src={selectedProduct.cornerImage}
      alt="Corner"
      className="w-32 h-32 object-contain"
    />
  </div>
  <h2 className="text-4xl font-bold mb-4 text-white bg-gradient-to-r from-orange-200 to-orange-300 py-3 px-6 rounded-md text-center">
    {selectedProduct.name}
  </h2>
  <div className="flex flex-col md:flex-row gap-6">
  <div className="flex flex-col items-center md:w-1/2">
  <img
    src={selectedProduct.image}
    alt={selectedProduct.name}
    className={`w-full h-64 object-contain rounded-md transition-transform ${
      selectedProduct ? "transform -translate-y-16 -translate-x-12" : ""
    }`}
  />
  <img
    src={selectedProduct.image1}
    alt={selectedProduct.name}
    className={`w-full h-24 object-contain rounded-md transition-transform ${
      selectedProduct ? "transform" : ""
    }`}
  />
</div>


    <div className="flex flex-col justify-between md:w-1/2 ">
      <p className="text-lg text-gray-700 mb-4 font-bold leading-relaxed ">
        {selectedProduct.description}
      </p>
      <div className="flex gap-4 mt-auto">
        <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg">
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
