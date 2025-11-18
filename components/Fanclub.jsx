"use client";

import React from 'react';
import Image from "next/image";

const FanClub = () => {
  return (
    <section className="relative w-full min-h-[35vh] md:min-h-[85vh] flex flex-col bg-[#f1f1f1]">
      {/* Headline - Responsive spacing and font size */}
      <div className="w-full text-center mt-14 md:mt-14 md:mb-6 z-10 px-4 mb-8">
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-[Koba] md:font-medium text-black drop-shadow-lg">
          The Fan Club
        </h1>
      </div>
      {/* Background Image - Responsive Height */}
      <div className="relative w-full flex-1 min-h-[160px] sm:min-h-[250px] md:min-h-0">
        <Image
          src="/assets/FanClubBanner.jpg"
          alt="Associated Countries"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default FanClub;