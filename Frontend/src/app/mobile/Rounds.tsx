"use client"
import Image from "next/image"
import { useState } from "react";
import './Res.css'
import Navbar from './NavBar1.jsx'
import Vector from './assets/Navbar/Vector.svg'
import Vector1 from './assets/Navbar/Vector2.svg'
import Vector3 from './assets/Navbar/vector3.svg'
import fish from './assets/Navbar/fish.svg'
import fish1 from './assets/Navbar/fish1.svg'
import fish2 from './assets/Navbar/fish2.svg'
import Sharks from './assets/Navbar/Sharks.svg'
import bottomgp from './assets/bottomgp.svg';
import Footer from "../_components/Footer";


export default function Rounds() {
    
    return (
        <div id="ROUNDS" className="relative z-[4] w-full text-white m-0 space-y-4 mb-12">
            <div className='flex justify-center'>

         <h1 className="text-[48px] leading-[45px] my-2 font-normal font-dragon text-4xl bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent">ROUNDS</h1>
        </div>
        <div>
          <div className="flex-row space-y-8 justify-items-center mx-8">
          <div className="flex justify-between items-center w-1/1">
            
          <div className="w-[100%] lg:w-1/1 justify-items-center space-y-1">
            <div className='flex'>
              <h1 className="text-[28px] my-2 font-medium leading-[45px] font-dragon tracking-wider text-[#FFB400]">INCEPTION ROUND</h1>
            </div>
            <div className="relative w-full h-auto overflow-hidden p-4  border-2 border-[#A56733] rounded-tr-xl rounded-bl-xl">
  <div className="absolute inset-0 bg-[radial-gradient(circle,#E88221_0%,#462608_100%)] opacity-[0.15] pointer-events-none"></div>
              <p className="text-[16px] text-[#FAF4BE] font-allrounder leading-[25px] font-light text-justify">
            The first round of GambitoR 3.0, where you will set your ships to 
            sail alongside other pirates online. You’ll need your logical skills 
            and grit in a 2-3 hours question paper consisting of math, puzzles,
            code crunchers, etc., and put your perception up for a challenge. 
            The top 20 performers from classes 9th and 10th, along with the top 
            20 performers from class 11th and the top 20 performers from class 
            12th, will be provided with the golden opportunity of visiting IIT
            Roorkee for the next round, Pinnacle, along with the chances of 
            winning exciting prizes and certificates.
            </p>
          </div>
          </div>
        </div>
        <div className="flex justify-between w-1/1">

          <div className="w-full lg:w-1/1 justify-items-center space-y-1 lg:mt-[28rem]">
            <div className="flex">
              <h1 className="text-[28px] font-medium leading-[45px] font-dragon tracking-wider text-[#FFB400]">PINNACLE</h1>
            </div>
            <div className="relative w-full h-auto overflow-hidden p-4  border-2 border-[#A56733] rounded-tr-xl rounded-bl-xl">
  <div className="absolute inset-0 bg-[radial-gradient(circle,#E88221_0%,#462608_100%)] opacity-[0.15] pointer-events-none"></div>
              <p className="text-[16px] text-[#FAF4BE] font-allrounder font-light leading-[25px] text-justify">
            When you have cleared the depths for the Inception round, we 
            eagerly await your visit to the campus of IIT Roorkee. Considering 
            the alluring beauty and extravagance of this campus and the exciting 
            technical events of the second round, you can already imagine that 
            it'll be a glorious and exhilarating experience. In this round, you 
            will need to work your wits to the end while also having fun while 
            exploring the ins and outs of the campus. The winners of the events 
            will be awarded cash rewards and certificates of excellence, along with 
            several exciting prizes in store for them.
            </p>
          </div>
          </div>
          
        </div>
        </div>
        </div>

        </div>
    );
}
