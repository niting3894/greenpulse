import ProcessCard from "@/components/Cards/ProcessCard";
import Image from "next/image";
import FadeUpSection from "../FadeUpSection";

export default function ProcessSection() {
  return (
    <section className="bg-[#FAF9F6] py-16 px-4 sm:px-6 md:px-20 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center md:text-left">
          Our Process
        </h6>
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-[600] mb-4 sm:mb-6">
          Our Seamless Waste Management Process
        </h2>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="w-full h-[760px] sm:h-[600px] relative">
            <Image
              src="/assets/images/process-main.jpg"
              alt="Waste management process"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-x-4 top-4 sm:inset-auto sm:top-10 sm:right-10 ">
            <FadeUpSection>
              <div className="space-y-4 sm:space-y-6 bg-[#f8eee6] rounded-2xl p-4 sm:p-6 backdrop-blur-lg w-[100%] sm:max-w-xl mx-auto sm:mx-0">
                <ProcessCard
                  title="Collection & Sorting"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                />
                <ProcessCard
                  title="Eco-Friendly Processing"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                />
                <ProcessCard
                  title="Safe Disposal"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                />
              </div>
            </FadeUpSection>
          </div>
        </div>
      </div>
    </section>
  );
}
