import FadeUpSection from "../FadeUpSection";

export default function CallToAction() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 bg-[#f9f7f2]">
      <FadeUpSection>
        <div
          className="relative bg-fixed bg-center bg-cover bg-no-repeat rounded-2xl overflow-hidden h-[500px] sm:h-[550px] md:h-[600px] max-w-7xl mx-auto flex items-center justify-center text-center"
          style={{ backgroundImage: "url('/assets/images/cta-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

          <div className="relative z-20 text-white px-4 sm:px-6 md:px-10 max-w-6xl">
            <h6 className="text-xs sm:text-lg font-semibold uppercase mb-6 sm:mb-8">
              Get Started
            </h6>
            <h2 className="text-2xl sm:text-4xl md:text-8xl font-bold leading-snug mb-6">
              Take the Next Step Toward <br className="hidden sm:block" /> a
              Cleaner Future
            </h2>
            <p className="text-sm sm:text-base text-[#E9E9E9] mb-8 sm:mb-10 px-2 sm:px-6 md:px-48">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-[#69cf3d] text-black font-semibold text-sm px-8 py-3 sm:py-4 rounded-lg hover:bg-[#2A4E1A] hover:text-white transition">
              Get Started
            </button>
          </div>
        </div>
      </FadeUpSection>
    </section>
  );
}
