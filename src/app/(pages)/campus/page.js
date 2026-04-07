
import { Hero } from "@/app/components/campus/Hero";
import { ChooseRise } from "@/app/components/campus/ChooseRise";
import LearningInnovationSpaces from "@/app/components/campus/LearningInnovationSpaces";
import { LearningInnovation } from "@/app/components/campus/LearningInnovation";
import { ExplorationSPaces } from "@/app/components/campus/ExplorationSpaces";
import { ExpressionSpaces } from "@/app/components/campus/ExpressionSpaces";
import { FutureMaker } from "@/app/components/campus/FutureMaker";


export default function CampusPage() {
  return (
    <main style={{
      overflow:"hidden"
    }}>
     <Hero/>
     <LearningInnovation/>
     <ExplorationSPaces/>
     <ExpressionSpaces/>
     <FutureMaker/>
     {/* <LearningInnovationSpaces/> */}
     <ChooseRise/>

    </main>
  );
}
