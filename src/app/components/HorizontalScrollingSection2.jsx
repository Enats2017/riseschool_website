"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card2 } from "./Cards/Card2";

gsap.registerPlugin(ScrollTrigger);

export const HorizontalScrollingSection2 = () => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;

    const scrollDistance = inner.scrollWidth - container.offsetWidth; // total scrollable distance

    gsap.to(inner, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollDistance}`,
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
        ref={innerRef}
        style={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          gap: "2rem", // spacing between panels
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
        {[...Array(4)].map((_, i) => (
          <div key={i} className="panel" style={{ flexShrink: 0 }}>
            <Card2 />
          </div>
        ))}
      </div>
    </section>
  );
};
