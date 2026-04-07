"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Card } from "./Card";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Performing & Visual Arts",
    subtitle: "(Designed in Collaboration with Trinity School of Performing Arts)",
    desc:(
      <>
      At RISE, the <strong>Performing and Visual Arts</strong> provide students with essential avenues for <strong>expression, creativity, and cultural appreciation</strong> . From painting and sculpture to music, dance, and drama, learners explore artistic passions while developing <strong>technical skills, confidence, and collaboration</strong>. Performances, exhibitions, and stage showcases empower students to <strong>communicate ideas and emotions effectively</strong>, fostering <strong>imagination, innovation, and a lifelong love of the arts</strong>.
      </>
    ),
    image: "/images/performing_and_visual_arts.png"
  },
  {
    title: "AI & Innovation",
    subtitle: "",
    desc: (
      <>
      As an <strong>Apple-enabled school</strong>, RISE leads in integrating <strong>technology, artificial intelligence, and innovation</strong> into learning. Students develop <strong>future-ready skills </strong> by designing, prototyping, and experimenting with cutting-edge digital tools. From <strong>coding and robotics to digital design</strong>, learners combine <strong> critical thinking and creativity</strong> to solve real-world problems, becoming <strong>innovators, creators, and problem-solvers</strong>, not just consumers of knowledge.
      </>
    ),
    image: "/images/ai_and_innovation.png"
  },
  {
    title: "Sports Education",
    subtitle: "",
    desc:(
      <>
       The <strong> PSPE (Personal, Social & Physical Education) programme </strong> ensures <strong>holistic development</strong>, emphasizing physical fitness, mental well-being, social skills, and emotional intelligence. Through structured activities, mindfulness practices, and collaborative experiences, learners develop <strong>resilience, empathy, and teamwork</strong>, building habits that support a <strong>healthy, balanced lifestyle</strong> and the confidence to face challenges.
      </>
    ),
    image: "/images/sports_education.png"
  },
  {
    title: "SEVA",
    subtitle: "Service, Empathy, Values, Action",
    desc: (
      <>
      Deeply rooted in Indian ethos, SEVA program is not an extracurricular activity - it is a way of life. <strong>SEVA</strong> integrates <strong>Service, Empathy, Values, and Action</strong> into the daily rhythm of schooling, transforming learners into compassionate changemakers. Through the <strong>Four-House system</strong>, children actively participate in service projects, community initiatives, and leadership roles. SEVA ensures that every student graduates not only with academic excellence but also with a deep commitment to humanity, ready to create meaningful impact in the world.
      </>
    ),
    image: "/images/Seva.png"
  },
  
]


export const HorizontalScrollingSection = () => {
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
            <Card title={title} subtitle={subtitle} desc={desc} image={image} />
          </div>
        ))}

      </div>
    </section>
    </>
  );
};
