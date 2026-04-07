
import { Hero } from "@/app/components/beyond_academics/Hero";
import ImpactHourSpaces from "@/app/components/beyond_academics/Impact_hour";
import { ChooseRise } from "@/app/components/campus/ChooseRise";
import HorizontalSelector from "@/app/components/beyond_academics/HorizontalSelector";



export default function BeyondAcademicsPage() {    
  return (
    <main style={{
      overflow:"hidden"
    }}>
    
    <Hero/>
    <ImpactHourSpaces/>
    <HorizontalSelector/>
    <ChooseRise/>
    </main>
  );
}