import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

export const Footer = () => {
    return (
        <div className='mt-10 bg-primary-darkBlue text-white'>
            <div className='w-[95%] md:w-[90%] mx-auto py-8 md:py-12 lg:py-16'>
                <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
                    <div className=''>
                        <img 
                        src="/inverted-logo.svg" 
                        alt="logo"
                        width={215}
                        height={55}
                        className='max-[350px]:w-32 max-sm:w-40 object-cover aspect-auto' />
                        <p className="mt-2 max-md:text-sm">Empowering future tech leaders through innovation and collaboration</p>
                    </div>

                    <div className="flex flex-col gap-6 lg:gap-16 lg:flex-row lg:items-start">
                        <div className="flex flex-col gap-4 md:text-xl">
                            <h3 className="font-extrabold md:text-xl">Quick Link</h3>
                            <a href="">
                                <p>About</p>
                            </a>

                            <a href="">
                                <p>Our Journey</p>
                            </a>

                            <a href="">
                                <p>Gallery</p>
                            </a>
                        </div>

                        <div className="flex flex-col gap-4 md:text-xl">
                            <h3 className="font-extrabold md:text-xl">Support</h3>
                            <a href="">
                                <p>Contact Us</p>
                            </a>

                            <a href="">
                                <p>Events</p>
                            </a>

                            <a href="">
                                <p>Become a Sponsor</p>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="w-fit border-[0.5px] border-[#CFCFD1] py-3 px-4 rounded-lg flex items-center gap-4">
                           <div className="flex items-center gap-1">
                                <img src="/us.png" alt="us"
                                width={24} height={24} className="w-full h-full object-cover rounded-full" />
                                <p className='text-sm'>English(US)</p>
                           </div>
                           <div>
                                <IoIosArrowDown className='cursor-pointer'/>
                           </div>
                        </div>

                        <div className='mt-5 flex items-center gap-4'>
                        <FaTwitter  className='text-white' size={20}/>
                        <FaFacebookF  className='text-white' size={20}/>
                        <FaLinkedinIn  className='text-white' size={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}