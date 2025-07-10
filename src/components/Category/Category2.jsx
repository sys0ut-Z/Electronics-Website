import React from 'react'
import Button from '../shared/Button'
import image1 from '../../assets/category/gaming.png'
import image2 from '../../assets/category/vr.png'
import image3 from '../../assets/category/speaker.png'

const Category2 = () => {
  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

          {/* first col */}
          <div className='col-span-1 lg:col-span-2 py-10 pl-5 bg-gradient-to-br from-brandwhite/80 to-brandwhite/70
          dark:from-brandwhite/40 dark:to-brandwhite/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div className='absolute z-20 bottom-10'>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-500'>Enjoy</p>
                <p className='text-2xl text-gray-600 font-semibold mb-[2px]'>With</p>
                <p className='text-4xl text-black/90 xl:text-5xl font-bold opacity-60 mb-4'>Console</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-gray-700"/>
              </div>
            </div>
            <img 
              src={image1} atl="playstation-img"
              className='w-[220px] md:w-[280px] absolute lg:top-5 right-6 z-10'
            />
          </div>

          {/* second col */}
          <div className='col-span-1 py-10 pl-5 bg-gradient-to-br from-brandgreen to-brandgreen/90
          text-white rounded-3xl relative h-[320px] flex items-end'>
            <div className='absolute z-10 top-10'>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-600'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-4'>Oculus</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-brandgreen"/>
              </div>
            </div>
            <img 
              src={image2} atl="vr-img"
              className='w-[220px] absolute right-2 bottom-0'
            />
          </div>
  
          {/* third col */}
          <div className='col-span-1 py-10 pl-5 bg-gradient-to-br from-brandblue to-brandblue/80
          text-white rounded-3xl relative h-[320px] flex items-end'>
            <div className='absolute z-20 top-10'>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-300'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-4'>Speakers</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-brandblue"/>
              </div>
            </div>
            <img 
              src={image3} atl="watch-img"
              className='w-[210px] absolute right-3 z-10 bottom-0'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category2