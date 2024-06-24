import React from 'react'

export const OurWeekCard = ({number, dayOfWeek}) => {
    return (
        <div className='bg-primary-darkBlue text-white py-4 px-6 shadow-md'>
            <div className='flex gap-4'>
                <div className='flex flex-col items-center gap-3'>
                    <h4 className='font-extrabold text-white text-3xl md:text-4xl lg:text-5xl'>{number}</h4>
                    <div className='bg-primary-blue flex items-center justify-center py-1 px-4'>
                        <p className='font-semibold text-sm'>{dayOfWeek}</p>
                    </div>
                </div>

                <div>
                    <h5 className='font-extrabold text-lg md:text-xl lg:text-2xl'>Back to school</h5>
                    <p className='mt-3 text-xs'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mollis quam malesuada. consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>
    )
}