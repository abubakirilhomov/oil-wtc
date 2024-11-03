"use client"
import React, { useState } from "react";
import ProductionShowcaseL1 from "@/components/ProductionShowcaseL1";
import ProductionShowcaseL2 from "@/components/ProductionShowcaseL2";
import ProductionShowcaseL3 from "@/components/ProductionShowcaseL3";

const Production = () => {
  const [layouts] = useState([
    {
      layoutType: "L1",
      title: "Собственный завод в",
      highlightedWord: "Ворсино",
      buttonLabels: ["Компания", "Схема работы", "Мощности"],
      sectionIds: ["company-section", "workflow-section", "capacity-section"],
      imageSrc: "/path/to/image1.jpg",
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
      layoutType: "L2",
      title: "Производственный процесс",
      highlightedWord: "Технологии",
      buttonLabels: ["Производство", "Качество", "Сертификация"],
      sectionIds: ["production-section", "quality-section", "certification-section"],
      imageSrc: "/path/to/image2.jpg",
      titleFont: "Arial, sans-serif",
      titleFontSize: "1rem",
      titleColor: "#333",
      highlightedWordFont: "Georgia, serif",
      highlightedWordFontSize: "3rem",
      highlightedWordGradient: "bg-gradient-to-r from-green-600 to-blue-500",
      buttonLabelsFont: "Verdana, sans-serif",
      buttonLabelsFontSize: "1rem",
      buttonLabelsColor: "#333",
    },
    {
      layoutType: "L3",
      title: "Наши Преимущества",
      highlightedWord: "Оборудование",
      buttonLabels: ["Преимущества", "Сотрудничество", "Отзывы"],
      sectionIds: ["advantages-section", "partnership-section", "reviews-section"],
      imageSrc: "/path/to/image3.jpg",
      titleFont: "Helvetica, sans-serif",
      titleFontSize: "3.5rem",
      titleColor: "#222",
      highlightedWordFont: "Helvetica, sans-serif",
      highlightedWordFontSize: "3.5rem",
      highlightedWordGradient: "bg-gradient-to-r from-purple-600 to-pink-500",
      buttonLabelsFont: "Tahoma, sans-serif",
      buttonLabelsFontSize: "1rem",
      buttonLabelsColor: "#222",
    },
  ]);

  return (
    <div className="container w-full max-w-[90%] mx-auto">
      {layouts.map((layout, index) => {
        switch (layout.layoutType) {
          case "L1":
            return (
              <ProductionShowcaseL1
                key={index}
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
                key={index}
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
                key={index}
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
