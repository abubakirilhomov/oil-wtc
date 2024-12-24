    "use client";
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
        <div className="flex flex-col md:flex-row md:justify-between container mx-auto items-center md:items-start py-8 space-y-4 md:space-y-0">
    <div className="text-center flex justify-center items-center flex-col w-full md:w-1/2 md:text-left"> {/* Changed w-1/2 to w-full on mobile */}
        <p 
        className="font-bold lg:mb-14 text-center md:text-left text-3xl sm:text-3xl md:text-4xl lg:text-6xl" 
        style={{ fontFamily: titleFont, color: titleColor }}
        >
        {title}{' '}
        <span 
            className={`bg-clip-text text-transparent ${highlightedWordGradient} text-3xl sm:text-3xl md:text-4xl lg:text-6xl`} // Adjust font sizes for highlighted text
            style={{ fontFamily: highlightedWordFont }}
        >
            {highlightedWord}
        </span>
        </p>
        <div className="mt-4 flex flex-col w-full sm:flex-row sm:flex-wrap justify-center md:justify-start gap-5">
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

    export default ProductionShowcaseL1;
