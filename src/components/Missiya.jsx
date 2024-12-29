import React from 'react';

const Missiya = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-gray-100"
      style={{
        background: 'linear-gradient(to right, #f8f8f8, #e6e6e6)',
      }}
    >
      <div className="w-full max-w-7xl grid grid-cols-2 gap-10 items-center rounded-lg shadow-lg bg-white p-8">
        {/* Левая часть с текстом */}
        <div className="text-left">
          <h2 className="text-5xl font-bold mb-6">НАША МИССИЯ</h2>
          <p className="text-red-600 font-bold text-2xl mb-6">
            ВЫГОДНОЕ РЕШЕНИЕ ДЛЯ НАДЁЖНОЙ РАБОТЫ ВАШЕГО АВТОМОБИЛЯ!
          </p>
          <p className="text-lg mb-4">
            УЖЕ 25 ЛЕТ БРЕНД SINTEC НЕИЗМЕННО СЛЕДУЕТ СВОЕЙ МИССИИ И ПРЕДЛАГАЕТ:
          </p>
          <p className="text-lg mb-4">
            SINTEC занимает первое место в России на рынке антифризов и входит в
            топ 3 крупнейших производителей смазочных материалов. Мы завоевали
            абсолютное доверие автолюбителей, поскольку обширный ассортиментный
            портфель сегодня закрывает все потребности наших покупателей.
          </p>
          <p className="text-xl font-bold">SINTEC — ВСЕГДА УМНЫЙ ВЫБОР!</p>
        </div>

        {/* Правая часть с видео */}
        <div>
          <video
            className="rounded-lg shadow-lg w-full h-auto"
            controls
            src="https://sinteclubricants.ru/novaya-glavnaya-test/img/tv-30sec.mp4"
          >
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Missiya;
