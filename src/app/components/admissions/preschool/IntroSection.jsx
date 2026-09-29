import Image from "next/image";
import styles from "./Intro.module.css";
import ui from "./shared.module.css";
import SectionHeading from "./SectionHeading";
import ApplyButton from "./ApplyButton";
import { AbBlock, Rocket } from "./Doodles";
import { IMAGE_BASE } from "./data";

export default function IntroSection() {
  return (
    <section className={styles.intro} aria-labelledby="f100-intro-title">
      <div className={styles.media}>
        <Image
          src={`${IMAGE_BASE}/rise-atrium.webp`}
          alt="The bright, double-height atrium at Rising India School of Excellence"
          width={2000}
          height={1125}
          sizes="100vw"
          className={styles.img}
        />
      </div>

      <div className={`${ui.container} ${styles.inner}`}>
        <div className={styles.copy}>
          <svg className={styles.rays} viewBox="0 0 48 44" fill="none" aria-hidden="true" focusable="false">
            <path d="M8 18 14 4M22 26 40 12M26 40l16-2" stroke="#fcb813" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <SectionHeading
            id="f100-intro-title"
            align="start"
            lead="Not Just Another Preschool"
            title="It’s Their"
            accent="First International Preschool"
            accentBreak
          >
            <AbBlock className={`${styles.deco} ${styles.decoAb}`} />
            <Rocket className={`${styles.deco} ${styles.decoRocket}`} />
          </SectionHeading>

          <p className={styles.tagline}>At RISE,<br className={styles.tagBreak} /> children don&apos;t simply learn. They discover.</p>

          <p className={styles.body}>
            Our preschool programme combines a child-centred{" "}
            <strong className={ui.accent}>D.I.S.C.O.V.E.R.Y. curriculum,</strong> experiential learning, creative
            expression, STEM, communication, global exposure and nurturing relationships to build the foundations of
            confident, curious and creative learners.
          </p>

          <div className={`${ui.ctaRow} ${ui.ctaRowStart} ${styles.cta}`}>
            <ApplyButton>Apply now</ApplyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
