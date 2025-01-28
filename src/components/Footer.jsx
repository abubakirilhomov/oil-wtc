import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const navigationLinks = [
    { label: 'О нас', href: '#' },
    { label: 'Lexpert', href: '#' },
    { label: 'Производство', href: '#' },
    { label: 'Контрактное производство', href: '#' },
    { label: 'Новости', href: '#' },
    { label: 'Документы', href: '#' },
    { label: 'Контакты', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12" id="footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl">
        {/* Logo Section */}
        <div className="text-center">
          <Image 
            src="/wtc-logo.png" 
            alt="Lemarc Logo" 
            width={130} 
            height={60}
            className="mb-6 mx-auto"
          />
          <button className="mt-4 border border-white/20 px-6 py-2 rounded hover:bg-white/10 transition-colors">
            Где купить
          </button>
        </div>

        {/* Navigation Links */}
        <div className="grid gap-4">
          {navigationLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              className="hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <div className=" px-3 py-1 rounded">
            Контакты
          </div>
          
          <div className=" px-3 py-2 rounded">
            ООО «Топ Лубриканто»
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full"></div>
              <p>г. Москва, Павелецкая площадь, 2, стр. 2</p>
            </div>
            <p className="pl-4">БЦ «Павелецкая плаза», 25 этаж</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full"></div>
            <p className="font-bold">8 (800) 505-36-45</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full"></div>
            <a href="mailto:info@lemarc.ru" className="text-[#8B8B8B] hover:text-white transition-colors">
              info@lemarc.ru
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 pt-4">
            <a href="#" className="bg-[#2C2C2C] p-2 rounded hover:bg-[#3C3C3C] transition-colors">
              <FaFacebookF size={24} className="text-white" />
            </a>
            <a href="#" className="bg-[#2C2C2C] p-2 rounded hover:bg-[#3C3C3C] transition-colors">
              <FaInstagram size={24} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 max-w-7xl mt-8">
        <div className="border-t border-white/10 pt-6 flex flex-wrap gap-4 justify-center text-sm text-[#8B8B8B]">
          <Link href="#" className="hover:text-white transition-colors">
            Согласие на обработку персональных данных
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Условия использования
          </Link>
        </div>
      </div>
    </footer>
  );
}
