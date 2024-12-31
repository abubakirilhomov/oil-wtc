/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Опционально: включает строгий режим React
  images: {
    domains: [
      "liquimoly.ru",
      "w7.pngwing.com",
      "lemarc.ru",
      "5.imimg.com",
      "m.media-amazon.com",
      "encrypted-tbn0.gstatic.com",
      "via.placeholder.com",
      "www.prom.uz", // Добавьте этот домен для загрузки изображений
      'avatars.mds.yandex.net',
      'pr-lg.ru',
      'a.d-cd.net'
    ],
  },
};

export default nextConfig;
