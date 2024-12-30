import React from "react";
import { MdDirectionsCarFilled, MdLooksOne } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { GiWaterGun } from "react-icons/gi";

const Xz = () => {
  return (
    <div className="bg-white my-20 p-10 flex justify-between">
      <div className="w-6/12">
        <p className="text-[60px] font-samibold text-black ml-32">
          ПОЧЕМУ SINTEC — <br />
          <span>ЭТО УМНЫЙ ВЫБОР?</span>
        </p>

        <div className="ml-28 w-full">
          <div className="mt-16 bg-gray-100 h-16 w-2/3 rounded-xl pl-5 pb-44">
            <div className="flex">
              <div>
                <p className="text-[52px] text-black font-sans">№1</p>
                <p className="text-[24px] relative bottom-5 text-black mt-6 font-serif">
                  Антифризы в России* <br />
                  <span className="text-[16px]">
                    *По данным АКПР за 2023 год
                  </span>
                </p>
              </div>
              <div className="ml-36 mt-5">
                <p className="text-6xl text-blue-800">
                  <MdLooksOne className="relative right-2" />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 bg-gray-100 h-16 w-2/3 rounded-xl pl-5 pb-44">
            <div className="flex">
              <div>
                <p className="text-[50px] text-black font-mono">в ТОП-3</p>
                <p className="text-[20px] relative bottom-5 text-slate-800 mt-6 font-serif">
                  крупнейших производителей <br />
                  моторных масел
                </p>
              </div>
              <div className="ml-28 mt-5 text-5xl text-blue-800">
                <IoBarChartSharp className="relative" />
              </div>
            </div>
          </div>
          <div className="mt-10 bg-gray-100 h-16 w-2/3 rounded-xl pl-5 pb-44">
            <div className="flex">
              <div>
                <p className="text-[56px] text-black font">25</p>
                <p className="text-[18px] relative bottom-5 text-slate-800 mt-4 font-serif">
                  лет опыта производства смазочных <br />
                  материалов и других технических <br />
                  жидкостей
                </p>
              </div>
              <div className="mt-5">
                <MdOutlineStarBorderPurple500 className="text-6xl text-blue-800 relative left-20 " />
              </div>
            </div>
          </div>
          <button className="btn btn-primary mt-5 h-14 w-2/3 rounded-3xl text-white text-2xl ">
            Подробнее
          </button>
        </div>
      </div>
      <div className="mt-56 rounded-2xl overflow-hidden h-auto relative">
        <img
          src="/photos/backgraund.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 flex flex-wrap justify-center items-center">
          <p className="text-white text-4xl font-medium relative top-10 right-28 pl-10">
            ПОДБОР <br />
            СМАЗОЧНЫХ <br />
            МАТЕРИАЛОВ SINTEC
          </p>
          <div className="mt-56 flex flex-col gap-4 w-full justify-center pl-10 pr-10 items-center">
            <button className="flex items-center justify-between w-full h-full p-6 bg-transparent border border-white rounded-3xl text-white hover:bg-white hover:text-black hover:border-red-700 transition duration-100 ">
              <span className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-box">
                  <MdDirectionsCarFilled className="h-10 w-10 transition duration-200 text-red-700" />
                </div>
                <p className="transition duration-200 text-[28px] ml-4">
                  По марке и модели
                </p>
              </span>
              <span className="text-2xl font-bold">
                <GrNext />
              </span>
            </button>

            <button className="flex items-center justify-between w-full h-full p-6 bg-transparent border border-white rounded-3xl text-white hover:bg-white hover:text-black hover:border-red-700 transition duration-100 ">
              <span className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-box">
                  <GiWaterGun className="h-10 w-10 transition duration-200 text-red-700" />
                </div>
                <p className="transition duration-200 text-[28px] ml-4">
                  Поиск по аналогу
                </p>
              </span>
              <span className="text-2xl font-bold">
                <GrNext />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xz;
