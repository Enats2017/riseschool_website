"use client";
import { useState, useEffect, useRef } from "react";
import { dinNext } from "@/app/fonts";
import { ShiftItem } from "./ShiftItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sidebarStyles from './Sidebar.module.css';
import visionStyles from './VisionMission.module.css';
import objectivesStyles from './Objectives.module.css';
import houseStyles from './HouseSystem.module.css';
import fastFactsStyles from './FastFacts.module.css';
import { LeaderShipTeam } from "./LeaderShipTeam";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const PostBoxSection = () => {
  const [activeSection, setActiveSection] = useState("our-belief");
  const [activeObjective, setActiveObjective] = useState(0); // Default open item 3
  const [activeFastFact, setActiveFastFact] = useState(0); // Default first
  const sectionRefs = useRef({});

  const sections = [
    { id: "our-belief", title: "OUR BELIEF" },
    { id: "our-purpose", title: "OUR PURPOSE" },
    { id: "our-objectives", title: "OUR OBJECTIVES" },
    { id: "unique-four-house", title: "UNIQUE FOUR HOUSE SYSTEM" },
    { id: "fast-facts", title: "FAST FACTS" },
    { id: "leadership-team", title: "LEADERSHIP TEAM" },
  ];

  // All GSAP animations

  useGSAP(() => {


    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // House cards animation
      const houseCards = gsap.utils.toArray(".house-card");
      if (houseCards.length > 0) {
        gsap.fromTo(
          houseCards,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: ".house-card",
              start: "top 85%",
            },
          }
        );
      }

      // Shift boxes animation
      const boxes = gsap.utils.toArray(".shift-box");
      boxes.forEach((box) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Animate box itself
        tl.fromTo(
          box,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
        );

        // Animate the inner ".after" element
        const afterEl = box.querySelector(".after");
        if (afterEl) {
          tl.fromTo(
            afterEl,
            { opacity: 0, x: -80 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
            "-=0.8"
          );
        }
      });

      // Vision/Mission cards animation
      const visionCards = gsap.utils.toArray(".vision-card");
      if (visionCards.length > 0) {
        gsap.fromTo(
          visionCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: ".vision-card",
              start: "top 85%",
            },
          }
        );
      }
    });

    return () => clearTimeout(timer);
  }, []);

  // Scroll spy effect
  
  useEffect(() => {
  const handleScroll = () => {
    console.log("handleScroll Called")
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (const section of sections) {
      const element = sectionRefs.current[section.id];
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };

  const throttledScroll = () => {
    if (!handleScroll._scheduled) {
      handleScroll._scheduled = true;
      requestAnimationFrame(() => {
        handleScroll();
        handleScroll._scheduled = false;
      });
    }
  };

  window.addEventListener("scroll", throttledScroll);
  handleScroll(); // run once

  return () => window.removeEventListener("scroll", throttledScroll);
}, []);



  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-12 py-16">
        <div className="flex gap-8 w-full">
          {/* Main Content Area */}
          <div className="flex-1 lg:pr-8  min-w-[70%]">
            {/* Section 1: OUR BELIEF */}
            <section
              id="our-belief"
              ref={(el) => (sectionRefs.current["our-belief"] = el)}
              className="mb-16 scroll-mt-24"
            >
              <h2 className={`${dinNext.className} text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase leading-[1] mb-6`}>
                OUR <span style={{ color: "#831719" }}>BELIEF</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-[17px] text-center lg:text-left">
                <p>
                  Rising India is a country which is on the move – ambitious,
                  forward-looking and ready to lead on the World Stage. At
                  Rising India School of Excellence, we mirror this very spirit.
                  We believe that just as India is rising globally, our children
                  must also rise to the future of learning that prepares them to
                  lead, innovate, and create impact on a global scale.
                  In the age of AI, automation and rapid technological shifts,
                  schools can no longer remain traditional. They must transform
                  for the age of AI, to meet the demands of a world where
                  creativity, adaptability and character are as valuable as
                  technology, and where future jobs don't exist today.
                </p>
              </div>

              <div className="mt-8">
                <h3
                  className={`${dinNext.className} text-[24px] lxs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] uppercase leading-[1] mb-6`}
                >
                  IT'S TIME FOR A <span style={{ color: "#831719" }}>BIG SHIFT!</span>
                </h3>
                <div className="space-y-4 timeline">
                  <ShiftItem
                    fromText={(<>Shift from just<br />Knowledge</>)}
                    toText="to 4-dimension learning (Knowledge, Skills, Character and Meta-learning)"
                  />
                  <ShiftItem
                    fromText={(<>Shift from one-size-fits all</>)}
                    toText="to Personalized Learning"
                  />
                  <ShiftItem
                    fromText={(<>Shift from rote learning</>)}
                    toText="to critical thinking and creative problem-solving"
                  />
                  <ShiftItem
                    fromText={(<>Shift from passive<br />classrooms</>)}
                    toText="to collaborative, technology-enabled learning environments"
                  />
                  <ShiftItem
                    fromText={(<>Shift from just core<br />subjects</>)}
                    toText="to emerging fields of AI, Robotics, Data Science, Financial Literacy and Entrepreneurship"
                  />
                </div>
              </div>
            </section>


            {/* Section 2: OUR PURPOSE - Vision/Mission Grid */}
            <section
              id="our-purpose"
              ref={(el) => (sectionRefs.current["our-purpose"] = el)}
              className="mb-16 scroll-mt-24"
            >
              <h2
                className={`${dinNext.className} text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase leading-[1] mb-6`}
              >
                OUR <span style={{ color: "#831719" }}>PURPOSE</span>
              </h2>
              <div className={visionStyles.gridContainer}>
                {/* Center Circle */}
                <div className={visionStyles.centerCircle}></div>

                {/* Vision Card */}
                <div className={`${visionStyles.card} ${visionStyles.vision} vision-card`}>
                  <h3 className={`${visionStyles.cardTitle} ${dinNext.className}`}>
                    VISION
                  </h3>
                  <div className={visionStyles.cardContent}>
                    <p>"Where India's Future Leaders learn to shape the World's Future - through Innovation, Integrity and Impact"</p>
                  </div>
                </div>

                {/* Mission Card */}
                <div className={`${visionStyles.card} ${visionStyles.mission} vision-card`}>
                  <h3 className={`${visionStyles.cardTitle} ${dinNext.className}`}>
                    MISSION
                  </h3>
                  <div className={visionStyles.cardContent}>
                    <p>Empower every learner with future-focused knowledge, essential skills, strong character, and adaptive learning capabilities through personalized, technology-integrated, and globally benchmarked education - preparing them to lead with innovation, integrity, and impact.</p>
                    <ul style={{ marginTop: '15px', paddingLeft: '20px', listStyle: 'disc' }}>
                      <li>Deep knowledge and academic excellence connected to real-world challenges</li>
                      <li>Future-ready skills of creativity, critical thinking, communication and collaboration</li>
                      <li>Integration of modern disciplines of AI, Robotics, Data Science, Financial Literacy and Entrepreneurship</li>
                      <li>Strong character grounded in courage, resilience, ethics and global citizenship</li>
                      <li>Meta-learning that empowers lifelong adaptability and self-leadership</li>
                    </ul>
                    <p style={{ marginTop: '15px', fontStyle: 'italic' }}>Our classrooms are innovation hubs, our teachers are mentors, and our students are changemakers - all rising the right way.</p>
                  </div>
                </div>

                {/* Motto Card */}
                <div className={`${visionStyles.card} ${visionStyles.motto} vision-card`}>
                  <h3 className={`${visionStyles.cardTitle} ${dinNext.className}`}>
                    MOTTO
                  </h3>
                  <div className={visionStyles.cardContent}>
                    <p><strong>"Innovatio Alit, Impactus Regit."</strong></p>
                    <p className="text-gray-600">(Innovation Fuels, Impact Drives)</p>
                    <p className="mt-3">Where students learn to succeed with innovation, lead with character, and impact the world responsibly</p>
                  </div>
                </div>

                {/* Purpose Card */}
                <div className={`${visionStyles.card} ${visionStyles.purpose} vision-card`}>
                  <h3 className={`${visionStyles.cardTitle} ${dinNext.className}`}>
                    PURPOSE
                  </h3>
                  <div className={visionStyles.cardContent}>
                    <p>Making <strong className={visionStyles.highlight}>World-class International Schooling</strong> Accessible to the Rising Cities of India</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: OUR OBJECTIVES */}
            {/* Section 3: OUR OBJECTIVES */}
            <section
              id="our-objectives"
              ref={(el) => (sectionRefs.current["our-objectives"] = el)}
              className="mb-16 scroll-mt-24"
            >
              <h2 className={`${dinNext.className} text-[#831719] text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase leading-[1] mb-6`}>
                OBJECTIVES
              </h2>

              <div className={`${objectivesStyles.accordion} `}>
                {/* Item 1 */}
                <div className={objectivesStyles.accordionItem}>
                  <button
                    className={`${objectivesStyles.accordionButton} ${dinNext.className} ${activeObjective === 0 ? objectivesStyles.active : ''}`}
                    onClick={() => setActiveObjective(activeObjective === 0 ? null : 0)}
                  >
                    1. The 4D Learning Model
                  </button>
                  <div className={`${objectivesStyles.accordionContent} ${activeObjective === 0 ? objectivesStyles.active : ''}`}>
                    <p>
                      Foster holistic development through Knowledge, Skills, Character, and Meta-learning - preparing students not just for exams, but for life.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className={objectivesStyles.accordionItem}>
                  <button
                    className={`${objectivesStyles.accordionButton} ${dinNext.className} ${activeObjective === 1 ? objectivesStyles.active : ''}`}
                    onClick={() => setActiveObjective(activeObjective === 1 ? null : 1)}

                  >
                    2. Transformative Learning Spaces
                  </button>
                  <div className={`${objectivesStyles.accordionContent} ${activeObjective === 1 ? objectivesStyles.active : ''}`}>
                    <p>
                      Create dynamic, flexible environments that inspire creativity, collaboration, and critical thinking beyond traditional classroom boundaries.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className={objectivesStyles.accordionItem}>
                  <button
                    className={`${objectivesStyles.accordionButton} ${dinNext.className} ${activeObjective === 2 ? objectivesStyles.active : ''}`}
                    onClick={() => setActiveObjective(activeObjective === 2 ? null : 2)}

                  >
                    3. Classrooms as Innovation Hubs
                  </button>
                  <div className={`${objectivesStyles.accordionContent} ${activeObjective === 2 ? objectivesStyles.active : ''}`}>
                    <p>
                      Integrating AI, Robotics, Data Science, Financial Literacy, and Entrepreneurship into everyday learning preparing students to design, build, and lead in the world of tomorrow.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className={objectivesStyles.accordionItem}>
                  <button
                    className={`${objectivesStyles.accordionButton} ${dinNext.className} ${activeObjective === 3 ? objectivesStyles.active : ''}`}
                    onClick={() => setActiveObjective(activeObjective === 3 ? null : 3)}

                  >
                    4. Human + AI Collaboration
                  </button>
                  <div className={`${objectivesStyles.accordionContent}  ${activeObjective === 3 ? objectivesStyles.active : ''}`}>
                    <p>
                      Empower students to leverage AI as a tool while developing uniquely human skills like empathy, creativity, and ethical decision-making.
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className={objectivesStyles.accordionItem}>
                  <button
                    className={`${objectivesStyles.accordionButton} ${dinNext.className} ${activeObjective === 4 ? objectivesStyles.active : ''}`}
                    onClick={() => setActiveObjective(activeObjective === 4 ? null : 4)}

                  >
                    5. Personalized Learning Pathways
                  </button>
                  <div className={`${objectivesStyles.accordionContent} ${activeObjective === 4 ? objectivesStyles.active : ''}`}>
                    <p>
                      Tailor education to each student's unique strengths, interests, and pace, ensuring every learner reaches their full potential.
                    </p>
                  </div>
                </div>

                {/* Item 6 */}
                <div className={objectivesStyles.accordionItem}>
                  <button
                    className={`${objectivesStyles.accordionButton} ${dinNext.className} ${activeObjective === 5 ? objectivesStyles.active : ''}`}
                    onClick={() => setActiveObjective(activeObjective === 5 ? null : 5)}

                  >
                    6. Global Readiness & Exposure
                  </button>
                  <div className={`${objectivesStyles.accordionContent}  ${activeObjective === 5 ? objectivesStyles.active : ''}`}>
                    <p>
                      Prepare students for a globalized world through international curricula, cultural exchange, and exposure to diverse perspectives.
                    </p>
                  </div>
                </div>

                {/* Item 7 */}
                <div className={objectivesStyles.accordionItem}>
                  <button
                    className={`${objectivesStyles.accordionButton} ${dinNext.className} ${activeObjective === 6 ? objectivesStyles.active : ''}`}
                    onClick={() => setActiveObjective(activeObjective === 6 ? null : 6)}

                  >
                    7. Community Impact & Social Responsibility
                  </button>
                  <div className={`${objectivesStyles.accordionContent} ${activeObjective === 6 ? objectivesStyles.active : ''}`}>
                    <p>
                      Instill values of service, sustainability, and social responsibility, encouraging students to become change-makers in their communities.
                    </p>
                  </div>
                </div>

                {/* Item 8 */}
                <div className={objectivesStyles.accordionItem}>
                  <button
                    className={`${objectivesStyles.accordionButton} ${dinNext.className} ${activeObjective === 7 ? objectivesStyles.active : ''}`}
                    onClick={() => setActiveObjective(activeObjective === 7 ? null : 7)}

                  >
                    8. College & Career Preparedness
                  </button>
                  <div className={`${objectivesStyles.accordionContent} ${activeObjective === 7 ? objectivesStyles.active : ''}`}>
                    <p>
                      Equip students with the skills, knowledge, and confidence to excel in top universities and thrive in their chosen careers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: UNIQUE FOUR HOUSE SYSTEM */}
            <section
              id="unique-four-house"
              ref={(el) => (sectionRefs.current["unique-four-house"] = el)}
              className="mb-16 scroll-mt-24"
            >
              <div className={houseStyles.houseSystemSection}>
                <h2 className={`${dinNext.className} text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase leading-[1] mb-6`}>
                  UNIQUE <span style={{ color: "#831719" }}>FOUR</span> HOUSE SYSTEM
                </h2>

                <p className={houseStyles.description}>
                  OUR FOUR HOUSES IS MORE THAN SCHOOL SPIRIT; IT'S A MOVEMENT FOR PURPOSE-DRIVEN LEARNING. EACH HOUSE ALIGNS WITH THE <span className={houseStyles.sdgText}>UN SUSTAINABLE DEVELOPMENT GOALS (SDGS)</span>, ENCOURAGING EVERY CHILD TO CHAMPION A CAUSE THEY DEEPLY VALUE.
                </p>

                <div className={houseStyles.houseGrid}>
                  {/* Eco Explorers - Green */}
                  <div className={`${houseStyles.houseCardWrapper} ${houseStyles.ecoExplorers} house-card`}>
                    <div className={houseStyles.houseCard}>
                      {/* Front */}
                      <div className={houseStyles.cardFront}>
                        <h3 className={houseStyles.houseTitle}>ECO EXPLORERS</h3>
                        <p className={houseStyles.houseSubtitle}>Protecting Today, Preserving Tomorrow</p>
                        <div className={houseStyles.sdgLabel}>SDG Goal</div>
                        <p className={houseStyles.sdgGoals}>
                          13 (Climate Action), 15 (Life on Land) & 12 (Responsible Consumption & Production)
                        </p>
                      </div>
                      {/* Back */}
                      <div className={houseStyles.cardBack}>
                        {/* <h3 className={houseStyles.houseTitle}>ECO EXPLORERS</h3> */}
                        <p className={houseStyles.backContent}>
                          Eco Explorers lead initiatives to protect and restore the planet through campus greening projects, conservation drives, and sustainable solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Respect Rangers - Red */}
                  <div className={`${houseStyles.houseCardWrapper} ${houseStyles.respectRangers} house-card`}>
                    <div className={houseStyles.houseCard}>
                      {/* Front */}
                      <div className={houseStyles.cardFront}>
                        <h3 className={houseStyles.houseTitle}>RESPECT RANGERS</h3>
                        <p className={houseStyles.houseSubtitle}>Dignity, Equity, Inclusion Champions</p>
                        <div className={houseStyles.sdgLabel}>SDG Goal</div>
                        <p className={houseStyles.sdgGoals}>
                          16 (Peace, Justice & Strong Institutions), 10 (Reduced Inequalities)
                        </p>
                      </div>
                      {/* Back */}
                      <div className={houseStyles.cardBack}>
                        {/* <h3 className={houseStyles.houseTitle}>RESPECT RANGERS</h3> */}
                        <p className={houseStyles.backContent}>
                          Respect Rangers promote kindness, fairness, and non-violence through anti-bullying squads, cultural inclusion events and inter-school peace forums.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Wellness Warriors - Blue */}
                  <div className={`${houseStyles.houseCardWrapper} ${houseStyles.wellnessWarriors} house-card`}>
                    <div className={houseStyles.houseCard}>
                      {/* Front */}
                      <div className={houseStyles.cardFront}>
                        <h3 className={houseStyles.houseTitle}>WELLNESS WARRIORS</h3>
                        <p className={houseStyles.houseSubtitle}>Physical, Emotional & Mental Champions</p>
                        <div className={houseStyles.sdgLabel}>SDG Goal</div>
                        <p className={houseStyles.sdgGoals}>
                          3 (Good Health & Well-being)
                        </p>
                      </div>
                      {/* Back */}
                      <div className={houseStyles.cardBack}>
                        {/* <h3 className={houseStyles.houseTitle}>WELLNESS WARRIORS</h3> */}
                        <p className={houseStyles.backContent}>
                          Wellness Warriors advocate healthy habits, mindfulness, and resilience through fitness clubs, healthy lunch campaigns, digital detox sessions, WHO youth forums.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Knowledge Knights - Yellow */}
                  <div className={`${houseStyles.houseCardWrapper} ${houseStyles.knowledgeKnights} house-card`}>
                    <div className={houseStyles.houseCard}>
                      {/* Front */}
                      <div className={houseStyles.cardFront}>
                        <h3 className={houseStyles.houseTitle}>KNOWLEDGE KNIGHTS</h3>
                        <p className={houseStyles.houseSubtitle}>Equitable Education Champions</p>
                        <div className={houseStyles.sdgLabel}>SDG Goal</div>
                        <p className={houseStyles.sdgGoals}>
                          4 (Quality Education)
                        </p>
                      </div>
                      {/* Back */}
                      <div className={houseStyles.cardBack}>
                        {/* <h3 className={houseStyles.houseTitle}>KNOWLEDGE KNIGHTS</h3> */}
                        <p className={houseStyles.backContent}>
                          Knowledge Knights defend education for all, promoting literacy, critical thinking, and digital access. They ensure learning becomes a right, not a privilege through peer tutoring, reading clubs, community participation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: FAST FACTS */}
            {/* Section 5: FAST FACTS */}
            <section
              id="fast-facts"
              ref={(el) => (sectionRefs.current["fast-facts"] = el)}
              className="mb-16 scroll-mt-24"
            >
              <div className={fastFactsStyles.fastFactsSection}>
                <h2 className={`${dinNext.className} text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase leading-[1] mb-6`}>
                  FAST <span style={{ color: "#831719" }}>FACTS</span>
                </h2>

                <div className={`${fastFactsStyles.accordion} `}>
                  {/* 1. Rising India School of Excellence */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 0 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 0 ? null : 0)}
                    >
                      Rising India School of Excellence
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 0 ? fastFactsStyles.active : ''}`}>
                      <p>
                        We are Goa's most future-ready international school, redefining education through innovation, empathy, and global excellence. With a mission to make world-class schooling accessible to rising cities of India, we bring together the power of future-ready curriculum, innovative technology, 21st century learning spaces and best-in-class faculty to bring about this transformation.
                      </p>
                    </div>
                  </div>

                  {/* 2. International Accreditation */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 1 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 1 ? null : 1)}
                    >
                      International Accreditation
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 1 ? fastFactsStyles.active : ''}`}>
                      <p>
                        Aligned with global standards through IB PYP and international affiliations, ensuring academic rigor, cultural fluency, and world-class learning outcomes.
                      </p>
                    </div>
                  </div>

                  {/* 3. Faculty */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 2 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 2 ? null : 2)}
                    >
                      Faculty
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 2 ? fastFactsStyles.active : ''}`}>
                      <p>
                        Led by IB-trained and Apple-certified educators, our faculty brings rich experience, innovative pedagogy, and mentorship that inspires lifelong learning.
                      </p>
                    </div>
                  </div>

                  {/* 4. Academics */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 3 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 3 ? null : 3)}
                    >
                      Academics
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 3 ? fastFactsStyles.active : ''}`}>
                      <p>
                        We follow Discovery Mind Model in Early Years; IB-PYP in Primary School; Option of choosing IB or CBSE starting Middle School.
                      </p>
                    </div>
                  </div>

                  {/* 5. School Campus */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 4 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 4 ? null : 4)}
                    >
                      School Campus
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 4 ? fastFactsStyles.active : ''}`}>
                      <p>
                        Designed by international school design experts Education Design International (EDI), a global leader in creating future-focused learning environments across more than 60 countries. Flexible, light-filled learning studios, innovation hubs, and collaborative commons support inquiry, movement, and engagement.
                      </p>
                    </div>
                  </div>

                  {/* 6. Apple-Enabled School */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 5 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 5 ? null : 5)}
                    >
                      Apple-Enabled School
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 5 ? fastFactsStyles.active : ''}`}>
                      <p>
                        We are Goa's first Apple-enabled school where every classroom transforms into a digital innovation lab, empowering creativity, collaboration, and personalized learning.
                      </p>
                    </div>
                  </div>

                  {/* 7. ISSO Member School */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 6 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 6 ? null : 6)}
                    >
                      ISSO Member School
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 6 ? fastFactsStyles.active : ''}`}>
                      <p>
                        We are a proud member of the International Schools Sports Organization (ISSO), offering students national and international sporting exposure and leadership experiences.
                      </p>
                    </div>
                  </div>

                  {/* 8. Trinity School of Performing Arts */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 7 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 7 ? null : 7)}
                    >
                      Trinity School of Performing Arts
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 7 ? fastFactsStyles.active : ''}`}>
                      <p>
                        In partnership with the globally renowned Trinity School of London, our performing arts program nurtures self-expression, creativity, and cultural appreciation.
                      </p>
                    </div>
                  </div>

                  {/* 9. TEDxYouth@RISE */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 8 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 8 ? null : 8)}
                    >
                      TEDxYouth@RISE
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 8 ? fastFactsStyles.active : ''}`}>
                      <p>
                        Our primary school students participate in TED'O'TALKS which serves as a training ground for our young changemakers to share ideas & innovation on the TEDxYouth platform.
                      </p>
                    </div>
                  </div>

                  {/* 10. RISEMUN */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 9 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 9 ? null : 9)}
                    >
                      RISEMUN
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 9 ? fastFactsStyles.active : ''}`}>
                      <p>
                        Our primary school students participate in junior MUN which serves as a training ground for them to participate in Ivy League MUN circuit conferences like Harvard MUN & Yale MUN.
                      </p>
                    </div>
                  </div>

                  {/* 11. SEVA */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 10 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 10 ? null : 10)}
                    >
                      SEVA – Service, Empathy, Values, Action
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 10 ? fastFactsStyles.active : ''}`}>
                      <p>
                        While we nurture global mindedness as an international school, our heart remains rooted in the Indian ethos of SEVA (meaning Selfless Service). Under the SEVA program, our children contribute for the betterment and upliftment of the community at large.
                      </p>
                    </div>
                  </div>

                  {/* 12. SETU */}
                  <div className={fastFactsStyles.accordionItem}>
                    <button
                      className={`${fastFactsStyles.accordionButton} ${dinNext.className} ${activeFastFact === 11 ? fastFactsStyles.active : ''}`}
                      onClick={() => setActiveFastFact(activeFastFact === 11 ? null : 11)}
                    >
                      SETU – Global Exchange Program
                    </button>
                    <div className={`${fastFactsStyles.accordionContent} ${activeFastFact === 11 ? fastFactsStyles.active : ''}`}>
                      <p>
                        SETU (meaning Bridge) connects our students with global peers through collaborative projects, cultural exchanges, and international partnerships across international schools in various countries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: LEADERSHIP TEAM */}
            <section
              id="leadership-team"
              ref={(el) => (sectionRefs.current["leadership-team"] = el)}
              className="mb-16 scroll-mt-24"
            >
              <h2
                className={`${dinNext.className} text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase leading-[1] mb-6`}
              >
                LEADERSHIP <span style={{ color: "#831719" }}>TEAM</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-[17px] text-left">
                {/* <p>
                  Our leadership team comprises experienced educators,
                  visionaries, and change-makers who are passionate about
                  transforming education. With decades of combined experience in
                  pedagogy, administration, and educational innovation, they guide
                  our school towards excellence.
                </p>
                <p>
                  Each member brings unique expertise and a shared commitment to
                  creating an environment where every student can reach their full
                  potential. Together, they ensure that Rising India School of
                  Excellence remains at the forefront of educational innovation.
                </p> */}
              </div>
              <LeaderShipTeam />
            </section>
          </div>


          {/* Fixed Sidebar Navigation - Hidden on mobile */}
          <div className="hidden lg:block w-[30%] relative ">
            <div className={sidebarStyles.sidebarWrapper}>
              <div className={sidebarStyles.sidebarWidgetTitle}>
                <h3 className={`${dinNext.className} text-[35px]`}>
                  IN THIS <span style={{ color: "#831719" }}>SECTION</span>
                </h3>
              </div>
              <div className={sidebarStyles.sidebarWidgetContent}>
                <nav>
                  <ul>
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(section.id);
                          }}
                          className={activeSection === section.id ? sidebarStyles.active : ''}
                          style={{ cursor: 'pointer' }}
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
