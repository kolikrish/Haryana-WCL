"use client";

import React from 'react';
import Image from "next/image";

const Journey = () => {
  return (
    <section className="relative w-full min-h-[35vh] md:min-h-[85vh] flex flex-col bg-white">
      {/* Headline - Responsive spacing and font size */}
      <div className="w-full text-center mt-14 md:mt-14 md:mb-6 z-10 px-4 mb-8">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-[Koba] md:font-medium text-black drop-shadow-lg">
          Countries Associated
        </h1>
      </div>
      {/* Background Image - Responsive Height */}
      <div className="relative w-full flex-1 min-h-[160px] sm:min-h-[250px] md:min-h-0">
        <Image
          src="/assets/Associated.jpg"
          alt="Associated Countries"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Optional: Overlay for readability on mobile */}
        <div className="absolute inset-0 bg-black/10 md:bg-transparent" />
      </div>
    </section>
  );
};

export default Journey;