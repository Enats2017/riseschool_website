import { Hero } from "@/app/components/academic-life/Hero";
import EducationModel from "@/app/components/academic-life/EducationModel";
import PedagogyOfTomorrow from "@/app/components/academic-life/PedagogyOfTomorrow";
import UniquePracticesOfTomorrow from "@/app/components/academic-life/UniquePracticesOfTomorrow";
import { ProgressiveCards } from "@/app/components/academic-life/ProgressiveCards";
import { ChooseRise } from "@/app/components/campus/ChooseRise";

export default function AcademicLifePage() {
  return (
    <main style={{
      overflow:"hidden"
    }}>
    
    <Hero/>
    <EducationModel/>
    <PedagogyOfTomorrow/>
    <UniquePracticesOfTomorrow/>
    <ProgressiveCards/>
    <ChooseRise/>
    </main>
  );
}
