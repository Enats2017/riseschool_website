// Content for the Future 100 (Toddler to Sr KG) landing page.
// Edit copy, images and options here — the section components only render this data.

export const IMAGE_BASE = "/images/future-100";

export const HIGHLIGHTS = [
  "Applications to Future 100 now open",
  "Only 100 children",
  "Prestigious scholarship",
  "Early access",
];

export const HERO_FACTS = [
  { strong: "IB Candidate", rest: "School" },
  { strong: "20,000 sqft", rest: "Dedicated Preschool Floor" },
  { strong: "Extended Learning", rest: "till 3PM" },
];

// icon keys map to lucide-react icons inside WhyRiseSection.jsx
export const WHY_RISE = [
  { icon: "ratio", heading: "1:8", text: "Adult–Child\nRatio" },
  { icon: "floor", heading: "20,000 SQ FT", text: "Dedicated Early\nYears Floor" },
  { icon: "clock", heading: "3 PM", text: "Extended\nLearning Day" },
  { icon: "experiences", heading: "20+", text: "Learning\nExperiences" },
  { icon: "ib", heading: "IB", text: "Candidate\nSchool" },
  { icon: "french", heading: "FRENCH", text: "Language\nExposure" },
  { icon: "drama", heading: "SPEECH & DRAMA", text: "Building confident\nyoung voices" },
  { icon: "nap", heading: "NAP", text: "Dedicated Rest &\nRecharge Time" },
  { icon: "funverse", heading: "FUNVERSE", text: "Indoor play &\ndiscovery" },
  { icon: "outdoors", heading: "THE GREAT OUTDOORS", text: "Large outdoor\nplay space" },
  { icon: "splash", heading: "SPLASH", text: "Dedicated\nsplash pool" },
  { icon: "apple", heading: "APPLE-ENABLED", text: "Technology-Integrated\nLearning" },
];

export const DISCOVERY = [
  { letter: "D", title: "Design Thinking", text: "Fostering problem-solving\n& creativity", color: "#387EB8" },
  { letter: "I", title: "Imagination", text: "Encouraging\nout-of-the-box thinking", color: "#4DAE49" },
  { letter: "S", title: "Scientific Thinking", text: "Inspiring curiosity\nand inquiry", color: "#974F9E" },
  { letter: "C", title: "Computational Thinking", text: "Building logic &\nsequencing skills", color: "#F47E20" },
  { letter: "O", title: "Outdoor Play", text: "Promoting fitness and\nsensory exploration", color: "#A55627" },
  { letter: "V", title: "Vocabulary", text: "Strengthening\nlanguage and literacy", color: "#177D3E" },
  { letter: "E", title: "Ethical Education", text: "Instilling strong\nmoral values", color: "#1F4395" },
  { letter: "R", title: "Reflection", text: "Supporting self-awareness\nand deep understanding", color: "#F2A40E" },
  { letter: "Y", title: "Yearning to Learn", text: "Cultivating a lifelong\ngrowth mindset", color: "#DB4297" },
];

// The reference design uses one activity photo for all four cards.
// Swap `image` per card when dedicated photos are available.
export const EXPERIENCES = [
  { title: "Messy Artists", image: `${IMAGE_BASE}/experience-messy-play.webp`, color: "#387EB8" },
  { title: "Junior Scientists", image: `${IMAGE_BASE}/experience-messy-play.webp`, color: "#4DAE49" },
  { title: "Little Musicians", image: `${IMAGE_BASE}/experience-messy-play.webp`, color: "#974F9E" },
  { title: "Junior Scientists", image: `${IMAGE_BASE}/experience-messy-play.webp`, color: "#F47E20" },
];

export const TESTIMONIALS = [
  {
    quote:
      "I’m delighted with the remarkable improvement I’ve seen in my son—he’s excited to attend school every day and never wants to leave! The teachers and staff provide genuine care and individual attention to every child. The IB approach encourages curiosity, creativity, and open-mindedness, giving children the wings to explore and grow. I’m truly happy to be part of the RISE community.",
    name: "Vian's Mother",
    grade: "Grade 1",
    image: `${IMAGE_BASE}/parent-vian.webp`,
    tone: "sun",
  },
  {
    quote:
      "Rising India has proven to be the perfect fit for my daughter, offering an exploratory and future-focused curriculum. I’ve seen remarkable growth in her confidence, curiosity, and inquiry-based learning skills. The school has played a vital role in shaping her identity and preparing her for the future. I’m truly proud to be the mother of a Riser.",
    name: "Shanaya's Mother",
    grade: "Grade 3",
    image: `${IMAGE_BASE}/parent-shanaya.webp`,
    tone: "sky",
  },
  {
    quote:
      "The Rising India School has brought a lot of changes in my child. I have seen that there is a great improvement in his communication skill. He has overcome all his shyness and is now a student who is driven by excellence. I wish to see him grow here and do well in his future.",
    name: "Virochan's Father",
    grade: "Grade 3",
    image: `${IMAGE_BASE}/parent-virochan.webp`,
    tone: "rose",
  },
];

export const AGE_OPTIONS = [
  "Toddler (1.5 – 2.5 years)",
  "Nursery (2.5 – 3.5 years)",
  "Jr KG (3.5 – 4.5 years)",
  "Sr KG (4.5 – 5.5 years)",
];

export const LOCATION_OPTIONS = [
  "Vasco da Gama",
  "Dabolim / Chicalim",
  "Verna / Cortalim",
  "Margao",
  "Panaji",
  "Ponda",
  "Mapusa",
  "Other",
];

export const CONTACT = {
  phoneDisplay: "+91 86570 15231",
  phoneHref: "tel:+918657015231",
};

export const FORM_ID = "book-your-visit";
