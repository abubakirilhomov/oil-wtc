"use client";
import Image from 'next/image';
import React from 'react';

const ProductionShowcaseL3 = ({ 
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
        <div className="flex flex-col container mx-auto items-center py-8 space-y-4">
            <div className="text-center flex justify-center items-center flex-col w-full md:text-center">
                <p 
                    className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-6xl"
                    style={{ fontFamily: titleFont, color: titleColor }}
                >
                    {title}{' '}
                    <span 
                        className={`bg-clip-text text-transparent ${highlightedWordGradient} text-3xl sm:text-3xl md:text-4xl lg:text-6xl`}
                        style={{ fontFamily: highlightedWordFont }}
                    >
                        {highlightedWord}
                    </span>
                </p>
            </div>

            <div className="w-full flex justify-center">
                <Image 
                    src={imageSrc} 
                    alt="Production Image" 
                    height={400} 
                    width={400} 
                    className="rounded-lg shadow-lg object-contain"
                />
            </div>

            <div className="mt-4 flex flex-col w-full sm:flex-row sm:flex-wrap justify-center gap-5">
                {buttonLabels.map((label, index) => (
                    <button 
                        key={index} 
                        className="w-full sm:w-auto px-4 py-2 border border-black rounded-full hover:bg-gray-100 text-center text-sm sm:text-base md:text-lg"
                        onClick={() => handleButtonClick(sectionIds[index])}
                        style={{ fontFamily: buttonLabelsFont, color: buttonLabelsColor }}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductionShowcaseL3;
