"use client"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DownArrow from "./Icons/DownArrow";

gsap.registerPlugin(ScrollTrigger);

export default function KeepScrolling() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",  // trigger when scroll passes 50px
        // end: "+=9999",         // long end so it stays hidden
        toggleActions: "play none none reverse", 
        // play on enter, reverse on leave back above start
      },
      x: -200,
      y: 50,
      scale: 1.2,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
   <div
  ref={containerRef}
  className="absolute bottom-6 left-5 sm:bottom-16 sm:left-16 flex items-center gap-2 z-20 text-white"
>
      <DownArrow />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
        <span>Keep</span>
        <span>Scrolling</span>
      </div>
    </div>
  );
}
