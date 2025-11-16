import React from 'react'

// NOTE: next/image does not support external URLs unless configured in next.config.js.
// For static/demo purposes, let's use placeholder images or local static assets.

// Example: Replace these paths with the ACTUAL static assets you have in /public/assets
const partnersData = [
  {
    name: "Partner One",
    logo: "/assets/partners.webp",
    alt: "Partner One Logo",
  },
  {
    name: "Partner Two",
    logo: "/assets/partners.webp",
    alt: "Partner Two Logo",
  }
];

import Image from "next/image";

const Partners = () => {
  return (
    <section className="relative flex flex-col items-center bg-white py-8 mb-20">
      {/* Headline */}
      <div className="w-full text-center mt-8 md:mt-10 md:mb-8 z-10 px-4 mb-14">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold md:font-medium text-black drop-shadow-lg">
        Partners & Associates.
        </h1>
      </div>
      {/* Partner Logos */}
      <div className="flex flex-row flex-wrap justify-center gap-12 items-center w-full px-4">
        {partnersData.map((partner, idx) => (
          <div
            key={partner.name}
            className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center w-[260px] h-[180px] min-w-[220px] min-h-[140px]"
          >
            <Image
              src={partner.logo}
              alt={partner.alt}
              width={220}
              height={120}
              className="object-contain"
              priority={idx === 0}
              unoptimized={partner.logo.startsWith("http")}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners