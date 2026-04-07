import { Hero } from "@/app/components/technology/Hero";
import GalleryGrid from "@/app/components/technology/GalleryGrid";
import TechnologyCards from "@/app/components/technology/TechnologyCards";
import { ChooseRise } from "@/app/components/campus/ChooseRise";
import TechnologyTimeline from "@/app/components/technology/TechnologyTimeline";
import { AppleLearningSection } from "@/app/components/technology/AppleLearningSection";


export default function TechnologyPage() {
  return (
    <main style={{
      overflow:"hidden"
    }}>
    
<Hero/>
<TechnologyTimeline/>
<AppleLearningSection/>
<ChooseRise/>

    </main>
  );
}
