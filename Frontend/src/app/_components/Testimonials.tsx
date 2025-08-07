import React, { useState, useEffect, useRef, useCallback } from "react";

const slides = [
  { src: "/t1.svg", alt: "Testimonial 1" },
  { src: "/t2.svg", alt: "Testimonial 2" },
  { src: "/t3.svg", alt: "Testimonial 3" },
  { src: "/t4.svg", alt: "Testimonial 4" },
  { src: "/t5.svg", alt: "Testimonial 5" },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const len = slides.length;
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize prev and next functions
  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? len - 1 : c - 1));
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = setInterval(next, 5000);
    }
  }, [len]);

  const next = useCallback(() => {
    setCurrent((c) => (c === len - 1 ? 0 : c + 1));
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = setInterval(next, 5000);
    }
  }, [len]);

  useEffect(() => {
    autoplayIntervalRef.current = setInterval(next, 5000);
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [next]);

  return (
    <div className="space-y-12 relative z-[2] flex flex-col items-center justify-center py-[5vw] mt-[8rem] overflow-hidden">
      <h1 className="text-[36px] leading-[45px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent">
        TESTIMONIALS
      </h1>

      <div className="relative w-full max-w-7xl h-64 flex justify-center items-center">
        {slides.map((slide, idx) => {
          // Calculate the offset from the current active slide
          let offset = idx - current;

          // Handle wrapping for positive and negative offsets
          if (offset > len / 2) {
            offset -= len;
          } else if (offset < -len / 2) {
            offset += len;
          }

          // Base classes for all slides
          let classes = `
            absolute transition-all duration-700 ease-in-out
            w-[25%] h-full object-cover rounded-lg
            transform
          `;
          let zIndex = "z-10"; // Default z-index for background slides
          let opacity = "opacity-50"; // Default opacity for background slides

          // Adjust classes based on offset
          if (offset === 0) {
            // Current (center) slide
            classes += " scale-100 translate-x-0";
            zIndex = "z-30";
            opacity = "opacity-100";
          } else if (offset === 1) {
            // Immediately to the right of center
            classes += " scale-90 translate-x-[calc(100%+20px)]"; // Adjust 20px for desired spacing
            zIndex = "z-20";
            opacity = "opacity-80";
          } else if (offset === -1) {
            // Immediately to the left of center
            classes += " scale-90 -translate-x-[calc(100%+20px)]"; // Adjust 20px for desired spacing
            zIndex = "z-20";
            opacity = "opacity-80";
          } else if (offset === 2) {
            // Second slide to the right
            classes += " scale-80 translate-x-[calc(200%+40px)]"; // Further translation and smaller scale
            zIndex = "z-10";
            opacity = "opacity-30";
          } else if (offset === -2) {
            // Second slide to the left
            classes += " scale-80 -translate-x-[calc(200%+40px)]"; // Further translation and smaller scale
            zIndex = "z-10";
            opacity = "opacity-30";
          } else {
            // Far off slides (hidden or barely visible)
            classes += " scale-70 translate-x-0 hidden"; // Hide far off slides
            zIndex = "z-0";
            opacity = "opacity-0";
          }

          return (
            <img
              key={idx}
              src={slide.src}
              alt={slide.alt}
              className={`${classes} ${zIndex} ${opacity}`}
              style={{
                // Position the slides centrally initially before translation
                left: `calc(50% - (${100 / (len * 2)}%))` // This attempts to center one card if no translation.
              }}
            />
          );
        })}

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-1/4 top-1/2 transform -translate-y-1/2 -translate-x-full
                     bg-black bg-opacity-50 p-2 rounded-full text-white
                     hover:bg-opacity-75 z-40"
          aria-label="Previous Testimonial"
        >
          &#10094;
        </button>

        <button
          onClick={next}
          className="absolute right-1/4 top-1/2 transform -translate-y-1/2 translate-x-full
                     bg-black bg-opacity-50 p-2 rounded-full text-white
                     hover:bg-opacity-75 z-40"
          aria-label="Next Testimonial"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;