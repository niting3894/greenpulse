"use client";
import InfoCard from "@/components/Cards/InfoCard";
import Image from "next/image";
import { FaRecycle, FaTrashAlt } from "react-icons/fa";
import FadeUpSection from "../FadeUpSection";

export default function AboutUsSection() {
  return (
    <section className="bg-[#f9f7f2] text-dark px-4 sm:px-6 md:px-20 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <FadeUpSection>
            <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center md:text-left">
              About Us
            </h6>
          </FadeUpSection>
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 sm:gap-6 text-center md:text-left">
            <FadeUpSection>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-[500] text-gray-900 max-w-2xl mx-auto md:mx-0 w-full">
                Your Partner in Responsible Waste Disposal
              </h2>
            </FadeUpSection>
            <FadeUpSection>
              <p className="text-[#8D8D8D] text-[1rem] max-w-sm mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </FadeUpSection>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Image */}
          <FadeUpSection>
            <div className="h-full">
              <Image
                src="/assets/images/about-hero.jpg"
                alt="Team working"
                width={1088}
                height={700}
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </FadeUpSection>

          {/* Right Grid (2x2 on medium+, stacked on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard
              icon={<FaRecycle />}
              title="Recycling"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec"
            />

            <FadeUpSection>
              <Image
                src="/assets/images/about-2.jpg"
                alt="Team sorting waste"
                width={300}
                height={200}
                className="rounded-2xl object-cover w-full h-full"
              />
            </FadeUpSection>

            <FadeUpSection>
              <Image
                src="/assets/images/about-3.jpg"
                alt="Waste truck"
                width={300}
                height={200}
                className="rounded-2xl object-cover w-full h-full"
              />
            </FadeUpSection>

            <InfoCard
              icon={<FaTrashAlt />}
              title="Waste Services"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
