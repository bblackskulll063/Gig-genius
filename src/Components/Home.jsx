import React from 'react'

const Home = () => {
    return (
        <div className='bg-orange-600 h-full '>
            <div className="md:grid md:grid-cols-6 grid-col ">
                <div className='grid-item col-span-4 md:border-r-2 border-t-2 border-gray-700 py-10 px-10'>
                    <div className='md:w-4/5 '>
                        <p className='text-white text-xs py-4 font-semibold tracking-[0.6em]'>START A BLOG FOR FREE</p>
                        <h1 className='md:text-8xl text-7xl'>Publish, grow, and earn, all in one place.</h1>
                        <p className='text-lg  py-12 md:mr-28'>If you have a story to tell, knowledge to share, or a perspective to offer - welcome home. Sign up free so your writing can thrive in a network support by million of readers - not ads.</p>
                        <button className='bg-white rounded-full px-6 py-1 mt-5 text-lg'>Start writing</button>
                    </div>
                </div>
                
                <div className='grid-item col-span-2 border-t-2 border-gray-600 '>
                    <img src="wordsImage.png" alt="...no image" className='object-cover p-10 ' />
                </div>
            </div>

        </div>
    )
}

export default Home
