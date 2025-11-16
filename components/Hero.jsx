"use client"

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Hide Swiper navigation arrows with custom CSS
const swiperButtonStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
`;

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden h-[25vh] lg:h-[65vh]">
      <style>{swiperButtonStyles}</style>
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide className="relative w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src="/assets/HeroBanner1.jpg"
                alt="Banner 1"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="relative w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src="/assets/HeroBanner2.jpg"
                alt="Banner 2"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
