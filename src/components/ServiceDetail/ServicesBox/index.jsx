"use client";

import FadeUpSection from "@/components/Section/FadeUpSection";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ServicesBox({ services }) {
  return (
    <FadeUpSection>
      <div className="bg-[#f8eee6] rounded-2xl px-6 py-5 shadow-sm">
        <h3 className="text-4xl font-[600] text-neutral-800 mb-4">
          Other Services:
        </h3>
        <ul className="divide-y divide-gray-300">
          {services.map((service, index) => (
            <li
              key={index}
              className="py-3 flex items-center justify-between group"
            >
              <Link
                href="#"
                className=" text-gray-900 group-hover:text-green-700 transition uppercase tracking-wide afacad-font font-[600]"
              >
                {service}
              </Link>
              <FaArrowRight className="text-sm text-neutral-800 group-hover:text-green-700" />
            </li>
          ))}
        </ul>
      </div>
    </FadeUpSection>
  );
}
