import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import image from '../../../public/hero.jpg'

export default function Hero() {
  return (
    <div className='w-full h-screen  bg-[#E7E5E3] flex justify-evenly items-center'>
    <div className='absolute z-10 w-full h-full flex flex-col justify-center text-center items-center  gap-2' id='back'>
    <h1 className='text-3xl sm:text-5xl font-extrabold  text-gray-800'>TAILORED FOR YOU, PRICED FOR EVERYONE</h1>
        <h3 className='text-2xl font-bold  text-gray-800'>CUSTOM SHIRTS THAT FIT LIKE A DREAM WITHOUT BREAKING THE BANK.</h3>
        <h5 className='text-3xl font-extrabold text-gray-800'>FROM $49</h5>
        <div className='flex gap-3'>
        <Star size={40} className='bg-green-700 text-white'/>
        <Star size={40} className='bg-green-700 text-white'/>
        <Star size={40} className='bg-green-700 text-white'/>
        <Star size={40} className='bg-green-700 text-white'/>
        <span className='text-white text-2xl font-extrabold'>4.8 of 5</span>
        </div>
        <button className='font-bold bg-yellow-600 transition-all duration-1000 hover:text-white hover:bg-black p-5 w-fit'> Shop Now</button>
    </div>
    <div className='w-full h-full'>
    <Image src={image} alt='' className='object-cover w-full h-full'/>
    </div>
    </div>
  )
}
