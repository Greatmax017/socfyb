import React from 'react'

export const Hero = () => {
    return (
        <div  className='w-full bg-primary-darkBlue text-white flex items-center justify-center pt-16'>
            <div className='w-[90%] md:w-[70%] mx-auto py-20 md:py-28'>
                <h1 className='font-extrabold text-4xl text-center'>
                Celebrating Excellence and Innovation <br />
                - <span className='text-primary-blue'>The Encryptors 2023</span>
                </h1>
                <p className='mt-9'>Join us as we honor our journey and achievements in technology. 
                    Together, we've shaped the future with innovation and camaraderie.</p>
            </div>
        </div>
    )
}