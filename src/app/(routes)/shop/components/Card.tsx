import { StaticImageData } from 'next/image'
import React from 'react'
import  Image  from 'next/image'

interface IPropsCard{
    image:StaticImageData,
    name:string,
    price : string,
    description:string
}

export default function Card({image , name , price , description}:IPropsCard) {
  return (
    <div className='flex flex-col hover:scale-110 transition-all duration-1000 justify-center items-center bg-gray-100 p-2'>
        <Image src={image} alt='card image' className='w-96 h-96'/>
        <div className='flex flex-col justify-center items-center'>
        <h3 className='text-3xl font-bold'>{name}</h3>
        <div className='flex justify-between w-full items-center gap-3'>
            <p className='text-xs font-extrabold'>{description}</p>
            <button className='bg-white hover:bg-gray-200 p-2 rounded-xl border border-black font-bold'>{price}</button>
        </div>
        </div>
    </div>
  )
}
