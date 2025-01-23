"use client";

import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "VERTEX EVO TECH Ev45",
    description:
    "Антифриз VERTEX EVOTECH 45 специально разработан для электрических и гибридных автомобилей, представляет собой охлаждающую низкозамерзающую жидкость, на основе высококачественного этиленгликоля, с содержанием карбоксилатного (органического ОАТ) пакета присадок. Свойства: Имеет высокую термическую устойчивость и позволяет эффективно охлаждать батарейный блок электромобиля, которому требуется надлежащий контроль температуры для оптимизации производительности. Эффективно защищает систему охлаждения от коррозии и образования отложений в системе, совместим со всеми уплотнениями, прокладками и покрытиями. Сверхнизкая электрическая проводимость (Low Electrical Conductivity) антифриза защищает батареи электромобиля от возгорания при аварийных ситуациях. Тары: 1 кг, 5 кг, 10 кг, 20 кг, 220 кг, 1 тонна",
    description2:
      "Соответствует требование: BYD, ZEEKR,BYD DM-I, LEAPMOTOR, LIXIANG, DONGFENG, CHANGAN, GEELY, XPENG, EVOLUTE, JAC, GAC,VOYAH, VOLKSWAGEN,HONGQI,NIO,CHEVROLET, BAIC, BUICK, KIA, HYUNDAI",
      title: "Обеспечивает",
      title2: "Преимещества",
      description4: "Обладает сверхнизкой электрической проводимостью не более 373 µS/cm Обладает увеличенным сроком службы - 250 000 км или 5 лет Содержит органический пакет присадок Обладает высокой термостабильностью и теплопроводностью Не образует накипь и отложения Готовый к применению (не требует добавления других ОЖ или воды) Имеет оптимальные смазывающие свойств ",
      description3: "Защиту алюминиевых блоков,радиаторов и водянных насосов, продление срока службы металлических деталей и РТИ двигателей; предотвращение от перегрева и переохлаждение ДВС; защиту двигателя от коррози (ржавчина). ",
      image: "https://dav.kz/image/cache/catalog/product/vertex/vertex-evo-tech-ev45-5kg-1000x1000.png",
    image1: "https://sinteclubricants.ru/novaya-glavnaya-test/img/premium9000.svg",
    cornerImage: "https://sinteclubricants.ru/novaya-glavnaya-test/img/ultra-min.png",
    img: "./1.png"
  },
  {
    id: 2,
    name: "VERTEX CARBOXYLATE g12+",
    description:
    "Антифриз VERTEX CARBOXYLATE G12+ представляет собой охлаждающую низкозамерзающую жидкость, на основе высококачественного этиленгликоля, с содержанием карбоксилатного, (органического ОАТ) пакета присадок. Свойства: Антифриз VERTEX CARBOXYLATE G12+ готовый к применению, обеспечивает надежную защиту от коррозии (ржавчина), перегревания и замерзания всех современных двигателей, в особенности алюминиевых двигателей. Эффективно защищает от коррозии и образования отложений в охлаждающей системе автомобиля, в охлаждающих каналах блока и в головках цилиндров, в радиаторе, в водяном насосе и в теплообменнике. Тары: 1 кг, 5 кг, 10 кг, 20 кг, 220 кг, 1 тонна",
    description2:
      "Соответствует требование:AUDI TL-774F, Chevrolet c 1997 г., Chrysler MS 9176, Citroen B71 5110, FIAT NC 956-16, FORD WSS-M97B44-D, HYUNDAI MS 591-08, LAND-ROVER WSS-M97B44-D, JAGUAR CMR 8229, MAN 324 SNF, MERCEDES-BENZ 326.3, OPEL GM 6227M, PEUGIOT B71 5110, ",
      title: "Обеспечивает:",
      title2: "Преимущества:",
      description4: "обладает увеличенным сроком службы 250 000 км; продлевает срок службы радиатора, термостата, помпы в 1,5 раза; содержит органический пакет присадок; обеспечивает быстрый прогрев двигателя при отрицательных температурах до -40°C; обладает высокой термостабильностью и теплопроводностью; не образует накипь и отложения; готовый к применению (не требует добавления других ОЖ или воды); имеет оптимальные смазывающие свойства ",
      description3: "защиту алюминиевых блоков, радиаторов и водяных насосов; продление срока службы металлических деталей и РТИ двигателя; предотвращение от перегрева и переохлаждения ДВС; защиту двигателя от коррозии (ржавчина) ",
      image: "./vertex.png",
    image1: "https://sinteclubricants.ru/novaya-glavnaya-test/img/premium7000.svg",
    cornerImage: "https://sinteclubricants.ru/novaya-glavnaya-test/img/moly-min.png",
    img: "./2.png"
  },
  {
    id: 3,
    name: "vertex ecotec g12++",
    description:
    "Антифриз Vertex ECOTEC G12++ представляет собой жидкость охлаждающую низкозамерзающую на основе этиленгликоля высшего сорта и специально очищенной воды, не содержащую аминов, фосфатов, боратов и силикатов, В качестве ингибиторов коррозии содержит пакет органических присадок с добавлением специального компонента для усиленного противодействия коррозии. Предназначен для высоконагруженных двигателей, а также легковых автомобилей, работающих в тяжелых услвоиях эксплуатации.Свойства: Антифриз Vertex ECOTEC G12++ обеспечивате высокую степень защиты от замерзания, коррозии и перегревания всех современных двигателей, в особенности алюминивеых двигателей с повышенной нагрузкой. Эффективно защищает от коррозии и образования отложений в охлаждающей системы автомобиля, в охлаждающих каналах, в блоках и в головках цилиндров, в радиаторе, в водяном насосе и в теплообменнике.Тары: 1 кг, 5 кг, 10 кг, 20 кг, 220 кг, 1 тонна",
    description2:
      "Соответствует требованиям международных стандартов: ASTM D 3306, ASTM D 4985, ASTM D 6210, SAE J 1034, Соответствует требованиям спецификаций производителей специфиализированной техники (Cummins, LIBHERE, JCB, JOHN DEER, MTU). относится к классу G12++. ",
      title: "Обеспечивает:",
      title2: "Преимущества:",
      description4: "обладает увеличенным сроком службы 250 000 км или 5 лет обеспечивает быстрый прогрев двигателя при отрицательных температурах до 45С продлевает срок службы радиатора, термостата, помпы в 1,5 раза обладает высокой термостабильностью и теплопроводимостью содержит карбоксилатный пакет присадок не образует накипь и отложения готовый к применению (не требует добавления других ОЖ или воды)",
      description3: "защиту алюминиевых блоков, радиаторов и водяных насосов от кавитации; продление срока службы металлических деталей и РТИ двигателя; предотвращение от перегрева и переохлаждения ДВС; защиту двигателя от коррозии (ржавчина).",
      image: "./anti.png",
    image1: "https://sinteclubricants.ru/novaya-glavnaya-test/img/ExtraLife.svg",
    cornerImage: "https://sinteclubricants.ru/novaya-glavnaya-test/img/seal-min.png",
    img: "./3.png"
  },
  {
    id: 4,
    name: "Vertex corboxylate hd g12+",
    description:
    "Антифриз VERTEX CARBOXYLATE HD G12+ представляет собой охлаждающую низкозамерзающую жидкость, на основе высококачественного этиленгликоля для высоконагруженной специализированной техники. В качестве ингибитора коррозии используется пакет органических присадок с добавлением нитритов и молибдатов, Не содержит амины, фосфаты, бораты и силикаты.Свойства: Антифриз VERTEX CARBOXYLATE HD G12+ готовый к применению, эффективно защищает от замерзания, перегревания и коррозии (ржавчина) всех современных двигателей работающих в тяжелых условиях эксплуатации, также подходит в качестве рабочих жидкостей в других теплообменных аппаратах. Подходит для работы с любыми видами металлов.Соответствует требованиям: ASTM D 6210Тары: 1 кг, 5 кг, 10 кг, 20 кг, 220 кг, 1 тонна",
    description2:
      "Соответствует требованиям: DEUTZ - DQC CB-14, IVECO, RENAULT TRUCK, FORD-WSS-M97B44-D, CATERPILLAR- CAT EC-1, CUMMINS 14603, MB-APPROVAL 325.3/326.3(READY MIX), MTU-MTL5048, LIEBHERR- MINIMUM LH-00-COL3A,JCB, JOHN DEER. ",
      title: "Обеспечивает:",
      title2: "Преимущества:",
      description4: "обладает увеличенным сроком службы 250 000 км; продлевает срок службы радиатора, термостата, помпы в 1,5 раза; содержит органический пакет присадок; обеспечивает быстрый прогрев двигателя при отрицательных температурах до -40°C; обладает высокой термостабильностью и теплопроводностью; не образует накипь и отложения; готовый к применению (не требует добавления других ОЖ или воды); имеет оптимальные смазывающие свойства ",
      description3: "защиту алюминиевых блоков, радиаторов и водяных насосов; продление срока службы металлических деталей и РТИ двигателя; предотвращение от перегрева и переохлаждения ДВС; защиту двигателя от коррозии (ржавчина) ",
      
      image: "./g12+.png",
    image1: "https://sinteclubricants.ru/novaya-glavnaya-test/img/luxe5000.svg",
    cornerImage: "https://sinteclubricants.ru/novaya-glavnaya-test/img/clean-min.png",
    img: "./2.png"
  },
  {
    id: 5,
    name: "Vertex g11",
    description:
    "Антифризы VERTEX G11 - SPECIFIC, ULTRA представляют собой охлаждающие низкозамерзающие жидкости на основе высококачественного этиленгликоля.Созданы по гибридной технологии, с пакетом силикатных присадок.Свойства:Антифризы VERTEX G11 готовые к применению, обеспечивают надежную защиту от коррозии (ржавчины), перегревания и замерзания ДВС. Эффективно защищают от образования накипи, осадков и шламов.Тары: 1 кг, 5 кг, 10 кг, 20 кг, 220 кг, 1 тонна",
    description2:
      "Соответствует требованиям: Audi TL-774F, Chevrolet c 1997 r., Chrysler MS 9176, Citroen B71 5110, FIAT NC 956-15, Ford WSS-M97B44-D, Hyundai MS 591-08) Land-Rover WSS-M97B44-D, Jaguar CMR 8229, MAN 324 SNF, Mercedes-Benz 3263, Opel GM 6277M, Peugeot B715110, Porsche TL-774F, SAAB GM6277M, SEAT TL-774F, Skoda TL-774F, Toyota TSK 26016, VW TL-774F, ASTM D3306, 4985, Lada после 2009г.",
      title: "Обеспечивает:",
      title2: "Преимущества:",
      description4: "обладают сроком службы 120 000 км; обеспечивают быстрый прогрев двигателя при отрицательных температурах до -40°C; обладают высокой термостабильностью и теплопроводностью; не образуют накипь и отложения; готовые к применению (не требует добавления других ОЖ или воды); имеют оптимальные смазывающие свойства. ",
      description3: "защиту алюминиевых и чугунных блоков, радиаторов и водяных насосов; продление срока службы металлических деталей и РТИ двигателя; предотвращение от перегрева и переохлаждения ДВС; защиту двигателя от коррозии (ржавчина).",
      image: "./g11.png",
    image1: "https://sinteclubricants.ru/novaya-glavnaya-test/img/luxe5000.svg",
    cornerImage: "https://sinteclubricants.ru/novaya-glavnaya-test/img/clean-min.png",
    img: "./4.png"
  },
];

const Lineyka = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);  
  const [showTechnology, setShowTechnology] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdownn = () => {
    setIsOpen(!isOpen);
  };

  const handleImageClick = () => {
    setIsImageFullScreen(true); 
  };

  const handleCloseFullScreen = () => {
    setIsImageFullScreen(false); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getBackgroundClass = (name) => {
    switch (name) {
      case "VERTEX EVO TECH Ev45":
        return "bg-[rgba(128,0,128,1)]";
      case "Vertex g11":
        return "bg-[rgba(0,0,255,1)]";
      case "VERTEX CARBOXYLATE g12+":
        return "bg-[rgba(255,0,0,1)]";
      case "vertex ecotec g12++":
        return "bg-[rgba(204,204,0,1)]";
      case "Vertex corboxylate hd g12+":
        return "bg-[rgba(255,0,0,1)]";
      default:
        return "bg-gray-200";
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
              onClick={() => {
                setSelectedProduct(product);
                setShowTechnology(false);
              }}
              className={`p-1 rounded-md transition-all border flex items-center gap-3 ${
                selectedProduct.id === product.id
                  ? "shadow-md border-[#f58c25] " + getBackgroundClass(product.name)
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

        <div className="flex-1 p-6 border rounded-lg shadow-lg relative transition-all">
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
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col items-center md:w-1/2">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-contain rounded-md transition-transform -translate-y-9 cursor-pointer"
                
              />
              <img
                src={selectedProduct.image1}
                alt={selectedProduct.name}
                className="w-full h-24 object-contain rounded-md -translate-y-9"
              />
            </div>

            <div className="flex flex-col justify-between md:w-1/2">
              <p className="text-md text-gray-700 mb-4 font-bold leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="flex gap-4 mt-auto">
                <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg">
                  Подобрать масло
                </button>
                <button
  className="bg-[#f1f1f1] px-6 py-3 rounded-full text-lg border text-red-600 border-red-600 hover:bg-[#e0e0e0]"
  onClick={toggleDropdown}
>
  О технологии
</button>

{isDropdownOpen && (
  <div className="absolute top-[-150px] left-0 right-0 mx-auto w-full max-w-xl bg-gray-100 border border-gray-300 shadow-lg rounded-lg p-6 z-50">
       <button
      onClick={() => setIsDropdownOpen(false)} // Закрываем выпадающее меню
      className="absolute top-3 right-3 text-xl font-bold text-red-500"
    >
      X
    </button>
    <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
      Спецификации: SAE J1034, ASTM D1384, ASTM D2809 и ASTM D4340
    </h3>
    <p className="text-md text-gray-700 leading-relaxed mb-4">
      {selectedProduct.description2}
    </p>

    <div className="flex flex-col md:flex-row-reverse md:justify-between gap-6">
      <div className="md:w-2/5 flex justify-center items-center">
        <img
          src={selectedProduct.img}
          alt="Technology"
          className="w-full h-auto object-contain rounded-md shadow"
          onClick={handleImageClick}
        />
      </div>

      <div className="md:w-3/5 flex flex-col gap-4">
        {selectedProduct.title && (
          <h4 className="text-xl font-semibold text-gray-800">
            {selectedProduct.title}
          </h4>
        )}
        {selectedProduct.description3 && (
          <p className="text-md text-gray-700 leading-relaxed">
            {selectedProduct.description3}
          </p>
        )}

        {selectedProduct.title2 && (
          <h4 className="text-xl font-semibold text-gray-800">
            {selectedProduct.title2}
          </h4>
        )}
        {selectedProduct.description4 && (
          <p className="text-md text-gray-700 leading-relaxed">
            {selectedProduct.description4}
          </p>
        )}
      </div>
    </div>
  </div>
)}

              </div>
            </div>
          </div>

         
        </div>
      </div>

      {/* Full-screen modal for the image */}
      {isImageFullScreen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleCloseFullScreen}  // Close the full-screen on click
        >
          <img
            src={selectedProduct.img}
            alt={selectedProduct.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Lineyka;