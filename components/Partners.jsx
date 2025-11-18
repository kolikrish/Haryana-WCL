import React from 'react'

// NOTE: next/image does not support external URLs unless configured in next.config.js.
// For static/demo purposes, let's use placeholder images or local static assets.
// Example: Replace these paths with the ACTUAL static assets you have in /public/assets

const partnersData = [
  {
    name: "Partner One",
    logo: "/assets/partner.png",
    alt: "Partner One Logo",
  },
  // {
  //   name: "Partner Two",
  //   logo: "/assets/partners.webp",
  //   alt: "Partner Two Logo",
  // }
];

import Image from "next/image";

const Partners = () => {
  return (
    <section className="relative flex flex-col items-center bg-[#f1f1f1] py-8 pb-20">
      {/* Headline */}
      <div className="w-full text-center mt-8 md:mt-10 md:mb-8 z-10 px-4 mb-14">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-[Koba] md:font-medium text-black drop-shadow-lg">
          Partners & Associates.
        </h1>
      </div>
      {/* Partner Logos */}
      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10 items-center w-full px-2 sm:px-4">
        {partnersData.map((partner, idx) => (
          <div
            key={partner.name}
            className="bg-black rounded-xl shadow-lg p-3 sm:p-6 flex items-center justify-center w-[110px] h-[56px] sm:w-[220px] sm:h-[120px] min-w-[90px] min-h-[48px] transition-all"
          >
            <Image
              src={partner.logo}
              alt={partner.alt}
              width={90}
              height={50}
              className="object-contain sm:w-[230px] sm:h-[150px]"
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