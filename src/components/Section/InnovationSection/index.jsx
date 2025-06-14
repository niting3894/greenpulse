import InnovationCard from "@/components/Cards/InnovationCard";
import FadeUpSection from "../FadeUpSection";

export default function InnovationSection() {
  return (
    <section className="bg-[#FAF9F6] py-16 px-4 sm:px-6 md:px-20 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
          {/* <p className="text-xs sm:text-sm uppercase text-green-700 font-semibold tracking-wide">
            Our Process
          </p> */}
           <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center md:text-left">
          Our Process
        </h6>
          <div className="sm:max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-[600] mb-4 sm:mb-6">
              Innovative Solutions for a Cleaner Tomorrow
            </h2>
            <p className="text-[#8D8D8D] text-[1rem] max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <FadeUpSection>
            <InnovationCard
              image="/assets/images/innovation-1.jpg"
              title="Innovative Recycling Solutions for a Greener Future"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            />
          </FadeUpSection>
          <FadeUpSection>
            <InnovationCard
              image="/assets/images/innovation-2.jpg"
              title="Sustainable Waste Management: Reducing Landfill Impact"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              reverse
            />
          </FadeUpSection>
        </div>
      </div>
    </section>
  );
}
