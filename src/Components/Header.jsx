import React from 'react'
import { TbOvalFilled } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className=' bg-orange-600 w-full'>
      <div className="flex justify-between py-3 px-10">
        <div className="grid-item flex ">
          <FaCircle size={30} className='pt-2'/>
          <TbOvalFilled size={30} className='pt-2 absolute left-[57px]'/>
          <h1 className='text-3xl font-bold ml-4'>Medium</h1>
        </div>
        <div className="grid-item flex spacing-x-10">
          <button className='mr-4'>Sign in</button>
          <button className='bg-black rounded-full text-white px-6 py-1 '>Start writing</button>
        </div>
      </div>
    </div>
  )
}

export default Header
