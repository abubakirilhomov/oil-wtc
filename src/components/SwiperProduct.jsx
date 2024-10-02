import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/navigation';

// Dynamically import Swiper only on the client-side
const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), { ssr: false });

const SwiperProduct = () => {
  const products = [
    { id: 1, image: '/product1.jpg', name: 'Product 1', details: 'Details about Product 1' },
    { id: 2, image: '/product2.jpg', name: 'Product 2', details: 'Details about Product 2' },
    { id: 3, image: '/product3.jpg', name: 'Product 3', details: 'Details about Product 3' },
  ];

  return (
    <div className="container mx-auto py-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative group w-full h-72 bg-gray-200 rounded-lg overflow-hidden">
              {/* Image */}
              <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:opacity-0 transition-opacity duration-300" />
              {/* Info */}
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">{product.name}</h3>
                <p className="text-gray-300">{product.details}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperProduct;
