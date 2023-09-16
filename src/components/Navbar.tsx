import React from 'react'
import Image from 'next/image'
import {IoMenu} from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className='container pt-6'>
     <div className='flex justify-between items-center'>
        <Image src="/bfc_logo.png" width={75} height={75} alt='logo'/>
        <ul className='md:flex hidden gap-8 items-center font-semibold text-[14px]'>
            <li>Home</li>
            <li>About</li>
            <li>Cakes</li>
            <li>Cupcakes</li>
    <button className='bg-accent text-white px-6 py-2 rounded-3xl'>
        Sign In
    </button>
        </ul>

        <IoMenu className='md:hidden text-accent' size={30}/>
     </div>
    </div>
  )
}

export default Navbar
