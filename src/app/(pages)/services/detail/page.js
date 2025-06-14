import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Banner from "@/components/Banner";
import FaqSection from "@/components/Section/FaqSection";
import ServicesBox from "@/components/ServiceDetail/ServicesBox";
import CTABox from "@/components/ServiceDetail/CTABox";
import ServiceContent from "@/components/ServiceDetail/ServiceContent";

export default function ServicesDetailPage() {
  const services = [
    "Residential Waste Collection",
    "Commercial Waste Disposal",
    "Recycling Services",
    "Hazardous Waste Removal",
  ];

  return (
    <>
      <Banner
        title="Services Detail"
        backgroundImage="/assets/images/hero-bg.jpg"
      />

      <section className="bg-[#f9f8f3] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Sidebar */}
          <aside className=" order-1 md:order-1 space-y-8">
            <ServicesBox services={services} />
            <CTABox />
          </aside>
          {/* Content */}
          <div className="md:col-span-2 order-2 md:order-2">
            <ServiceContent service={services[0]} />
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
