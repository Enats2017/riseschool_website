
import AdmissionHero from "@/app/components/admissions/AdmissionHero";
import {Hero} from "@/app/components/admissions/Hero";
import { ChooseRise } from "@/app/components/campus/ChooseRise";
import { BottomBanner } from "@/app/components/admissions/BottomBanner";

export default function AdmissionsPage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AdmissionHero />
      <BottomBanner/>
    <ChooseRise/>
    </main>
  );
}
