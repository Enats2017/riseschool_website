"use client";
import Image from "next/image";
import styles from "./LearnerProfile.module.css";

export default function LearnerProfile() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <h3 className={styles.title}>
            <strong>LEARNER </strong>
            <strong className={styles.primary}>PROFILE</strong>
          </h3>
          <p>
            The IB Learner Profiles represent the heart of the PYP, nurturing
            values and attributes that help students make a positive difference
            in the world.
          </p>
        </div>

        <div className={styles.picture}>
          <Image
            src="http://demo1.altido.co/rising2/assets/img2/learn.png"
            alt="Learner Profile"
            width={700}
            height={700}
          />

          {/* Left-side bubbles */}
          <div className={styles.tooltip}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={`${styles.bubble} ${styles.large}`}>INQUIRERS</div>
          </div>

          <div className={styles.tooltip1}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={`${styles.bubble} ${styles.large}`}>KNOWLEDGEABLE</div>
          </div>

          <div className={styles.tooltip2}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={`${styles.bubble} ${styles.large}`}>THINKERS</div>
          </div>

          <div className={styles.tooltip3}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={`${styles.bubble} ${styles.large}`}>COMMUNICATORS</div>
          </div>

          <div className={styles.tooltip4}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={`${styles.bubble} ${styles.large}`}>PRINCIPLED</div>
          </div>

          <div className={styles.tooltip5}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={`${styles.bubble} ${styles.large}`}>OPEN-MINDED</div>
          </div>

          <div className={styles.tooltip6}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={`${styles.bubble} ${styles.large}`}>CARING</div>
          </div>

          <div className={styles.tooltip7}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={`${styles.bubble} ${styles.large}`}>RISK-TAKERS</div>
          </div>

          <div className={styles.tooltip8}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={`${styles.bubble} ${styles.large}`}>BALANCED</div>
          </div>

          <div className={styles.tooltip9}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={`${styles.bubble} ${styles.large}`}>REFLECTIVE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
