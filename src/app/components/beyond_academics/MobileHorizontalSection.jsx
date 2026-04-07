"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { dinNext } from "@/app/fonts";

const data = [
  {
    title: "Performing & Visual Arts",
    subtitle: "(Designed in Collaboration with Trinity School of Performing Arts)",
    desc: (
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
    desc: (
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


export default function MobileHorizontalSection() {
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    const card = cardRefs.current[index]
    if (activeIndex === index) {
      // Close the current card
      gsap.to(card, {
        height: 80,
        duration: 0.5,
        ease: "power2.inOut",
      });
      setActiveIndex(null);
    } else {
      // Close previous card if any
      if (activeIndex !== null) {
        gsap.to(cardRefs.current[activeIndex], {
          height:80,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
      // Open the clicked card
      const fullHeight = card.scrollHeight;
      gsap.to(card, {
        height:fullHeight,
        duration: 0.5,
        ease: "power2.inOut",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>


      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        {data.map(({ title, subtitle, desc, image }, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => toggleCard(index)}
            style={{
              width: "100%",
              height: "80px", // collapsed height
              borderRadius: "0 0 1rem 1rem",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              transition:"all .3s ease-in-out"
            }}
          >
            <Image
              src={image}
              alt={title}
              fill
              style={{
                objectFit: "cover",
              }}
            />

            {/* Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to right, #831719 0%, transparent 100%)",
                pointerEvents: "none", // allows clicks to pass through
              }}
            />

            <div
              style={{
                color: "#fff",
                position: "absolute", // make text layer on top
                top: "1rem",
                left: "1rem",
                zIndex: 10, // higher than the overlay
                paddingLeft: "8px"
              }}
            >

              <p
                className={`${dinNext.className} text-[24px] font-[400] uppercase`}
                style={{
                  padding: ".5rem 0 0 0",
                }}>{title}</p>

              <div className="mt-8">
                <p
                  className={`${dinNext.className} text-[32px]  leading-[1] font-[700]`}
                >
                  {title}
                </p>

                <p
                  className={`${dinNext.className} text-[24px]  leading-[1] font-[400] mt-2`}
                  >{subtitle}</p>

                <p
                className="text-[16px] mt-8 mb-8"
                >{desc}</p>
              </div>

            </div>



          </div>
        ))}
      </div>

    </div>
  );
}
