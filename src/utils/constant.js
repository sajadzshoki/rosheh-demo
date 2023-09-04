import {
  CiUser,
  CiShoppingBasket,
  CiSearch,
  CiHeart,
  CiShuffle,
} from "react-icons/ci";

import swipe1 from "./swipe1.jpg"
import swipe2 from "./swipe2.jpg"
import swipe3 from "./swipe3.jpg"
import swipe4 from "./swipe4.jpg"

import hair from './hair.jpeg'
import makeup from './makeup.jpg'
import skin from './skin.jpg'
import reverse from './reverse.jpg'
import perfume from './perfume.jpg'

import img1 from './products/img1.jpg'
import img2 from './products/img2.jpg'
import img3 from './products/img3.jpg'
import img4 from './products/img4.jpg'
import img5 from './products/img5.jpeg'
import img6 from './products/img6.jpeg'
import img7 from './products/img7.jpg'


export const navbarItems = [
    {name : "برند ها", link :"" },
    {name : "پوست", link :"" },
    {name : "مو", link :"" },
    {name : "آرایش", link :"" },
    {name : "عطر", link :"" },
]


export const icons = [
  // {
  //   name: "سبد خرید",
  //   icon: <CiShoppingBasket size="1.8em" className="mx-2" />,
  // },
  { name: "مقایسه محصولات", icon: <CiShuffle size="1.8em" className="mx-2" /> },
  { name: "لیست لایک های من", icon: <CiHeart size="1.8em" className="mx-2" /> },
  { name: "جستجو در سایت", icon: <CiSearch size="1.8em" className="mx-2" /> },
  { name: "پروفایل", icon: <CiUser size="1.8em" className="mx-2" /> },
];

export const swiperImages = [swipe1,swipe2,swipe3,swipe4];

export const categories = [
    {name:"برعکس", image:reverse},
    {name:"عطر", image:perfume},
    {name:"آرایشی", image:makeup},
    {name:"پوست", image:skin},
    {name:"مو", image:hair},
]

export const product=[
  {name:"محصول تست روشه",image:img1,price:"4,200,300",badge:""},
  {name:"ادو تویلت زنانه یلو دیاموند ورساچه",image:img3,price:"",badge:""},
  {name:"ادو پرفیوم زنانه دزیره رانسه",image:img2,price:"2,500,000",badge:""}, 
  {name:"اسپری ضد آفتاب تصاعدی spf  عروس دریایی Be3 حجم 150 میل",image:img4,price:"",badge:""},
  // {name:"آی ام کیت (رژ لب مایع مات و مداد لب) پوپاIM KIT PUPA",image:img5,price:"380,200",badge:""},
  // {name:"اپلیکاتور اسفنجی سایه 5 عددی لیونز شماره 52LIONESSE 5 SET OF HEADLIGHT BRUSHES NO.52",image:img6,price:"",badge:""},
  // {name:"موس فوم فوق قوی (ضد وز) نلی",image:img7,price:"10,900,000",badge:""}
]