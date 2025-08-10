"use client"
import Image from 'next/image'
import { useState } from 'react';
import Buttongp from './Buttongp';
import shipgp from './assets/shipgp.svg';

function PostAbout() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col mb-20 relative z-[1]">
      <div
        className="z-50 flex flex-col items-center gap-4 sm:gap-6 px-4 sm:px-8 md:px-12"
        onClick={(event) => {
          event.preventDefault();
          const target = event.target as HTMLAnchorElement;
          let id = target.getAttribute('href')?.replace('#', '');
          id = id?.toUpperCase();
          const element = document.getElementById(String(id));
          element?.scrollIntoView({
            behavior: 'smooth'
          });
        }}
      >
        <Buttongp text="Rounds" />
        <Buttongp text="Categories" />
        <Buttongp text="Prizes" />
        <Buttongp text="Syllabus" />
        <Buttongp text="Timeline" />
        <Buttongp text="Testimonial" />
      </div>

      {/* Optional ship image */}
      {/* <Image
        src={shipgp}
        alt="Ship Graphic"
        className="absolute bottom-[8%] right-0 translate-y-1/2 -z-10"
      /> */}
    </div>
  );
}

export default PostAbout;
