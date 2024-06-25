"use client"
import { CircleUser, Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname()
  if (path.startsWith('/shop/customize')) {
    return null
  }else{
    return (
      <header className='w-full bg-[#F2ECD3] py-5 px-4 sticky z-50 top-0  shadow-xl flex justify-evenly items-center'>
          <ul className='text-sm font-bold hidden sm:flex gap-5'>
              <li className='hover:border-b-2 hover:border-b-black text-lg font-serif'><Link href={'/'}>Home</Link></li>
              <li className='hover:border-b-2 hover:border-b-black text-lg font-serif'><Link href={'/shop/customize/polo_shirt'}>Customize</Link></li>
              <li className='hover:border-b-2 hover:border-b-black text-lg font-serif'><Link href={'/about'}>About</Link></li>
          </ul>
          <h1 className='text-3xl font-bold '>Talior Store</h1>
          <div className='hidden sm:flex gap-4'>
              <Link href={'/auth'}><CircleUser /></Link>
              <Link href={'/auth'}><ShoppingCart /></Link>
          </div>
          <Sheet>
    <SheetTrigger className='flex sm:hidden'><Menu /></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  
      </header>
    )
  }
}
