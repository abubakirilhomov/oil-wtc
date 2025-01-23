import React from "react";
import { MdDirectionsCarFilled, MdLooksOne } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { GiWaterGun } from "react-icons/gi";

const Xz = () => {
  return (
    <div className="container mx-auto my-16 px-4 lg:px-20">
      {/* Header Section */}
      <p className="text-5xl  text-black w-full lg:w-2/3 font-light">
        ПОЧЕМУ VERTEX — ЭТО УМНЫЙ ВЫБОР?
      </p>

      <div className="flex flex-col lg:flex-row mt-16 justify-center gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          {/* Card 1 */}
          <div className="bg-gray-100 w-full rounded-xl p-6 ">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl text-black font-light">№1</p>
                <p className="mt-4 text-lg text-gray-700">Антифризы в России*</p>
                <p className="text-sm mt-2 text-gray-500">
                  *По данным АКПР за 2023 год
                </p>
              </div>
              <MdLooksOne className="text-6xl text-primaryBlue " />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 w-full rounded-xl p-6 ">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl text-black font-light">в ТОП-3</p>
                <p className="mt-4 text-lg text-gray-700">
                  крупнейших производителей
                </p>
                <p className="text-lg text-gray-700">моторных масел</p>
              </div>
              <IoBarChartSharp className="text-6xl text-primaryBlue " />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 w-full rounded-xl p-7 ">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl text-black font-light">25</p>
                <p className="mt-4 text-lg text-gray-700 leading-6">
                  лет опыта производства смазочных материалов и других
                  технических жидкостей
                </p>
              </div>
              <MdOutlineStarBorderPurple500 className="text-8xl text-primaryBlue " />
            </div>
          </div>

          <button className="bg-primaryBlue hover:bg-blue-900 transition duration-300 mt-6 h-14 w-full rounded-full text-white text-xl font-medium shadow-md">
            Подробнее
          </button>
        </div>

        <div className="bg-primaryBlue rounded-xl p-8 flex flex-col justify-between w-full lg:w-1/2 text-white shadow-md">
          <p className="text-3xl font-bold">
            ПОДБОР СМАЗОЧНЫХ МАТЕРИАЛОВ SINTEC
          </p>
          <div className="mt-8 flex flex-col gap-6">
            <button className="flex items-center justify-between w-full p-4 bg-transparent border border-white rounded-full text-white hover:bg-white  hover:text-blue-900  transition duration-200">
              <span className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full group">
                  <MdDirectionsCarFilled className="h-8 w-8  text-primaryBlue group-hover:text-blue-900" />
                </div>
                <p className="text-3xl font-light ">По марке и модели</p>
              </span>
              <GrNext className="text-2xl font-bold  text-white group-hover:text-primaryBlue" />
            </button>







            <button className="flex items-center justify-between w-full p-4 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-blue-900 transition duration-200">
              <span className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full group">
                  <GiWaterGun className="h-8 w-8 text-primaryBlue group-hover:text-blue-900" />
                </div>
                <p className=" text-3xl font-light ">Поиск по аналогу</p>
              </span>
              <GrNext className="text-2xl font-bold  text-white group-hover:text-primaryBlue" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xz;
