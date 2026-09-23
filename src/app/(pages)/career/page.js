import { Career } from "@/app/components/career/Career";
import { ChooseRise } from "@/app/components/campus/ChooseRise";

export const metadata = {
  title: "Careers | Rising India School of Excellence",
  description:
    "Join the School of Tomorrow. Explore teaching and non-teaching careers at Rising India School of Excellence, Goa's first Apple-enabled, future-ready school.",
};

export default function CareerPage() {
  return (
    <main style={{ overflow: "hidden" }}>
      <Career />
      <ChooseRise />
    </main>
  );
}