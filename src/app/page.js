

import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import MeetOurTeam from "./components/MeetOurTeam";
import PortfolioSection from "./components/PortfolioSection";
import MeetTheRiser from "./components/MeetTheRiser";
import LearningModelSection from "./components/LearningModelSection";
import Curriculum from "./components/Curriculum";
import ChooseTomorrowSelector from "./components/ChooseTomorrowSelector";
import VisionSelector from "./components/VisionSelector";
import { ChooseRise } from "./components/campus/ChooseRise";

export default function Home() {
  return (
    <main style={{
      overflowX: "hidden"
    }}>
      <HeroSection />
      <InfoSection />
      <PortfolioSection />
      <LearningModelSection />
      <Curriculum />

      <ChooseTomorrowSelector />
      <MeetTheRiser />
      <MeetOurTeam />
      <VisionSelector/>
      <ChooseRise/>
    </main>
  );
}
