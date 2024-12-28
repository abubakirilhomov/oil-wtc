// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';

// export default function Banner() {
//   const [slides, setSlides] = useState([]);

//   const fetchBanners = async () => {
//     try {
//       const response = await fetch('https://bakend-wtc-4.onrender.com/api/v1/banners');
//       const data = await response.json();
//       setSlides(data.data); // Assuming the data is in the "data" field
//     } catch (error) {
//       console.error('Error fetching banners:', error);
//     }
//   };

//   useEffect(() => {
//     fetchBanners();
//   }, []);

//   return (
//     <div className="relative">
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={0}
//         slidesPerView={1}
//         pagination={{
//           clickable: true,
//           el: '.custom-pagination',
//           bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-black opacity-50',
//           bulletActiveClass: '!opacity-100',
//         }}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop={true}
//         className="rounded-lg"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide._id}>
//             <div className="relative flex flex-col md:flex-row w-full md:h-[500px] lg:h-[700px]">
//               <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16">
//                 <h2 className="text-6xl font-bold md:text-7xl lg:text-8xl bg-gradient-to-r from-blue-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
//                   {slide.title}
//                 </h2>
//                 <p className="text-xl md:text-2xl text-gray-700 mb-6">
//                   {slide.description}
//                 </p>
//                 <div className="flex space-x-4">
//                   <button className="bg-transparent border border-gray-400 text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 w-max">
//                     Где купить
//                   </button>
//                   <button className="bg-transparent border border-gray-400 text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 w-max">
//                     Правила акции
//                   </button>
//                 </div>
//                 {slide.buttonText && (
//                   <button className="bg-transparent border border-gray-400 text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 w-max mt-4">
//                     {slide.buttonText}
//                   </button>
//                 )}
//               </div>
//               <div className="flex-1">
//                 <img
//                   src={`https://bakend-wtc-4.onrender.com/${slide.images[0]}`}
//                   alt={slide.title}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="custom-pagination absolute bottom-4 left-4 z-10 flex space-x-2"></div>
//     </div>
//   );
// }

'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner() {
  const slides = [
    {
      _id: '1',
      title: 'Зачем маслу присадки',
      description: 'Академия Lemarc — Ваш проводник в мир передовых технологий.',
      buttonText: 'Подробнее',
      images: ['https://lemarc.ru/uploads/banner_images/9a2a5f83042756afae0aad8e067d40c9.png'],
    },
    {
      _id: '2',
      title: 'Летняя коллекция 2024',
      description: 'Готовьтесь к солнечным дням с нашей эксклюзивной коллекцией.',
      buttonText: 'Узнать больше',
      images: ['https://lemarc.ru/uploads/banner_images/23773d61d2403a070b68bd495840fcda.png'],
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-black opacity-50',
          bulletActiveClass: '!opacity-100',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="relative flex flex-col md:flex-row w-full md:h-[500px] lg:h-[700px]">
<<<<<<< HEAD
=======
              {/* Left Content */}
>>>>>>> 1a860336e80023c76d993dc01e674e390538badd
              <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16">
                <h2 className="text-6xl font-bold md:text-7xl lg:text-8xl bg-gradient-to-r from-blue-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 mb-6">
                  {slide.description}
                </p>
                <div className="flex space-x-4">
                  <button className="bg-transparent border border-gray-400 text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 w-max">
                    Где купить
                  </button>
                  <button className="bg-transparent border border-gray-400 text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 w-max">
                    Правила акции
                  </button>
                </div>
                {slide.buttonText && (
                  <button className="bg-transparent border border-gray-400 text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 w-max mt-4">
                    {slide.buttonText}
                  </button>
                )}
              </div>

              {/* Right Image */}
              <div className="flex-1">
                <img
                  src={slide.images[0]}
                  alt={slide.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination absolute bottom-4 left-4 z-10 flex space-x-2"></div>
    </div>
  );
}
