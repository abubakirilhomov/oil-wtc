"use client";

import React, { useState } from "react";
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
<<<<<<< HEAD
      title: "Наши ценности  ",
      backgroundColor: "#edeae1",
=======
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
>>>>>>> 469c6297723541a0eb6609f0699558ca4a0dfa00
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

  const [swipers] = useState([
    {
      layoutType: "L2",
      title: "Топ Лубрикантс",
      images: [
        {
          url: "https://lemarc.ru/images/about-img.png",
          title: "Собственный завод в Ворсино",
        },
        {
          url: "https://lemarc.ru/images/about-img.png",
          title: "Производственный процесс",
        },
        {
          url: "https://lemarc.ru/images/about-img.png",
          title: "Наши Преимущества",
        },
        {
          url: "https://lemarc.ru/images/about-img.png",
          title: "Современные технологии производства",
        },
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
<<<<<<< HEAD
=======
            
>>>>>>> 469c6297723541a0eb6609f0699558ca4a0dfa00
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
<<<<<<< HEAD
      <CompanyLayout sections={[layouts[1]]} backgroundColor={layouts[1].backgroundColor} />
=======
>>>>>>> 469c6297723541a0eb6609f0699558ca4a0dfa00
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
      </div>
    </div>
  );
};

export default AboutUs;
