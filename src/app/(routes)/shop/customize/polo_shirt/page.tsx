import Image from 'next/image'
import React from 'react'
import image from "../../../../../../public/polo_shirt_full.webp"

export default function Customize() {
  return (
    <div className='w-full h-full flex  flex-col  justify-center items-center py-52'>
      <h1 className='text-6xl font-extrabold font-serif'>Tailor Store</h1>
      <Image src={image} alt='' className='w-[30rem] h-[30rem] my-auto'/>
    </div>
  )
}
