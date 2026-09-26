import { Phone, Star } from "lucide-react";
import styles from "./FinalCta.module.css";
import ui from "./shared.module.css";
import ApplyButton, { Future100Label } from "./ApplyButton";
import { CONTACT, HIGHLIGHTS } from "./data";

export default function FinalCtaSection() {
  const [headline, ...perks] = HIGHLIGHTS;

  return (
    <section className={styles.section} aria-labelledby="f100-final-title">
      <div className={ui.container}>
        <div className={styles.panel}>
          <h2 id="f100-final-title" className={styles.title}>
            {headline}
          </h2>

          <ul className={styles.perks}>
            {perks.map((perk) => (
              <li key={perk}>
                <Star size={16} fill="currentColor" aria-hidden="true" className={styles.star} />
                {perk}
              </li>
            ))}
          </ul>

          <p className={styles.admissions}>
            <span className={styles.highlight}>Admissions Open</span>
            <span className={styles.pipe} aria-hidden="true">|</span>
            <span>Toddler to Sr KG</span>
          </p>

          <div className={styles.actions}>
            <ApplyButton variant="future">
              <Future100Label />
            </ApplyButton>
            <a className={styles.call} href={CONTACT.phoneHref}>
              <Phone size={18} aria-hidden="true" />
              Call {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
