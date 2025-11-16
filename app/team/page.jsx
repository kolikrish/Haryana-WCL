"use client"

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ComingSoon from "@/components/ComingSoon";

const page = () => {
  return (
    <div>
    <section className="relative w-full overflow-hidden h-[25vh] lg:h-[50vh]">
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
                src="/assets/inside-banner1.jpg"
                alt="Banner 1"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              {/* Headline overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg bg-opacity-30 px-8 py-3 rounded">
                  Team
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <ComingSoon />

    </div>
    
  );
};

export default page;
