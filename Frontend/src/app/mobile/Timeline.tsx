import React from 'react'
import Timemap from './assets/Syllabus/map1.svg';
import Image from 'next/image'

function Timeline() {
  return (
    <div id="TIMELINE" className='text-center mt-16'> 
            <h1 className="text-[48px] sm:text-[48px] leading-[36px] sm:leading-[45px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent">
                    TIMELINE
                </h1>
            <div className=" w-full flex justify-center items-center">
            <Image src={Timemap} alt="" className="h-[700px] my-10 w-[700px] "/>   

            </div>
        </div>
  )
}

export default Timeline