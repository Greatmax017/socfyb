import React from 'react'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import { GalleryCard } from './gallery-card'

export const Gallery = () => {

    const images = [
        {
            id: 1,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719564342/SOC/gw4sxxrwdrkihyvlhcda.jpg'
        },
        {
            id: 2,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719564342/SOC/qd9vvnfmutnxaldhunpa.jpg'
        },
        {
            id: 3,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719562510/SOC/kjz9c47fi3o9qtfksajx.jpg'
        },
        {
            id: 4,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719562510/SOC/tvpvte3oops3c3tu9aoo.jpg'
        },
        {
            id: 5,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719562509/SOC/vppn6zaw39mqa8kfrkco.jpg'
        },
        {
            id: 6,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719564342/SOC/ftizuh21shnyzd78wiep.jpg'
        },
        {
            id: 7,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719689436/SOC/vb7nftd1a6egi2usdpjv.jpg'
        },
        {
            id: 8,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719689438/SOC/vshja3s4szdthlrfufxq.jpg'
        },
        {
            id: 9,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719689435/SOC/m8div0jb1yl8rabwp8qq.jpg'
        }
    ]
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

                    <div className='max-lg:hidden max-lg:mt-4 flex items-center gap-3'>
                        <div className='p-3 rounded-full border border-primary-blue transition duration-500 hover:bg-primary-blue'>
                            <IoMdArrowBack size={25}/>
                        </div>

                        <div className='p-3 rounded-full border border-primary-blue transition duration-500 hover:bg-primary-blue'>
                            <IoMdArrowForward size={25}/>
                        </div>
                    </div>
                </div>

                <div className='mt-2 lg:mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8'>
                    {
                        images.map((image) => (
                            <GalleryCard key={image.id} img={image.img} />
                        ))
                    }
               
                </div>

            </div>
        </div>
    )
}