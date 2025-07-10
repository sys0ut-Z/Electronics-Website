import React from 'react'
import Button from '../shared/Button'
import image1 from '../../assets/category/earphone.png'
import image2 from '../../assets/category/watch.png'
import image3 from '../../assets/category/macbook.png'

const Category = () => {
  return (
    <div className='py-6'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          
          {/* first col */}
          <div className='col-span-1 py-10 pl-5 bg-gradient-to-br from-black/80 to-black/60
          text-white rounded-3xl relative h-[320px] flex items-end'>
            <div className='absolute bottom-10 z-10'>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Earphone</p>
                <Button text="Browse" bgColor="bg-primary" textColor="text-white"/>
              </div>
            </div>
            <img 
              src={image1} atl="earphone-img"
              className='w-[200px] sm:w-[320px] absolute bottom-0'
            />
          </div>

          {/* second col */}
          <div className='col-span-1 py-10 pl-5 bg-gradient-to-br from-brandyellow to-brandyellow/80
          text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-4'>Gadget</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-brandyellow"/>
              </div>
            </div>
            <img
              src={image2} atl="watch-img"
              className='w-[320px] absolute lg:top-4 top-2 -right-4 z-10'
            />
          </div>

          {/* third col */}
          <div className='col-span-1 lg:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/80
          text-white rounded-3xl relative h-[320px] flex items-end'>
            <div className='absolute bottom-10 z-20'>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-300'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-4'>Laptop</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-primary"/>
              </div>
            </div>
            <img
              src={image3} atl="macbook-img"
              className='w-[250px] sm:w-[300px] absolute lg:top-4 right-4 z-10'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category