import React from 'react'
import { useState, useEffect } from 'react'
import LightModeBtn from '../../assets/website/light-mode-button.png'
import DarkModeBtn from '../../assets/website/dark-mode-button.png'

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "light" ? "light" : "dark");

  // change the theme of the html document
  const element = document.documentElement;

  useEffect(() => {
    if(theme === "dark"){ // add dark class
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else{
      element.classList.remove("dark"); // remove dark class
      localStorage.setItem("theme", "light");
    }
  }, [theme])
  // * on changing the theme, mount the component again

  return (
    <div className='relative'>
      <img 
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark")
        }}
        src={LightModeBtn}
        className={`cursor-pointer w-12 absolute ${theme === "dark" ? "opacity-0" : "opacity-100"} z-10 right-0 top-0 transition-opacity duration-300`}
      />
      <img 
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark")
        }}
        src={DarkModeBtn}
        className={`w-12 cursor-pointer transition-opacity duration-300
          ${theme === "light" ? "opacity-0" : 
          "opacity-100"}`}
      />
    </div>
  )
}

export default DarkMode