import React from 'react'

const Writing = () => {
  return (
    <div className='writing-section w-full h-5/6'>
      <div className='relative'>
        <img src="plant.jpg" alt="no image" className=' w-full md:h-[65vh] h-[55vh] object-cover' />
        
        <div className="absolute top-0 left-0 px-10 md:py-16 py-10 text-white md:w-1/2 ">
          <h1 className='md:text-7xl text-4xl font-bold '>Earn money from your writing.</h1>
          <p className='text-xl py-10'>
            Writing has its rewards when you join the Partner Program. Learn how to get paid for the cotent you publish and the audiences you build.
          </p>
          <button className='bg-black text-white rounded-full px-6 py-1 '>Learn More</button>

        </div>
      </div>

    </div>
  )
}

export default Writing
