import { Boogaloo } from "next/font/google";
import ui from "./shared.module.css";
import TopBar from "./TopBar";
import AnnouncementBar from "./AnnouncementBar";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import WhyRiseSection from "./WhyRiseSection";
import CurriculumSection from "./CurriculumSection";
import ExperiencesSection from "./ExperiencesSection";
import TestimonialsSection from "./TestimonialsSection";

// Display face used for headings in the reference design
const boogaloo = Boogaloo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-boogaloo",
});

/**
 * Future 100 – Toddler to Sr KG landing page.
 * The site Navbar, sticky Admissions tab and Footer come from the root layout.
 */
export default function Future100Page() {
  return (
    <main className={`${ui.page} ${boogaloo.variable}`}>
      <TopBar />
      <AnnouncementBar />
      <HeroSection />
      <IntroSection />
      <WhyRiseSection />
      <CurriculumSection />
      <ExperiencesSection />
      <TestimonialsSection />
    </main>
  );
}