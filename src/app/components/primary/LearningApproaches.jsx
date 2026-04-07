import { dinNext } from "@/app/fonts";
import styles from "./LearningApproaches.module.css";

const approaches = [
  {
    title: "Transdisciplinary Units of Inquiry (UOI)",
    image: "/images/Transdisciplinary.png",
    description:
      "Transdisciplinary Units of Inquiry (UOI) linking concepts across subjects.",
  },
  {
    title: "Apple-Enabled",
    image: "/images/apple-enabled.png",
    description:
      "Apple-enabled personalized learning platforms to spark creativity and independence.",
  },
  {
    title: "Real-World Connections",
    image:"/images/real-world-interaction.png",
    description:
      "Field trips, guest speakers, and value weeks reinforcing real-world connections.",
  },
];

export const LearningApproaches = () => {
  return (
    <section className="mt-12 mb-20 bg-white relative z-[2]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h3
            className={`text-[48px] sm:text-[64px] md:text-[82px] lg:text-[96px] font-bold uppercase leading-[1] ${dinNext.className}`}
          >
            TEACHING &{" "}
            <span className="text-[#831719]">LEARNING APPROACHES</span>
          </h3>
          <p className="text-[#1b1b1b] text-[17px] max-w-6xl text-center mx-auto mt-4 mb-6">
            Our transdisciplinary, inquiry-based approach connects concepts
            across subjects, encouraging students to explore, question, and
            apply knowledge meaningfully.
          </p>
        </div>

        {/* Flip Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {approaches.map((item, index) => (
            <div key={index} className="w-full sm:w-[45%] lg:w-[30%]">
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div
                    className={styles.flipCardFront}
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className={styles.frontContent}>
                      <div className={styles.frontHeading}>{item.title}</div>
                    </div>
                  </div>
                  <div className={styles.flipCardBack}>
                    <div className={styles.backContent}>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
