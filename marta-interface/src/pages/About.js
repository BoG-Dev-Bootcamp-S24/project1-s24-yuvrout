import React from 'react'
import { useNavigate } from 'react-router'

import marta from "../marta.jpg"


function About() {

    const navigate = useNavigate()
  return (
    <div className='w-full'>
        <div className='grid grid-flow-col grid-cols-5 m-5'>
          <p className='justify-self-center col-start-3 text-4xl'>MARTA</p>
          <p onClick={() => navigate("/")} className='justify-self-center self-center col-start-5 cursor-grab'>Back to Home</p>
        </div>
        <div className='flex justify-around'>
          <div className='flex flex-col p-32'>
            <p className='text-2xl'>MARTA stands as the ninth biggest public transportation network in the United States, and it's the most extensive system in the Southeast, offering bus, train, and paratransit options. Operating for four decades, MARTA serves three out of the five central counties within the area and contributes $2.6 billion to Georgia's economic activity. It's the preferred commuting option for a majority of employees in the region's rapidly expanding industries. Citizens from a diverse array of backgrounds throughout the area rely on MARTA for their daily travel requirements.</p>
          </div>

          <img src={marta} className='w-auto h-56 mt-20'></img>


        </div>
    </div>
  )
}

export default About