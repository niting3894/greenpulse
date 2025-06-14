import Footer from "@/components/Footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/Section/AboutUsSection";
import BlogSection from "@/components/Section/BlogSection";
import CallToAction from "@/components/Section/CallToAction";
import InnovationSection from "@/components/Section/InnovationSection";
import ProcessSection from "@/components/Section/ProcessSection";
import ServicesSection from "@/components/Section/ServicesSection";
import TestimonialSection from "@/components/Section/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <ProcessSection />
        <InnovationSection />
        <TestimonialSection />
        <CallToAction />
        <BlogSection paddingClass="py-20 pt-0 px-6 md:px-20" />
        <Footer />
      </main>
    </>
  );
}
