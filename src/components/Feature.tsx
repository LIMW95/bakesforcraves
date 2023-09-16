import React from 'react'
import Dash from './Dash'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='container pt-40'>
      <h2 className='text-6xl font-bold'>Our</h2>
      <h2 className='text-6xl font-bold pt-2'>Featured
      <span className='text-accent'> Delights</span></h2>
      <p className='max-w-[550px] pt-10 text-gray-700'>
        Lreooirweoro iowetuiow pwoetriwpe pw poweitpowepp pwo eptoup 
        fghkjsdfhgkjdfhgksdhjfg
        kjashdgkjahsgjk
        ii teiut i ietie ietu iueituei uetiueituietuietu
      </p>

      <Dash/>

    <div className='grid md:grid-cols-[1fr,1fr,1fr] gap-16 mt-10'>
        <div className='w-fit mx-auto self-end'>
            <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl' 
            src='/cakecupcake.png' alt='' width={300} height={600}/>
            <div className='space-y-4'>
                <Dash/>
                <h2 className='font-medium text-xl'> Customized Cakes</h2>
                <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    Lorwoeirullasdjflkl lasjdf l ajsld fjlkasdjf lei lakdjf lsdfhgj
                    aklsdjflksdkksdfkllk kldk k k k kddfklsdjflsd lksd klfsdf jkl
                </p>
            </div>
        </div>
    
    

        <div className='w-fit mx-auto'>
            <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl' 
                src='/cakecupcake.png' alt='' width={300} height={600}/>
            <div className='space-y-4'>
                <Dash/>
                <h2 className='font-medium text-xl'> Cupcakes </h2>
                <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    Lorwoeirullasdjflkl lasjdf l ajsld fjlkasdjf lei lakdjf lsdfhgj
                    aklsdjflksdkksdfkllk kldk k k k kddfklsdjflsd lksd klfsdf jkl
                </p>
            </div>
        </div>

        <div className='w-fit mx-auto'>
            <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl' 
                src='/cakecupcake.png' alt='' width={300} height={600}/>
            <div className='space-y-4'>
                <Dash/>
                <h2 className='font-medium text-xl'> Goodies </h2>
                <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    Lorwoeirullasdjflkl lasjdf l ajsld fjlkasdjf lei lakdjf lsdfhgj
                    aklsdjflksdkksdfkllk kldk k k k kddfklsdjflsd lksd klfsdf jkl
                </p>
            </div>
        </div>

    </div>
</div>
  )
}

export default Feature
