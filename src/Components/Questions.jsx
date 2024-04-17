import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
const Questions = () => {
  return (
    <div className=' bg-black h-full text-white pt-14'>
      <h1 className='text-4xl px-10 mb-16'>More about writing on Medium:</h1>

      <div>
        <div className='px-10 py-5 border-b border-white'>
          <div className="flex justify-between ">
            <h2 className='text-xl mb-2'>How do I start writing on medium?</h2>
            <FaArrowUpLong />
          </div>
          <p className='mt-5 pr-20 text-sm'>First, make a <span >free account</span>. Then, to create a story, click on you profile picture in the top-right corner of the page, then "Write a Story".</p>
        </div>

        <div className='px-10 py-5 border-b border-white'>
          <div className="flex justify-between ">
            <h2 className='text-xl mb-2'>How do I start writing on medium?</h2>
            <FaArrowDownLong />
          </div>
        </div>

        <div className='px-10 py-5 border-b border-white'>
          <div className="flex justify-between ">
            <h2 className='text-xl mb-2'>Who write on Medium?</h2>
            <FaArrowUpLong />
          </div>
          <p className='mt-5 pr-20 text-sm'>Anyone can write on MEdium. Whether you've never written before or are ready to create a full publication, it's easy to <span >get started</span> and we allow you .to focus more on big ideas and less on driving clicks. With the option to earn for Your work, you can also be directly rewarded for the value you provide readers.</p>
        </div>

        <div className='px-10 py-5 border-b border-white'>
          <div className="flex justify-between ">
            <h2 className='text-xl mb-2'>Do I need to be in the Partner to write on Medium?</h2>
            <FaArrowUpLong />
          </div>
          <p className='mt-5 pr-20 text-sm'>No. You can write on Medium even if you are not in the Partner Program. If you are in the Partner Program you can also choose whcih of the stories you publish are eligible for the Program. For more about the Partner Program, <span >click here</span></p>
        </div>
        <div className='px-10 py-5 border-b border-white'>
          <div className="flex justify-between ">
            <h2 className='text-xl mb-2'>What can I write about on Medium?</h2>
            <FaArrowDownLong />
          </div>
        </div>
        <div className='px-10 py-5 border-b border-white'>
          <div className="flex justify-between ">
            <h2 className='text-xl mb-2'>Who can read the work I publish on Medium?</h2>
            <FaArrowDownLong />
          </div>
        </div>
        <div className='px-10 py-5 border-b border-white'>
          <div className="flex justify-between ">
            <h2 className='text-xl mb-2'>How can I grow my audience with Medium?</h2>
            <FaArrowDownLong />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-5">
        <p className='pt-1'>Looking for help getting started?</p>
        <button className='bg-white text-black rounded-full px-6 py-1 mx-3'>Check out our guide</button>
      </div>
    </div>
  )
}

export default Questions
