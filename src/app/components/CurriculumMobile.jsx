"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { dinNext } from "../fonts";


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


export default function CurriculumMobile() {
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    if (activeIndex === index) {
      // Close the current card
      gsap.to(cardRefs.current[index], {
        height: "80px",
        duration: 0.5,
        ease: "power2.inOut",
      });
      setActiveIndex(null);
    } else {
      // Close previous card if any
      if (activeIndex !== null) {
        gsap.to(cardRefs.current[activeIndex], {
          height: "80px",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
      // Open the clicked card
      gsap.to(cardRefs.current[index], {
        height: "360px",
        duration: 0.5,
        ease: "power2.inOut",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>


      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
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
                className={dinNext.className}
                style={{
                  fontSize: "25px",
                  fontWeight: "400",
                  padding: ".5rem 0 0 0",
                  textTransform: "uppercase"
                }}>{title}</p>
              <div style={{
                marginTop: "1.1rem"
              }}>
                <p
                  className={dinNext.className}
                  style={{
                    fontSize: "48px",
                    fontWeight: "700"
                  }}>{title}</p>

                <p
                  className={dinNext.className}
                  style={{
                    fontSize: "24px",
                    fontWeight: "400",
                    transform: "translateY(-10px)"
                  }}>{subtitle}</p>
                <p style={{
                  fontSize: "16px",
                  marginTop: "1.2rem"
                }}>{desc}</p>
              </div>

            </div>



          </div>
        ))}
      </div>

    </div>
  );
}
