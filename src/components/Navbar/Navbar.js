import React, { useState } from 'react'
import Logo from '../../assets/carlogo.webp'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Navbar() {

    const [open,setOpen]= useState(false)

    const menuOpen = () => {
        setOpen(!open)
    }

  return (
    <div>
      <div className='bg-lightLime'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <div data-aos="fade=down" data-aos-once="true">
                    <Link to='/'>
                    <img src={Logo} className='w-36 h-30' alt='logo'/>
                    </Link>
                </div>
                <div data-aos="fade=down" data-aos-once="true" data-aos-delay="300" className='hidden lg:flex justify-between items-center gap-4'>
                    <ul className='hidden lg:flex justify-between items-center gap-4'>
                        <li className='text-xl p-2 mr-2 rounded-md font-bold text-blue-900 hover:bg-primary'><a href='/buy'></a>Buy</li>
                        <li className='text-xl p-2 mr-2 rounded-md font-bold text-blue-900 hover:bg-primary'><a href='/rent'></a>Rent</li>
                        <li className='text-xl p-2 mr-2 rounded-md font-bold text-blue-900 hover:bg-primary'><a href='/repair'>Repair</a></li>
                        <li className='text-xl p-2 mr-2 rounded-md font-bold text-blue-900 hover:bg-primary'><a href='/spareparts'>SpareParts</a></li>
                    </ul>
                </div>
                <div className='absolute right-14 top-18 lg:hidden'>
                    <button onClick={menuOpen}>
                        <FaBars className='text-4xl'/>
                    </button>
                </div>
                {
                    open && (
                        <div className='lg:hidden'>
                        <ul className='bg-white space-y-3 p-4 rounded-md shadow-md absolute right-6 top-24 z-50'>
                        <li className='text-md px-4 py-2 hover:bg-primary hover:text-white w-full rounded-md'><a href='/buy'></a>Buy</li>
                        <li className='text-md px-4 py-2 hover:bg-primary hover:text-white w-full rounded-md'><a href='/rent'></a>Rent</li>
                        <li className='text-md px-4 py-2 hover:bg-primary hover:text-white w-full rounded-md'><a href='/repair'>Repair</a></li>
                        <li className='text-md px-4 py-2 hover:bg-primary hover:text-white w-full rounded-md'><a href='/spareparts'>SpareParts</a></li>
                    </ul>  
                        </div>
                    )
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
