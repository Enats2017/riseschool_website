import styles from "./Experiences.module.css";
import ui from "./shared.module.css";
import SectionHeading from "./SectionHeading";
import ApplyButton from "./ApplyButton";
import ExperienceCarousel from "./ExperienceCarousel";
import { AbBlock, BulbDoodle, PaperPlane, Rocket } from "./Doodles";
import { EXPERIENCES } from "./data";

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

        <ExperienceCarousel items={EXPERIENCES} />

        <div className={`${ui.ctaRow} ${styles.cta}`}>
          <ApplyButton>Apply now</ApplyButton>
        </div>
      </div>
    </section>
  );
}
