import React from 'react'
import Dash from './Dash'
import ServiceCard from './ServiceCard'

const servicesData=[
    {
        img:"./1.png",
        title:"Cake for any occasions",
        desc: "alksdfkiuisudf j jk sjkdfhsd jsdf hk",
    },
    {
        img:"./2.png",
        title:"Customization",
        desc: "alksdfkiuisudf j jk sjkdfhsd jsdf hk",
    },
    {
        img:"./3.png",
        title:"Quality",
        desc: "alksdfkiuisudf j jk sjkdfhsd jsdf hk",
    },
    {
        img:"./4.png",
        title:"Good and fair price",
        desc: "alksdfkiuisudf j jk sjkdfhsd jsdf hk",
    },
]



const Services = () => {
  return (
    <div className='container pt-40'>
      <div className='space-y-4 w-fit mx-auto text-center'>
        <h2 className='text-4xl md:text-6xl font-bold'>
            Choose Best <span className='text-accent'>Service</span>
        </h2>
        <p className='text-gray-700'>
            lkklkweklt llkwetlwe kltklwek ljwekltj lkwetjw
            <br/>
            welkthwkejthwkjethkwj  j j jj  j jetwlkjhetkj hk
        </p>
        <div className='w-fit mx-auto'>
            <Dash/>
        </div>
      </div>


      <div className='grid gap-10 md:grid-cols-4 md:gap-4 pt-8'>
        {servicesData.map((item,index)=>(
        <ServiceCard 
        key={index} 
        img={item.img} 
        title={item.title} 
        desc={item.desc}
        />
        ))}
      </div>
    </div>
  )
}

export default Services
