"use client";
import { useState, useEffect, useCallback } from "react";
import YouTube from "react-youtube";

import Image from "next/image";
import { slides } from "./assets/CarouselData";

const HomePageCarousel = () => {
  const [current, setCurrent] = useState(2);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const length = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const onPlayHandler = () => {
    setIsVideoPlaying(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVideoPlaying) {
        nextSlide();
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [current, nextSlide, isVideoPlaying]);

  //to check passed variable is an array and is not empty
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="YTCarousel relative mt-0 z-1 pt-[5vw] lg:top-[10rem] top-[5rem] space-y-12 lg:bg-transparent lg:bg-[#2445B5]" id="">
      <div className="">
        <h1 className="text-[52px] leading-[45px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent">IIT ROORKEE AT A GLANCE</h1>
        {/* <p>Don't just take our word, see for yourself</p> */}
      </div>

      <section className="slider">
        
        {/* To show each slide */}
        {slides.map((img, indx) => {
          return (
            <div
              className={`slide ${indx === current ? "active " : ""}${
                (indx < current && `prevImg${current - indx}`) ||
                (indx > current && `nextImg${indx - current}`) ||
                (indx === current && "currentImg")
              }`}
              key={indx}
            >
              {/* Giving each slide a class wrt to its position from current slide */}
              <YouTube
                className="Img"
                videoId={img.video}
                opts={opts}
                onPlay={onPlayHandler}
              />
            </div>
          );
        })}
       
      </section>
      <div className="h-[10rem]">
      {slides.map((img, indx) => {
        return (
          indx === current && (
            <div key={indx} className="text-[1.2rem] font-medium text-center leading-[30px] font-overpass text-white max-w-[50rem]">
              {img.description}
            </div>
          )
        );
      })}

      </div>
    </div>
  );
};

export default HomePageCarousel;
