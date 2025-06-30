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
          Our Seamless EPR Compliance Process
        </h2>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="w-full h-[1290px] sm:h-[810px] relative">
            <Image
              src="/assets/images/process-main.jpg"
              alt="Waste management process"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-x-4 top-4 sm:inset-auto sm:top-5 sm:right-10 ">
            <FadeUpSection>
              <div className="space-y-4 sm:space-y-4 bg-[#f8eee6] rounded-2xl p-4 sm:p-6 backdrop-blur-lg w-[100%] sm:max-w-xl mx-auto sm:mx-0">
                <ProcessCard
                  title="Producer/Importer/Brand Owner Assessment"
                  description="We start by analysing your operations, product categories, and applicable waste types (E-Waste, Plastic, Battery, Tyres, etc.) to determine your EPR obligations as per CPCB guidelines."
                />
                <ProcessCard
                  title="Documentation & Data Collection"
                  description="We help you gather and organize the necessary documents for the EPR Compliance specific to each waste category."
                />
                <ProcessCard
                  title="EPR Action Plan & Target Allocation for the Registration"
                  description="Our experts prepare and submit your application on the CPCB EPR portal while designing your custom EPR Action Plan and proper quantification of waste obligation."
                />
                <ProcessCard
                  title="Eco-friendly Waste Collection & Channelization"
                  description="We execute Reverse Logistics by coordinating with Bulk Consumer, Dealer and CPCB authorized Recycler / Dismantler in Eco-friendly way."
                />
                <ProcessCard
                  title="Documentation & Proof of Compliance"
                  description="Our Team maintains proper records and provide support to submit their accurate compliance quarterly and annually with the cost-efficient model."
                />
              </div>
            </FadeUpSection>
          </div>
        </div>
      </div>
    </section>
  );
}

