import React from 'react'

export const Hero = () => {
    const logoCount = 10;
    const logos = Array(logoCount).fill("/encryptors-logo.svg");
    
    return (
        <div  className='w-full bg-primary-darkBlue text-white flex items-center justify-center pt-16'>
            <div className='w-[98%] lg:w-[95%] xl:w-[90%] 2xl:w-[80%] mx-auto pt-14 md:pt-28 text-center'>
                <h1 className='w-[90%] mx-auto font-extrabold text-4xl 2xl:text-6xl'>
                Celebrating Excellence and Innovation <br />
                - <span className='w-[90%] mx-auto text-primary-blue'>The Encryptors 2023</span>
                </h1>
                <p className='mt-9 w-[90%] mx-auto 2xl:text-xl'>Join us as we honor our journey and achievements in technology. 
                    Together, we've shaped the future with innovation and camaraderie.</p>
                
                    <button className='mt-4 md:mt-7 bg-primary-blue text-white py-4 px-5 lg:px-14 rounded-3xl transition duration-500 hover:bg-primary-purple'>
                        Join the Celebration
                    </button>

                <div className='z-10 mt-16 flex items-center justify-center'>
                   <div className='relative  min-[1300px]:left-[0] min-[1115px]:left-[3rem] w-[98%] lg:w-[90%] mx-auto flex xl:justify-center overflow-x-scroll lg:overflow-x-hidden'>
                        <div className='w-28 max-lg:flex-shrink-0 max-lg:w-0'></div>
                        <img 
                        src="/students.jpeg" 
                        alt="students" 
                        width={103}
                        height={103}
                        className='object-cover flex-shrink-0 w-[103px] h-[103px] border border-white rounded-full'/>

                        <img 
                        src="/students.jpeg" 
                        alt="students" 
                        width={103}
                        height={103}
                        className='relative left-[-1rem] object-cover flex-shrink-0 w-[103px] h-[103px] border border-white rounded-full'/>

                        <img 
                        src="/students.jpeg" 
                        alt="students" 
                        width={103}
                        height={103}
                        className='relative left-[-2rem] object-cover flex-shrink-0 w-[103px] h-[103px] border border-white rounded-full'/>

                        <img 
                        src="/students.jpeg" 
                        alt="students" 
                        width={103}
                        height={103}
                        className='relative left-[-3rem] object-cover flex-shrink-0 w-[103px] h-[103px] border border-white rounded-full'/>

                        <img 
                        src="/students.jpeg" 
                        alt="students" 
                        width={103}
                        height={103}
                        className='relative left-[-4rem] object-cover flex-shrink-0 w-[103px] h-[103px] border border-white rounded-full'/>

                        <img 
                        src="/students.jpeg" 
                        alt="students" 
                        width={103}
                        height={103}
                        className='relative left-[-5rem] object-cover flex-shrink-0 w-[103px] h-[103px] border border-white rounded-full'/>

                        <img 
                        src="/students.jpeg" 
                        alt="students" 
                        width={103}
                        height={103}
                        className='relative left-[-6rem] object-cover flex-shrink-0 w-[103px] h-[103px] border border-white rounded-full'/>

                        <img 
                        src="/students.jpeg" 
                        alt="students" 
                        width={103}
                        height={103}
                        className='relative left-[-7rem] object-cover flex-shrink-0 w-[103px] h-[103px] border border-white rounded-full'/>

                        <img 
                        src="/students.jpeg" 
                        alt="students" 
                        width={103}
                        height={103}
                        className='relative left-[-8rem] object-cover flex-shrink-0 w-[103px] h-[103px] border border-white rounded-full'/>

                        <img 
                        src="/students.jpeg" 
                        alt="students" 
                        width={103}
                        height={103}
                        className='relative left-[-9rem] object-cover flex-shrink-0 w-[103px] h-[103px] border border-white rounded-full'/>
                   </div>
                </div>

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