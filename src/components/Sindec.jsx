import React from "react";
import { MdDirectionsCarFilled, MdLooksOne } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { GiWaterGun } from "react-icons/gi";

const Xz = () => {
  return (
    <div className=" container mx-auto   my-20 p-10 ">
    
        <p className="text-6xl font-samibold text-black  w-[50%]">
          ПОЧЕМУ SINTEC 
          ЭТО УМНЫЙ ВЫБОР?
        </p>
      <div className="flex mt-16  justify-center">

        <div className=" ">
          {/* Card 1 */}
          <div className=" bg-gray-100  w-2/3 rounded-xl  px-6 py-6 ">
            <div className="flex justify-between">
              <div>
                <p className="text-4xl text-black font-sans">№1</p>
                <p className="mt-4  text-xl text-gray-600">
                  Антифризы в России*
      
                </p>
                <p className="text-sm">       *По данным АКПР за 2023 год</p>
              </div>
              <div className="">
                <MdLooksOne className="text-6xl text-blue-700" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="mt-10 bg-gray-100  w-2/3 rounded-xl  px-6 py-6  ">
            <div className="flex justify-between">
              <div>
                <p className="text-4xl text-black font-sans">в ТОП-3</p>
                <p className="text-xl text-gray-600">
                  крупнейших производителей
                </p>
                <p> моторных масел</p>
              </div>
              <div className="">
                <IoBarChartSharp className="text-5xl text-blue-700" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="mt-10 bg-gray-100  w-2/3 rounded-xl   px-6 py-4 ">
            <div className="flex justify-between">
              <div>
                <p className="text-4xl text-black">25</p>
                <p className="text-xl leading-6 text-gray-600  w-[90%] ">
                  лет опыта производства смазочных
                 
                  материалов и других технических
              
                  жидкостей
                </p>
              </div>
              <div className="mt-5">
                <MdOutlineStarBorderPurple500 className="text-6xl text-blue-700  " />
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="btn  bg-blue-700  mt-6 h-14 w-2/3 rounded-3xl text-white text-2xl">
            Подробнее
          </button>
        </div>
   

      {/* Right Section */}
      <div className=" rounded-2xl overflow-hidden h-full p-12  w-6/12 bg-blue-700">
    
          <p className="text-white text-3xl font-semibold w-[55%] " >
            ПОДБОР  
            СМАЗОЧНЫХ
            МАТЕРИАЛОВ SINTEC
          </p>
        <div className="   flex flex-wrap justify-center items-center">
          <div className="mt-32 flex flex-col gap-8 w-full justify-center   items-center">
            {/* Button 1 */}
            <button className="flex items-center justify-between w-full h-full p-6 bg-transparent border border-white rounded-3xl text-white hover:bg-white hover:text-blue-700 hover:border-blue-700 transition duration-100">
              <span className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-box">
                  <MdDirectionsCarFilled className="h-10 w-10 transition duration-200 text-blue-700 hover:bg-blue-700" />
                </div>
                <p className="transition duration-200 text-[28px] ml-4">
                  По марке и модели
                </p>
              </span>
              <GrNext className="text-2xl font-bold" />
            </button>            {/* Button 2 */}
            <button className="flex items-center justify-between w-full h-full p-6 bg-transparent border border-white rounded-3xl text-white hover:bg-white hover:text-blue-700 hover:border-blue-700 transition duration-100">
              <span className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-box">
                  <GiWaterGun className="h-10 w-10 transition duration-200 text-blue-700" />
                </div>
                <p className="transition duration-200 text-[28px] ml-4">
                  Поиск по аналогу
                </p>
              </span>
              <GrNext className="text-2xl font-bold" />
            </button>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Xz;

