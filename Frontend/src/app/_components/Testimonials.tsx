import React, { useState, useEffect } from "react";

const slides = [
  { src: "/t1.svg" },
  { src: "/t2.svg" },
  { src: "/t3.svg" },
  { src: "/t4.svg" },
  { src: "/t5.svg" },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const len = slides.length;

  const prev = () => setCurrent((c) => (c === 0 ? len - 1 : c - 1));
  const next = () => setCurrent((c) => (c === len - 1 ? 0 : c + 1));

  useEffect(() => {
    const iv = setInterval(next, 5000);
    return () => clearInterval(iv);
  }, [current]);

  const getOffset = (idx: number): number => {
    return (idx - current + len) % len;
  };

  return (
    <div className="relative z-[2] flex flex-col items-center justify-items-center py-[5vw] mt-[8rem] overflow-hidden space-y-12">
      <h1 className="text-[52px] font-normal font-dragon bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent">
        TESTIMONIALS
      </h1>

      <div className="relative w-[90vw] max-w-6xl h-[340px] mt-8">
        {slides.map((slide, idx) => {
          const offset = getOffset(idx); 
          let translate = "";
          let scale = "";
          let opacity = "";
          let zIndex = "";

          if (offset === 0) {
            translate = "translate-x-0";
            scale = "scale-100";
            opacity = "opacity-100";
            zIndex = "z-30";
          } else if (offset === 1) {
            translate = "translate-x-[120px]";
            scale = "scale-90";
            opacity = "opacity-60";
            zIndex = "z-20";
          } else if (offset === 2) {
            translate = "translate-x-[240px]";
            scale = "scale-75";
            opacity = "opacity-30";
            zIndex = "z-10";
          } else if (offset === 3) {
            translate = "-translate-x-[240px]";
            scale = "scale-75";
            opacity = "opacity-30";
            zIndex = "z-10";
          } else if (offset === 4) {
            translate = "-translate-x-[120px]";
            scale = "scale-90";
            opacity = "opacity-60";
            zIndex = "z-20";
          }

          return (
            <div className="justify-items-center items-center">
            <img
              key={idx}
              src={slide.src}
              alt={`Testimonial ${idx + 1}`}
              className={`absolute top-0 w-[320px] h-[360px] object-contain rounded-xl
                transform -translate-x-1/2
                ${translate} ${scale} ${opacity} ${zIndex}
                transition-all duration-700 ease-in-out`}
            />
            </div>
          );
        })}

        {/*<button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 z-50"
        >
          &#10094;
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 z-50"
        >
          &#10095;
        </button>*/}
      </div>
    </div>
  );
};

export default Testimonials;
