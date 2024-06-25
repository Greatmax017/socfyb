import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='mt-10 bg-primary-darkBlue text-white'>
            <div className='w-[95%] md:w-[90%] mx-auto pt-8 md:pt-12 lg:pt-16 pb-8'>
                <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
                    <div>
                        <img 
                        src="/inverted-logo.svg" 
                        alt="logo"
                        width={215}
                        height={55}
                        className='max-[350px]:w-32 max-sm:w-40 object-cover aspect-auto' />
                        <p className="mt-2 max-md:text-sm md:w-[80%]">Empowering future tech leaders through innovation and collaboration</p>
                    </div>

                    <div className="lg:basis-[33%] flex flex-col gap-6 lg:gap-28 lg:flex-row lg:items-start">
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

                <div className='mt-10 w-full h-0.5 bg-[#CFCFD1]'></div>

                <div className='mt-8 w-full flex flex-col gap-4 lg:flex-row items-center justify-center text-xs md:text-sm'>
                    <div>
                        <p>&copy; {year} The Encryptors. All rights reserved.</p>
                    </div>

                    <div className='flex items-center gap-5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookie Settings</p>
                    </div>
                </div>

                <div>
                    <p className='mt-6 text-xs md:text-sm text-center'>Website designed by
                        <span>
                            <a 
                            target='_blank'
                            href="https://github.com/Demiladeala" className='font-bold underline'> OLUWADEMILADE ALA 👨🏻‍💻</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}