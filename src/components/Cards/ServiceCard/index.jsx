import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="flex flex-col md:flex-row bg-[#f9f7f2] rounded-2xl p-4 md:p-6 gap-6 shadow-sm">
      {/* Text Content */}
      <div className="flex flex-col gap-8 justify-center text-center md:text-left px-2">
        <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
        <p className="text-[#8D8D8D] text-[1rem]">{description}</p>
        <Link
          href="/services/detail"
          className="text-[#69cf3d] text-sm font-semibold hover:underline"
        >
          Read More
        </Link>
      </div>
      {/* Image First on Mobile */}
      <div className="w-full h-[200px] md:w-[275px] md:h-[295px] relative rounded-xl overflow-hidden shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}
