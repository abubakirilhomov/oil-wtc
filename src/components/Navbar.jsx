import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between items-center container max-w-[90%] mx-auto'>
      <div>
        <Image src="/Logo b.png" width={150} height={150}/>
      </div>
      <ul className='flex p-8 justify-between w-6/12 items-center'>
      <Link href="/about-us"><li>О нас</li></Link>
      <Link href="/catalog"><li>Каталог</li></Link>
      <Link href="/news"><li>Новости</li></Link>
      <Link href="/contacts"><li>Контакты</li></Link>
      </ul>
      <div>
        <button className='btn rounded-full px-8 bg-gradient-to-r from-[#FABA49] to-[#F9B22B] text-[#263699] '>
            Buy now
        </button>
      </div>
    </div>
  )
}

export default Navbar
