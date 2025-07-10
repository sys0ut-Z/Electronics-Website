import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt} from 'react-icons/fa'

const footerLinks = [
  {
    title : "Home",
    link : "/#",
  },
  {
    title : "About",
    link : "/#about",
  },
  {
    title : "Contact",
    link : "/#contact",
  },
  {
    title : "Blog",
    link : "/#blog",
  },
]
const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className='grid md:grid-cols-3 pb-20 pt-5'>

          {/* Company Details */}
          <div>
            <a href="#" className='text-primary font-semibold tracking-widest text-2xl
            uppercase sm:text-3xl'>Eshop</a>
            <p className='text-gray-600 dark:text-gray-400 lg:pr-24 pt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error exercitationem neque consequuntur in incidunt repellendus.
            </p>
            {/* Social Links */}
              <div className='flex gap-6 mt-4'>
                <a href="#">
                  <FaInstagram className='text-3xl text-white hover:text-primary hover:scale-105 duration-200'/>
                </a>
                <a href="#">
                  <FaFacebook className='text-3xl text-white hover:text-primary hover:scale-105 duration-200'/>
                </a>
                <a href="#">
                  <FaLinkedin className='text-3xl text-white hover:text-primary hover:scale-105 duration-200'/>
                </a>
            </div>
          </div>

          {/* Footer Link Section */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>

            {/* Link Section 1 */}
            <div className='py-8 px-4'>
              <h1 className='text-gray-800 text-xl font-semibold sm:text-left dark:text-white mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {
                  footerLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.link}
                        className='text-gray-600 hover:text-gray-400 duration-300
                        dark:text-gray-400 dark:hover:text-gray-300'
                      >
                        {link.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Link Section 2 */}
            <div className='py-8 px-4'>
              <h1 className='text-gray-800 text-xl font-semibold sm:text-left dark:text-white mb-3'>Quick Links</h1>
              <ul className='space-y-3'>
                {
                  footerLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.link}
                        className='text-gray-600 hover:text-gray-400 duration-300
                        dark:text-gray-400 dark:hover:text-gray-300'
                      >
                        {link.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Company's Handles(Social media accounts) */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
              <h1 className='text-xl font-bold text-gray-800 dark:text-gray-300/90 pb-2'>Address</h1>
              <div className='text-gray-800 dark:text-white/80'>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow />
                  <p>Ahmedabad, Gujarat</p>
                </div>
                <div className='flex items-center gap-3 py-3'>
                  <FaMobileAlt />
                  <p>+91 1234567890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer