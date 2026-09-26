import styles from "./Hero.module.css";
import ui from "./shared.module.css";
import { HIGHLIGHTS } from "./data";

/**
 * Maroon band at the very top. It sits behind the site's fixed, transparent
 * navbar (white logo + links) so the navbar stays legible, and carries the
 * Future 100 highlights strip from the reference design.
 */
export default function AnnouncementBar() {
  return (
    <div className={styles.band}>
      <div className={`${ui.container} ${styles.bandInner}`}>
        <h2 className={ui.srOnly}>Future 100 highlights</h2>
        <ul className={styles.highlights}>
          {HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
