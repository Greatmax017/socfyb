import React from 'react'
import HeadShots from './HeadShots';

export const Hero = () => {
    const logoCount = 10;
    const logos = Array(logoCount).fill("/encryptors-logo.svg");

    const images = [
        {
            id: 1,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719564540/SOC/ruvd0fm8vots8jqondqt.jpg'
        },
        {
            id: 2,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719565194/SOC/gwsncf3evmoe1lspgkdi.jpg'
        },
        {
            id: 3,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719564664/SOC/ollopqazj6wooxzqsvvq.jpg'
        },
        {
            id: 4,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719564664/SOC/xzdfh3bkyxgn1xyae0li.jpg'
        },
        {
            id: 5,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719564663/SOC/waxwivogsl3ely6q8xek.jpg'
        },
        {
            id: 6,
            img: 'https://res.cloudinary.com/dv7bteenr/image/upload/v1719564665/SOC/g4kfpky2pppdyapfjhpe.jpg'
        },
        {
            id: 7,
            img: ''
        },
        {
            id: 8,
            img: ''
        },
        {
            id: 9,
            img: ''
        },
        {
            id: 10,
            img: ''
        }
    ]


    return (
        <div id='home' className='w-full bg-primary-darkBlue text-white flex items-center justify-center pt-16'>
            <div className='w-[98%] lg:w-[95%] xl:w-[90%] 2xl:w-[80%] mx-auto pt-14 md:pt-28 text-center'>
                <h1 className='w-[90%] mx-auto font-extrabold text-4xl 2xl:text-6xl'>
                Celebrating Excellence and Innovation <br />
                - <span className='w-[90%] mx-auto text-primary-blue'>The Encryptors 2023</span>
                </h1>
                <p className='mt-9 w-[90%] mx-auto 2xl:text-xl'>Join us as we honor our journey and achievements in technology. 
                    Together, we&apos;ve shaped the future with innovation and camaraderie.</p>

                    <a href='https://chat.whatsapp.com/BAUgd3e13rdIBKlRGlOfKu' target='_blank'>
                    <button className='mt-4 md:mt-7 bg-primary-blue text-white py-4 px-5 lg:px-14 rounded-3xl transition duration-500 hover:bg-primary-purple'>
                        Join the Celebration
                    </button>
                    </a>

                {/* <div className='z-10 mt-16 flex items-center justify-center'>
                   <div className='relative  min-[1300px]:left-[0] min-[1115px]:left-[3rem] w-[98%] lg:w-[90%] mx-auto flex xl:justify-center overflow-x-scroll lg:overflow-x-hidden'>
                        <div className='w-28 max-lg:flex-shrink-0 max-lg:w-0'></div>
                        

                       {
                            images.map((image) => (
                                 <HeadShots key={image.id} img={image.img} />
                            ))
                       }
                   </div>
                </div> */}

               <div className='mt-9 md:mt-16 flex justify-center overflow-hidden'>
                     {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="logo"
                            width={113}
                            height={113}
                            className='w-[75px] md:w-[113px] object-contain aspect-auto opacity-20'
                        />
                    ))}
               </div>
            </div>
        </div>
    )
}