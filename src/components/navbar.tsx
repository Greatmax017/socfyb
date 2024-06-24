import React from 'react'

export const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full bg-white py-3 px-5 md:px-6 lg:px-8 flex items-center justify-between shadow-md lg:py-4'>
            <img 
            src="/logo.svg" 
            alt="logo"
            width={215}
            height={55}
            className='max-sm:w-40 object-cover aspect-auto' />

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

            <div>
                <button className='bg-primary-blue text-white py-3 px-7 rounded-3xl transition duration-500 hover:bg-primary-purple'>Payments</button>
            </div>
        </nav>
    )
}