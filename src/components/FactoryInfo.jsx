"use client"

import React from 'react';

const FactoryInfo = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('/america.jpg')`, 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
      
      <div className="relative z-10 p-14">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold">Завод</h1>
          <h2 className="text-4xl text-red-600 font-bold">LEMARC</h2>
          <p className="text-lg mt-4 max-w-md mx-auto">
            Современное высокотехнологичное производство мощностью до 75 000 тонн в год
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 text-center">
          <div className="flex flex-col items-center border-l-2 border-white px-4">
            <h3 className="text-2xl font-bold mb-2">01</h3>
            <p className="text-lg font-semibold">Собственные ЖД пути</p>
          </div>
          <div className="flex flex-col items-center border-l-2 border-white px-4">
            <h3 className="text-2xl font-bold mb-2">02</h3>
            <p className="text-lg font-semibold">Резервуарный парк 8 000 м³</p>
          </div>
          <div className="flex flex-col items-center border-l-2 border-white px-4">
            <h3 className="text-2xl font-bold mb-2">03</h3>
            <p className="text-lg font-semibold">Склад готовой продукции на 8000 палето-мест</p>
          </div>
          <div className="flex flex-col items-center border-l-2 border-white px-4">
            <h3 className="text-2xl font-bold mb-2">04</h3>
            <p className="text-lg font-semibold">Система одновременного дозирования мощностью 200 тонн в смену</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryInfo;
