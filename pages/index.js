import HeroSection from "../components/heroSection";
import InspiredByNature from "../components/inspiredByNature";
import HowItWorks from "../components/howItWorks";

export default function Home() {
  return (
      <div className="relative overflow-hidden">
        <main>
            <HeroSection />
            <InspiredByNature />
            <HowItWorks />
        </main>
      </div>
  )
}