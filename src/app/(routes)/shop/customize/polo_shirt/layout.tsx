import React from 'react'
import Sidebar from './components/Sidebar';

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='bg-gradient-to-tr from-[#C4BFBA] to-white w-full h-screen flex'>
        <Sidebar/>
        {children}
    </div>
  )
}
