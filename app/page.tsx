import Cover from "@/components/sections/Cover";
import SolutionBento from "@/components/sections/SolutionBento";
import TechPricing from "@/components/sections/TechPricing";
import CustomersMarket from "@/components/sections/CustomersMarket";
import WhyVoiceToNotes from "@/components/sections/WhyVoiceToNotes";
import Team from "@/components/sections/Team";
import ThankYou from "@/components/sections/ThankYou";

export default function Home() {
  return (
    <main>
      <Cover />
      <SolutionBento />
      <TechPricing />
      <CustomersMarket />
      <WhyVoiceToNotes />
      <Team />
      <ThankYou />
    </main>
  );
}
