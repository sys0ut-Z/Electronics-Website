import React from 'react'
import Heading from '../shared/Heading'

// import blog images
import img1 from '../../assets/blogs/blog-1.jpg'
import img2 from '../../assets/blogs/blog-2.jpg'
import img3 from '../../assets/blogs/blog-3.jpg'

const blogData = [
  {
    title: "How to choose a perfect smartwatch",
    subtitle : 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda beatae animi error ex repellat ducimus.",
    published : "Jan 20, 2024 by Dilshad",
    image : img1,
    aosDelay : "0"
  },
  {
    title: "How to choose a perfect gadget",
    subtitle : 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda beatae animi error ex repellat ducimus.",
    published : "Jan 20, 2024 by Satya",
    image : img2,
    aosDelay : "300"
  },
  {
    title: "How to choose a perfect VR headset",
    subtitle : 
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda beatae animi error ex repellat ducimus.",
    published : "Jan 20, 2024 by Dilshad",
    image : img3,
    aosDelay : "600"
  },
]

const Blogs = () => {
  return (
    <div className='py-12'>
      <div className='container'>
        {/* Header Section */}
        <Heading title="Recent News" subtitle="Explore our Blogs"/>

        {/* Blogs Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {/* Blog Card */}
          {
            blogData.map((data, i) => (
              <div key={i}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                {/* Image Section */}
                <div className='overflow-hidden rounded-2xl '>
                  <img src={data.image} alt="blog_img"
                    className='w-full h-[220px] object-cover rounded-md hover:scale-105 duration-400'/>
                </div>

                {/* Content Section */}
                <div className='spacey-y-2 py-3'>
                  <p className='text-xs text-gray-400'>{data.published}</p>
                  <p className='font-bold line-clamp-1 dark:text-slate-400 text-black'>{data.title}</p>
                  <p className='line-clamp-2 text-pretty text-sm text-gray-700 dark:text-gray-300'>{data.subtitle}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Blogs