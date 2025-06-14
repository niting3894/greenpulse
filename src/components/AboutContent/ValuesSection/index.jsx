"use client";

import FadeUpSection from "@/components/Section/FadeUpSection";
import Image from "next/image";

const values = [
  {
    title: "Vision",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut",
    image: "/assets/images/vision.jpg",
  },
  {
    title: "Mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut",
    image: "/assets/images/mission.jpg",
  },
  {
    title: "Goals",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut",
    image: "/assets/images/goals.jpg",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-[#f9f8f3] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <FadeUpSection>
          <div className="mb-14 text-center md:text-left">
            <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center md:text-left">
              Our Value
            </h6>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-[600] text-gray-900 leading-snug max-w-4xl mx-auto md:mx-0">
              Our Commitment to Sustainability
              <br className="hidden sm:block" /> and Responsibility
            </h2>
          </div>
        </FadeUpSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((item, index) => (
            <FadeUpSection>
              <div
                key={index}
                className="bg-[#f9ede7] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative w-full h-56 sm:h-64 md:h-72">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 py-8 text-center">
                  <h3 className="text-xl md:text-3xl font-[600] text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#8D8D8D] text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
