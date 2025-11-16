"use client";
import React from 'react'

const ComingSoon = ({ title }) => {
  return (
    <section className="flex items-center min-h-[25vh] pl-6 md:pl-24 justify-start">
      <div className="bg-white/95 rounded-xl px-8 py-10 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-left text-gray-700 mb-4 tracking-tight drop-shadow-sm">
          {title || "Coming soon."}
        </h2>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-lg text-gray-700 font-medium">This section is under construction</p>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon