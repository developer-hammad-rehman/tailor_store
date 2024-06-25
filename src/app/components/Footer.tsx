"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Footer() {
  const path = usePathname()
  if (path.startsWith('/shop/customize')) {
    return null
  }
  return (
   <footer className='w-full h-full py-10 px-8 gap-20 flex flex-col justify-center items-center bg-yellow-400'>
    <div className='w-full h-full flex gap-4 flex-wrap lg:flex-nowrap justify-around items-center bg-yellow-400'>
    <div className='flex flex-col justify-center items-center gap-4'>
        <h4 className='text-3xl font-bold'>JOIN THE REVOLUTION - AND OUR NEWSLETTER</h4>
        <button className='bg-black text-white font-bold py-2 px-6 w-fit rounded-xl'>Sign up</button>
    </div>
    <div>
      <h4 className='text-3xl font-bold'>About Us</h4>
      <ul>
        <li><Link href={'/'} className='hover:border-b hover:border-b-gray-950'>What we do</Link></li>
        <li><Link href={'/'} className='hover:border-b hover:border-b-gray-950'>Free remake</Link></li>
        <li><Link href={'/'} className='hover:border-b hover:border-b-gray-950'>guarantee</Link></li>
      </ul>
    </div>
    <div>
      <h4 className='text-3xl font-bold'>CUSTOMER CARE</h4>
      <ul>
        <li><Link href={'/'} className='hover:border-b hover:border-b-gray-950'>Contact us</Link></li>
        <li><Link href={'/'} className='hover:border-b hover:border-b-gray-950'>FAQ</Link></li>
        <li><Link href={'/'} className='hover:border-b hover:border-b-gray-950'>Shipping</Link></li>
      </ul>
    </div>
    </div>
    <h3 className='text-7xl font-bold text-gray-800'>WHERE BAD FITS COME TO DIE.</h3>
    <p>© 2003-2024 Tailor Store Sweden AB.</p>
   </footer>
  )
}
