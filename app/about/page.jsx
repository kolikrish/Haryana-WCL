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
import AboutSection from "@/components/AboutSection";
import BannerComponent from "@/components/BannerComponent";

const Hero = () => {
  return (
    <div>

      <BannerComponent title={"About Us"}/>

    {/* <ComingSoon title={"About Page Comming Soon."}/> */}

    <AboutSection />

    </div>
  );
};

export default Hero;
