"use client"
import Image from 'next/image';
import React from 'react';

const ProductionShowcaseL1 = ({ 
  title, 
  highlightedWord, 
  buttonLabels, 
  sectionIds,
  imageSrc, 
  titleFont, 
  titleFontSize, 
  titleColor, 
  highlightedWordFont, 
  highlightedWordFontSize, 
  highlightedWordGradient, 
  buttonLabelsFont, 
  buttonLabelsFontSize, 
  buttonLabelsColor 
}) => {
  const handleButtonClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between container mx-auto items-center md:items-end py-8 space-y-4 md:space-y-0">
      <div className="text-center md:text-left w-1/2">
        <p 
          className="font-bold lg:mb-14" 
          style={{ fontFamily: titleFont, fontSize: titleFontSize, color: titleColor }}
        >
          {title}{' '}
          <span 
            className={`bg-clip-text text-transparent ${highlightedWordGradient}`}
            style={{ fontFamily: highlightedWordFont, fontSize: highlightedWordFontSize }}
          >
            {highlightedWord}
          </span>
        </p>
        <div className="mt-4 flex flex-col w-full sm:flex-row sm:flex-wrap justify-center md:justify-start gap-5">
          {buttonLabels.map((label, index) => (
            <button 
              key={index} 
              className="w-full sm:w-auto px-4 py-2 border border-black rounded-full hover:bg-gray-100 text-center"
              onClick={() => handleButtonClick(sectionIds[index])}
              style={{ fontFamily: buttonLabelsFont, fontSize: buttonLabelsFontSize, color: buttonLabelsColor }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <Image 
          src={imageSrc} 
          alt="Production Image" 
          height={400} 
          width={400} 
          className="rounded-lg shadow-lg object-contain"
        />
      </div>
    </div>
  );
};

export default ProductionShowcaseL1;
