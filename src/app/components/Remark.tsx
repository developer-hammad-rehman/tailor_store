import Image from 'next/image'
import React from 'react'
import img1 from '../../../public/remark1.jpg'
import img2 from '../../../public/remark2.jpg'
import img3 from '../../../public/remark3.jpg'

export default function Remark() {
  return (
    <div className='px-4 py-4 w-full h-full flex flex-col gap-5 justify-center items-center'>
        <h3 className='text-3xl font-bold text-center py-4'>FREE REMAKE GUARANTEE</h3>
        <p className='text-center font-bold text-xs'>Our comprehensive, no-fuss, free remake guarantee takes the worry out of ordering. If your garment doesn't fit as you want it to, we'll replace it with a new one free of charge.</p>
        <button className='border border-black py-2 px-5 italic rounded-lg'>Get More Information</button>
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-3'>
            <div className='flex flex-col justify-center items-center gap-4'>
            <Image src={img1}  alt=''/>
            <h2 className='text-center font-bold'>KEEP IT CRISP: ESSENTIAL TIPS FOR WASHING AND CARING FOR YOUR LINEN SHIRT</h2>
            <button className='bg-black text-white font-bold p-3 rounded-md'>Read More</button>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
            <Image src={img2}  alt=''/>
            <h2 className='text-center font-bold'>KEEP IT CRISP: ESSENTIAL TIPS FOR WASHING AND CARING FOR YOUR LINEN SHIRT</h2>
            <button className='bg-black text-white font-bold p-3 rounded-md'>Read More</button>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
            <Image src={img3}  alt=''/>
            <h2 className='text-center font-bold'>KEEP IT CRISP: ESSENTIAL TIPS FOR WASHING AND CARING FOR YOUR LINEN SHIRT</h2>
            <button className='bg-black text-white font-bold p-3 rounded-md'>Read More</button>
            </div>
        </div>
    </div>
  )
}
