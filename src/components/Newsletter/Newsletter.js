import React from 'react'

function Newsletter() {
  return (
    <div className='bg-primary text-white py-12'>
      <div className='container'>
        <div className='flex flex-col space-y-8 justify-center items-center'>
            <div className='text-center space-y-2'>
                <h1 className='font-bold text-3xl'>Subscribe to Our Newsletter</h1>
                <p>Be the first to know about exciting news and offers we have for you.</p>
            </div>
            <div className='space-x-2'>
                <input type='email' placeholder='Enter your Email address' className='min-w-[300px] rounded-full px-6 py-2 focus:outline-none text-dark ring-0'/>
                <button className='bg-white text-primary py-2 px-4 rounded-full hover:scale-105'>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
