import React from 'react'
import Image from "next/image"

const Fanclub = () => {
  return (
    <section className="relative flex flex-col items-center bg-[#f1f1f1] py-6 md:py-12">
      {/* Headline - Responsive font sizes and spacing */}
      <div className="w-full text-center mt-8 md:mt-10 mb-4 md:mb-8 z-10 px-4">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-[koba] md:font-medium text-black drop-shadow-lg">
          The Fan Club
        </h1>
      </div>
      {/* Responsive image container */}
      <div className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl h-[180px] sm:h-[250px] md:h-[320px] lg:h-[55vh] min-h-[120px] rounded-xl overflow-hidden shadow-md transition-all duration-300">
        <Image
          src="/assets/FanClubBanner.jpg"
          alt="Fan Club"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 95vw, (max-width: 900px) 90vw, 768px"
        />
      </div>
    </section>
  )
}

export default Fanclub