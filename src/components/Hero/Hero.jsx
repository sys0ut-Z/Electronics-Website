import React from 'react';
import Slider from 'react-slick';

// import images
import image1 from '../../assets/hero/headphone.png';
import image2 from '../../assets/category/vr.png';
import image3 from '../../assets/category/macbook.png';
import Button from '../shared/Button';

const HeroSlides = [
  {
    id: 1,
    img : image1,
    subtitle : "Beats Solo",
    title : "Wireless",
    title2 : "Headphone",
  },
  {
    id: 2,
    img : image2,
    subtitle : "Beats Solo",
    title : "Wireless",
    title2 : "Virtual",
  },
  {
    id: 3,
    img : image3,
    subtitle : "Beats Solo",
    title : "Portable",
    title2 : "Laptop",
  },
]

const Hero = ({handleOrderPopup}) => {

  const sliderProps = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='container mx-auto'>
      {/* Hero Section */}
      <div className='overflow-hidden rounded-3xl bg-gray-500 min-h-[550px]
      sm:min-h-[580px] hero-bg-color flex justify-center items-center p-1 sm:p-3'>

        {/* main container of the Slider */}
        <div className='container p-5 sm:p-1'>
          <Slider {...sliderProps}>
            {
              HeroSlides.map((slide) => (
                <div key={slide.id}>
                  <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* text content section */}
                      <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12
                      sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                        <h1 data-aos="zoom-out" 
                            data-aos-duration="800"
                            data-aos-once="true"
                          className='text-2xl text-gray-800 dark:text-white sm:max-md:text-6xl lg:text-2xl font-bold'>
                          {slide.subtitle}
                        </h1>
                        <h2 data-aos="zoom-out" 
                            data-aos-duration="500"
                            data-aos-once="true"
                          className='text-5xl text-gray-800 sm:text-6xl dark:text-slate-600 lg:text-7xl font-bold'>
                          {slide.title}
                        </h2>
                        <h1 data-aos="zoom-out" 
                            data-aos-duration="500"
                            data-aos-once="true"
                          className='text-5xl uppercase text-white dark:text-white/6 sm:text-[80px]
                        md:text-[100px] xl:text-[150px]'>
                          {slide.title2}
                        </h1>
                        <div
                          data-aos="fade-up" 
                          data-aos-offset="0"
                          data-aos-duration="600"
                          data-aos-deley="300"
                          data-aos-once="true"
                        >
                          <Button text="Shop Now" bgColor="bg-primary" textColor="text-white"
                            handler={handleOrderPopup}
                          />
                        </div>
                      </div>

                    {/* img section */}
                    <div className='order-1 sm:order-2'>
                      <div>
                        <img 
                          data-aos="zoom-in" 
                          data-aos-duration="500"
                          data-aos-once="true"
                          src={slide.img}
                          alt="product-img"
                          className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 
                          object-contain mx-auto drop-shadow-primary relative z-40'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
