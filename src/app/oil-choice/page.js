'use client';

import React, { useState } from 'react';
import NextImage from 'next/image';

const OilChoice = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-10 pt-0"> {/* Reduced top padding */}
      <div className="flex-1 mb-6 lg:mb-0 lg:ml-10"> {/* Added left margin for left content */}
        <h1 className="text-7xl font-bold mb-4">Забота о двигателе</h1>
        <div className="flex items-center mb-4">
          {/* Daisy UI progress bar */}
          <progress className="progress progress-primary w-56" value="50" max="100"></progress>
        </div>

        <div className="space-y-6">
          <div className="border-b-2 py-4 flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown(1)}>
            <p className="text-xl font-semibold">Защита от трения</p>
            <span className="text-2xl">{openIndex === 1 ? '↑' : '↓'}</span>
          </div>
          {openIndex === 1 && (
            <div className="pl-6 pb-6 text-lg">
              <p>
                Специально подобранный пакет противоизносных и противозадирных присадок продуктов Lemarc защищает двигатель от трения и износа, 
                а синтетические базовые масла III, II, IV группы в составе позволяют сохранять необходимую вязкость смазочного материала в любых режимах эксплуатации, 
                продлевая срок службы двигателя.
              </p>
            </div>
          )}

          <div className="border-b-2 py-4 flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown(2)}>
            <p className="text-xl font-semibold">Защита от образования отложений</p>
            <span className="text-2xl">{openIndex === 2 ? '↑' : '↓'}</span>
          </div>
          {openIndex === 2 && (
            <div className="pl-6 pb-6 text-lg">
              <p>Описание защиты от образования отложений...</p>
            </div>
          )}

          <div className="border-b-2 py-4 flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown(3)}>
            <p className="text-xl font-semibold">Защита от высоких нагрузок</p>
            <span className="text-2xl">{openIndex === 3 ? '↑' : '↓'}</span>
          </div>
          {openIndex === 3 && (
            <div className="pl-6 pb-6 text-lg">
              <p>Описание защиты от высоких нагрузок...</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1">
        <NextImage
          src="https://lemarc.ru/images/features-engine.png"
          alt="Engine Image"
          width={800}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default OilChoice;
