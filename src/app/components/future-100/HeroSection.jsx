"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Hero.module.css";
import ui from "./shared.module.css";
import ApplyButton, { Future100Label } from "./ApplyButton";
import EnquiryForm from "./EnquiryForm";
import { AbBlock, BulbDoodle, LoopPlane, PaperPlane, Rocket } from "./Doodles";
import { HERO_FACTS, IMAGE_BASE } from "./data";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const scope = useRef(null);

  // One orchestrated entrance for the hero; skipped when the user prefers reduced motion.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-anim='line']", { yPercent: 60, opacity: 0, duration: 0.8, stagger: 0.12 })
          .from("[data-anim='sub']", { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.45")
          .from("[data-anim='form']", { y: 28, opacity: 0, duration: 0.7 }, "-=0.6")
          .from("[data-anim='doodle']", { scale: 0.6, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.5");
      });
      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section ref={scope} className={styles.hero} aria-labelledby="f100-hero-title">
      <div className={`${ui.container} ${styles.top}`}>
        <div className={styles.copy}>
          <h1 id="f100-hero-title" className={styles.title}>
            <span className={styles.line} data-anim="line">
              Their <span className={ui.accent}>First School</span>
              <PaperPlane className={styles.plane} data-anim="doodle" />
            </span>
            <span className={styles.line} data-anim="line">
              Should Not Be <span className={ui.accent}>Ordinary</span>
            </span>
          </h1>

          <p className={styles.choose} data-anim="sub">
            Choose <span className={ui.accent}>Goa’s No. 1 International Preschool</span>
          </p>

          <ul className={styles.facts} data-anim="sub" aria-label="Programme highlights">
            {HERO_FACTS.map((fact) => (
              <li key={fact.strong}>
                <strong>{fact.strong}</strong> {fact.rest}
              </li>
            ))}
          </ul>
        </div>

        <AbBlock className={`${styles.deco} ${styles.decoBlock}`} data-anim="doodle" />
        <Rocket className={`${styles.deco} ${styles.decoRocket}`} data-anim="doodle" />
        <LoopPlane className={`${styles.deco} ${styles.decoPlane}`} data-anim="doodle" />
        <BulbDoodle className={`${styles.deco} ${styles.decoBulb}`} data-anim="doodle" />
      </div>

      <div className={styles.photo}>
        <Image
          src={`${IMAGE_BASE}/hero-preschool-classroom.webp`}
          alt="Preschoolers building with blocks and toy fire trucks in the RISE early years classroom"
          width={1280}
          height={800}
          priority
          sizes="100vw"
          className={styles.photoImg}
        />
      </div>

      <div className={styles.bar}>
        <div className={`${ui.container} ${styles.barInner}`}>
          <p className={styles.barText}>
            <span className={styles.barHighlight}>Admissions Open</span>
            <span className={styles.barSep} aria-hidden="true">|</span>
            <span>Toddler to Sr KG</span>
          </p>
          <ApplyButton variant="future">
            <Future100Label />
          </ApplyButton>
        </div>
      </div>

      <div className={styles.formLayer}>
        <div className={`${ui.container} ${styles.formFrame}`}>
          <div className={styles.formCard} data-anim="form">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
