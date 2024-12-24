"use client"

import Image from 'next/image'
import React ,{ useEffect}from 'react'

const AboutUs = () => {


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/v1/layouts");
        if (!response.ok) {
          throw new Error("Fetch failed");
        }
        const result = await response.json();
        setData(result); 
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []); 



  return (
    <div className='min-h-screen'>
        <div>

       
        </div>
    </div>
  )
}

export default AboutUs
