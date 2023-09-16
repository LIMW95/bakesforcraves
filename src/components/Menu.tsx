import React from 'react'
import Dash from './Dash'
import Image from 'next/image'
import MenuCard from './MenuCard'


const menuData=[
    {
        img:"./cakecupcake.png",
        title:"Cake",
        desc:"erterbtertb",
        price:"Php 1",
    },
    {
        img:"./cakecupcake.png",
        title:"Cake",
        desc:"ertbertbertb",
        price:"Php 12",
    },
    {
        img:"./cakecupcake.png",
        title:"Cake",
        desc:"ertbertbertb",
        price:"Php 12",
    },
    {
        img:"./cakecupcake.png",
        title:"Cake",
        desc:"ertbertbertert",
        price:"Php 23",
    },
    {
        img:"./cakecupcake.png",
        title:"Cake",
        desc:"ertbertberb",
        price:"Php 12312",
    },
]

const Menu = () => {
  return (
    <div className='container pt-40'>
        <div className='space-y-4 w-fit mx-auto text-center'>
            <h2 className='text-4xl md:text-6xl font-bold'>
                Our <span className='text-accent'>Menu</span>
            </h2>
            <p className='text-gray-700'>
                akdfjghkdaf ladfgjdks fgl sdflgjsdlfkgjldskfgjldf
                ldfkgjlsdfgjlsdfgj lk djsklfg lkdf gklsdfg klsdl
            </p>
            <div className='w-fit mx-auto'>
                <Dash/>
            </div>
        </div>
      <ul className='mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto'>
            <li className='bg-accent text-white p-1'>Fondant Cakes</li>
            <li>Cupcakes</li>
            <li>Goodies</li>
            <li>Kinky Cakes</li>
            <li>Birthday Cakes</li>
            <li>Bento Cakes</li>
      </ul> 

      <div className='grid lg:grid-cols-[35%,1fr] gap-10 pt-10 mx-20'>
        <div className='w-fit mx-auto'>
            <Image className='w-[100%] max-w-[400px] h-auto' src="./cakecupcake.png" width={500} height={500} alt='cake'/>

        </div>
        <div className='grid w-fit max-auto sm:grid-cols-2 gap-4'>
        {menuData.map((item, index) =>
        <MenuCard key={index} img={item.img} title={item.title} desc={item.desc}
        price={item.price}
        />)}
        </div>
      </div>
    </div>
  )
}

export default Menu
