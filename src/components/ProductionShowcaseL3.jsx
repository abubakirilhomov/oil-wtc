"use client";
import Image from 'next/image';
import React from 'react';

const ProductionShowcaseL3 = ({ 
    title, 
    description,  
    highlightedWord, 
    buttonLabels, 
    sectionIds,
    imageSrc, // Updated to support multiple images
    titleFont, 
    titleColor, 
    highlightedWordFont, 
    highlightedWordGradient, 
    buttonLabelsFont, 
    buttonLabelsColor 
}) => {
    const handleButtonClick = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col md:flex-row container mx-auto items-start py-8 space-y-4 md:space-y-0 md:space-x-8">
            {/* Left Section: Text and Buttons */}
            <div className="flex-1">
                <div className="text-left space-y-4">
                    <p 
                        className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ fontFamily: titleFont, color: titleColor }}
                    >
                        {title}{' '}
                        <span 
                            className={`bg-clip-text text-transparent ${highlightedWordGradient} text-3xl sm:text-3xl md:text-4xl lg:text-5xl`}
                            style={{ fontFamily: highlightedWordFont }}
                        >
                            {highlightedWord}
                        </span>
                    </p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl" style={{ fontFamily: titleFont, color: titleColor }}>
                        {description}
                    </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                    {buttonLabels.map((label, index) => (
                        <button 
                            key={index} 
                            className="px-6 py-2 border border-black rounded-full hover:bg-gray-200 text-center text-sm sm:text-base md:text-lg"
                            onClick={() => handleButtonClick(sectionIds[index])}
                            style={{ fontFamily: buttonLabelsFont, color: buttonLabelsColor }}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center space-x-4">
                {imageSrc.map((src, idx) => (
                    <Image 
                        key={idx}
                        src={src} 
                        alt={`Production Image ${idx + 1}`} 
                        height={400} 
                        width={300} 
                        className="rounded-lg shadow-lg object-cover"
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductionShowcaseL3;
