"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { dinNext,montserrat } from "@/app/fonts";
import { useGSAP } from "@gsap/react";

export default function EducationModel() {
  const outerRef = useRef(null);
  const middleRef = useRef(null);
  const innerRef = useRef(null);

  useGSAP(() => {
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
    <section className="w-full" style={{ backgroundColor: "#fff",display:"flex", justifyContent:"center",marginTop:"10px" }}>
      <div
        className=""
        style={{ maxWidth: 1400, paddingTop: 48, paddingBottom: 48, minHeight: "60vh" }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-10 lg:gap-16">

          {/* Mobile Header */}
          <div className="w-full order-1 lg:hidden ">
            <h2
              className={`${dinNext.className} text-[52px] sm:text-[72px] md:text-[80px] text-center text-wrap`}
              style={{
                fontWeight:700,
                lineHeight: 1.1,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
             <span className="text-[#831719]">Education Model</span> of Tomorrow
            </h2>
          </div>

          {/* Rotating Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center h-full order-2 lg:order-1 lg:pr-0  scale-105 xl:scale-110 transform translate-y-0 lg:translate-y-16 p-2">
            <div className="relative w-full" style={{ aspectRatio: "1 / 1", maxWidth: 520 }}>
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
          <div  className="
    w-full lg:w-2/3
    flex flex-col space-y-6 
    order-2 
    lg:pl-0 
    transform
    px-6 md:px-0 text-center lg:text-left
  ">
            <h2
              className={`${dinNext.className} text-[48px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] hidden lg:block`}
              style={{
                fontWeight:700,
                lineHeight: 1.1,
                textTransform: "uppercase",
              }}
            >
             <span className="text-[#831719]">Education Model</span> of Tomorrow
            </h2>

            <p className={`${dinNext.className} text-[#121212] text-[24px] lxs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] uppercase font-[400] text-wrap sm:text-nowrap transform -translate-y-6`}>Not just Uni but <span className="text-[#831719]">4-Dimensional Learning</span></p>

            <div className={`${montserrat.className}  text-[16px] md:text-[20px] transform -translate-y-8 flex justify-center `}>
              <p className=" leading-relaxed w-full sm:w-3/4 lg:w-full">
                Our unique 4-dimensional education model empowers each student to grow holistically across four essential dimensions of tomorrow&apos;s education –
                <strong style={{ color: "#831719",fontSize:"18px" }}> Applied knowledge</strong> which connects abstract knowledge to real-world experiences;
                <strong style={{ color: "#831719",fontSize:"18px" }}> Meta-skills</strong> of creativity, collaboration, critical thinking and communication which are the superpower of the future;
                <strong style={{ color: "#831719",fontSize:"18px" }}> Character Excellence</strong> to nurture ethical leaders; and  <strong style={{ color: "#831719",fontSize:"18px" }}> Meta-learning</strong> for lifelong adaptability in a fast-changing world. This, combined with an <strong style={{ color: "#831719",fontSize:"18px" }}>Inquiry-driven</strong> and
                <strong style={{ color: "#831719",fontSize:"18px" }}> Technology-enhanced</strong> pedagogy, creates the perfect ecosystem for students to learn to succeed with innovation, lead with character, and impact the world responsibly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
