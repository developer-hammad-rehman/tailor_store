import React from 'react'
import img1 from "../../../public/item1.jpg"
import img2 from "../../../public/item2.jpg"
import img3 from "../../../public/item3.jpg"
import img4 from "../../../public/item4.jpg"
import Image from 'next/image'
import Link from 'next/link'

export default function Category() {
  return (
    <div className='py-5 w-full h-full flex flex-col gap-9'>
        <h4 className='text-3xl font-bold text-center'>SHOP BY CATEGORY</h4>
        <div className='flex justify-center items-center w-full flex-wrap lg:flex-nowrap gap-4'>
            <Link href={'/shop'}>
                <Image src={img1} alt='m' className='absolute h-6w-64 w-64 -z-50'/>
                <div className='text-4xl font-extrabold flex flex-col h-64 w-64 gap-4 py-3 justify-end items-center text-center text-white relative'>
                    <h3>Custom-Made</h3>
                    <h3>Dress Desgin</h3>
                </div>
            </Link>
            <Link href={'/shop'}>
                <Image src={img2} alt='m' className='absolute h-6w-64 w-64 -z-50'/>
                <div className='text-4xl font-extrabold flex flex-col h-64 w-64 gap-4 py-3 justify-end items-center text-center text-white relative'>
                    <h3>Custom-Made</h3>
                    <h3>Dress Desgin</h3>
                </div>
            </Link>
            <Link href={'/shop'} >
                <Image src={img3} alt='m' className='absolute h-6w-64 w-64 -z-50'/>
                <div className='text-4xl font-extrabold flex flex-col h-64 w-64 gap-4 py-3 justify-end items-center text-center text-white relative'>
                    <h3>Custom-Made</h3>
                    <h3>Dress Desgin</h3>
                </div>
            </Link>
            <Link href={'/shop'}>
                <Image src={img4} alt='m' className='absolute h-6w-64 w-64 -z-50'/>
                <div className='text-4xl font-extrabold flex flex-col h-64 w-64 gap-4 py-3 justify-end items-center text-center text-white relative'>
                    <h3>Custom-Made</h3>
                    <h3>Dress Desgin</h3>
                </div>
            </Link>

        </div>
    </div>
  )
}
