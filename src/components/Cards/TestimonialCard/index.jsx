import FadeUpSection from "@/components/Section/FadeUpSection";
import Image from "next/image";

export default function TestimonialCard({ text, name, role, image }) {
  return (
    <FadeUpSection>
      <div className="bg-[#f8eee6] rounded-xl p-6 sm:p-10 md:p-16 shadow-sm">
        <h6 className="text-gray-800 text-base sm:text-2xl mb-4 sm:mb-6 text-left font-medium sm:font-semibold">
          {text}
        </h6>
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-sm sm:text-base font-[400] text-gray-900">
              {name}
            </p>
            <p className="text-xs sm:text-sm text-[#4b5563]">{role}</p>
          </div>
        </div>
      </div>
    </FadeUpSection>
  );
}
