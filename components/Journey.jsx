"use client";

import React from 'react';
import Image from "next/image";

const Journey = () => {
  return (
    <section className="relative w-full flex flex-col bg-white min-h-[50vh] md:min-h-[80vh]">
      {/* Headline - Responsive spacing and font size */}
      <div className="w-full text-center mt-8 md:mt-10 mb-4 md:mb-8 z-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold md:font-medium text-black drop-shadow-lg">
          The Journey Begins.
        </h1>
      </div>
      {/* Background Image - Responsive Height */}
      <div className="relative w-full flex-1 min-h-[200px] sm:min-h-[300px] md:min-h-0">
        <Image
          src="/assets/Journey.jpg"
          alt="Journey"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Optional: Overlay to improve text readability on mobile */}
        <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>
      </div>
    </section>
  )
}

export default Journey