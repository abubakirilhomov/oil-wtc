"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const sidebarLinks = [
    {
      label: 'О нас',
      href: '/about-us',
    },{
      label: 'Каталог',
      href: '/catalog',
    },{
      label: 'Новости',
      href: '/news',
    },
    {
      label: 'Контакты',
      href: '/contacts',
    },{
      label: 'Производство',
      href: '/production',
    },
  ]
  const handleNavigation = (href) => {
    setIsMenuOpen(false)
    router.push(href)
  }
  return (
    <nav className=' top-0 z-50 w-full bg-white shadow-md fixed '>
      <div className='flex items-center justify-between px-4 py-4 mx-auto sm:px-6 lg:px-0 max-w-[90%]'>
        <div className='flex items-center flex-shrink-0'>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image src="/Logo b.png" width={150} height={150} alt="Logo" className="w-auto h-8 sm:h-10" />
          </Link>
        </div>
        <div className='hidden lg:flex lg:items-center lg:justify-center lg:flex-1'>
          <ul className='flex space-x-8'>
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <p className='text-base font-medium text-gray-500 hover:text-[#273B78] focus:font-bold'>
                    {link.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden lg:block'>
          <button className='px-4 py-2 text-base text-white font-medium bg-gradient-to-r from-[#8e2de2] to-[#ef473a] rounded-full focus:outline-none btn'>
            Buy now
          </button>
        </div>
        <div className='flex lg:hidden'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='inline-flex items-center justify-center text-gray-400 rounded-md hover:text-gray-500 focus:outline-none'
            aria-expanded='false'
          >
            <span className='sr-only outline-none'>Open main menu</span>
            {isMenuOpen ? (
              <span className='text-xl font-bold outline-none'>✕</span>
            ) : (
              <span className='text-xl font-bold outline-none'>☰</span>
            )}
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {sidebarLinks.map((link, index) => (
            <button
              key={index}
              className='block w-full text-left px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:text-[#273B78] hover:bg-gray-50'
              onClick={() => handleNavigation(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className='px-4 py-3'>
          <button className='w-full btn px-6 py-2 text-base font-medium text-[#263699] bg-gradient-to-r from-[#FABA49] to-[#F9B22B] rounded-full hover:from-[#F9B22B] hover:to-[#FABA49] focus:outline-none active:scale-90'>
            Buy now
          </button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
