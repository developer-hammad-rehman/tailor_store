"use client";
import { Menu, Shirt, icons } from "lucide-react";
import React, { useState } from "react";
import icon1 from "../../../../../../public/icon_fabric.webp";
import icon2 from "../../../../../../public/polo_icon_blue.webp";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../../../../public/coat_pant_back.webp";
import img2 from "../../../../../../public/coat_pant_blue.webp";
import img3 from "../../../../../../public/lining_blue.webp";
import img4 from "../../../../../../public/lining_white.webp";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  

export default function Customize_Dress() {
  const [image, setImage] = useState<StaticImageData>(img1);
  const [icon, setIcon] = useState<StaticImageData>(icon1);
  const [color, setColor] = useState("white");
  return (
    <div className="w-full h-full flex  bg-gradient-to-tr from-[#C5C0BB] to-white">
        <Sheet  >
  <SheetTrigger className="flex md:hidden py-10 px-5"><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Select Follwing</SheetTitle>
      <SheetDescription className="w-full h-full overflow-auto flex flex-col justify-center items-center">
     <div className="h-96 overflow-scroll">
    
     <AlertDialog>
          <AlertDialogTrigger className="bg-white  p-6 px-10 flex flex-col justify-center items-center gap-4">
            <Shirt size={40} />
            <span>Lining</span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Lining</AlertDialogTitle>
              <AlertDialogDescription>
              <button
                  className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100"
                  onClick={() => {
                    setColor("black");
                    setImage(img4);
                  }}
                >
                  <Image src={icon1} className="w-20" alt="icon image" />
                </button>
                <button
                  className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100"
                  onClick={() => {
                    setColor("black");
                    setImage(img3);
                  }}
                >
                  <Image src={icon2} className="w-20" alt="icon image" />
                </button>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger className="bg-white p-6 flex flex-col justify-center items-center gap-4">
            <Shirt size={40} />
            <span>Collar Type</span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Collar Type</AlertDialogTitle>
              <AlertDialogDescription>
                <button className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100">
                  <Shirt size={50} />
                  <span>Normal</span>
                </button>
                <button className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100">
                  <Shirt size={50} />
                  <span>Normal Thin</span>
                </button>
                <button className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100">
                  <Shirt size={50} />
                  <span>Long Thin</span>
                </button>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger className="bg-white p-6 flex flex-col justify-center items-center gap-4">
            <Image src={icon} className="w-20" alt="icon image" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Fabric Type</AlertDialogTitle>
              <AlertDialogDescription>
                <button
                  className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100"
                  onClick={() => {
                    setIcon(icon1);
                    setColor("black");
                    setImage(img1);
                  }}
                >
                  <Image src={icon1} className="w-20" alt="icon image" />
                </button>
                <button
                  className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100"
                  onClick={() => {
                    setColor("blue");
                    setIcon(icon2);
                    setImage(img2 );
                  }}
                >
                  <Image src={icon2} className="w-20" alt="icon image" />
                </button>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Drawer>
  <DrawerTrigger className="bg-yellow-500 text-white font-bold p-6">Continue</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle className="text-center text-2xl font-bold">Choose the following</DrawerTitle>
      <DrawerDescription className="flex flex-col justify-center items-center gap-4">
        <p className="text-center sm:text-xs">Answer a few questions and have your measurements ready in no time.</p>
        <form className="flex flex-col gap-1">
            <h3 className="text-sm lg:text-xl font-bold  text-center">Enter You Age</h3>
            <input type="text" className="border-2 border-black p-2 lg:p-5" placeholder="Enter You Age"/>
            <h3 className="text-sm lg:text-xl font-bold  text-center">Enter You Body Height</h3>
            <input type="text" className="border-2 border-black p-2 lg:p-5" placeholder="Enter You Body Height"/>
            <h3 className="text-sm lg:text-xl font-bold  text-center">Enter You Weight</h3>
            <input type="text" className="border-2 border-black p-2 lg:p-5" placeholder="Enter You Weight"/>
            <button className="font-bold bg-gray-950 text-white px-8 py-4">Sumbit</button>
        </form>
      </DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>
     </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

      <aside className="w-2/12 hidden overflow-auto py-10 h-full bg-[#9D9994] gap-4 lg:flex flex-col justify-center items-center">
        <AlertDialog>
          <AlertDialogTrigger className="bg-white  p-6 px-10 flex flex-col justify-center items-center gap-4">
            <Shirt size={40} />
            <span>Lining</span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Lining</AlertDialogTitle>
              <AlertDialogDescription>
              <button
                  className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100"
                  onClick={() => {
                    setColor("black");
                    setImage(img4);
                  }}
                >
                  <Image src={icon1} className="w-20" alt="icon image" />
                </button>
                <button
                  className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100"
                  onClick={() => {
                    setColor("black");
                    setImage(img3);
                  }}
                >
                  <Image src={icon2} className="w-20" alt="icon image" />
                </button>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger className="bg-white p-6 flex flex-col justify-center items-center gap-4">
            <Shirt size={40} />
            <span>Collar Type</span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Collar Type</AlertDialogTitle>
              <AlertDialogDescription>
                <button className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100">
                  <Shirt size={50} />
                  <span>Normal</span>
                </button>
                <button className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100">
                  <Shirt size={50} />
                  <span>Normal Thin</span>
                </button>
                <button className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100">
                  <Shirt size={50} />
                  <span>Long Thin</span>
                </button>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger className="bg-white p-6 flex flex-col justify-center items-center gap-4">
            <Image src={icon} className="w-20" alt="icon image" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Fabric Type</AlertDialogTitle>
              <AlertDialogDescription>
                <button
                  className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100"
                  onClick={() => {
                    setIcon(icon1);
                    setColor("black");
                    setImage(img1);
                  }}
                >
                  <Image src={icon1} className="w-20" alt="icon image" />
                </button>
                <button
                  className="flex gap-4 justify-center text-black w-full items-center p-4 hover:bg-yellow-100"
                  onClick={() => {
                    setColor("blue");
                    setIcon(icon2);
                    setImage(img2 );
                  }}
                >
                  <Image src={icon2} className="w-20" alt="icon image" />
                </button>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Drawer>
  <DrawerTrigger className="bg-yellow-500 text-white font-bold p-6">Continue</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle className="text-center text-2xl font-bold">Choose the following</DrawerTitle>
      <DrawerDescription className="flex flex-col justify-center items-center gap-4">
        <p className="text-center sm:text-xs">Answer a few questions and have your measurements ready in no time.</p>
        <form className="flex flex-col gap-1">
            <h3 className="text-sm lg:text-xl font-bold  text-center">Enter You Age</h3>
            <input type="text" className="border-2 border-black p-2 lg:p-5" placeholder="Enter You Age"/>
            <h3 className="text-sm lg:text-xl font-bold  text-center">Enter You Body Height</h3>
            <input type="text" className="border-2 border-black p-2 lg:p-5" placeholder="Enter You Body Height"/>
            <h3 className="text-sm lg:text-xl font-bold  text-center">Enter You Weight</h3>
            <input type="text" className="border-2 border-black p-2 lg:p-5" placeholder="Enter You Weight"/>
            <button className="font-bold bg-gray-950 text-white px-8 py-4">Sumbit</button>
        </form>
      </DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>

      </aside>
      <div className="w-full h-screen flex justify-center items-center ">
        <Image src={image} alt="Image" className="h-full w-80" />
      </div>
    </div>
  );
}
