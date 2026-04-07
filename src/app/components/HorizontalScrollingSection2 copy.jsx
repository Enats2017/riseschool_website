"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card2 } from "./Cards/Card2";
gsap.registerPlugin(ScrollTrigger);
export const HorizontalScrollingSection2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(".panel");

    // Total scrollable distance = total width of panels - container width
    const totalScrollWidth = container.scrollWidth;
    const containerWidth = container.offsetWidth;
    const scrollDistance = totalScrollWidth - containerWidth;

    gsap.to(sections, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        end: () => `+=${scrollDistance + containerWidth}`, // pin until last panel fully visible
        markers: true,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          marginTop: "5rem",
        }}
      >
        {/* First Panel */}
        <div className="panel" style={{ flexShrink: 0, width: "50vw", padding: "1rem" }}>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>CULTIVATING</p>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>GLOBAL CITIZENS</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Other Panels */}
        <div className="panel" style={{ flexShrink: 0 }}>
          <Card2 />
        </div>
        <div className="panel" style={{ flexShrink: 0 }}>
          <Card2 />
        </div>
        <div className="panel" style={{ flexShrink: 0 }}>
          <Card2 />
        </div>
        <div className="panel" style={{ flexShrink: 0 }}>
          <Card2 />
        </div>
      </div>
    </section>
  );
};