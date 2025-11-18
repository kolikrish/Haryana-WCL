"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/" aria-label="Home">
          <Image src="/assets/logo.png" alt="Logo" width={68} height={68} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <li>
            <Link href="/about" className="hover:text-gray-300 cursor-pointer">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:text-gray-300 cursor-pointer">
              TEAM
            </Link>
          </li>
          <li>
            <Link href="/matches" className="hover:text-gray-300 cursor-pointer">
              MATCHES
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-gray-300 cursor-pointer">
              GALLERY
            </Link>
          </li>
          <li>
            <Link href="/iwkl" className="hover:text-gray-300 cursor-pointer">
              IWKLTV
            </Link>
          </li>
          <li>
            <Link href="/stats" className="hover:text-gray-300 cursor-pointer">
              STATS
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-gray-300 cursor-pointer">
              NEWS
            </Link>
          </li>
          <li>
            <Link href="/franchise" className="hover:text-gray-300 cursor-pointer">
              FRANCHISE
            </Link>
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
          <Link href="/about" className="block hover:text-gray-300">ABOUT US</Link>
          <Link href="/team" className="block hover:text-gray-300">TEAM</Link>
          <Link href="/matches" className="block hover:text-gray-300">MATCHES</Link>
          <Link href="/gallery" className="block hover:text-gray-300">GALLERY</Link>
          <Link href="/iwkl" className="block hover:text-gray-300">IWKLTV</Link>
          <Link href="/stats" className="block hover:text-gray-300">STATS</Link>
          <Link href="/news" className="block hover:text-gray-300">NEWS</Link>
          <Link href="/franchise" className="block hover:text-gray-300">FRANCHISE</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
