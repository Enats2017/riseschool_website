"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { dinNext, montserrat } from "../fonts";

export default function LearningModelSection() {
  const outerRef = useRef(null);
  const middleRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (!outerRef.current || !middleRef.current || !innerRef.current) return;

    // Outer clockwise rotation
    gsap.to(outerRef.current, {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    // Middle counter-clockwise rotation
    gsap.to(middleRef.current, {
      rotation: -360,
      duration: 20,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    // Inner clockwise rotation
    gsap.to(innerRef.current, {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <section className="w-full" style={{ backgroundColor: "#fff",display:"flex", justifyContent:"center" }}>
      <div
        className="pt-0"
        style={{ maxWidth: 1400, paddingBottom: 48, minHeight: "60vh" }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-0 md:gap-10 lg:gap-16">

          {/* Mobile Header */}
          <div className="w-full order-1 lg:hidden ">
            <h2
              className={`${dinNext.className} text-[52px] sm:text-[72px] md:text-[80px] text-center text-wrap`}
              style={{
                fontWeight:700,
                lineHeight: 1.1,
                letterSpacing: "0.5px",
                color: "#6F0E11",
                textTransform: "uppercase",
              }}
            >
              4-Dimensional Learning Model
            </h2>
          </div>

          {/* Rotating Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center h-full order-2 lg:order-1 lg:pr-0 transform translate-y-0 lg:translate-y-16 p-2">
            <div className="relative w-full" style={{ aspectRatio: "1 / 1", maxWidth: 600 }}>
              {/* Outer Layer */}
              <div
                ref={outerRef}
                className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden"
                style={{ borderRadius: "50%", width: "100%", height: "100%" }}
              >
                <Image
                  src="/images/Rising-04.svg"
                  alt="Outer layer"
                  fill
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
              </div>

              {/* Middle Layer */}
              <div
                ref={middleRef}
                className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden"
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  src="/images/Rising-03.svg"
                  alt="Middle layer"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Inner Layer */}
              <div
                ref={innerRef}
                className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden"
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  src="/images/Rising-02.svg"
                  alt="Inner layer"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Center Static Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/Rising-01.svg"
                  alt="Center layer"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          {/* Desktop Header + Content (unchanged) */}
          <div  className="w-full lg:w-2/3 flex flex-col space-y-6 order-2 lg:pl-0 transform pr-0 lg:pr-16 xl:pr-24 text-center lg:text-left bg-white 
  ">
            <h2
              className={`${dinNext.className} text-[12px] lg:text-[80px] xl:text-[96px] hidden lg:flex`}
              style={{
                fontWeight:700,
                lineHeight: 1.1,
                letterSpacing: "0.5px",
                color: "#831719",
                textTransform: "uppercase",
              }}
            >
              4-Dimensional Learning Model
            </h2>

            <div className={`${montserrat.className}  space-y-4 text-[20px] `}>
              <p className="leading-relaxed">
                Our unique 4-dimensional education model empowers each student to grow holistically across four essential dimensions of tomorrow&apos;s education –
                <strong style={{ color: "#831719",fontSize:"20px" }}> Applied knowledge</strong> which connects abstract knowledge to real-world experiences;
                <strong style={{ color: "#831719",fontSize:"20px" }}> Meta-skills</strong> of creativity, collaboration, critical thinking and communication which are the superpower of the future;
                <strong style={{ color: "#831719",fontSize:"20px" }}> Character Excellence</strong> to nurture ethical leaders; and  <strong style={{ color: "#831719",fontSize:"20px" }}> Meta-learning</strong> for lifelong adaptability in a fast-changing world. This, combined with an <strong style={{ color: "#831719",fontSize:"20px" }}>inquiry-driven</strong> and
                <strong style={{ color: "#831719",fontSize:"20px" }}> technology-enhanced</strong> pedagogy, creates the perfect ecosystem for students to learn to succeed with innovation, lead with character, and impact the world responsibly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
