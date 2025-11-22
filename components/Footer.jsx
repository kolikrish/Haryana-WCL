import React from "react";
import { FaYoutube } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="font-sans">
      {/* MAIN FOOTER CONTENT */}
      <footer className="bg-[#300834] text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Description Section */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="mb-4">
              <img 
                src="/assets/logo.png" 
                alt="IWKL Logo" 
                className="h-16 w-auto mx-auto mb-4"
              />
            </div>
            <p className="text-gray-300 max-w-4xl text-sm leading-relaxed">
             IWKL empowers women through kabaddi, inspired by “Beti Bachao, Beti Padhao, Betiyon Ko Maidan Mein Khilao.” Backed by Spacor Sports, it builds a strong platform for rising female athletes.
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            
            {/* Latest Updates */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
                Latest Updates
              </h3>
              <ul className="space-y-3 mt-4">
                {['Videos', 'Photos', 'News', 'Features'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-white text-sm font-light hover:text-yellow-400 transition-colors duration-300 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
                About Us
              </h3>
              <ul className="space-y-3 mt-4">
                {['About IWK', 'Stats', 'Matches', 'Team', 'Franchisee'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-white text-sm font-light hover:text-yellow-400 transition-colors duration-300 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teams */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
                Teams
              </h3>
              <div className="space-y-3 mt-4">
                {[
                  'Rajasthani Rajwade', 'Mumbai Strikers', 
                  'Delhi Warriors', 'Gujrat Gems', 
                  'Punjab Wings', 'Kolkata Rangers',
                  'Haryanvi Fighters', 'Lucknow Legends'
                ].map((team) => (
                  <div key={team}>
                    <a 
                      href="#" 
                      className="text-white text-sm font-light hover:text-yellow-400 transition-colors duration-300 block"
                    >
                      {team}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
                Contact Us
              </h3>
              <div className="mt-4">
                <p className="text-white text-sm font-light leading-6">
                  Unit No.: 19/20/21, 18th Floor,<br />
                  Hope Tower, Galaxy Blue Sapphire,<br />
                  Greater Noida West,<br />
                  Uttar Pradesh, 201009, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* BOTTOM FOOTER */}
      <footer className="w-full bg-[#1a0520] py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright Text */}
            <p className="text-[#d8badc] text-xs sm:text-sm tracking-wide text-center md:text-left order-2 md:order-1">
              © COPYRIGHT–2025. ALL RIGHTS RESERVED. | DEVELOPED BY VARNIX MEDIA PVT. LTD.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 order-1 md:order-2">
              {[
                { icon: CiFacebook, href: "https://www.facebook.com/iwklofficial", label: "Facebook" },
                { icon: FaXTwitter, href: "https://x.com/theiwkl", label: "Twitter" },
                { icon: IoLogoInstagram, href: "https://www.instagram.com/iwkl.official/", label: "Instagram" },
                { icon: FaYoutube, href: "https://www.youtube.com/@iwkl_official", label: "YouTube" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#292134] hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="text-[#bca8c0] text-lg hover:text-white transition-colors" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}