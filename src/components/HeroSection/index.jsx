"use client";
import Image from "next/image";
import Link from "next/link";
import FadeUpSection from "../Section/FadeUpSection";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Image
          src="/assets/images/hero-bg.jpg"
          alt="Recycling"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full w-full bg-gradient-to-t from-[#0F1F08]/90 to-transparent z-10 flex items-end px-4 sm:px-6 md:px-20 pb-20 md:pb-16">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 text-center md:text-left">
          {/* Left Text Block */}
          <FadeUpSection>
            <div className="text-white w-full md:max-w-6xl">
              <h2 className="text-xs sm:text-base font-semibold uppercase mb-5 tracking-wider">
                Welcome to Green Pulse Solution The Heart of Sustainability,
              </h2>
              <h1 className="text-3xl sm:text-5xl md:text-[4rem] font-bold leading-[1.40] md:leading-[1.15] mb-0">
                Empowering businesses with end-to-end
                <br className="hidden md:block" />
                waste and compliance solutions.
              </h1>
            </div>
          </FadeUpSection>

          {/* Right CTA Block */}
          {/* <FadeUpSection>
            <div className=" -full md:max-w-[15rem] text-white md:pb-2">
              <p className="mb-6 md:mb-4 text-base leading-relaxed px-5 sm:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec
              </p>
              <Link
                href="#"
                className="inline-block bg-[#69cf3d] hover:bg-[#2A4E1A] hover:text-white text-black font-semibold py-4 px-8 text-sm rounded shadow transition duration-200"
              >
                Get Started
              </Link>
            </div>
          </FadeUpSection> */}
        </div>
      </div>
    </section>
  );
}
