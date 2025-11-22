// "use client";

// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   // Function to close mobile menu
//   const closeMenu = () => {
//     setOpen(false);
//   };

//   return (
//     <nav className="w-full bg-[#300834] text-white shadow-md">
//       {/* Top Scrolling Text */}
//       <div className="bg-[#59065F] py-2 text-sm overflow-x-hidden whitespace-nowrap">
//         <div className="inline-block animate-marquee">
//             Mega Launch event Coming Soon.
//         </div>
//         <style jsx>{`
//           @keyframes marquee {
//             0% { transform: translateX(100%);}
//             100% { transform: translateX(-100%);}
//           }
//           .animate-marquee {
//             display: inline-block;
//             min-width: 100%;
//             animation: marquee 20s linear infinite;
//           }
//         `}</style>
//       </div>

//       {/* Navbar */}
//       <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" aria-label="Home">
//           <Image src="/assets/logo.png" alt="Logo" width={68} height={68} />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-2xl font-[koba] tracking-wide">
//           <li>
//             <Link href="/about-iwkl" className="hover:text-gray-300 cursor-pointer">
//               ABOUT US
//             </Link>
//           </li>
//           <li>
//             <Link href="/teams" className="hover:text-gray-300 cursor-pointer">
//               TEAMS
//             </Link>
//           </li>
//           <li>
//             <Link href="/matches" className="hover:text-gray-300 cursor-pointer">
//               MATCHES
//             </Link>
//           </li>
//           <li>
//             <Link href="/gallery" className="hover:text-gray-300 cursor-pointer">
//               GALLERY
//             </Link>
//           </li>
//           <li>
//             <Link href="/iwkl-tv" className="hover:text-gray-300 cursor-pointer">
//               IWKL TV
//             </Link>
//           </li>
//           <li>
//             <Link href="/stats" className="hover:text-gray-300 cursor-pointer">
//               STATS
//             </Link>
//           </li>
//           <li>
//             <Link href="/news" className="hover:text-gray-300 cursor-pointer">
//               NEWS
//             </Link>
//           </li>
//           <li>
//             <Link href="/franchise" className="hover:text-gray-300 cursor-pointer">
//               FRANCHISE
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden cursor-pointer"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden absolute w-full min-h-screen z-50 bg-[#300834] px-6 font-[koba] py-4 space-y-6 text-center text-2xl tracking-wide">
//           <Link href="/about-iwkl" className="block hover:text-gray-300" onClick={closeMenu}>ABOUT US</Link>
//           <Link href="/team" className="block hover:text-gray-300" onClick={closeMenu}>TEAM</Link>
//           <Link href="/matches" className="block hover:text-gray-300" onClick={closeMenu}>MATCHES</Link>
//           <Link href="/gallery" className="block hover:text-gray-300" onClick={closeMenu}>GALLERY</Link>
//           <Link href="/iwkl-tv" className="block hover:text-gray-300" onClick={closeMenu}>IWKL TV</Link>
//           <Link href="/stats" className="block hover:text-gray-300" onClick={closeMenu}>STATS</Link>
//           <Link href="/news" className="block hover:text-gray-300" onClick={closeMenu}>NEWS</Link>
//           <Link href="/franchise" className="block hover:text-gray-300" onClick={closeMenu}>FRANCHISE</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to close mobile menu
  const closeMenu = () => {
    setOpen(false);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full bg-[#300834] text-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-0'}`}>
      {/* Top Scrolling Text */}
      <div className="bg-[#59065F] py-2 text-sm overflow-x-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
            Mega Launch event Coming Soon.
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            min-width: 100%;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>

      {/* Navbar */}
      <div className={`max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex-shrink-0">
          <Image 
            src="/assets/logo.png" 
            alt="Logo" 
            width={isScrolled ? 50 : 68} 
            height={isScrolled ? 50 : 68}
            className="transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-xl lg:text-2xl font-[koba] tracking-wide">
          <li>
            <Link href="/about-iwkl" className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/teams" className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              TEAMS
            </Link>
          </li>
          <li>
            <Link href="/matches" className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              MATCHES
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              GALLERY
            </Link>
          </li>
          <li>
            <Link href="/iwkl-tv" className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              IWKL TV
            </Link>
          </li>
          <li>
            <Link href="/stats" className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              STATS
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              NEWS
            </Link>
          </li>
          <li>
            <Link href="/franchise" className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              FRANCHISE
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden cursor-pointer z-60"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#300834] z-40 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-[koba] tracking-wide">
          <Link 
            href="/about-iwkl" 
            className="hover:text-yellow-400 transition-colors duration-200 w-full text-center py-3"
            onClick={closeMenu}
          >
            ABOUT US
          </Link>
          <Link 
            href="/teams" 
            className="hover:text-yellow-400 transition-colors duration-200 w-full text-center py-3"
            onClick={closeMenu}
          >
            TEAMS
          </Link>
          <Link 
            href="/matches" 
            className="hover:text-yellow-400 transition-colors duration-200 w-full text-center py-3"
            onClick={closeMenu}
          >
            MATCHES
          </Link>
          <Link 
            href="/gallery" 
            className="hover:text-yellow-400 transition-colors duration-200 w-full text-center py-3"
            onClick={closeMenu}
          >
            GALLERY
          </Link>
          <Link 
            href="/iwkl-tv" 
            className="hover:text-yellow-400 transition-colors duration-200 w-full text-center py-3"
            onClick={closeMenu}
          >
            IWKL TV
          </Link>
          <Link 
            href="/stats" 
            className="hover:text-yellow-400 transition-colors duration-200 w-full text-center py-3"
            onClick={closeMenu}
          >
            STATS
          </Link>
          <Link 
            href="/news" 
            className="hover:text-yellow-400 transition-colors duration-200 w-full text-center py-3"
            onClick={closeMenu}
          >
            NEWS
          </Link>
          <Link 
            href="/franchise" 
            className="hover:text-yellow-400 transition-colors duration-200 w-full text-center py-3"
            onClick={closeMenu}
          >
            FRANCHISE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;