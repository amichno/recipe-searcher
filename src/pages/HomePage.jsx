import { HeroSection } from "../components/home/HeroSection";
import { HeroImage } from "../components/home/HeroImage";
import { FeatureGrid } from "../components/home/FeatureGrid";
import { RealLifeSection } from "../components/home/RealLifeSection";
import { CtaBanner } from "../components/home/CtaBanner";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroImage />
      <FeatureGrid />
      <RealLifeSection />
      <CtaBanner />
    </>
  );
}
