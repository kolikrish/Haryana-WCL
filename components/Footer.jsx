import React from "react";
import { FaYoutube } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
    <footer className="bg-[#300834] text-white py-12 px-6 font-medium mb-10 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Latest Updates */}
        <div>
          <h3 className="text-xl font-medium mb-4 border-b-2 border-yellow-500 inline-block">
            Latest Updates
          </h3>
          <ul className="space-y-2 mt-3 text-gray-400 text-sm">
            <li className="font-light">Videos</li>
            <li className="font-light">Photos</li>
            <li className="font-light">News</li>
            <li className="font-light">Features</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-xl font-medium mb-4 border-b-2 border-yellow-500 inline-block">
            About Us
          </h3>
          <ul className="space-y-2 mt-3 text-gray-400 text-sm">
            <li className="font-light">About IWK</li>
            <li className="font-light">Stats</li>
            <li className="font-light">Matches</li>
            <li className="font-light">Team</li>
            <li className="font-light">Franchisee</li>
          </ul>
        </div>

        {/* Teams */}
        <div>
          <h3 className="text-xl font-medium mb-4 border-b-2 border-yellow-500 inline-block">
            Teams
          </h3>
          <ul className="space-y-2 mt-3 text-gray-400 text-sm">
            <li className="font-light">Rajasthani Rajwade</li>
            <li className="font-light">Mumbai Strikers</li>
            <li className="font-light">Delhi Warriors</li>
            <li className="font-light">Gujrat Gems</li>
            <li className="font-light">Punjab Wings</li>
            <li className="font-light">Kolkata Rangers</li>
            <li className="font-light">Haryanvi Fighters</li>
            <li className="font-light">Lucknow Legends</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-medium mb-4 border-b-2 border-yellow-500 inline-block">
            Contact Us
          </h3>
          <ul className="space-y-2 mt-3 text-gray-400 text-sm">
            <li className="font-light">
              Unit No.: 19/20/21, 18th Floor,
              Hope Tower, Galaxy Blue Sapphire,
              Greater Noida West,
              Uttar Pradesh, 201009, India
            </li>
          </ul>
        </div>
      </div>
    </footer>


    <footer className="w-full bg-[#1a0520] py-8 fixed bottom-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Left Side Text */}
        <p className="text-[#d8badc] text-sm tracking-widest text-center md:text-left">
          © COPYRIGHT–2024. ALL RIGHTS RESERVED. | MANAGED BY SPACOR SPORTS PVT LTD
        </p>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/iwklofficial" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#292134] hover:bg-[#533b56] transition" aria-label="Facebook">
            <CiFacebook className="text-[#bca8c0] text-xl hover:text-white transition-colors" />
          </a>
          <a href="https://x.com/theiwkl" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#292134] hover:bg-[#533b56] transition" aria-label="Twitter">
            <FaXTwitter className="text-[#bca8c0] text-xl hover:text-white transition-colors" />
          </a>
          <a href="https://www.instagram.com/iwkl.official/" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#292134] hover:bg-[#533b56] transition" aria-label="Instagram">
            <IoLogoInstagram className="text-[#bca8c0] text-xl hover:text-white transition-colors" />
          </a>
          <a href="https://www.youtube.com/@iwkl_official" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#292134] hover:bg-[#533b56] transition" aria-label="YouTube">
            <FaYoutube className="text-[#bca8c0] text-xl hover:text-white transition-colors" />
          </a>
        </div>

      </div>
    </footer>


    </div>
  );
}
