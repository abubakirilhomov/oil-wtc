"use client";
import Image from 'next/image';
import React from 'react';

const ProductionShowcaseL2 = ({ 
    title, 
    highlightedWord, 
    buttonLabels, 
    sectionIds,
    imageSrc, 
    titleFont, 
    titleColor, 
    highlightedWordFont, 
    highlightedWordFontSize, 
    highlightedWordGradient, 
    buttonLabelsFont, 
    buttonLabelsColor,
    statistics,
    description// New prop for statistics
}) => {
    const handleButtonClick = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col md:flex-row md:justify-between container mx-auto items-center md:items-start py-8 space-y-4 md:space-y-0 max-w-[90%]">
            <div className="text-center flex justify-start items-start flex-col w-full md:w-1/2 md:text-left">
                <p 
                    className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6" 
                    style={{ fontFamily: titleFont, color: titleColor }}
                >
                    {title}{' '}
                    <span 
                        className={`bg-clip-text text-transparent  ${highlightedWordGradient}`}
                        style={{ fontFamily: highlightedWordFont }}
                    >
                        {highlightedWord}
                    </span>
                </p>
                <p className="text-lg text-gray-500 mb-6">
                    {description}
                </p>
                <div className="flex flex-wrap gap-4 flex-col w-full md:w-auto md:flex-row mb-8">
                    {buttonLabels.map((label, index) => (
                        <button 
                            key={index} 
                            className="px-6 py-2 border border-black rounded-full hover:bg-gray-200 text-center text-sm sm:text-base md:text-lg"
                            onClick={() => handleButtonClick(sectionIds[index])}
                            style={{ fontFamily: buttonLabelsFont }}
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
                    width={600} 
                    className="rounded-lg shadow-lg object-contain"
                />
            </div>
        </div>
    );
};

export default ProductionShowcaseL2;
