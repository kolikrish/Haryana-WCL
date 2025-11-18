"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#59065F] text-white shadow-md">
      {/* Top Scrolling Text */}
      <div className="bg-[#300834] py-2 text-sm overflow-x-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
            Mega Launch event Coming Soon.
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(100%);}
            100% { transform: translateX(-100%);}
          }
          .animate-marquee {
            display: inline-block;
            min-width: 100%;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center">
        {/* Logo */}
        <a href="/" aria-label="Home">
          <Image src="/assets/logo.png" alt="Logo" width={68} height={68} />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <li>
            <a href="/about" className="hover:text-gray-300 cursor-pointer">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="/team" className="hover:text-gray-300 cursor-pointer">
              TEAM
            </a>
          </li>
          <li>
            <a href="/matches" className="hover:text-gray-300 cursor-pointer">
              MATCHES
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-gray-300 cursor-pointer">
              GALLERY
            </a>
          </li>
          <li>
            <a href="/iwkl" className="hover:text-gray-300 cursor-pointer">
              IWKLTV
            </a>
          </li>
          <li>
            <a href="/stats" className="hover:text-gray-300 cursor-pointer">
              STATS
            </a>
          </li>
          <li>
            <a href="/news" className="hover:text-gray-300 cursor-pointer">
              NEWS
            </a>
          </li>
          <li>
            <a href="/franchise" className="hover:text-gray-300 cursor-pointer">
              FRANCHISE
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#510043] px-6 py-4 space-y-4 text-sm font-medium tracking-wide">
          <a href="/about" className="block hover:text-gray-300">ABOUT US</a>
          <a href="/team" className="block hover:text-gray-300">TEAM</a>
          <a href="/matches" className="block hover:text-gray-300">MATCHES</a>
          <a href="/gallery" className="block hover:text-gray-300">GALLERY</a>
          <a href="/iwkl" className="block hover:text-gray-300">IWKLTV</a>
          <a href="/stats" className="block hover:text-gray-300">STATS</a>
          <a href="/news" className="block hover:text-gray-300">NEWS</a>
          <a href="/franchise" className="block hover:text-gray-300">FRANCHISE</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
