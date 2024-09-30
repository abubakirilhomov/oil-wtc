// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 w-full ">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 max-w-[90%]">
          {/* Logo and Main Links */}
          <div>
            <img src="/wtc-logo.png" alt="Lemarc Logo" className="h-12 mb-4" />
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">О нас</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Каталог</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Новости</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Контакты</a>
              </li>
            </ul>
          </div>
  
          {/* Button */}
          <div className="flex items-center justify-center">
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
              Где купить
            </button>
          </div>
  
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <p>
              ООО «Топ Лубрикантс»<br />
              г. Москва, Павелецкая площадь, 2, стр. 2<br />
              БЦ «Павелецкая плаза», 25 этаж
            </p>
            <p>
              <span className="font-bold">8 (800) 505-36-45</span>
            </p>
            <p>
              <a href="mailto:info@lemarc.ru" className="text-red-500 hover:underline">info@lemarc.ru</a>
            </p>
          </div>
        </div>
  
        <div className="text-center mt-8 text-sm text-gray-400">
          <a href="#" className="hover:underline">Согласие на обработку персональных данных</a> | 
          <a href="#" className="hover:underline"> Условия использования сайта</a>
        </div>
      </footer>
    );
  }
  