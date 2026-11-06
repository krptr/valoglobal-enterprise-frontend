import { HeroSection } from "./components/HeroSection";
import { AboutUs } from "./components/AboutUs";
import { OurServices } from "./components/our-services/OurServices";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { BrandLogos } from "./components/brands-logos/BrandLogos";

function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
    </>
  );
}

export { HomePage };
