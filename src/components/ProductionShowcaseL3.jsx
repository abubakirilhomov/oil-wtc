"use client"; // Ensure this is a client component for interactivity

import Image from 'next/image';
import React from 'react';

const ProductionShowcaseL3 = ({ 
  title, 
  highlightedWord, 
  buttonLabels, 
  sectionIds, // Prop for section IDs to navigate to
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
    <div className="flex flex-col justify-center items-center container mx-auto py-8 space-y-8">
      {/* Text Section */}
      <div className="text-center">
        <p 
          className="font-bold mb-6" 
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
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-5">
        {buttonLabels.map((label, index) => (
          <button 
            key={index} 
            className="px-4 py-2 border border-black rounded-full hover:bg-gray-100 text-center"
            onClick={() => handleButtonClick(sectionIds[index])} // Attach the click handler
            style={{ fontFamily: buttonLabelsFont, fontSize: buttonLabelsFontSize, color: buttonLabelsColor }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <Image 
          src={imageSrc} 
          alt="Production Image" 
          height={400} 
          width={400} 
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ProductionShowcaseL3;
