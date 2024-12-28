"use client"

import React from 'react';

const Partner = () => {
  const partners = [
    'https://lemarc.ru/images/partners/1.svg',
    'https://lemarc.ru/images/partners/2.svg',
    'https://lemarc.ru/images/partners/3.png',
    'https://lemarc.ru/images/partners/4.png',
    'https://lemarc.ru/images/partners/5.png',
    'https://lemarc.ru/images/partners/6.png',
    'https://lemarc.ru/images/partners/7.png',
    'https://lemarc.ru/images/partners/maz.png'
  ];

  return (
    <div className="p-10 bg-[#f8f6f1]">
      <div className="font-extrabold mb-6 ">
        <p className="text-6xl font-bold">OEM-партнеры</p>
        <p className="text-red-500 font-bold text-7xl mt-2">Lemarc</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {partners.map((url, index) => (
          <div key={index} className="flex justify-center">
            <img src={url} alt={`Partner ${index + 1}`} className="h-36 md:h-48 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
