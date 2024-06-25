import React from 'react'
import Image from 'next/image'
import img1 from '../../../public/img1.jpg'
import img2 from '../../../public/img2.jpg'
import Link from 'next/link'
export default function Card() {
  return (
    <div className='w-full flex'>
        <div className='w-1/2 h-full'>
            <Image src={img1} alt='cardImage1' className='h-full absolute -z-50 w-1/2'/>
           <div className='h-screen w-full flex flex-col gap-4 justify-end items-center relative py-5 z-50'>
            <h2 className='italic font-extrabold font-mono text-center text-white text-2xl'>New In !</h2>
            <h1 className='text-4xl font-bold text-white text-center'>DISCOVER NEW LINEN</h1>
            <Link href={'/shop'} className='bg-yellow-600 text-center border border-black p-4 hover:bg-black  font-bold text-white'>Explore More</Link>
           </div>
        </div>
        <div className='w-1/2 h-full'>
            <Image src={img2} alt='cardImage1' className='h-full absolute -z-50 w-1/2'/>
           <div className='h-screen w-full flex flex-col gap-4 justify-end items-center relative py-5 z-50'>
            <h2 className='italic font-extrabold font-mono text-center text-white text-2xl'>New In !</h2>
            <h1 className='text-4xl font-bold text-white text-center'>FREE FABRIC KITS</h1>
            <Link href={'/shop'} className='bg-yellow-600 text-center border border-black p-4 hover:bg-black  font-bold text-white'>Explore More</Link>
           </div>
        </div>
    </div>
  )
}
