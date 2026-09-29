"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Experiences.module.css";

const AUTOPLAY_MS = 3200; // time each card stays centred
const RESUME_MS = 5000; // pause after the person touches / drags the row

/**
 * Experience cards. On desktop/tablet this is the usual grid; on phones the same list
 * becomes a single horizontal row: swipeable, snap-centred, with the centred card highlighted
 * (see the mobile block in Experiences.module.css). On phones the row also advances by itself,
 * pausing while the person is touching it and when it is off-screen.
 */
export default function ExperienceCarousel({ items, autoplay = true }) {
  const listRef = useRef(null);
  const [active, setActive] = useState(0);

  const update = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const mid = list.scrollLeft + list.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(list.children).forEach((el, i) => {
      const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
      if (dist < bestDist) {
        best = i;
        bestDist = dist;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    list.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      list.removeEventListener("scroll", onScroll);
    };
  }, [update]);

  // Auto-advance (only when the list actually scrolls sideways, i.e. the phone layout)
  useEffect(() => {
    const list = listRef.current;
    if (!autoplay || !list) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let timer = 0;
    let resumeAt = 0;
    let visible = true;

    const currentIndex = () => {
      const mid = list.scrollLeft + list.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      Array.from(list.children).forEach((el, i) => {
        const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
        if (dist < bestDist) {
          best = i;
          bestDist = dist;
        }
      });
      return best;
    };

    const tick = () => {
      const scrollable = list.scrollWidth > list.clientWidth + 1;
      if (!scrollable || !visible || Date.now() < resumeAt) return;
      const cards = Array.from(list.children);
      const next = cards[(currentIndex() + 1) % cards.length];
      if (!next) return;
      list.scrollTo({
        left: next.offsetLeft + next.offsetWidth / 2 - list.clientWidth / 2,
        behavior: "smooth",
      });
    };

    const pause = () => {
      resumeAt = Date.now() + RESUME_MS;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    }, { threshold: 0.4 });
    io.observe(list);

    list.addEventListener("touchstart", pause, { passive: true });
    list.addEventListener("pointerdown", pause, { passive: true });
    list.addEventListener("wheel", pause, { passive: true });
    timer = window.setInterval(tick, AUTOPLAY_MS);

    return () => {
      window.clearInterval(timer);
      io.disconnect();
      list.removeEventListener("touchstart", pause);
      list.removeEventListener("pointerdown", pause);
      list.removeEventListener("wheel", pause);
    };
  }, [autoplay]);

  return (
    <ul ref={listRef} className={styles.grid}>
      {items.map((exp, i) => (
        <li
          key={`${exp.title}-${i}`}
          className={styles.card}
          style={{ "--c": exp.color }}
          data-active={i === active}
        >
          <figure className={styles.figure}>
            <div className={styles.frame}>
              <Image
                src={exp.image}
                alt={`Children at RISE during a ${exp.title} session`}
                fill
                sizes="(min-width: 1024px) 21vw, (min-width: 640px) 46vw, 51vw"
                className={styles.img}
              />
            </div>
            <figcaption className={styles.title}>{exp.title}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
