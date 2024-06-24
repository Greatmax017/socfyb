import React from 'react'

export const Footer = () => {
    return (
        <div className='mt-10 bg-primary-darkBlue text-white'>
            <div className='w-[95%] md:w-[90%] mx-auto py-8 md:py-12 lg:py-16'>
                <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
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
                        <div className="flex flex-col gap-3 md:text-xl">
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

                        <div className="flex flex-col gap-3 md:text-xl">
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
                        <div className="border-[0.5px] border-[#CFCFD1] rounded-lg flex items-center gap-4">
                           <div className="f;ex">
                                <img src="/us.png" alt="us"
                                width={24} height={24} className="w-full h-full object-cover rounded-full" />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}