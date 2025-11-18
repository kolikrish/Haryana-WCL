"use client";
import React from 'react'

const ComingSoon = ({ title }) => {
  return (
    <section className="flex items-center justify-center min-h-[25vh]">
      <div className="bg-white/95 rounded-xl px-8 py-10 max-w-lg w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-4 tracking-tight drop-shadow-sm">
          {title || "This section is under construction."}
        </h2>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-lg text-gray-700 font-medium text-center">
          Stay tuned for something amazing!</p>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon