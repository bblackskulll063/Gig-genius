import React from 'react'

const Story = () => {
  return (
    <div className=' bg-orange-200'>
      <div className="px-10 grid md:grid-cols-2 sm:grid-cols-1">
        <div className='md:w-1/2  flex flex-col justify-between py-5'>
          <h1 className='md:text-7xl text-6xl'>Create your space</h1>
          <div>
            <p className='text-lg py-3 mt-10'>Tell your story your way -  with different ways to write, style, and beand your work.</p>
            <button className='bg-black text-white rounded-full px-6 py-1 '>Start writing</button>
          </div>
        </div>

        <div className='px-8 '>
          <img src="mobile.png" alt="..." className='md:h-[76vh] h-full' />
        </div>
      </div>

      <div className='grid md:grid-cols-2 sm:grid-cols-1'>
        <div className='px-10 border-y-2 md:border-r-2 border-gray-600 md:pr-80'>
          <h1 className='text-4xl py-4'>Start a blog</h1>
          <p className='text-sm py-6'>Create a blog for free to have a personalized home for your writing. Brand <spam className="text-underline">your space</spam> and share your writing with readers on any device.</p>
        </div>
        <div className='px-10 md:border-y-2 border-b-2 border-gray-600 md:pr-80'>
          <h1 className='text-4xl py-4'>Start a publication</h1>
          <p className='text-sm py-6'>Create a blog for free to have a personalized home for your writing. Brand <spam className="text-underline">your space</spam> and share your writing with readers on any device.</p>
        </div>
      </div>
    </div>
  )
}

export default Story
