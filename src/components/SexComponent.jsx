import React from 'react'

const SexComponent = () => {
  return (
    <div className='flex flex-1 items-center justify-between gap-20 max-w-[1300px] w-full mx-auto h-screen '>
      <div className='w-2/4 h-full    '>
        <img src="https://lemarc.ru/images/production/workshop.png" className='' alt="" />
      </div>
      <div className='w-4/6  flex flex-col  justify-between h-screen  my-12'>
      <h2 className='font-bold text-7xl max-w-[100px] '> Цех   <span className="font-bold text-7xl bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 text-transparent bg-clip-text"> смешения</span></h2>
    

    
 
      <div className="flex gap-11  items-end  justify-between  h-screen  ">
      <div className=' border-b-2 border-black pb-4 flex justify-center flex-col items-center'>
          <p className='text-4xl'>3 блендера</p>
          <img src="https://lemarc.ru/images/production/workshop-blenders.svg" className='mt-5' alt="" />
        </div>
        <p className=' text-4xl py-6 border-b-2 border-black w-[250px]'>Система одновременного  дозирования</p>

      </div>
        <div className='flex'>
          <p className='flex flex-col items-center'>
            <span className='font-extrabold text-6xl'>75 тонн</span>
            <span className='text-xl font-normal w-[80%] text-center'>Ежедневная мощность смешивания за 1 смену</span>
          </p>
          <p className='flex flex-col items-center'>
            <span className='font-extrabold text-6xl '>200 тонн</span>
            <span className='text-xl font-normal w-[80%] text-center'>Ежедневная мощность смешивания за 1 смену</span>
          </p>
        </div>
        
        </div>
    </div>
  )
}

export default SexComponent