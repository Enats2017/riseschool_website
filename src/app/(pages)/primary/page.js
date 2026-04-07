
import { Hero } from "@/app/components/primary/Hero";
import { About } from "@/app/components/primary/About";
import { ChooseRise } from "@/app/components/campus/ChooseRise";
import { ProgrammeModel } from "@/app/components/primary/ProgrammeModel";
import SubjectsSection from "@/app/components/primary/SubjectsSection";
import { LearningApproaches } from "@/app/components/primary/LearningApproaches";
import LearnerProfile from "@/app/components/primary/LearnerProfile";

export default function PrimaryPage() {
  return (
    <main style={{
      overflow:"hidden"
    }}>
    
<Hero/>
<About/>
<ProgrammeModel/>
<SubjectsSection/>
<LearningApproaches/>
{/* <LearnerProfile/> */}
<ChooseRise/>

    </main>
  );
}
