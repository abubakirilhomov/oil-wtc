"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const navLinks = [
  {
    label: 'Производство',
    href: '/production',
  },
  {
    label: 'Контакты',
    href: '/contacts',
  },

 
  {
    label: 'Где купить',
    href: '#',
    subItems: [
      { label: 'карта', href: '/map' },
      { label: 'шоп', href: '/shop' },
    ],
  },
  {
    label: 'Пресса о нас',
    href: '/about-us',
  },
];

function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleNavigation = (href) => {
    router.push(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-md border-b">
      <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl">
        <div className="flex items-center flex-shrink-0">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src={
                'https://sinteclubricants.ru/local/templates/SINTEC_LUBRICANTS_2022_REPIN/img/logo.svg'
              }
              className=""
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                {link.subItems ? (
                  <>
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                      <span>{link.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white border rounded-md shadow-lg py-2">
                      {link.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100  w-full"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={link.href}>
                    <span className="text-gray-700 hover:text-gray-900">
                      {link.label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex lg:items-center space-x-4">
          <div className="relative group">
            <button
              className="px-4 py-1 border rounded hover:bg-gray-50 flex items-center"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              RU
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            {isLangOpen && (
              <div className="absolute top-full left-0 w-20 bg-white border rounded-md shadow-lg">
                <button
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsLangOpen(false)}
                >
                  RU
                </button>
                <button
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsLangOpen(false)}
                >
                  EN
                </button>
              </div>
            )}
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Подбор масла
          </button>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center text-gray-400 rounded-md hover:text-gray-500 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <span className="text-xl font-bold">✕</span>
            ) : (
              <span className="text-xl font-bold">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <React.Fragment key={index}>
              {link.subItems ? (
                <>
                  <button
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </button>
                  {link.subItems.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      className="block w-full text-left px-6 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => handleNavigation(subItem.href)}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </>
              ) : (
                <button
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => handleNavigation(link.href)}
                >
                  {link.label}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="px-4 py-3 space-y-2">
          <button className="w-full px-4 py-1 text-base font-medium text-gray-700 border rounded hover:bg-gray-50 focus:outline-none">
            RU
          </button>
          <button className="w-full px-4 py-2 text-base font-medium text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none">
            Подбор масла 
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
