import React from 'react'
import Button from '../shared/Button'

const ProductsRow2 = ({products}) => {
  return (
    <div className='mb-10 pl-2'>
      <div className='grid grid-cols-1 sm:max-md:grid-cols-2 lg:grid-cols-4 gap-5
        place-items-center'>
        {/* Card section */}
        {
          products.map((product) => (
            <div key={product.id} className='group'
              data-aos="fade-up"
              data-aos-delay={product.aosDelay}
            >
              <div className='relative group/img'>
                <img src={product.img}
                  className='h-[180px] object-cover rounded-md group-hover:scale-105 transition-all duration-300'
                />
                <div className='hidden group-hover/img:flex items-center justify-center absolute top-[40%] w-full text-center'>
                  <Button text="Add to Cart" textColor="text-white" bgColor="bg-primary" />
                </div>
              </div>
              <div className='leading-7 dark:text-white text-gray-800 py-2'>
                <h2 className='font-semibold'>{product.title}</h2>
                <h2 className='font-bold'>${product.price}</h2>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductsRow2