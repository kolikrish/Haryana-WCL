// "use client";
// import React from 'react'

// const ComingSoon = ({ title }) => {
//   return (
//     <section className="flex items-center justify-center min-h-[30vh]">
//       <div className="bg-white/95 rounded-xl px-8 py-10 max-w-lg w-full flex flex-col items-center justify-center">
//         <h2 className="text-3xl font-bold text-center text-gray-700 mb-4 tracking-tight drop-shadow-sm">
//           {title || "🏆 Coming Soon"}
//         </h2>
//         <div className="flex items-center gap-2 mb-2">
//           <p className="text-sm md:text-lg text-gray-700 font-medium text-center">
//             This page is currently in development as we prepare something exciting for sports fans.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ComingSoon


"use client";
import React from 'react';

const ComingSoon = ({ title }) => {
  return (
    <section className="flex items-center justify-center min-h-[60vh] md:min-h-[70vh] px-4 pb-8">
      <div className="rounded-2xl md:rounded-3xl p-8 md:p-12 max-w-2xl w-full">
        {/* Animated Icon */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl md:text-3xl text-white">🏆</span>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white animate-bounce"></div>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center text-transparent text-white mb-6 tracking-tight drop-shadow-sm">
          {title || "COMING SOON"}
        </h2>

        {/* Subtitle */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
            Something extraordinary is in the works for sports enthusiasts!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200/80 rounded-full h-2 md:h-3 mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-600 h-full rounded-full w-3/4 animate-pulse shadow-md"></div>
        </div>

        {/* Status Message */}
        <div className="text-center">
          <p className="text-sm md:text-base text-white font-light italic">
            We're crafting an amazing experience for sports fans worldwide
          </p>
          <div className="flex justify-center items-center space-x-2 mt-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            <span className="text-xs text-gray-400 font-medium">Loading...</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;