import React from 'react'

const Audience = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center py-16 px-10'>
        <div className='text-center md:w-1/2 '>
          <h1 className='md:text-7xl text-6xl'>Find and grow your audience.</h1>
          <p className='text-sm py-5'>With simple tools and features, you have the chance to connect with over 100 million curious readers.</p>
        </div>
      </div>
      <div class="md:grid grid-cols-3 grid-row-2 border-b-2 border-gray-600">
        <div class="row-span-2 px-10 md:border-r-2 border-t-2 border-gray-600 ">
          <h1 className='text-4xl py-6'>Audience insights</h1>
          <p className='py-4'>Use data to learn what resonates with yours readers so you can keep growing audience.</p>
          <img src="insight.png" alt="..." className='w-full' />
        </div>

        <div class="px-10 md:border-t-2 border-t-2 border-gray-600">
          <h1 className='text-4xl py-6'>Social connectivity.</h1>
          <p className='py-4'>Find people you'r already connected with on Twitter and easily <span >share</span> your stories across platforms.</p>
        </div>

        <div class="px-10 md:border-l-2 border-t-2 border-gray-600">
          <h1 className='text-4xl py-6'>Powerful network.</h1>
          <p className='py-4'>Readers can discover and follow you easily with <span>tailored feeds</span> and recommendations.</p>
        </div>

        <div class=" col-span-2 ">
          <div className='grid md:grid-cols-3 h-full'>
            <div class="px-10 md-border-none border-t-2 border-gray-600">
              <h1 className='text-4xl py-6 '>Email subscriptions.</h1>
              <p className='pt-4 '>Reach readers by having your stories <span >delivered</span> straight to their inboxes.</p>
            </div>
            <div class="px-10 md:border-x-2 border-t-2 border-gray-600">
              <h1 className='text-4xl py-6'>Interactive discussions.</h1>
              <p className='pt-4 '>Build relationships with your readers through a <span >threaded comments</span> section.</p>

            </div>
            <div class="pl-10 pr-16  border-t-2 border-gray-600">
              <h1 className='text-4xl py-6 '>Custom design.</h1>
              <p className='pt-4 '>Easily <span>customize</span> your page to stand out and build your brand.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Audience
