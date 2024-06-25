import React from 'react'
import Card from './components/Card'
import image1 from "../../../../public/polo_shirt_full.webp"
import image2 from "../../../../public/dress_shirt_blue_full.webp"
import image3 from "../../../../public/coat_pant_back.webp"
import Link from 'next/link'

export default function Shop() {
  return (
    <div className='py-10 flex flex-wrap overflow-hidden justify-center items-center gap-1'>
        <Link href={'/shop/customize/polo_shirt'}><Card image={image1} name='polo shirt' description='Polo Shirt for men or women' price='$100'/></Link>
        <Link href={'/shop/customize/dress_shirt'}><Card image={image2} name='Dress shirt' description='Dress Shirt for men or women' price='$100'/></Link>
        <Link href={'/shop/customize/coat_pant'}><Card image={image3} name='Coat Pant' description='Coat Pant  for men or women' price='$100'/></Link>
    </div>
  )
}
