import Banner from "@/components/Banner";
import CallToAction from "@/components/Section/CallToAction";
import FaqSection from "@/components/Section/FaqSection";
import ServicesSection from "@/components/Section/ServicesSection";
import TestimonialSection from "@/components/Section/TestimonialSection";

export default function ServicesPage() {
  return (
    <>
      <Banner title="Services" backgroundImage="/assets/images/hero-bg.jpg" />
      {/* Your About content here */}
      <ServicesSection />
      <TestimonialSection />
      <CallToAction />  
      <FaqSection />
    </>
  );
}
