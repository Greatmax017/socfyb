import React from 'react'
import { OurWeekCard } from './our-week-card'



export const OurWeek = () => {

    const week = [
        {
            number: '1',
            dayOfWeek: 'July',
            heading: 'Inter departmental football competition.',
            subHeading: 'Inter departmental football competition.'
        },
        {
            number: '2',
            dayOfWeek: 'July',
            heading: 'Funtrip to Ikogosi warm spring.',
            subHeading: 'Funtrip to Ikogosi warm spring.'
        },
        {
            number: '3',
            dayOfWeek: 'August',
            heading: 'Picnic at Golf Club.',
            subHeading: 'Golf Club, Ilara Mokin, Ondo State.'
        },
        {
            number: '4',
            dayOfWeek: 'September',
            heading: 'FYB Week.',
            subHeading: 'Fyb week for final year students.'
        },
        {
            number: '5',
            dayOfWeek: 'October',
            heading: 'Exclusive dinner.',
            subHeading: 'Exclusive dinner for final year students.'
        },
        {
            number: '6',
            dayOfWeek: 'October',
            heading: 'Report Meeting.',
            subHeading: 'Report meeting for all fyb.'
        }
    ]
    return (
        <div id='events' className='w-[95%] mx-auto md:w-[90%] mt-14 lg:mt-28 mb-20'>
            <h2 className='font-extrabold text-3xl md:text-4xl text-center'>Our Week at a Glance</h2>
            <p className='text-lg md:text-xl text-center mt-5'>
            Explore our schedule of events and activities, packed with 
            networking, collaboration, and memorable moments.
            </p>
            
            <div className='mt-12 lg:mt-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8'>
                {week.map((day, index) => (
                    <OurWeekCard key={index} number={day.number} dayOfWeek={day.dayOfWeek} heading={day.heading} subHeading={day.subHeading}/>
                ))

                }
               
            </div>
        </div>
    )
}