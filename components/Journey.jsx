"use client";

import React from 'react';
import Image from "next/image";

const Journey = () => {
  return (
    <section className="relative mt-10 w-full min-h-[35vh] md:min-h-[85vh] flex flex-col bg-[#2F0834]">
      {/* Headline - Responsive spacing and font size */}
      <div className="w-full text-center mt-8 md:mt-14 md:mb-6 z-10 px-4 mb-4">
        <h1 className="text-4xl md:text-6xl font-[Koba] md:font-medium text-white drop-shadow-lg">
            The Journey Begins
        </h1>
      </div>
      {/* Background Image - Responsive Height */}
      <div className="relative w-full flex-1 min-h-[80px] sm:min-h-[160px] md:min-h-0">
        <Image
          src="/assets/Journey.jpg"
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