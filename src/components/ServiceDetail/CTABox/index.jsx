"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTABox() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md h-60">
      <Image
        src="/assets/images/cta-bg.jpg" // Replace with correct path
        alt="CTA"
        fill
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-10 py-5 text-center">
        <h4 className="text-white text-3xl font-[600]">
          Ready to Optimize Your Waste Management? Get In Touch With Us
        </h4>
        <button className="mt-5 bg-[#69cf3d] text-black font-semibold text-sm px-8 py-5 rounded-md hover:bg-[#2A4E1A] hover:text-white transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
