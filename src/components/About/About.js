import React from 'react'
import Car from '../../assets/aboutcar.png'

function About() {
  return (
    <div className='flex justify-center items-center py-12 min-h-[500px] sm:min-h-[600px]'>
      <div className='container '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div data-aos="zoom-in">
                <img className='min-h-[350px] flex justify-center items-center relative order-1 sm:order-2 px-6' src={Car} alt='car'/>
            </div>
            <div className='flex flex-col space-y-4 px-6'>
                <p data-aos="fade-up" className='text-dark text-extrabold text-xl'>ABOUT</p>
                <h1 data-aos="fade-up" data-aos-delay="200" className='text-3xl text-primary font-cursive2'>Your Car Guy</h1>
                <p data-aos="fade-up" data-aos-delay="300" className='text-justify text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est quam, ornare eget ultrices id, interdum vitae lacus. Morbi pellentesque enim vitae odio sodales hendrerit. Mauris blandit orci non libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est quam, ornare eget ultrices id, interdum vitae lacus. Morbi pellentesque enim vitae odio sodales hendrerit. Mauris blandit orci non libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <button data-aos="fade-up" data-aos-delay="400" className='primary-btn'>Learn more</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
