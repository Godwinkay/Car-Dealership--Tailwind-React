import React, { useState } from 'react'
import Logo from '../../assets/carlogo.webp'
import { FaBars } from 'react-icons/fa'



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
                    
                    <img src={Logo} className='w-36 h-30' alt='logo'/>
                    
                </div>
                <div data-aos="fade=down" data-aos-once="true" data-aos-delay="300" className='hidden lg:flex justify-between items-center gap-4'>
                    <ul className='hidden lg:flex justify-between items-center gap-4'>
                        <li className='text-xl p-2 mr-2 rounded-md font-bold text-blue-900 hover:bg-primary'>Buy</li>
                        <li className='text-xl p-2 mr-2 rounded-md font-bold text-blue-900 hover:bg-primary'>Rent</li>
                        <li className='text-xl p-2 mr-2 rounded-md font-bold text-blue-900 hover:bg-primary'>Repair</li>
                        <li className='text-xl p-2 mr-2 rounded-md font-bold text-blue-900 hover:bg-primary'>Spareparts</li>
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
                        <li className='text-md px-4 py-2 hover:bg-primary hover:text-white w-full rounded-md'>Buy</li>
                        <li className='text-md px-4 py-2 hover:bg-primary hover:text-white w-full rounded-md'>Rent</li>
                        <li className='text-md px-4 py-2 hover:bg-primary hover:text-white w-full rounded-md'>Repair</li>
                        <li className='text-md px-4 py-2 hover:bg-primary hover:text-white w-full rounded-md'>Spareparts</li>
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
