import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import SideBar from './mobile-nav';

export const navigation = [
    { name: "Home", href: "#home" },
    { name: "Our Journey", href: "#journey" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
  ];

export const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className='z-50 max-[2000px]:fixed top-0 left-0 w-full bg-white shadow-md '>
             <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <nav className='w-[95%] mx-auto md:w-[90%] py-3 flex items-center justify-between lg:py-4'>
                <img 
                src="/logo.svg" 
                alt="logo"
                width={215}
                height={55}
                className='max-[350px]:w-32 max-sm:w-40 object-cover aspect-auto' />

                <div className='max-lg:hidden flex items-center gap-7 text-primary-black-100 capitalize'>
                {navigation.map((item) => (
                <a 
                key={item.name}
                href={item.href} 
                className='nav-links relative hover:font-semibold'>
                    <p>{item.name}</p>
                </a>
                ))}
                </div>

                <div className='flex items-center gap-2'>
                    <button className='bg-primary-blue text-white py-2 lg:py-3 px-5 lg:px-7 rounded-3xl transition duration-500 hover:bg-primary-purple'>Payments</button>
                    <HiMenuAlt3 size={25} className='lg:hidden' onClick={() => setSidebarOpen(true)}/>
                </div>
            </nav>
        </div>
    )
}