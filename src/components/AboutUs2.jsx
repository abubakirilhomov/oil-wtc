"use client"

import React from 'react'

const AboutUs2 = ({title, description, img}) => {
  return (
    <div className='flex items-center max-w-[70%] mx-auto w-full justify-between mb-20'>
        <div className='max-w-[40%] w-full max-h-[75vh]'>
            <img src={img} alt="wtc" />
        </div>

        <div className='flex flex-col justify-center max-w-[40%]'>
            <p className='text-2xl mb-20'>
                {title}
            </p>
            <p className='text-2xl'>
                {description}
            </p>
        </div>
    </div>
  )
}

export default AboutUs2