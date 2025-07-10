import React from 'react'

const Button = ({
  text, 
  bgColor,
  textColor,
  classes,
  handler = () => {} // a callback function
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} cursor-pointer 
      hover:scale-105 duration-300 py-2 px-8 rounded-full ${classes}`}
    >
      {text}
    </button>
  )
}

export default Button