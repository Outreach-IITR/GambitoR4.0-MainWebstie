"use client"
import Image from 'next/image'
import { useState } from 'react';
import Buttongp from './Buttongp';
import bottomgp from './assets/bottomgp.svg';
import shipgp from './assets/shipgp.svg';

function PostAbout() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col mb-20 relative z-[1] justify-items-center' >
      <div className='z-50 space-y-6 justify-items-center' style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginTop: '10vh' 
      }}
      onClick ={(event)=>{
        //scroll to section
        event.preventDefault();
        const target = event.target as HTMLAnchorElement;
        let id = target.getAttribute('href')?.replace('#','')
        id = id?.toUpperCase()
        const element = document.getElementById(String(id))
        element?.scrollIntoView({
            behavior: 'smooth'
        })
    }}
      >
        <Buttongp text="Rounds"  />
        <Buttongp text="Categories" />
        <Buttongp text="Prizes" />
        <Buttongp text="Syllabus" />
        <Buttongp text="Timeline" />
        <Buttongp text="Testimonial" />
      </div>
      
      {/* <Image 
        src={shipgp} 
        alt="Ship Graphic" 
        style={{ 
          position: 'absolute', 
          bottom: '8%', 
          right: '0', 
          transform: 'translateY(50%)', 
          zIndex:'-1'
        }} 
      /> */}
      
    </div>
  );
}

export default PostAbout;
