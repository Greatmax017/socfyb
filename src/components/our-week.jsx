import React from 'react'
import { OurWeekCard } from './our-week-card'

export const OurWeek = () => {
    return (
        <div id='events' className='w-[95%] mx-auto md:w-[90%] mt-14 lg:mt-28 mb-20'>
            <h2 className='font-extrabold text-3xl md:text-4xl text-center'>Our Week at a Glance</h2>
            <p className='text-lg md:text-xl text-center mt-5'>
            Explore our schedule of events and activities for the week, packed with 
            learning, collaboration, and memorable moments.
            </p>
            
            <div className='mt-12 lg:mt-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8'>
                <OurWeekCard number="05" dayOfWeek="Monday"/>
                <OurWeekCard number="06" dayOfWeek="Tuesday"/>
                <OurWeekCard number="07" dayOfWeek="Wednesday"/>
                <OurWeekCard number="08" dayOfWeek="Thursday"/>
                <OurWeekCard number="09" dayOfWeek="Friday"/>
                <OurWeekCard number="10" dayOfWeek="Saturday"/>
            </div>
        </div>
    )
}