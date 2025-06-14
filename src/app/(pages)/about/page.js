import TeamSection from "@/components/AboutContent/TeamSection";
import ValuesSection from "@/components/AboutContent/ValuesSection";
import Banner from "@/components/Banner";
import AboutUsSection from "@/components/Section/AboutUsSection";

export default function AboutPage() {
  return (
    <>
      <Banner title="About" backgroundImage="/assets/images/hero-bg.jpg" />
      {/* Your About content here */}
      <AboutUsSection />
      <ValuesSection />
      <TeamSection />
    </>
  );
}
