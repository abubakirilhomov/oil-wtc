"use client";

import React from 'react';

const FactoryInfo = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white min-h-screen"
      style={{
        backgroundImage: `url(https://interoil-spb.ru/wp-content/uploads/2023/03/byvshij-zavod-total-v-rossii-budet-vypuskat-masla-pod-brendom-lemarc.jpg)`, // Faqat rasmning o'z joylashuvini almashtirish kerak
      }}
    >
      {/* Qoraytiruvchi qatlam */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 px-6 md:px-20 py-14">
        <div className="mb-10 text-center">
          <h1 className="text-6xl font-extrabold uppercase">Завод</h1>
          <h2 className="text-5xl text-red-500 font-bold mt-2">LEMARC</h2>
          <p className="text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Современное высокотехнологичное производство мощностью до 75 000 тонн в год
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-16">
          <div className="flex flex-col items-center border-l-4 border-white px-6">
            <h3 className="text-3xl font-extrabold mb-4">01</h3>
            <p className="text-lg font-medium">Собственные ЖД пути</p>
          </div>
          <div className="flex flex-col items-center border-l-4 border-white px-6">
            <h3 className="text-3xl font-extrabold mb-4">02</h3>
            <p className="text-lg font-medium">Резервуарный парк 8 000 м³</p>
          </div>
          <div className="flex flex-col items-center border-l-4 border-white px-6">
            <h3 className="text-3xl font-extrabold mb-4">03</h3>
            <p className="text-lg font-medium">Склад готовой продукции на 8000 палето-мест</p>
          </div>
          <div className="flex flex-col items-center border-l-4 border-white px-6">
            <h3 className="text-3xl font-extrabold mb-4">04</h3>
            <p className="text-lg font-medium">Система одновременного дозирования мощностью 200 тонн в смену</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryInfo;
