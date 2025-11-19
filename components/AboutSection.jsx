// import Image from 'next/image'
// import React from 'react'

// const AboutSection = () => {
//   return (
//     <>
//     <section className="relative w-full min-h-[20vh] md:min-h-[70vh] flex flex-col bg-white">

//     <div className="relative w-full flex-1 min-h-[160px] sm:min-h-[250px] md:min-h-0">
//       <Image
//         src="/assets/AboutBanner1.jpg"
//         alt="Associated Countries"
//         fill
//         className="object-cover"
//         priority
//         sizes="100vw"
//       />
//       {/* Optional: Overlay for readability on mobile */}
//       <div className="absolute inset-0 bg-black/10 md:bg-transparent" />
//     </div>
//   </section>

//     <section className="relative w-full min-h-[20vh] md:min-h-[80vh] flex flex-col bg-white mb-10">
//         {/* Background Image - Responsive Height */}
//         <div className="relative w-full flex-1 min-h-[160px] sm:min-h-[250px] md:min-h-0">
//         <Image
//             src="/assets/AboutBanner2.jpg"
//             alt="Associated Countries"
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"/>
//         {/* Optional: Overlay for readability on mobile */}
//         <div className="absolute inset-0 bg-black/10 md:bg-transparent" />
//         </div>
//     </section>
//     </>
//   )
// }

// export default AboutSection


import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <>
      <section className="relative w-full min-h-[20vh] md:min-h-[70vh] flex flex-col bg-[#2F0834]">
        <div className="relative w-full flex-1 min-h-[160px] sm:min-h-[250px] md:min-h-0">
          <Image
            src="/assets/AboutBanner1.jpg"
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

      {/* Meet The Founders Heading */}
      <div className="w-full pt-8 md:pt-20 pd-3 md:pb-4">
        <h2 className="text-4xl md:text-7xl font-[Koba] font-bold text-center text-white px-4">
          Meet The Founders
        </h2>
      </div>

      <section className="relative w-full min-h-[20vh] md:min-h-[80vh] flex flex-col bg-[#2F0834] mb-10">
        {/* Background Image - Responsive Height */}
        <div className="relative w-full flex-1 min-h-[160px] sm:min-h-[250px] md:min-h-0">
          <Image
            src="/assets/AboutBanner2.jpg"
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
    </>
  )
}

export default AboutSection