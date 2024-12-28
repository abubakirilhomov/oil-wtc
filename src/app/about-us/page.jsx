"use client";

<<<<<<< HEAD
import React, { useState } from "react";
import { FaTrain,MdStorage,FaCogs,FaFlask,MdOutlineProductionQuantityLimits,FaWarehouse,FaTruck, } from 'react-icons/fa';
import ProductionShowcaseL1 from "@/components/ProductionShowcaseL1";
import ProductionShowcaseL2 from "@/components/ProductionShowcaseL2";
import ProductionShowcaseL3 from "@/components/ProductionShowcaseL3";
import ProductionSwiperL1 from "@/components/ProductionSwiperL1";
import ProductionSwiperL2 from "@/components/ProductionSwiperL2";
import ProductionSwiperL3 from "@/components/ProductionSwiperL3";
import CompanyLayout from "@/components/CompanyLayout";
import AboutUs2 from "@/components/AboutUs2";

const AboutUs = () => {
  const [layouts] = useState([
    {
      layoutType: "L3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Фокус на продукте Внимание к ",
      highlightedWord: "деталям",
      buttonLabels: ["О нас", "Название", "Наша миссия", "Наши ценности"],
      sectionIds: ["company-section", "workflow-section", "capacity-section"],
      imageSrc: "https://lemarc.ru/images/about-hero.png",
      titleFont: "Roboto, sans-serif",
      titleFontSize: "3.5rem",
      titleColor: "#000",
      highlightedWordFont: "Roboto, sans-serif",
      highlightedWordFontSize: "3.5rem",
      highlightedWordGradient: "bg-gradient-to-r from-blue-600 to-orange-500",
      buttonLabelsFont: "Roboto, sans-serif",
      buttonLabelsFontSize: "1rem",
      buttonLabelsColor: "#000",
      statistics: [
        { value: "1 million", label: "Worldwide customers" },
        { value: "654K+", label: "Successful results" },
        { value: "528K+", label: "Real customer reviews" },
      ],
    },
    {
      layoutType: "L22",
      description: "WTC — новый бренд моторных, трансмиссионных и индустриальных масел для российского рынка и ближайшего зарубежья.",
      title: "Масла производятся на мощностях современного, высокотехнологичного завода смазочных материалов в Калужской области, ранее принадлежавшего французской компании.",
      img: "https://lemarc.ru/images/about-img.png"
    }, 
    {
      layoutType: "Process",
      title: "Production process",
      cardData: [
        {
          icon: FaTrain,
          title: "Доставка сырья",
          details: ["Собственный железнодорожный путь от Киевского направления МЖД"]
        },
        {
          icon: MdStorage,
          title: "Прием и хранение компонентов",
          details: [
            "Базовые масла — 14 резервуаров",
            "Присадки — 11 резервуаров",
            "Упаковка — 800 паллетомест",
            "Контроль качества"
          ]
        },
        {
          icon: FaCogs,
          title: "Блендинг масел",
          details: [
            "3 автоматических блендера",
            "Потоковый смеситель",
            "Контроль качества"
          ]
        },
        {
          icon: FaFlask,
          title: "Лаборатория",
          details: ["Контроль качества на всех этапах производства"]
        },
        {
          icon: MdOutlineProductionQuantityLimits,
          title: "Хранение полуфабриката",
          details: [
            "16 резервуаров",
            "Контроль качества"
          ]
        },
        {
          icon: FaWarehouse,
          title: "6 линий розлива",
          details: [
            "1 л, 4 л, 20 л, 2×208 л, 1000 л",
            "Контроль качества"
          ]
        },
        {
          icon: FaWarehouse,
          title: "Хранение готовой продукции",
          details: ["8000 паллетомест"]
        },
        {
          icon: FaTruck,
          title: "Доставка готовой продукции",
          details: ["Доставка во все регионы России и страны СНГ"]
        }
      ]
    },
      {title: "Завод Lemarc",
      imageSrc: "https://lemarc.ru/images/factory-bg.png",
      imageAlt: "Завод Lemarc Overview",
      description:
        "Обеспечить непрерывный доступ к актуальным технологиям в смазочных материалах",
      details: [
        {
          subtitle: "Безопасность",
          text: "01",
        },
        {
          subtitle: "Экспертность и профессионализм",
          text: "02",
        },
        {
          subtitle: "Высокий уровень стандартов",
          text: "03",
        },
        {
          subtitle: "Ответственность",
          text: "04",
        },
      ],
    },
  ]);
=======
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
>>>>>>> 1a860336e80023c76d993dc01e674e390538badd

  const API_BASE_URL = "http://localhost:9000/api/v1";

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
<<<<<<< HEAD
    <div className="container w-full mx-auto flex flex-col gap-14 py-16">
      {layouts.map((layout, index) => {
        switch (layout.layoutType) {
          case "L1":
            return (
              <ProductionShowcaseL1
                key={`layout-${index}`}
                title={layout.title}
                highlightedWord={layout.highlightedWord}
                buttonLabels={layout.buttonLabels}
                sectionIds={layout.sectionIds}
                imageSrc={layout.imageSrc}
                titleFont={layout.titleFont}
                titleFontSize={layout.titleFontSize}
                titleColor={layout.titleColor}
                highlightedWordFont={layout.highlightedWordFont}
                highlightedWordFontSize={layout.highlightedWordFontSize}
                highlightedWordGradient={layout.highlightedWordGradient}
                buttonLabelsFont={layout.buttonLabelsFont}
                buttonLabelsFontSize={layout.buttonLabelsFontSize}
                buttonLabelsColor={layout.buttonLabelsColor}
              />
            );
            case "L22":
              return (
                <AboutUs2
                  key={`layout-${index}`}
                  title={layout.title}
                  description={layout.description}
                  img={layout.img}
                />
              );            
          case "L2":
            return (
              <ProductionShowcaseL2
                key={`layout-${index}`}
                title={layout.title}
                highlightedWord={layout.highlightedWord}
                buttonLabels={layout.buttonLabels}
                sectionIds={layout.sectionIds}
                imageSrc={layout.imageSrc}
                titleFont={layout.titleFont}
                titleFontSize={layout.titleFontSize}
                titleColor={layout.titleColor}
                highlightedWordFont={layout.highlightedWordFont}
                highlightedWordFontSize={layout.highlightedWordFontSize}
                highlightedWordGradient={layout.highlightedWordGradient}
                buttonLabelsFont={layout.buttonLabelsFont}
                buttonLabelsFontSize={layout.buttonLabelsFontSize}
                buttonLabelsColor={layout.buttonLabelsColor}
                statistics={layout.statistics}
                description={layout.description}
              />
            );
            
          case "L3":
            return (
              <ProductionShowcaseL3
                key={`layout-${index}`}
                description={layout.description}
                title={layout.title}
                highlightedWord={layout.highlightedWord}
                buttonLabels={layout.buttonLabels}
                sectionIds={layout.sectionIds}
                imageSrc={layout.imageSrc}
                titleFont={layout.titleFont}
                titleFontSize={layout.titleFontSize}
                titleColor={layout.titleColor}
                highlightedWordFont={layout.highlightedWordFont}
                highlightedWordFontSize={layout.highlightedWordFontSize}
                highlightedWordGradient={layout.highlightedWordGradient}
                buttonLabelsFont={layout.buttonLabelsFont}
                buttonLabelsFontSize={layout.buttonLabelsFontSize}
                buttonLabelsColor={layout.buttonLabelsColor}
              />
            );
          default:
            return null;
        }
      })}
      {swipers.map((swiper, index) => {
        switch (swiper.layoutType) {
          case "L1":
            return (
              <ProductionSwiperL1
                key={`swiper-${index}`}
                images={swiper.images}
                title={swiper.title}
              />
            );
          case "L2":
            return (
              <ProductionSwiperL2
                key={`swiper-${index}`}
                images={swiper.images}
                title={swiper.title}
              />
            );
          case "L3":
            return (
              <ProductionSwiperL3
                key={`swiper-${index}`}
                images={swiper.images}
                title={swiper.title}
              />
            );
          default:
            return null;
        }
      })}
      <div id="capacity-section" className="py-16">
        <h2 className="text-2xl font-bold">Мощности</h2>
        <p>Information about the production capacity will go here...</p>
=======
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
>>>>>>> 1a860336e80023c76d993dc01e674e390538badd
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
                  src={`http://localhost:9000/${layout.images[0]}`}
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
