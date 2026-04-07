import React from "react";
import styles from "./SubjectsSection.module.css";
import { dinNext } from "@/app/fonts";

const subjects = [
  { src: "/images/Social studies.png", title: "Social Studies" },
  { src: "/images/physical education.png", title: "Physical Education", className: styles.tall },
  { src: "/images/science.png", title: "Science" },
  { src: "/images/maths 2.png", title: "Mathematics" },
  { src: "/images/music 2.png", title: "Music" },
  { src: "/images/language.png", title: "Foreign Language", className: styles.wide },
  { src: "/images/mac.png", title: "ICT Integration" },
];

const SubjectsSection = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.page} `}>
        <div className="">
          <div className="">
            <div className="">
              <div className={`${styles.heading} text-center`}>
                <h3 className={`text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-bold uppercase ${dinNext.className} leading-[1]`}>
                  <span className="text-[#831719]">SUBJECTS </span> OFFERED
                </h3>
                <p className={`text-[#1b1b1b] text-[17px] max-w-6xl mx-auto px-4 sm:px-8 md:px-12 text-center mt-2 mb-4 `}>
                  Students enjoy through project and inquiry-based learning in{" "}
                  <strong className="text-[#831719]">Math, Literacy, Science & Social Studies</strong>. Enrichment{" "}
                  <strong className="text-[#831719]">
                    classes of Visual, Music, Performing Arts, International Language & Physical Education
                  </strong>{" "}
                  are integrated into the curricula. As an{" "}
                  <strong className="text-[#831719]">Apple-enabled school</strong>, children have instant access to
                  technology which is integrated into our{" "}
                  <strong className="text-[#831719]">STEM curricula</strong> and{" "}
                  <strong className="text-[#831719]">Innovation Lab</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mx-2">
          <div className="container ">
            <div className={styles.gridWrapper}>
              {subjects.map((subject, index) => (
                <div key={index} className={subject.className || ""}>
                  <img src={subject.src} alt={subject.title} />
                  <div className={styles.imageTitle}>{subject.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
