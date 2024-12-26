"use client";

import React, { useState } from "react";
import ProductionShowcaseL1 from "@/components/ProductionShowcaseL1";
import ProductionShowcaseL2 from "@/components/ProductionShowcaseL2";
import ProductionShowcaseL3 from "@/components/ProductionShowcaseL3";
import ProductionSwiperL1 from "@/components/ProductionSwiperL1";
import ProductionSwiperL2 from "@/components/ProductionSwiperL2";
import ProductionSwiperL3 from "@/components/ProductionSwiperL3";
import ProductionProcess from "@/components/ProductionProcess";
import { FaTrain, FaFlask, FaWarehouse, FaTruck, FaCogs } from "react-icons/fa";
import { MdStorage, MdOutlineProductionQuantityLimits } from "react-icons/md";
import CompanyLayout from "@/components/CompanyLayout";
import SexComponent from "@/components/SexComponent";

const Production = () => {
  const [layouts] = useState([
    {
      layoutType: "L3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Собственный завод в",
      highlightedWord: "Ворсино",
      buttonLabels: ["Компания", "Схема работы", "Мощности"],
      sectionIds: ["company-section", "workflow-section", "capacity-section"],
      imageSrc: "https://lemarc.ru/images/production-banner-new.png",
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
      layoutType: "Process",
      title: "Production process",
      cardData: [
        {
          icon: FaTrain,
          title: "Доставка сырья",
          details: ["Собственный железнодорожный путь от Киевского направления МЖД"],
        },
        {
          icon: MdStorage,
          title: "Прием и хранение компонентов",
          details: [
            "Базовые масла — 14 резервуаров",
            "Присадки — 11 резервуаров",
            "Упаковка — 800 паллетомест",
            "Контроль качества",
          ],
        },
        {
          icon: FaCogs,
          title: "Блендинг масел",
          details: [
            "3 автоматических блендера",
            "Потоковый смеситель",
            "Контроль качества",
          ],
        },
        {
          icon: FaFlask,
          title: "Лаборатория",
          details: ["Контроль качества на всех этапах производства"],
        },
        {
          icon: MdOutlineProductionQuantityLimits,
          title: "Хранение полуфабриката",
          details: ["16 резервуаров", "Контроль качества"],
        },
        {
          icon: FaWarehouse,
          title: "6 линий розлива",
          details: [
            "1 л, 4 л, 20 л, 2×208 л, 1000 л",
            "Контроль качества",
          ],
        },
        {
          icon: FaWarehouse,
          title: "Хранение готовой продукции",
          details: ["8000 паллетомест"],
        },
        {
          icon: FaTruck,
          title: "Доставка готовой продукции",
          details: ["Доставка во все регионы России и страны СНГ"],
        },
      ],
    },
    {
      title: "Завод Lemarc",
      imageSrc: "https://lemarc.ru/images/factory-bg.png",
      imageAlt: "Завод Lemarc Overview",
      description:
        "Современное высокотехнологичное производство мощностью до 75 000 тонн в год.",
      details: [
        { subtitle: "Собственные ЖД пути", text: "01" },
        { subtitle: "Резервуарный парк 8 000 м³", text: "02" },
        { subtitle: "Склад готовой продукции на 8000 палето-мест", text: "03" },
        {
          subtitle: "Система одновременного дозирования мощностью 200 тонн в смену",
          text: "04",
        },
      ],
    },
  ]);

  const [swipers] = useState([
    {
      layoutType: "L2",
      title: "Топ Лубрикантс",
      images: [
        { url: "https://lemarc.ru/images/about-img.png", title: "Собственный завод в Ворсино" },
        { url: "https://lemarc.ru/images/about-img.png", title: "Производственный процесс" },
        { url: "https://lemarc.ru/images/about-img.png", title: "Наши Преимущества" },
        { url: "https://lemarc.ru/images/about-img.png", title: "Современные технологии производства" },
      ],
    },
  ]);

  return (
    <div className="container w-full mx-auto flex flex-col gap-14 py-16">
      {layouts.map((layout, index) => {
        switch (layout.layoutType) {
          case "L1":
            return (
              <ProductionShowcaseL1
                key={`layout-${index}`}
                {...layout}
              />
            );
          case "L2":
            return (
              <ProductionShowcaseL2
                key={`layout-${index}`}
                {...layout}
              />
            );
          case "Process":
            return (
              <div key={`layout-${index}`} id="workflow-section" className="py-16">
                <ProductionProcess cardData={layout.cardData} title={layout.title} />
              </div>
            );
          case "L3":
            return (
              <>
                <ProductionShowcaseL3 key={`layout-${index}`} {...layout} />
                <CompanyLayout sections={[layouts[2]]} backgroundImageSrc={layouts[2].imageSrc} />
              </>
            );
          default:
            
            return null;
        }
        
      })}

      {swipers.map((swiper, index) => {
        switch (swiper.layoutType) {
          case "L1":
            return <ProductionSwiperL1 key={`swiper-${index}`} {...swiper} />;
            case "L2":
            return <ProductionSwiperL2 key={`swiper-${index}`} {...swiper} />;
          case "L3":
            return (
            
                <ProductionSwiperL3 key={`swiper-${index}`} {...swiper} />
         
            );
          default:
            return null;
        }
      })}
      <SexComponent/>
      <div id="capacity-section" className="py-16">
        <h2 className="text-2xl font-bold">Мощности</h2>
        <p>Information about the production capacity will go here...</p>
      </div>
    </div>
  );
};

export default Production;
