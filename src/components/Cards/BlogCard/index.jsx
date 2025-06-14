import FadeUpSection from "@/components/Section/FadeUpSection";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ image, title, date }) {
  return (
    <FadeUpSection>
      <div className="bg-[#f8eee6] rounded-2xl overflow-hidden transition-all duration-300 group">
        <Link href="/blog/detail">
          <div className="relative w-full h-52 sm:h-60 md:h-64 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2 group-hover:opacity-80"
            />
          </div>
          <div className="p-5 sm:py-8">
            <p className="text-xs sm:text-sm text-[#8D8D8D] mb-3 sm:mb-5">
              {date}
            </p>
            <h3 className="text-base sm:text-2xl !leading-[1em] font-[600] text-gray-900">
              {title}
            </h3>
          </div>
        </Link>
      </div>
    </FadeUpSection>
  );
}
