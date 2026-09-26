import Image from "next/image";
import styles from "./Testimonials.module.css";
import ui from "./shared.module.css";
import SectionHeading from "./SectionHeading";
import ApplyButton from "./ApplyButton";
import { TESTIMONIALS } from "./data";

function QuoteMark() {
  return (
    <svg className={styles.mark} viewBox="0 0 48 34" aria-hidden="true" focusable="false">
      <path d="M4 34V20C4 9 9 2 19 0l2 5c-6 2-8 6-8 11h7v18zm25 0V20C29 9 34 2 44 0l2 5c-6 2-8 6-8 11h7v18z" />
    </svg>
  );
}

function TestimonialCard({ quote, name, grade, image, tone }) {
  return (
    <li className={styles.card} data-tone={tone}>
      <figure className={styles.figure}>
        <QuoteMark />
        <blockquote className={styles.quote}>
          <p>{quote}</p>
        </blockquote>
        <figcaption className={styles.author}>
          <Image src={image} alt="" width={96} height={96} className={styles.avatar} />
          <span>
            <span className={styles.name}>{name}</span>
            <span className={styles.grade}>{grade}</span>
          </span>
        </figcaption>
      </figure>
    </li>
  );
}

export default function TestimonialsSection() {
  return (
    <section className={styles.section} aria-labelledby="f100-parents-title">
      <div className={ui.container}>
        <div className={styles.head}>
          <SectionHeading id="f100-parents-title" lead="HEAR FROM" title="Our" accent="Parents" />
        </div>

        <ul className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </ul>

        <div className={`${ui.ctaRow} ${styles.cta}`}>
          <ApplyButton>Apply now</ApplyButton>
        </div>
      </div>
    </section>
  );
}
