'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaTrain, FaFlask, FaWarehouse, FaTruck, FaCogs } from 'react-icons/fa'
import { MdStorage, MdOutlineProductionQuantityLimits } from 'react-icons/md'

const iconComponents = {
  FaTrain,
  FaFlask,
  FaWarehouse,
  FaTruck,
  FaCogs,
  MdStorage,
  MdOutlineProductionQuantityLimits,
}

export default function ProductionProcess({ cardData = [] }) {
  return (
    <div className=" mx-auto py-16"
    style={{
    backgroundImage: `url(/pattern/fon3.jpg)`,
    backgroundSize: "cover", // Ensures the image covers the entire div // Ensures the image covers the entire div
    backgroundRepeat: "no-repeat", // Prevents tiling
    backgroundPosition: "center", // Corrected background image syntax
    }}>
      <h2 className="text-4xl font-bold text-center text-white   mb-16">Производственный Процесс</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[90%] mx-auto lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => {
          const IconComponent = iconComponents[card.icon] || FaCogs
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-10 rounded-bl-full"></div>
              <card.icon   className="text-5xl mb-6 text-yellow-500" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{card.title}</h3>
              <ul className="list-none text-gray-600 text-sm leading-7 space-y-2">
                {card.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                    className="flex items-start"
                  >
                    <span
                      className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                      style={{ backgroundColor: i % 2 === 0 ? '#FABA49' : '#263699' }}
                    ></span>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}