import React from 'react'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className=' container pt-40'>
        <div className='grid md:grid-cols-3 gap-16'>
            <div className='space-y-4'>
                <h2 className=' text-xl font-bold'>About Us</h2>
                <p className='leading-[1.8]'>
                    Aasdfgklkadjfghk jk hk ak ;as dgh;jkashg
                    LAHJSDKHJASKDHKAJSDlsdj gldkgjldfskjglksg
                    sdlfkgjslkgjlsdkfjglsdkfjglkdfgjlkdsfjglkf
                </p>
            </div>
    <div className='space-y-4'>
        <h2 className='text-xl font-bold'>The Bakery</h2>
        <ul className='space-y-2'>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
        </ul>
    </div>

    <div>
        <div className='flex gap-8 text-accent text-2xl pt-16'>
            <FaFacebookF/>
            <BsTwitter/>
            <BsInstagram/>
        </div>
    </div>
        </div>
      
    </div>
  )
}

export default Footer
