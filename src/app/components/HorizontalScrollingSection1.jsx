"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card1 } from "./Cards/Card1";
import { useGSAP } from "@gsap/react";
import ScrollToPlugin from "gsap/src/ScrollToPlugin";
import { dinNext } from "../fonts";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Early Years",
    subtitle: "(Ages 3-6)",
    desc: "Our youngest children learn while Discovering. The DISCOVERY MIND Curriculum ignites curiosity, creativity and confidence.",
    image: "/images/Early-Years-Prog.webp"
  },
  {
    title: "Primary School",
    subtitle: "(Grades 1–5)",
    desc: "The Primary years is a transdisciplinary curriculum integrating knowledge, concepts, skills and attributes fostering holistic development.",
    image: "/images/Primary-Years-Prog.webp"
  },
  {
    title: "Middle School",
    subtitle: "(Grades 6–10)",
    desc: "Our Middle Schoolers are provided a choice between International curriculum that nurtures critical thinking, creativity, resilience, and collaboration and National-CBSE curriculum which follows a rigorous, structured academic framework",
    image: "/images/Middle-School-Prog.webp"
  },
  {
    title: "High School",
    subtitle: "(Grades 11–12)",
    desc: "Both International and CBSE pathways continue in the High School integrating opportunities for leadership, innovation, and self-expression and ensuring students graduate as reflective, principled, and globally competent individuals.",
    image: "/images/High-School-Prog.webp"
  },
  {
    title: "SPORTS EDUCATION",
    subtitle: "",
    desc: "The PSPE programme emphasizes physical fitness, mental well-being, social skills, and emotional intelligence.",
    image: "/images/Sports-Education.webp"
  },
  {
    title: "PERFORMING ARTS",
    subtitle: "",
    desc: "Performing and Visual Arts provide students with essential avenues for expression, creativity, and cultural appreciation.",
    image: "/images/Performing-Arts.webp"
  },
  {
    title: "AI & INNOVATION",
    subtitle: "",
    desc: "Students design, prototype, and experiment with cutting-edge tools becoming innovators, creators, and problem-solvers, not just consumers of knowledge.",
    image: "/images/AI-and-Innovation.webp"
  },
  {
    title: "COMMUNITY SERVICE",
    subtitle: "",
    desc: "As an integral part of our school, each student has to devote 40 hours to the service of their community nurturing a sense of responsibility and empathy for the world at large",
    image: "/images/Community-Service.webp"
  },
]


export const HorizontalScrollingSection1 = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".stack-card");

    cards.forEach((card, i) => {
      if (i === 0) {
        // ✅ lock the first card in place (no shift)
        gsap.set(card, { x: "0%", zIndex: 1 });
        return;
      }

      gsap.fromTo(
        card,
        { x: "100%", zIndex: i }, // off-screen
        {
          x: `${i * 5}%`, // stacked with small left offset
          zIndex: i + 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => "top+=" + i * window.innerHeight + " top",
            end: () => "+=" + window.innerHeight,
            scrub: .4,
          },
        }
      );
    });

    // ✅ Pin whole section and add extra hold time at the end
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () =>
        "+=" + (window.innerHeight * (cards.length - 1) + window.innerHeight * 1), // extra 50% scroll hold
      pin: true,
    });

  }, []);

  return (
    <>

<div style={{
  display:"flex",
  flexDirection:"column",
  alignItems:"center"
}}>

 <p
  className={`${dinNext.className} text-[#121212] text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-normal translate-y-6 sm:translate-y-8 md:translate-y-12 lg:translate-y-14`}
>
 PROGRESSIVE
</p>

     <p className={`${dinNext.className} text-[#831719] text-[84px]  sm:text-[110px] md:text-[132px] lg:text-[160px] font-bold`}>
  CURRICULUM
</p>

</div>

    <section
      ref={containerRef}
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        {/* <div
          className="stack-card"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Card1 />
        </div> */}

        {data.map(({title,subtitle,desc,image}, i) => (
          <div className="stack-card" style={{ position: "absolute", height: "100%" }} key={i}>
            <Card1 title={title} subtitle={subtitle} desc={desc} image={image} />
          </div>
        ))}

      </div>
    </section>
    </>
  );
};
