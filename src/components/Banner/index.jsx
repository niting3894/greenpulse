'use client';

import Image from 'next/image';

export default function Banner({ title, backgroundImage }) {
  return (
    <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`${title} Banner`}
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F08] to-transparent"></div>
      </div>

      {/* Overlay Title */}
      <div className="relative z-10 flex items-end h-full px-6 md:px-24 pb-16 md:pb-24">
        <h1 className="text-white text-4xl md:text-8xl font-[600]">{title}</h1>
      </div>
    </section>
  );
}
