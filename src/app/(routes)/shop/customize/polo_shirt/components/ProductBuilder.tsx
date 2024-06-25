"use client"
import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IPoloFabric } from "@/app/utils";

interface IProps {
  title: string;
  image: StaticImageData;
  data : IPoloFabric[]
}

export function ProductBuilder({ title, image , data }: IProps) {
  const [isclient , setClient] = useState(false)
  useEffect(() => {
    setClient(true)
  }, [])
  return (
    isclient && (
      <Popover>
      <PopoverTrigger>
        <button className="bg-white p-3 text-black flex flex-col justify-center items-center border border-r-8 border-r-yellow-300">
          <Image src={image} className="w-20 h-20" alt="" />
          <h6>{title}</h6>
        </button>
      </PopoverTrigger>
      <PopoverContent side="left" align="center" className="flex flex-col  w-full overflow-auto h-full items-center justify-center">
        <div className="h-80 overflow-x-hidden overflow-scroll">
          <h3 className="text-xl font-extrabold text-center">Select Fabric</h3>
        {data.map((item) => (
          <button key={item.id} className="flex flex-col w-full justify-center items-center mx-auto my-2 hover:scale-110 transition-all duration-1000 hover:bg-yellow-200">
            <Image src={item.url} className="w-20 h-20" alt="" />
            <h6 className="text-center text-sm font-extrabold mt-2">{item.title}</h6>
          </button>
        ))}
        </div>
      </PopoverContent>
    </Popover>
    )
  );
}
