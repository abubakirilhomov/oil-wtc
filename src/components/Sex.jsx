'use-client'

import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-1 items-center justify-center max-w-[80%]'>
      <div className='w-1/2'>
        <img src="https://lemarc.ru/images/production/workshop.png" className='' alt="" />
      </div>
      <div className='w-1/4 flex flex-col  items-start'>
        <p className='flex flex-col items-start justify-center'>
          <span className='font-bold text-7xl'>Цех</span>
          <span
              className="font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-orange-500"
            >
              смешения
            </span>
        </p>
        <div className='flex mt-72 gap-x-20'>
        <div className=''>
          <p className='text-4xl'>3 блендера</p>
          <img src="https://lemarc.ru/images/production/workshop-blenders.svg" className='mt-5' alt="" />
          <hr className='my-8 px-48'/>
          <p className='flex flex-col'>
            <span className='font-extrabold text-6xl'>75 тонн</span>
            <span className='text-xl font-normal'>Ежедневная мощность <br /> смешивания за 1 смену</span>
          </p>
        </div>
        <div className=''>
          <p className=' text-4xl py-6'>Система <br /> одновременного <br /> дозирования</p>
          <hr className='my-8 px-48'/>
          <p className='flex flex-col'>
            <span className='font-extrabold text-6xl '>200 тонн</span>
            <span className='text-xl font-normal'>Ежедневная мощность <br /> смешивания за 1 смену</span>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home