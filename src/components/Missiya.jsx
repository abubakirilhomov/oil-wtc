import React from 'react';

const Missiya = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: "url('https://sinteclubricants.ru/novaya-glavnaya-test/img/BG.png')",
      }}
    >
     
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-lg shadow-lg bg-white p-8">
    
        <div className="text-left">
          <h2 className="text-5xl font-bold mb-6">НАША МИССИЯ</h2>
          <p className="text-primaryBlue font-bold text-2xl mb-6">
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

        <div className="flex justify-center">
          <iframe
            className="rounded-lg shadow-lg w-full h-48 sm:h-56 lg:h-64"
            src="https://www.youtube.com/embed/MjYZInyumfw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Missiya;
