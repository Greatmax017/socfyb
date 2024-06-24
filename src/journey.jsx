import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa';

export const Journey = () => {
    const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  }

    return (
        <div className='text-white flex flex-col lg:flex-row gap-8 lg:gap-14'>
            <div className='w-full lg:basis-[50%] bg-[#000406] py-12 px-5 md:px-14 xl:px-16'>
                <h3 className='font-extrabold text-3xl md:text-4xl max-lg:text-center'>Our Journey</h3>

                <div className='mt-5 py-3 border-b border-white/40'>
                    <p className='text-lg md:text-xl'>2018: Freshers&apos; Orientation</p>
                </div>

                <div className='mt-5 py-3 border-b border-white/40'>
                    <p className='text-lg md:text-xl'>2019: First Year Projects and Hackathons</p>
                </div>

                <div className='mt-5 py-3 border-b border-white/40'>
                    <p className='text-lg md:text-xl'>2020: Online Learning Transition</p>
                </div>

                <div className='mt-5 py-3 border-b border-white/40'>
                    <p className='text-lg md:text-xl'>2021: Internship Experiences</p>
                </div>

                <div className='mt-5 py-3 border-b border-white/40'>
                    <p className='text-lg md:text-xl'>2022: Major Projects and Research Contributions</p>
                </div>

                <div className='mt-5 py-3 border-b border-white/40'>
                    <p className='text-lg md:text-xl'>2023: Final Year Projects and Industry Collaborations</p>
                </div>

                <div className='mt-5 py-3 border-b border-white/40'>
                    <p className='text-lg md:text-xl'>2024: Graduation Ceremony</p>
                </div>
            </div>

            <div className='w-full lg:basis-[50%] relative lg:flex lg:items-center lg:mr-[3%]'>
                <div className='w-[93%] h-[300px] md:h-[500px] lg: mx-auto relative'>
                    {!showVideo && (
                        <>
                            <div className='z-[6] absolute inset-0 bg-[#0000004D] flex items-center justify-center rounded'>
                                <FaPlay
                                onClick={handleClick} 
                                size={50} 
                                className='max-md:w-20 cursor-pointer'
                                />
                            </div>
                            <img src="/journey.png" alt='how-we-work' className='w-full h-full object-cover rounded' />
                        </>
                        )}

                        {showVideo && (
                        <video controls autoPlay className='w-full h-[300px] md:h-[500px] object-cover rounded'>
                        <source src="journey.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>
        </div>
    )
}