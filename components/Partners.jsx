import React from 'react'


const partnersData = [
  {
    name: "Partner One",
    logo: "/assets/partner.png",
    alt: "Partner One Logo",
  },
];

import Image from "next/image";

const Partners = () => {
  return (
    <section className="relative flex flex-col items-center bg-[#2F0834f1f1] py-8 pb-20">
      {/* Headline */}
      <div className="w-full text-center mt-8 md:mt-10 md:mb-8 z-10 px-4 mb-4">
        <h1 className="text-4xl md:text-6xl font-[Koba] md:font-medium text-white drop-shadow-lg">
          League Organiser
        </h1>
      </div>
      {/* Partner Logos */}
      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10 items-center w-full px-2 sm:px-4">
        {partnersData.map((partner, idx) => (
          <div
            key={partner.name}
            className="rounded-xl sm:p-6 flex items-center justify-center w-[220px] h-[110px] transition-all"
          >
            <Image
              src={partner.logo}
              alt={partner.alt}
              width={100}
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