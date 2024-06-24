import React from 'react'

export const Hero = () => {
    const imageCount = 10;
    const images = Array.from({ length: imageCount }, (_, index) => ({
        src: '/students.jpeg',
        alt: `Student ${index + 1}`,
        key: index,
        style: { left: `-${index}rem` },
    }));
    
    return (
        <div  className='w-full bg-primary-darkBlue text-white flex items-center justify-center pt-16'>
            <div className='w-[100%] md:w-[85%] mx-auto py-20 md:py-28 text-center'>
                <h1 className='w-[90%] mx-auto font-extrabold text-4xl'>
                Celebrating Excellence and Innovation <br />
                - <span className='w-[90%] mx-auto text-primary-blue'>The Encryptors 2023</span>
                </h1>
                <p className='mt-9 w-[90%] mx-auto'>Join us as we honor our journey and achievements in technology. 
                    Together, we've shaped the future with innovation and camaraderie.</p>

               <div className='z-10 mt-16 flex items-center justify-center overflow-x-scroll'>
                    {/* <div className='flex border border-pink-400'>
                        {images.map((image, index) => (
                            <div
                                key={image.key}
                                className={`w-[102px] h-[102px] rounded-full border border-white relative`}
                                style={{ ...image.style, zIndex: imageCount - index }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className='w-full h-full object-cover rounded-full'
                                />
                            </div>
                        ))}
                    </div> */}
               </div>
            </div>
        </div>
    )
}