import React from 'react'
import HeroCar from '../../assets/heroimage.png'

function Hero() {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-lightLime flex justify-center items-center'>
      <div className='container pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='pl-4 flex flex-col gap-3 lg:gap-5 p-6'>
                <span className='text-3xl font-sans font-extrabold text-dark ml-10'>Your</span>
                <h1 data-aos="zoom-out" data-aos-delay="200" className='text-8xl lg:text-[8rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive text-center'>
                
                    CAR<span className='text-dark font-sans font-light text-4xl'>GUY</span>
                </h1>
                <p data-aos="fade" data-aos-delay="300" className='text-sm font-sans text-dark text-justify'>We have all kinds of Luxury cars in our garage. Get your brand new or fairly used cars from us. We offer car rental and detailing services as well. Let's fix your car and replace worn out parts too.</p>
                <button data-aos="fade-up" data-aos-delay="400" data-aos-offset="0"className='primary-btn'>View Our Garage
                </button>
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
                <img src={HeroCar} className='max-w-[450px] w-full mx-auto sm:scale-125' alt='car' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
