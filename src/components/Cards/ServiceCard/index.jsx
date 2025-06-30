import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="flex flex-col md:flex-row bg-[#f9f7f2] rounded-2xl p-6 gap-6 shadow-sm h-full">
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-between text-left">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{title}</h3>
          <ul className="list-disc pl-5 space-y-1 text-[#8D8D8D] text-[1rem]">
            {Array.isArray(description) ? (
              description.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li>{description}</li>
            )}
          </ul>
        </div>
        {/* <Link
          href="/services/detail"
          className="text-[#69cf3d] text-sm font-semibold mt-4 inline-block hover:underline"
        >
          Read More
        </Link> */}
      </div>

      {/* Image */}
      <div className="w-full h-[200px] md:w-[275px] md:h-full relative rounded-xl overflow-hidden shrink-0 mt-6 md:mt-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}


