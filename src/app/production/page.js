"use client"

import React, { useState } from "react";
import ProductionShowcaseL1 from "@/components/ProductionShowcaseL1";
import ProductionShowcaseL2 from "@/components/ProductionShowcaseL2";
import ProductionShowcaseL3 from "@/components/ProductionShowcaseL3";
import ProductionSwiperL1 from "@/components/ProductionSwiperL1";
import ProductionSwiperL2 from "@/components/ProductionSwiperL2";
import ProductionSwiperL3 from "@/components/ProductionSwiperL3";
import CompanyLayout from "@/components/CompanyLayout";

const Production = () => {
  const [layouts] = useState([
    {
      layoutType: "L3",
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
    },
    {
      title: "Завод Lemarc",
      imageSrc: "https://lemarc.ru/images/factory-bg.png",
      imageAlt: "Завод Lemarc Overview",
      description:
        "Современное высокотехнологичное производство мощностью до 75 000 тонн в год.",
      details: [
        {
          subtitle: "Собственные ЖД пути",
          text: "01",
        },
        {
          subtitle: "Резервуарный парк 8 000 м³",
          text: "02",
        },
        {
          subtitle: "Склад готовой продукции на 8000 палето-мест",
          text: "03",
        },
        {
          subtitle: "Система одновременного дозирования мощностью 200 тонн в смену",
          text: "04",
        },
      ],
    },
  ]);

  const [swipers] = useState([
    {
      layoutType: "L1",
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
    <div className="container w-full max-w-[90%] mx-auto flex flex-col gap-14">
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
              />
            );
          case "L3":
            return (
              <ProductionShowcaseL3
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
          default:
            return null;
        }
      })}
      <CompanyLayout sections={[layouts[1]]} backgroundImageSrc={[layouts[1].imageSrc]} />
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

      <div id="company-section" className="py-16">
        <h2 className="text-2xl font-bold">Компания</h2>
        <p>Content about the company will go here...</p>
      </div>
      <div id="workflow-section" className="py-16">
        <h2 className="text-2xl font-bold">Схема работы</h2>
        <p>Details about the workflow will be added here...</p>
      </div>
      <div id="capacity-section" className="py-16">
        <h2 className="text-2xl font-bold">Мощности</h2>
        <p>Information about the production capacity will go here...</p>
      </div>
    </div>
  );
};

export default Production;
