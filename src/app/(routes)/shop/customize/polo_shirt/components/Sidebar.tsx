import React from 'react'
import { ProductBuilder } from './ProductBuilder'
import image from '../../../../../../../public/icon_fabric.webp'
import image2 from '../../../../../../../public/icon.png'
import image3 from "../../../../../../../public/yes.png"
import image4 from "../../../../../../../public/icon_collar.png"
import image5 from "../../../../../../../public/bottom_collar.png"
import image6 from "../../../../../../../public/button.webp"
import image7 from "../../../../../../../public/contrasts.png"
import {polo_bottom, polo_collar, polo_fabric,polo_pokect,polo_sleeve} from "@/data/polo"


export default function Sidebar() {
  return (
    <aside className='bg-[#AFA9A1] overflow-scroll w-44  py-3 flex flex-col items-center gap-7'>
        <button className='bg-yellow-300 px-2 py-4 font-bold'>Select Product</button>
        <ProductBuilder image={image} title='Fabric' data={polo_fabric}/>
         <ProductBuilder image={image2} title='Sleeve Type' data={polo_sleeve}/>
         <ProductBuilder image={image3} title='Pocket' data={polo_pokect}/>
         <ProductBuilder image={image4} title='Collar' data={polo_collar}/>
          <ProductBuilder image={image5} title='Bottom Cut' data={polo_bottom}/>
          {/* <ProductBuilder image={image5} title='Button'/>
          <ProductBuilder image={image6} title='Contrast'/>   */}
        <button className='bg-yellow-300 px-2 py-4 font-bold'>Continue{"->"}</button>
    </aside>
  )
}
