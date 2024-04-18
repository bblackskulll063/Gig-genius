import React from 'react'
import { TbOvalFilled } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-between items-center px-10 py-3'>
      <div className="grid-item flex items-center">
        <FaCircle size={25} className='pt-2' />
        <TbOvalFilled size={25} className='pt-2 absolute left-[53px]' />
        <h1 className='md:text-xl font-bold ml-3 pt-[2px]'>Medium</h1>
      </div>
      <p className='text-[10px] md:text-xs text-center flex items-center px-2'>Every idea needs a Medium</p>
      <ul className='grid grid-flow-col gap-1 pt-[7px] md:gap-5 text-[10px] md:text-xs underline '>
        <li><a href="/">About</a></li>
        <li><a href="/">Terms</a></li>
        <li><a href="/">Privacy</a></li>
        <li><a href="/">Help</a></li>
      </ul>
    </div>
  )
}

export default Footer
