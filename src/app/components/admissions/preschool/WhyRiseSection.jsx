import {
  RatioIcon,
  FloorIcon,
  ClockIcon,
  ExperiencesIcon,
  IbIcon,
  FrenchIcon,
  SpeechDramaIcon,
  NapIcon,
  FunverseIcon,
  OutdoorsIcon,
  SplashIcon,
  AppleIcon,
} from "./WhyRiseIcons";
import styles from "./WhyRise.module.css";
import ui from "./shared.module.css";
import SectionHeading from "./SectionHeading";
import ApplyButton from "./ApplyButton";
import { BulbDoodle, PaperPlane } from "./Doodles";
import { WHY_RISE } from "./data";

const ICONS = {
  ratio: RatioIcon,
  floor: FloorIcon,
  clock: ClockIcon,
  experiences: ExperiencesIcon,
  ib: IbIcon,
  french: FrenchIcon,
  drama: SpeechDramaIcon,
  nap: NapIcon,
  funverse: FunverseIcon,
  outdoors: OutdoorsIcon,
  splash: SplashIcon,
  apple: AppleIcon,
};

function FeatureCard({ icon, heading, text }) {
  const Icon = ICONS[icon] ?? RatioIcon;
  return (
    <li className={styles.card}>
      <span className={styles.icon} aria-hidden="true">
        <Icon />
      </span>
      <h3 className={styles.cardHeading}>{heading}</h3>
      <p className={styles.cardText}>{text}</p>
    </li>
  );
}

export default function WhyRiseSection() {
  return (
    <section className={`${styles.section} ${ui.sky}`} aria-labelledby="f100-why-title">
      <div className={ui.container}>
        <div className={styles.head}>
          <SectionHeading id="f100-why-title" lead="What Makes" title="RISE Their" accent="Best Start">
            <BulbDoodle className={`${styles.deco} ${styles.bulb}`} />
            <PaperPlane className={`${styles.deco} ${styles.plane}`} />
          </SectionHeading>
        </div>

        <ul className={styles.grid}>
          {WHY_RISE.map((item) => (
            <FeatureCard key={item.heading} {...item} />
          ))}
        </ul>

        <div className={`${ui.ctaRow} ${styles.cta}`}>
          <ApplyButton>Apply now</ApplyButton>
        </div>
      </div>
    </section>
  );
}
