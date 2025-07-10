import React from 'react'

const Banner = ({bannerData}) => {
  return (
    <div className='min-h-[450px] flex justify-center items-center'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'
          style={{ backgroundColor: bannerData.bgColor }}>
            
          {/* First Col */}
          <div
            className='p-6 sm:p-8'>
            <p data-aos="slide-right"
                data-aos-duration="600"
              className='text-sm'>{bannerData.discount}</p>
            <h1 data-aos="zoom-out"
                data-aos-duration="600" 
              className='uppercase text-4xl lg:text-7xl font-bold'>{bannerData.title}</h1>
            <p data-aos="fade-up"
                data-aos-duration="600" 
              className='text-sm'>{bannerData.date}</p>
          </div>

          {/* Second Col */}
          <div data-aos="zoom-in"
                data-aos-duration="600" 
            className='h-full flex items-center'>
            <img src={bannerData.image} alt="headphone_img" 
              className='scale-125 w-[250px] md:w-[340px] mx-auto object-cover'/>
          </div>

          {/* Third Col */}
          <div className='flex flex-col justify-center gap-4 p-6'>
            <p data-aos="zoom-out" className='font-bold text-xl'>{bannerData.title2}</p>
            <p data-aos="fade-up" className='text-3xl sm:text-5xl font-bold'>{bannerData.title3}</p>
            <p data-aos="fade-up" className='text-sm tracking-wide leading-5'>{bannerData.title4}</p>
            <div data-aos="fade-up"
                  data-aos-offset="0">
              <button className={`bg-white ${bannerData.textColor} py-2 px-4 rounded-full cursor-pointer
              hover:scale-105 transition-all duration-300`}>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner