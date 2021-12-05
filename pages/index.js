import HeroSection from "../components/heroSection";
import RealLifeIdol from "../components/realLifeIdol";

export default function Home() {
  return (
      <div className="relative overflow-hidden">
        <main>
            <HeroSection />
            <RealLifeIdol />
        </main>
      </div>
  )
}