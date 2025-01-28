import React from "react";
import {
  MdDirectionsCarFilled,
  MdLooksOne,
  MdOutlineStarBorderPurple500,
} from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { GiWaterGun } from "react-icons/gi";

const Xz = () => {
  return (
    <div className="container mx-auto my-16 px-4 lg:px-20">
      {/* Header Section */}
      <p className="text-5xl text-black w-full lg:w-2/3 font-light">
        ПОЧЕМУ VERTEX — ЭТО УМНЫЙ ВЫБОР?
      </p>

      <div className="flex flex-col lg:flex-row mt-16 justify-center gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          <div className="bg-gray-100 w-full rounded-xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl text-black font-light">№1</p>
                <p className="mt-4 text-lg text-gray-700">Идея для фото-карусели:</p>
                <p className="text-xs mt-2 text-gray-500">
                  В чем разница между классами G11 и G12? Что лучше???
                </p>
                <p className="text-xs mt-2 text-gray-500">
                  Когда пора менять антифриз???
                </p>
                <p className="text-xs mt-2 text-gray-500">
                  Антифриз для Электромобиля??? Да, VERTEX EVO-TEC 45! (и рядом канистра)
                </p>
                <p className="text-xs mt-2 text-gray-500">
                  Дышите спокойно и уверенно! (и рядом воздушный фильтр любой)
                </p>
              </div>
              <MdLooksOne className="text-6xl text-primaryBlue" />
            </div>
          </div>

          <div className="bg-gray-100 w-full rounded-xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl text-black font-light">в ТОП-3</p>
                <p className="mt-4 text-lg text-gray-700">VERTEX это:</p>
                <p className="text-xs text-gray-700">гарантия от перегрева и замерзания</p>
                <p className="text-xs text-gray-700">уверенное движение и в -40С</p>
                <p className="text-xs text-gray-700">гарантия качества на 250 000 км / 5 лет</p>
              </div>
              <IoBarChartSharp className="text-6xl text-primaryBlue" />
            </div>
          </div>

          <div className="bg-gray-100 w-full rounded-xl p-7">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl text-black font-light">25</p>
                <p className="mt-4 text-lg text-gray-700 leading-6">VERTEX это:</p>
                <p className="text-xs text-gray-700">
                  защита от коррозии и продление срока службы двигателя
                </p>
                <p className="text-xs text-gray-700">премиальное качество по доступной цене</p>
              </div>
              <MdOutlineStarBorderPurple500 className="text-8xl text-primaryBlue" />
            </div>
          </div>

          <button className="bg-primaryBlue hover:bg-blue-900 transition duration-300 mt-6 h-14 w-full rounded-full text-white text-xl font-medium shadow-md">
            Подробнее
          </button>
        </div>

        {/* Right Column */}
        <div className="bg-primaryBlue rounded-xl p-8 flex flex-col justify-between w-full lg:w-1/2 text-white shadow-md">
          <p className="text-3xl font-bold">Почему для VERTEX</p>
          <div className="mt-8 flex flex-col gap-6">
            <button className="flex items-center justify-between w-full p-4 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-blue-900 transition duration-200">
              <span className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full group">
                  <MdDirectionsCarFilled className="h-8 w-8 text-primaryBlue group-hover:text-blue-900" />
                </div>
                <p className="text-3xl font-light">По марке и модели</p>
              </span>
              <GrNext className="text-2xl font-bold text-white group-hover:text-primaryBlue" />
            </button>

            <button className="flex items-center justify-between w-full p-4 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-blue-900 transition duration-200">
              <span className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full group">
                  <GiWaterGun className="h-8 w-8 text-primaryBlue group-hover:text-blue-900" />
                </div>
                <p className="text-3xl font-light">Поиск по аналогу</p>
              </span>
              <GrNext className="text-2xl font-bold text-white group-hover:text-primaryBlue" />
            </button>
          </div>
        </div>
      </div>
{/* 
      <div className="mt-16">
        <p className="text-3xl text-black font-bold mb-6">Статьи:</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            <a
              href="https://auto.ru/mag/article/kak-chasto-nuzhno-menyat-antifriz-v-avtomobile/?utm_referrer=https%3A%2F%2Fauto.ru%2Fmag%2Farticle%2Fkak-chasto-nuzhno-menyat-antifriz-v-avtomobile%2F#part1"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Когда пора менять антифриз???
            </a>
          </li>
          <li>
            <a
              href="https://www.drive2.ru/b/468614605610943331/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              В чем разница между классами G11 и G12?
            </a>
          </li>
          <li>
            <a
              href="https://dzen.ru/a/ZLWi3DikAwQ78xW1"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              5 мифов об антифризе
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Xz;
