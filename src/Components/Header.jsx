import React from 'react'
import { TbOvalFilled } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className=' bg-orange-600 w-full'>
      <div className="flex justify-between py-3 px-10">
        <div className="grid-item flex ">
          <FaCircle size={30} className='md:pt-2 pt-3'/>
          <TbOvalFilled size={30} className='md:pt-2 pt-3 absolute md:left-[57px] left-[55px]'/>
          <h1 className='flex items-end md:text-3xl text-2xl font-bold ml-3 md:mt-0 mt-1'>Medium</h1>
        </div>
        <div className="grid-item flex spacing-x-10">
          <button className='mr-4 text-xs md:text-base'>Sign in</button>
          <button className='text-xs md:text-base bg-black rounded-full text-white px-6 py-1 '>Start writing</button>
        </div>
      </div>
    </div>
  )
}

export default Header
