"use client";
import Image from 'next/image'

import { useState } from "react";

import Navbar from './NavBar1.jsx'


import firstPrize from './assets/Prize/firstPrize.svg'
import secondPrize from './assets/Prize/secondPrize.svg'
import thirdPrize from './assets/Prize/thirdPrize.svg'





export default function Prize() {
    
    return (
        <section className=" relative z-[2] flex flex-col items-center justify-items-center py-[5vw] space-y-12">
<h1 className="text-[48px] leading-[45px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent leading-60px">PRIZES</h1>
            <div className="flex space-x-8 justify-items-center">
                 <div className="mt-20">
                    <a  target="_blank" rel="noreferrer" className="flex flex-col items-center">
                        <Image alt="img" src={secondPrize} className="w-[22vw] "/>
                    </a>
            </div>
            <div className="flex flex-col items-center">
                    <a  target="_blank" rel="noreferrer" className="flex flex-col items-center">
                        <Image alt="img" src={firstPrize} className="w-[24vw] "/>
                    </a>
                </div>  

            <div className="mt-20">
                    <a target="_blank" rel="noreferrer" className="flex flex-col items-center">
                     <Image alt="img" src={thirdPrize} className="w-[19vw]" />
                    </a>
            </div>
                
            </div>
  
        </section>
    );
}
