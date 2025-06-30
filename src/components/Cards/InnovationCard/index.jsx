import Link from "next/link";
import Image from "next/image";

const InnovationCard = ({ id, image, title, description, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } bg-[#f8eee6] rounded-2xl overflow-hidden mb-10`}
    >
      <div className="w-full md:w-1/2 h-64 md:h-[365px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-2xl md:rounded-none md:rounded-l-2xl"
        />
      </div>

      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-3xl font-[600] text-gray-900 mb-3">
            {title}
          </h3>
          <p className="text-[#8D8D8D] text-[1rem] mb-4">{description}</p>
        </div>
        {id && (
          <Link
            href={`/innovation/${id}`}
            className="text-[#69cf3d] text-sm font-semibold hover:underline"
          >
            Read More
          </Link>
        )}
      </div>
    </div>
  );
};

export default InnovationCard;

