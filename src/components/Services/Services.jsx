import React from 'react'
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const serviceData = [
  {
    id: 1,
    icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
    title: "Free Shipping",
    description: "Free Shipping on All Order"
  },
  {
    id: 2,
    icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
    title: "Safe Money",
    description: "30 Days Money Back"
  },
  {
    id: 3,
    icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
    title: "Secure Payment",
    description: "All Payment Secure"
  },
  {
    id: 4,
    icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
    title: "Secure Payment",
    description: "All Payment Secure"
  },
]
const Services = () => {
  return (
    <div className='container py-14 md:py-20'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-8'>
        {
          serviceData.map((data) => (
            <div key={data.id}
              className='flex flex-col items-center sm:flex-row gap-5'>
              {data.icon}
              <div className='text-black dark:text-white'>
                <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                <h1 className='text-gray-400 text-sm'>{data.description}</h1>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services