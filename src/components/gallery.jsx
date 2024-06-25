import React from 'react'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import { GalleryCard } from './gallery-card'

export const Gallery = () => {
    return (
        <div id='gallery' className='bg-[#202046] mt-4 pb-20 lg:pb-28'>
            <div className='w-[95%] md:w-[90%] mx-auto'>
                <div className='flex flex-col lg:flex-row items-end justify-between text-white py-14'>
                    <div className='w-full'>
                        <h2 className='font-extrabold text-3xl md:text-4xl'>Gallery</h2>
                        <p className='text-lg md:text-xl mt-1'>
                        A curated selection of photos from various moments over the last couple of years
                        </p>
                    </div>

                    <div className='max-lg:w-full max-lg:flex max-lg:justify-end max-lg:mt-4 flex items-center gap-3'>
                        <div className='p-3 rounded-full border border-primary-blue transition duration-500 hover:bg-primary-blue'>
                            <IoMdArrowBack size={25}/>
                        </div>

                        <div className='p-3 rounded-full border border-primary-blue transition duration-500 hover:bg-primary-blue'>
                            <IoMdArrowForward size={25}/>
                        </div>
                    </div>
                </div>

                <div className='mt-2 lg:mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8'>
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                </div>

            </div>
        </div>
    )
}