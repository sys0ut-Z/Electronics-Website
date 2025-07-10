import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';
// import Button from '../shared/Button'

const Popup = ({orderPopup, setOrderPopup}) => {

  const [detailsFilled, isDetailsFilled] = useState(false);

  const {
    register,
    handleSubmit
  } = useForm();

  // if data is filled then only order will be placed
  const submitHandler = (data) => {
    if(data.name && data.email && data.address){
      alert("Your order has been successfully placed...")
      isDetailsFilled(true);

      // reload the window after placing the order
      window.location.reload();
    }
    else {
      alert("please fill all the details properly...")
      isDetailsFilled(false);
    }
  }

  return (
    <div className='w-screen h-screen fixed top-0 right-0 backdrop-blur-[2px] z-50 bg-black/50'>
      <div className='w-[240px] rounded-sm bg-white p-3 
        absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <div className='mb-2 flex justify-between items-center text-black'>
          <h1 className='font-bold text-lg'>Order Now</h1>
          <div className='cursor-pointer font-bold'>
            <IoMdClose 
              onClick={() => setOrderPopup(!orderPopup)}
              className='text-bold cursor-pointer'
            />
          </div>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className='flex flex-col my-3'>
            <input className="outline-none border border-gray-800 
              focus:border-1 focus:border-primary/90 rounded-full
              text-[12px] px-3 py-1 text-black" type="text" placeholder="Name"
              {...register("name")}/>
          </div>
          <div className='flex flex-col my-3'>
            <input className="outline-none border border-gray-800 
              focus:border-1 focus:border-primary/90 rounded-full
              text-[12px] px-3 py-1  text-black" type="text" placeholder="Email"
              {...register("email")}/>
          </div>
          <div className='flex flex-col my-3'>
            <input className="outline-none border border-gray-800 
              focus:border-1 focus:border-primary/90 rounded-full
              text-[12px] px-3 py-1 text-black" type="text" placeholder="Address"
              {...register("address")}/>
          </div>
          <div className='flex justify-center items-center'>
            <button type="submit"
              className='text-white bg-primary py-1 px-10 rounded-full cursor-pointer'
              onClick={() => {
                if(detailsFilled)
                  setOrderPopup(!orderPopup)
              }}
            >
              Order Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Popup