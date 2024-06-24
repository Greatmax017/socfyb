import React from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

export const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full bg-white shadow-md '>
            <nav className='w-[95%] mx-auto md:w-[90%] py-3 flex items-center justify-between lg:py-4'>
                <img 
                src="/logo.svg" 
                alt="logo"
                width={215}
                height={55}
                className='max-[350px]:w-32 max-sm:w-40 object-cover aspect-auto' />

                <div className='max-lg:hidden flex items-center gap-7 text-primary-black-100 capitalize'>
                    <a href="" className='nav-links relative hover:font-semibold'>
                        <p>Home</p>
                    </a>

                    <a href="" className='nav-links relative hover:font-semibold'>
                        <p>Our Journey</p>
                    </a>

                    <a href="" className='nav-links relative hover:font-semibold'>
                        <p>Events</p>
                    </a>

                    <a href="" className='nav-links relative hover:font-semibold'>
                        <p>Gallery</p>
                    </a>
                </div>

                <div className='flex items-center gap-2'>
                    <button className='bg-primary-blue text-white py-2 lg:py-3 px-5 lg:px-7 rounded-3xl transition duration-500 hover:bg-primary-purple'>Payments</button>
                    <HiMenuAlt3 size={25} className='lg:hidden'/>
                </div>
            </nav>
        </div>
    )
}