"use client";

import FadeUpSection from "@/components/Section/FadeUpSection";
import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const team = [
  {
    name: "Daniel Gallego",
    role: "Staff",
    image: "/assets/images/team1.jpg",
  },
  {
    name: "Howard Ong",
    role: "Staff",
    image: "/assets/images/team2.jpg",
  },
  {
    name: "Yanis Petros",
    role: "Staff",
    image: "/assets/images/team3.jpg",
  },
  {
    name: "Henrietta Mitchell",
    role: "Staff",
    image: "/assets/images/team4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f9f8f3] py-20 pt-0 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeUpSection>
          <div className="text-center mb-14">
            <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center">
              Our Team
            </h6>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-[600] text-gray-900 leading-tight max-w-3xl mx-auto px-4">
              Meet the Experts Behind Our Mission
            </h2>
          </div>
        </FadeUpSection>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <FadeUpSection>
              <div key={idx} className="flex flex-col">
                <div className="relative w-full h-[400px] sm:h-[420px] rounded-[1.5rem] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-[1.5rem]"
                  />

                  {/* Social Icons */}
                  <div className="absolute bottom-4 right-5 flex gap-3">
                    <a
                      href="#"
                      className="text-white hover:text-[#69cf3d] text-lg"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-[#69cf3d] text-lg"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-[#69cf3d] text-lg"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <h3 className="mt-4 mb-2 text-3xl font-[600] text-gray-900">
                  {member.name}
                </h3>
                <p className="text-xs uppercase text-gray-900 font-semibold">
                  {member.role}
                </p>
              </div>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
