'use client';

// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperType } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import Image from 'next/image';

// export default function VerticalSlider() {
//   const swiperRef = useRef(null); 

//   const handleSlide = (index) => { 
//     if (swiperRef.current) {
//       swiperRef.current.slideTo(index);
//     }
//   };

//   return (
//     <div className=" flex gap-16 h-full w-full min-h-screen justify-center items-center ">
//       <div className="w-2/6 ">
//         <Swiper
//           direction="vertical"
//           pagination={{ clickable: true }}
//           spaceBetween={30}
//           className="h-[500px]"
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//         >
//           <SwiperSlide>
//             <div className="flex h-full items-center justify-center w-full">
//               <Image 
//                 src="https://lemarc.ru/images/features-2.png" 
//                 alt="Laboratory equipment" 
//                 width={800} 
//                 height={400} 
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="flex h-full items-center justify-center">
//               <Image 
//                 src="https://lemarc.ru/images/features-3.png" 
//                 alt="Quality control" 
//                 width={800} 
//                 height={400} 
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="flex h-full items-center justify-center">
//               <Image 
//                 src="https://lemarc.ru/images/features-4.png" 
//                 alt="Product testing" 
//                 width={800} 
//                 height={400} 
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="flex h-full items-center justify-center">
//               <Image 
//                 src="https://lemarc.ru/images/features-5.png" 
//                 alt="Team expertise" 
//                 width={800} 
//                 height={400} 
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       <div className="w-1/4">
//         <h1 className="text-5xl font-extrabold leading-tight">
//           Высокие <br />
//           стандарты <br />
//           производства
//         </h1>
//         <div className="mt-28 h-[3px] bg-gradient-to-r from-blue-900 to-orange-500" />
//         <ul className="mt-4 flex flex-col space-y-4 text-lg">
//           <li>
//             <button
//               onClick={() => handleSlide(0)}
//               className="w-full text-left font-bold transition-colors hover:text-blue-900"
//             >
//               Уникальные формульные составы
//             </button>
//             <hr className="mt-4" />
//           </li>
//           <li>
//             <button
//               onClick={() => handleSlide(1)}
//               className="w-full text-left font-bold transition-colors hover:text-blue-900"
//             >
//               Входной контроль сырья
//             </button>
//             <hr className="mt-4" />
//           </li>
//           <li>
//             <button
//               onClick={() => handleSlide(2)}
//               className="w-full text-left font-bold transition-colors hover:text-blue-900"
//             >
//               Расширенная проверка готовой продукции
//             </button>
//             <hr className="mt-4" />
//           </li>
//           <li>
//             <button
//               onClick={() => handleSlide(3)}
//               className="w-full text-left font-bold transition-colors hover:text-blue-900"
//             >
//               Высококвалифицированная команда
//             </button>
//             <hr className="mt-4" />
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const HomeSwiper = () => {
  return (
    <div className='text-white'>HomeSwiper</div>
  )
}

export default HomeSwiper