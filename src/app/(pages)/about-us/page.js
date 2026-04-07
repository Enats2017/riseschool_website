import { Hero } from "@/app/components/about/Hero";
import { PostBoxSection } from "@/app/components/about/PostBoxSection";
import { ShiftItem } from "@/app/components/about/ShiftItem";
import { LeaderShipTeam } from "@/app/components/about/LeaderShipTeam";
import { ChooseRise } from "@/app/components/campus/ChooseRise";

export default function AboutUsPage() {
  return (
    <main className="w-[100vw]">
    <Hero/>
    <PostBoxSection/>
    <ChooseRise/>
    </main>
  );
}
