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
import BannerComponent from "@/components/BannerComponent";

const page = () => {
  return (
    <div>

    <BannerComponent title={"Matches"}/>

    <ComingSoon />

    </div>
    
  );
};

export default page;
