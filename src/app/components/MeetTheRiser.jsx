"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dinNext } from "../fonts";
import RiserImageCard from "./RiserImageCard";

gsap.registerPlugin(ScrollTrigger);

const ImageCardData = [
  {
    imagePath: "Resilient_1.webp",
    title: "Resilient",
    desc: "in facing challenges",
    altText: "Resilient"
  },
  {
    imagePath: "Innovative.webp",
    title: "Innovative",
    desc: "in thought and action",
    altText:"Innovative"
  },
  {
    imagePath: "Socially-Responsible.webp",
    title: "Socially Responsible",
    desc: "as global citizens",
    altText: "Socially-Responsible"
  },
  {
    imagePath: "Excellence-Driven.webp",
    title: "Excellence-driven",
    desc: "in everything we pursue",
    altText: "Excellence-Driven"
  },
  {
    imagePath: "Reflective_1.webp",
    title: "REFLECTIVE",
    desc: "to learn & grow every single day",
    altText: "Reflective"
  }
]


export default function MeetTheRiser() {
  const meetRef = useRef(null);
  const riserRef = useRef(null);

  // useGSAP(() => {
  //   gsap.from(meetRef.current, {
  //     x: 200, // from right
  //     opacity: 0,
  //     duration: 2,
  //     scrollTrigger: {
  //       trigger: meetRef.current, // ✅ trigger on this element
  //       start: "top 80%",         // when top of text is 80% down the viewport
  //       toggleActions: "play none none reverse",
  //     },
  //   });

  //   gsap.from(riserRef.current, {
  //     x: -200,
  //     opacity: 0,
  //     duration: 2,
  //     delay: 0.2,
  //     scrollTrigger: {
  //       trigger: riserRef.current, // ✅ trigger on this element
  //       start: "top 80%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  // }, []);

  return (
    <section className="relative flex flex-col items-center text-center leading-[1.6] bg-transparent">

      <div style={{transform:"translateY(2.5rem)", width:"100%", zIndex:10 }}>
        <p
        className={`${dinNext.className} text-[32px] sm:text-[40px] transform translate-y-12 sm:translate-y-18 `}
          ref={meetRef}
          style={{
            color: "#121212",
            // fontSize: "40px",
            fontWeight: "400",
            margin: 0,
            // transform: "translateY(3rem)",
          }} 
        >
          MEET THE
        </p>
        <p
          ref={riserRef}
          style={{
            margin: 0,
            padding: 0,
            color: "#831719",
            // fontSize: "160px",
            fontWeight: "700",
          }}
          className={`${dinNext.className} text-[120px] sm:text-[160px] `}
        >
          RISER
        </p>
      </div>


<div
  style={{
    // border: "1px solid red",
    display: "flex",
    flexWrap: "nowrap",   // keeps items in one row
    overflowX: "auto",    // enables horizontal scroll only here
    maxWidth: "100%",     // prevents affecting whole page
    height:"100%",
    // backgroundColor:"#fff"
    transform:"translateY(-6rem)"
  }}
>
  
  {
          ImageCardData.map(({ imagePath, title, desc, alt }, id) => (
            
            <div style={{scale:1}} key={id}>
            <RiserImageCard number={id} imagePath={imagePath} title={title} desc={desc} altText={alt} />
          </div>
             
          ))
        }

</div>

    </section>
  );
}
