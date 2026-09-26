import Image from "next/image";
import styles from "./Experiences.module.css";
import ui from "./shared.module.css";
import SectionHeading from "./SectionHeading";
import ApplyButton from "./ApplyButton";
import { AbBlock, BulbDoodle, PaperPlane, Rocket } from "./Doodles";
import { EXPERIENCES } from "./data";

function ExperienceCard({ title, image, color }) {
  return (
    <li className={styles.card} style={{ "--c": color }}>
      <figure className={styles.figure}>
        <div className={styles.frame}>
          <Image
            src={image}
            alt={`Children at RISE during a ${title} session`}
            fill
            sizes="(min-width: 1024px) 21vw, 46vw"
            className={styles.img}
          />
        </div>
        <figcaption className={styles.title}>{title}</figcaption>
      </figure>
    </li>
  );
}

export default function ExperiencesSection() {
  return (
    <section className={`${styles.section} ${ui.sky}`} aria-labelledby="f100-exp-title">
      <div className={`${ui.container} ${styles.wrap}`}>
        <PaperPlane className={styles.plane} />
        <BulbDoodle className={styles.bulb} />
        <AbBlock className={styles.block} />
        <Rocket className={styles.rocket} />

        <div className={styles.head}>
          <SectionHeading id="f100-exp-title" lead="20+ EXPERIENCES." title="One" accent="Extraordinary Start" />
        </div>

        <ul className={styles.grid}>
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={`${exp.title}-${i}`} {...exp} />
          ))}
        </ul>

        <div className={`${ui.ctaRow} ${styles.cta}`}>
          <ApplyButton>Apply now</ApplyButton>
        </div>
      </div>
    </section>
  );
}
