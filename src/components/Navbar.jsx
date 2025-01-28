"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Новости', href: '/about-us' },
  { label: 'О Компании', href: '/news' },
  { label: 'Где купить', href: '#' },
  { label: 'Контакты', href: '/contacts' },
];

function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const handleNavigation = (href) => {
    router.push(href);
    setIsMenuOpen(false);
  };

  // Прокрутка до футера
  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-white shadow-md border-b p-3 relative">
      <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl">
        <div className="flex items-center flex-shrink-0">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={'/Logo/logo1.png'}
              className="w-32"
              alt="Logo"
              width={128}
              height={32}
            />
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <span className="text-gray-700 hover:text-gray-900">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex lg:items-center space-x-4">
          <button
            onClick={handleScrollToFooter}
            className="px-3 py-3 bg-primaryBlue text-white rounded-md"
          >
            Оставить заявку
          </button>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center text-gray-400 rounded-md hover:text-gray-500 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <span className="text-xl font-bold">✕</span> : <span className="text-xl font-bold">☰</span>}
          </button>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <button
              key={index}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
              onClick={() => handleNavigation(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="px-4 py-3 space-y-2">
          <button className="w-full px-4 py-1 text-base font-medium text-gray-700 border rounded hover:bg-gray-50 focus:outline-none">
            RU
          </button>
          <button
            onClick={handleScrollToFooter}
            className="w-full px-4 py-2 text-base font-medium text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none"
          >
            Подбор масла
          </button>
        </div>
      </div>

      {isLangModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-64">
            <h2 className="text-lg font-bold text-center mb-4">Select Language</h2>
            <button
              className="block w-full px-4 py-2 mb-2 text-gray-700 text-center hover:bg-gray-100 rounded"
              onClick={() => setIsLangModalOpen(false)}
            >
              RU
            </button>
            <button
              className="block w-full px-4 py-2 text-gray-700 text-center hover:bg-gray-100 rounded"
              onClick={() => setIsLangModalOpen(false)}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
