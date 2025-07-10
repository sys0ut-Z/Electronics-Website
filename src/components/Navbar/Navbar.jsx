import React from 'react'
import { IoMdSearch } from "react-icons/io"
import { FaCaretDown, FaShoppingCart } from "react-icons/fa"
import DarkMode from './DarkMode'
import Popup from '../Popup/Popup'
// import {FaCartShopping} from "react-icons/fa6"

const menuLinks = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    title: "About",
    link: "/#about",
  },
  {
    id: 4,
    title: "Blogs",
    link: "/#blog",
  },
]

const dropDownLinks = [
  {
    id: 1,
    name: 'Trending Products',
    link: "/#"
  },
  {
    id: 2,
    name: 'Best Selling',
    link: "/#"
  },
  {
    id: 3,
    name: 'Top Rated',
    link: "/#"
  },
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='bg-gradient-to-r from-gray-400 to-slate-200 shadow-md 
    dark:from-gray-900 dark:to-gray-700 dark:text-white duration-200 relative z-40 w-full'>
        <div className='container flex justify-center items-center gap-16'>

          {/* Left Side Section : Logo and links section */}
          <div className='flex items-center justify-center gap-4'>
            <a href="#"
              className='text-primary tracking-widest font-semibold text-2xl
              uppercase sm:text-3xl'
            >
              Eshop
            </a>
            {/* Menu items */}
            <div className='hidden min-[986px]:flex justify-center items-center'>
              <ul className='flex items-center justify-center gap-2 text-sm'>
                {
                  menuLinks.map((mlink) => (
                    <li key={mlink.id}
                      className='inline-block px-4 font-semibold text-gray-600 hover:text-black
                      dark:hover:text-white duration-200 dark:text-slate-400/80'>
                      <a href={mlink.link}>
                        {mlink.title}
                      </a>
                    </li>
                  ))
                }

                {/* Dropdown */}
                <li className='relative cursor-pointer group text-sm'>
                  <a href="#" className='flex items-center gap-[1px] font-semibold
                  text-gray-600 dark:hover:text-white dark:text-slate-400/80 py-2'>
                    Quick Links
                    <span>
                      <FaCaretDown className='transition group-hover:rotate-180 duration-300 text-[15px]' />
                    </span>
                  </a>
                  {/* Dropdown Links */}
                  <div className='absolute hidden z-[9999] group-hover:block rounded-sm
                  bg-white shadow-md dark:bg-gray-900 w-max p-2 text-black'>
                    <ul className='space-y-1 flex flex-col items-center'>
                      {
                        dropDownLinks.map((dlink) => (
                          <li key={dlink.id} className='dark:hover:bg-slate-700 
                          hover:rounded-sm w-full p-2 hover:bg-rose-400/80 group/lig font-semibold'>
                            <a className='text-gray-600
                            group-hover/lig:text-white dark:group-hover/lig:text-white duration-200
                            dark:text-slate-400/80'
                            href={dlink.link}>
                              {dlink.name}
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right Section */}
          <div className='flex justify-between items-center gap-4'>
            {/* Search Bar Section */}
            <div className='relative group hidden sm:block'>
              <input type="text"
                placeholder='search'
                className='search-bar'
              />
              <IoMdSearch
                className='absolute top-1 right-2 text-xl text-gray-600 dark:text-gray-400
                group-hover:text-primary' 
              />
            </div>

            {/* Cart & Order section*/}
            <button className='relative p-3'
              onClick={handleOrderPopup}
            >
              <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400 cursor-pointer' />
              <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0
                flex items-center justify-center text-xs'>
                6
              </div>
            </button>
            {/* Dark Mode Section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar