import fabric1 from "../../public/icon_fabric.webp";
import fabric2 from "../../public/polo_icon_blue.webp";
import fabric3 from "../../public/icon_fabric_gray.webp";
import fabric4 from "../../public/icon_fabric_brown.webp";
import fabric5 from "../../public/icon_fabric_dark_red.webp";
import fabric6 from "../../public/icon_fabric_orange.webp";
import fabric7 from "../../public/icon_fabric_emradal.webp";
import fabric8 from "../../public/icon_fabric_dark_pistachio.webp";
import fabric9 from "../../public/icon_fabric_dark_orange.webp";
import farbric10 from "../../public/icon_fabric_dark_melange.webp";
import icon_image1 from "../../public/short.png"
import icon_image2 from "../../public/long.png"
import collar from "../../public/icon_collar.png"
import yes from "../../public/yes.png";
import no from "../../public/no.png";
import bottom_cut_image_1 from "../../public/bottom_collar.png"
import bottom_cut_image_2 from "../../public/bottom_straight.png"
import bottom_cut_image_3 from "../../public/long_back.png"
import { IPoloFabric } from "@/app/utils";
export const polo_fabric : IPoloFabric[] = [
  {
    id: 1,
    url: fabric1,
    title:"GRIND Lay Soft White"
  },
  {
    id: 2,
    url: fabric2,
    title:"GRIND Lay Blue"
  },
  {
    id: 3,
    url: fabric3,
    title:"GRIND Lay Green"
  },
  {
    id: 4,
    url: fabric4,
    title:"GRIND Lay Brown"
  },
  {
    id: 5,
    url: fabric5,
    title:"GRIND Lay DARK RED"
  },
  {
    id: 6,
    url: fabric6,
    title:"GRIND Lay LIGTH ORANGE"
  },
  {
    id: 7,
    url: fabric7,
    title:"GRIND Lay EMBRADAL GREEN"
  },
  {
    id: 8,
    url: fabric8,
    title:"GRIND Lay PISTACHIO"
  },
  {
    id: 9,
    url: fabric9,
    title:"GRIND Lay Dark Orange"
  },
  {
    id: 10,
    url: farbric10,
    title:"GRIND Lay Melange"
  },
];


export const polo_sleeve  : IPoloFabric[] = [
    {
        id: 1,
        url: icon_image1,
        title:"Short Sleeve"
      },
    {
        id: 2,
        url: icon_image2,
        title:"Long Sleeve"
      },
] 

export const polo_collar : IPoloFabric[] = [
{
  id:1,
  url: collar,
  title:"Normal"
},
{
  id:2,
  url: collar,
  title:"Normal Thin"
},
{
  id:3,
  url: collar,
  title:"Long Thin"
},
]

export const polo_pokect : IPoloFabric[] = [
  {
    id:1,
    url: yes,
    title:"Yes"
  },
  {
    id:2,
    url: no,
    title:"NO"
  },
]

export const  polo_bottom : IPoloFabric[] = [
  {
    id:1,
    url: bottom_cut_image_1,
    title:"Bottom Cut"
  },
  {
    id:2,
    url: bottom_cut_image_2,
    title:"Straight"
  },
  {
    id:3,
    url: bottom_cut_image_3,
    title:"Long Back"
  },
]