"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function ServiceContent() {
  return (
    <main className="md:col-span-2 space-y-6">
      <Image
        src="/assets/images/team-recycle.jpg" // Replace with your own image path
        alt="Team Recycling"
        width={800}
        height={300}
        className="rounded-xl w-full h-[400px] object-cover"
      />

      <div className="bg-[#f8eee6] p-6 rounded-xl shadow-sm">
        <h2 className="text-5xl font-[600] text-gray-900 mb-7">
          Residential Waste Collection
        </h2>
        <p className="text-gray-500 mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>

        <h3 className="text-3xl font-[600] text-gray-900 mb-7">Overview</h3>
        <p className="text-gray-500 mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>

        <h3 className="text-3xl font-[600] text-gray-900 mb-7">
          What’s Included?
        </h3>
        <p className="text-gray-500 mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>

        <ul className="space-y-2 text-gray-500">
          {[
            "sit voluptatem accusantium",
            "Ut enim ad minim veniam,",
            "Nemo enim ipsam voluptatem quia",
            "sunt in culpa qui officia",
            "Nemo enim ipsam voluptatem quia",
          ].map((item, i) => (
            <li key={i} className="flex items-center">
              <FaCheck className="text-[#69cf3d] mr-2 text-sm" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
