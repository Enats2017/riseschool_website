"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Curriculum.module.css";
import ui from "./shared.module.css";
import SectionHeading from "./SectionHeading";
import ApplyButton from "./ApplyButton";
import { DISCOVERY } from "./data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function LoopArrow({ className }) {
  // hand-drawn looped arrow from the reference; points up by default
  return (
    <svg className={className} viewBox="0 0 50 110" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M46 104C26 100 10 88 12 72c2-12 16-14 18-4s-10 14-18 6C0 64 2 36 18 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M8 18 20 4l8 18-11-6z" fill="currentColor" />
    </svg>
  );
}

// wobbly outline shapes vary per letter so the row feels hand-drawn
const OUTLINES = [
  "M104 17c46 1 78 37 76 84-2 45-34 79-80 78-46-2-78-36-77-81 1-47 34-82 81-81z",
  "M98 16c47-2 82 34 82 82 0 48-36 82-82 82-45 0-79-35-78-82 1-46 32-80 78-82z",
  "M102 18c45 2 77 33 77 80 0 49-33 82-79 81-46-1-78-33-79-80-1-46 35-83 81-81z",
];

function LetterCircle({ letter, color, index }) {
  const outline = OUTLINES[index % OUTLINES.length];
  return (
    <svg viewBox="0 0 200 200" className={styles.circleSvg} aria-hidden="true" focusable="false">
      <path d={outline} fill={color} transform="translate(-4 3)" />
      <path d={outline} fill="none" stroke="#231f3a" strokeWidth="3.4" />
      <ellipse cx="100" cy="99" rx="66" ry="64" fill="none" stroke="#fff" strokeWidth="3" />
      <path
        d={index % 2 === 0 ? "M120 6c40 6 66 32 74 66M196 118c-2 16-8 28-16 36" : "M184 136c-10 32-40 54-78 58M22 124c2 12 8 24 16 32"}
        stroke="#8a1630"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="100"
        y="101"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#fff"
        fontFamily="inherit"
        fontWeight="800"
        fontSize="113"
      >
        {letter}
      </text>
    </svg>
  );
}

export default function CurriculumSection() {
  const scope = useRef(null);

  // The letters "spell out" DISCOVERY as the row scrolls into view.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-anim='letter']", {
          scale: 0.4,
          opacity: 0,
          rotate: -12,
          duration: 0.55,
          ease: "back.out(1.8)",
          stagger: 0.07,
          scrollTrigger: { trigger: "[data-anim='word']", start: "top 82%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section ref={scope} className={`${styles.section} ${ui.cream}`} aria-labelledby="f100-curriculum-title">
      <div className={ui.container}>
        <SectionHeading
          id="f100-curriculum-title"
          lead="What Will Your"
          title="Child Learn -"
          accent="Curriculum Offered"
        >
          <p className={ui.intro}>
            We are the preschool programme which goes beyond numeracy and literacy to develop a ‘whole child’ by
            following 9 domains of learning – The DISCOVERY WAY
          </p>
        </SectionHeading>

        <div data-anim="word">
          {/* compact word mark for phones & tablets (desktop circles spell the word themselves) */}
          <p className={styles.word} aria-hidden="true">
            {DISCOVERY.map((d) => (
              <span key={d.letter} className={styles.wordLetter} style={{ "--c": d.color }}>
                {d.letter}
              </span>
            ))}
          </p>

          <ol className={styles.domains} aria-label="The 9 DISCOVERY domains of learning">
            {DISCOVERY.map((d, i) => (
              <li
                key={d.letter}
                className={styles.domain}
                data-pos={i % 2 === 0 ? "top" : "bottom"}
                style={{ "--c": d.color }}
              >
                <span className={styles.circle} data-anim="letter" aria-hidden="true">
                  <LetterCircle letter={d.letter} color={d.color} index={i} />
                  <LoopArrow className={styles.arrow} />
                </span>
                <div className={styles.label}>
                  <h3 className={styles.domainTitle}>
                    <span className={ui.srOnly}>{d.letter} – </span>
                    {d.title}
                  </h3>
                  <p className={styles.domainText}>{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={`${ui.ctaRow} ${styles.cta}`}>
          <ApplyButton>Apply now</ApplyButton>
        </div>
      </div>
    </section>
  );
}
