"use client";

import FadeUpSection from "@/components/Section/FadeUpSection";
import Image from "next/image";

const values = [
  {
    title: "Vision",
    description:
      "To be the most trusted partner in driving environmental sustainability by empowering organizations with innovative, transparent, and scalable compliance solutions — shaping a cleaner, greener, and more responsible future for all.",
    image: "/assets/images/vision.jpg",
  },
  {
    title: "Mission",
    description: [
      "To simplify and streamline EPR compliance and environmental responsibilities for businesses across sectors.",
      "To enable sustainable waste management through integrated reverse logistics, recycling, and disposal services.",
      "To drive impact through data-driven ESG strategies, carbon market solutions, and regulatory excellence.",
      "To foster a culture of compliance, accountability, and circularity in the corporate ecosystem."
    ],
    image: "/assets/images/mission.jpg",
  },
  {
    title: "Goals",
    description: [
      "Achieve 100% accurate compliance for our clients across all applicable waste categories.",
      "Establish a pan-India reverse logistics infrastructure with verified collection partners.",
      "Facilitate the recycling and safe disposal of over 10,000 metric tonnes of waste annually by 2026.",
      "Contribute to national and global sustainability goals by promoting zero-waste-to-landfill practices and carbon neutrality initiatives."
    ],
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
            <FadeUpSection key={index}>
              <div className="bg-[#f9ede7] rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col">
                <div className="relative w-full h-56 sm:h-64 md:h-72">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 py-8 text-center flex flex-col flex-grow">
                  <h3 className="text-xl md:text-3xl font-[600] text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  {Array.isArray(item.description) ? (
                    <ul className="text-[#8D8D8D] text-sm md:text-base text-left list-disc pl-5 space-y-2 flex-grow">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[#8D8D8D] text-sm md:text-base text-left flex-grow">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}

