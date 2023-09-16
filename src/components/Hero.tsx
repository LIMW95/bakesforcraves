import React from 'react'
import Image from 'next/image';
import Navbar from './Navbar';

const Hero = () => {
  return (
  <div className='relative min-h-screen'>
    <Image className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-10 -z-10" src="./image1.png" width={700} height={500} alt="imag"/>
    <Navbar/>
    <div className='container h-[calc(100vh-120px)] grid items-center'>
        <div className='space-y-4 bg-[#ffffff98] w-fit p-4'>
            <p className='uppercase font-medium'>
                Wide Options of Choices
            </p>
        <h2 className='text-4xl sm:text-6xl font-bold'>Delicous <span className='text-accent'>CAKES</span></h2>
        <p className='text-gray-700 text-[14px] sm:text-[16px]'> Delightful cakes color , aroma and taste</p>
        <button className='bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]'> 
        View More
        </button>
        </div>
    </div>
  </div>
  )
}

export default Hero