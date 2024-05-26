import React from 'react'
import Logo from '../../assets/carlogo.webp'
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <div className='pt-24'>
      <div className='container flex flex-col justify-center items-center'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-28'>
            <div className='flex flex-col space-y-5 justify-center'>
                <div>
                    <img src={Logo} className='w-20 mx-auto' alt='car'/>
                </div>
                <div className='space-y-3 text-center'>
                    <h3 className='font-cursive text-2xl text-primary'>Your Car Guy</h3>
                    <p>Best deals</p>
                    <button href="youtube.com/cars" className='mx-auto bg-primary py-2 px-5 hover:scale-105 rounded-full'>Our Youtube</button>
                </div>
            </div>

            <div className='space-y-4'>
                <h3 className='text-2xl font-bold text-center'>Our Services</h3>
                <ul className='text-center space-y-4'>
                  <li>Rental</li>
                  <li>Car Wash</li>
                  <li>Detailing</li>
                  <li>Repairs</li>
                  <li>Spraying</li>
                </ul>
            </div>

            <div className='space-y-4'>
                <h3 className='text-2xl font-bold text-center'>Quick Links</h3>
                <ul className='text-center space-y-4'>
                  <li>Home</li>
                  <li>Garage</li>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Testimonies</li>
                </ul>
            </div>

            <div className='space-y-4'>
                <h3 className='text-2xl font-bold text-center'>Socials</h3>
                <div className='flex gap-2 justify-center'>
                  <FaFacebook className='text-3xl text-blue-700' />
                  <FaTwitter className='text-3xl text-blue-400' />
                  <FaLinkedin className='text-3xl text-blue-700'/>
                  <FaInstagram className='text-3xl text-orange-600' />
                  </div>
            </div>
        </div>
      
        <div>
          <p className='text-center mt-24 pb-4'><span className=' text-primary'>YourCarGuy</span>&copy;2024. Made with Passion by Godwin.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
