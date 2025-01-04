'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    date: '16.05.2024',
    title: 'КАКОЙ АНТИФРИЗ ЗАЛИВАТЬ В NISSAN QASHQAI',
    description: 'Своевременное и правильное техобслуживание вашего автомобиля поможет продлить срок его службы.',
    image: 'https://lemarc.ru/images/features-2.png',
  },
  {
    id: 2,
    date: '08.05.2024',
    title: 'ПРИЧИНЫ ПОЛОМКИ СИСТЕМЫ ОХЛАЖДЕНИЯ ДВИГАТЕЛЯ',
    description: 'Недостаточная эффективность охлаждения может привести к перегреву двигателя и его повреждению.',
    image: 'https://lemarc.ru/images/features-3.png',
  },
  {
    id: 3,
    date: '07.05.2024',
    title: 'КЛАССИФИКАЦИЯ МАСЕЛ ПО ACEA',
    description: 'Современная классификация моторных масел по стандартам ACEA помогает выбрать оптимальное масло.',
    image: 'https://lemarc.ru/images/features-4.png',
  },
];

export default function VerticalSlider() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#00000000]  py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-white uppercase tracking-widest">Статьи</h1>
      <div className="w-full max-w-7xl">
        <Swiper
          direction="vertical"
          pagination={{ clickable: true }}
          spaceBetween={30}
          modules={[Pagination, Navigation, Mousewheel]}
          className="h-[600px]"
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Левый блок: описание статьи */}
                <div className="w-full md:w-1/2 text-white space-y-4">
                  {/* Дата и заголовок */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400">{article.date}</p>
                    <h2 className="text-3xl font-semibold text-white mt-2">{article.title}</h2>
                  </div>
                  {/* Описание статьи */}
                  <p className="text-gray-300">{article.description}</p>
                </div>

                {/* Правый блок: изображение */}
                <div className="w-full md:w-1/2">
                  <div className="flex justify-center">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={700}
                      height={400}
                      className="object-cover rounded-2xl shadow-lg mb-4 transition-transform transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
