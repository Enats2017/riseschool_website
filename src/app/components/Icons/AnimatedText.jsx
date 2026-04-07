import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { dinNext } from "@/app/fonts";

const AnimatedText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const texts = containerRef.current.children;
    const tl = gsap.timeline({ repeat: -1, defaults: { duration: 0.5, ease: "power2.out" } });

    for (let i = 0; i < texts.length; i++) {
      tl.fromTo(
        texts[i],
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 }
      )
        .to(texts[i], {
          y: "-100%",
          opacity: 0,
          delay: 1// stays visible for shorter time
        });
    }
  }, []);

  return (
    <div
      className={`${dinNext.className} absolute bottom-10 left-5 sm:bottom-14 sm:left-10 md:bottom-24 md:left-8 lg:bottom-32 lg:left-32 text-white text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem]  font-medium w-full overflow-hidden`}
    >
      <h2 className="text-[inherit]">
        RISE <span className="text-[1rem] sm:text-[1.5rem] md:text-[2.2rem] lg:text-[3rem]">TO</span>
      </h2>

      <div
        ref={containerRef}
        className="w-full relative p-8 whitespace-nowrap -translate-y-8 sm:-translate-y-14 md:-translate-y-18 lg:-translate-y-22"
      >
        <h2 className="absolute top-0 left-0">
          CREATIVE{" "}
          <span className="text-[3rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-bold text-[#831719]">
            INNOVATION
          </span>
        </h2>

        <h2 className="absolute top-0 left-0">
          GLOBAL <span className="text-[3rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-bold text-[#831719]">READINESS</span>
        </h2>

        <h2 className="absolute top-0 left-0">
          SOCIAL <span className="text-[3rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-bold text-[#831719]">RESPONSIBILITY</span>
        </h2>

        <h2 className="absolute top-0 left-0">
          THE SCHOOL OF <span className="text-[3rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-bold text-[#831719]">TOMORROW</span>
        </h2>


      </div>
    </div>
  );
};

export default AnimatedText;
