// data/products.js

const products = [
    {
      _id: "1",
      name: "Продукт 1",
      category: "Синтетические масла",
      description:
        "Описание для Продукт 1. Высококачественный синтетический моторный масло, обеспечивающий отличную защиту двигателя.",
      price: 100000,
      discount_price: 90000,
      image: {
        main_images:
          "https://5.imimg.com/data5/SELLER/Default/2023/11/358652209/WG/KE/NS/22759933/2-5l-75w90-drive-lubricants-synthetic-engine-oil.jpg",
      },
      secondary_images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/2/PW/RS/EW/137202805/ep-140-automotive-gear-oil.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2022/2/PW/RS/EW/137202805/ep-140-automotive-gear-oil.jpg",
      ],
      stock: 10,
      volume: "1L",
      rating: 4,
    },
    {
      _id: "2",
      name: "Продукт 2",
      category: "Минеральные масла",
      description:
        "Описание для Продукт 2. Надежное масло для улучшения работы трансмиссии и уменьшения износа деталей.",
      price: 150000,
      discount_price: 140000,
      image: {
        main_images:
          "https://5.imimg.com/data5/SELLER/Default/2023/11/358652690/AK/XW/MP/22759933/2-5l-80w90-drive-lubricants-quick-shift-pro-gl4-car-engine-oil-500x500.jpg",
      },
      secondary_images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/2/PW/RS/EW/137202805/ep-140-automotive-gear-oil.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2022/2/PW/RS/EW/137202805/ep-140-automotive-gear-oil.jpg",
      ],
      stock: 5,
      volume: "2L",
      rating: 5,
    },
    {
      _id: "3",
      name: "Продукт 3",
      category: "Полусинтетические масла",
      description:
        "Описание для Продукт 3. Отличное масло для бензиновых и дизельных двигателей, поддерживающее оптимальную температуру.",
      price: 200000,
      discount_price: null, // No discount
      image: {
        main_images:
          "https://5.imimg.com/data5/SELLER/Default/2023/11/358651793/IV/FA/NS/22759933/3-5l-5w30-drive-lubricants-synthetic-engine-oi-500x500.jpg",
      },
      secondary_images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/2/PW/RS/EW/137202805/ep-140-automotive-gear-oil.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2022/2/PW/RS/EW/137202805/ep-140-automotive-gear-oil.jpg",
      ],
      stock: 0,
      volume: "500ml",
      rating: 3,
    },
    {
      _id: "4",
      name: "Продукт 4",
      category: "ДВС масла",
      description:
        "Описание для Продукт 4. Высокопроизводительное масло, которое продлевает срок службы двигателя и улучшает его характеристики.",
      price: 250000,
      discount_price: 230000,
      image: {
        main_images: "https://m.media-amazon.com/images/I/81fYmVDfKuL.jpg",
      },
      secondary_images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/2/PW/RS/EW/137202805/ep-140-automotive-gear-oil.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2022/2/PW/RS/EW/137202805/ep-140-automotive-gear-oil.jpg",
      ],
      stock: 8,
      volume: "1.5L",
      rating: 4,
    },
    {
      _id: "5",
      name: "Продукт 5",
      category: "Трансмиссионные масла",
      description:
        "Описание для Продукт 5. Масло для тяжелых коммерческих автомобилей, обеспечивающее стабильную работу в экстремальных условиях.",
      price: 300000,
      discount_price: 280000,
      image: {
        main_images:
          "https://5.imimg.com/data5/SELLER/Default/2022/2/PW/RS/EW/137202805/ep-140-automotive-gear-oil.jpg",
      },
      secondary_images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/2/PW/RS/EW/137202805/ep-140-automotive-gear-oil.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2022/2/PW/RS/EW/137202805/ep-140-automotive-gear-oil.jpg",
      ],
      stock: 15,
      volume: "3L",
      rating: 5,
    },
  ];
  
  export default products;
  