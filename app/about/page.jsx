"use client";

import ComingSoon from "@/components/ComingSoon";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Use public/assets paths if images not found, or fix the path.
const images = [
  "/assets/AboutBanner1.jpg",
  "/assets/AboutBanner2.jpg",
];

export default function Page() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return; // Don't animate if only one image or none
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
    <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
      {/* Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ pointerEvents: i === index ? "auto" : "none" }}
        >
          <Image
            src={img}
            alt={`About slider image ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
    </div>

    <ComingSoon />

    </div>
  );
}   