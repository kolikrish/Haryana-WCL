"use client"

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const BannerComponent = ({title}) => {
  return (
    <div>
            <section className="relative w-full overflow-hidden h-[25vh] lg:h-[60vh]">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide className="relative w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src="/assets/PagesBanner.png"
                alt="Banner 1"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              {/* Light dark overlay */}
              <div className="absolute inset-0 bg-black/20 z-5 pointer-events-none" />
              {/* Headline overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h1 className="text-4xl md:text-6xl font-[Koba] text-white drop-shadow-lg bg-opacity-30 px-8 py-3 rounded">
                  {title ||"Matches"}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    </div>
  )
}

export default BannerComponent