import React from 'react'
import brand1 from '../../assets/brand/br-1.png'
import brand2 from '../../assets/brand/br-2.png'
import brand3 from '../../assets/brand/br-3.png'
import brand4 from '../../assets/brand/br-4.png'
import brand5 from '../../assets/brand/br-5.png'

// image array 
const imgArrary = [ brand1, brand2, brand3, brand4, brand5 ];

const Partners = () => {
  return (
    <div className='py-8 hidden md:block bg-gray-200 dark:bg-white/20'>
      <div className='container'>
        <div className='grid grid-cols-5 gap-3 place-items-center'>
          {
            imgArrary.map((image, i) => (
              <img src={image} key={i} alt={`brand_img${i}`}
                className='w-[80px] dark:invert'/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Partners