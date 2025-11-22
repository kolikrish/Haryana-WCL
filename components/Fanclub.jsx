// "use client";

// import React from 'react';
// import Image from "next/image";

// const FanClub = () => {
//   return (
//     <section className="relative w-full min-h-[35vh] md:min-h-[85vh] flex flex-col bg-[#2F0834]">
//       {/* Headline - Responsive spacing and font size */}
//       <div className="w-full text-center mt-14 md:mt-14 md:mb-6 z-10 px-4 mb-8">
//         <h1 className="text-4xl md:text-6xl font-[Koba] md:font-medium text-white drop-shadow-lg">
//           The Fan Club
//         </h1>
//       </div>
//       {/* Background Image - Responsive Height */}
//       <div className="relative w-full -mt-4 md:-mt-0 flex-1 min-h-[160px] sm:min-h-[250px] md:min-h-0">
//         <Image
//           src="/assets/FanClubBanner.jpg"
//           alt="Associated Countries"
//           fill
//           className="object-cover"
//           priority
//           sizes="100vw"
//         />
//       </div>
//     </section>
//   );
// };

// export default FanClub;



"use client";

import React, { useState } from 'react';
import Image from "next/image";

const FanClub = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    favoriteTeam: '',
    city: '',
    playingExperience: '',
    role: 'fan'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Close form popup and open thank you popup
    setIsFormOpen(false);
    setIsThankYouOpen(true);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      age: '',
      favoriteTeam: '',
      city: '',
      playingExperience: '',
      role: 'fan'
    });
  };

  const openFormPopup = () => {
    setIsFormOpen(true);
  };

  const closeFormPopup = () => {
    setIsFormOpen(false);
  };

  const closeThankYouPopup = () => {
    setIsThankYouOpen(false);
  };

  // Women's Kabaddi League teams
  const teams = [
    'Select your favorite team',
    'Team 1',
    'Team 2',
    'Team 3',
  ];

  // Experience levels
  const experienceLevels = [
    'Select your experience',
    'Never played',
    'Beginner (school level)',
    'Intermediate (college level)',
    'Advanced (district level)',
    'Professional (state/national level)'
  ];

  return (
    <>
      <section 
        className="relative w-full min-h-[35vh] md:min-h-[85vh] flex flex-col bg-[#2F0834] cursor-pointer"
        onClick={openFormPopup}
      >
        {/* Headline - Responsive spacing and font size */}
        <div className="w-full text-center mt-14 md:mt-14 md:mb-6 z-10 px-4 mb-8">
          <h1 className="text-4xl md:text-6xl font-[Koba] md:font-medium text-white drop-shadow-lg">
            The Fan Club
          </h1>
          <p className="text-white text-lg mt-2 opacity-90">Click to join our Women's Kabaddi Fan Club!</p>
        </div>
        {/* Background Image - Responsive Height */}
        <div className="relative w-full -mt-4 md:-mt-0 flex-1 min-h-[160px] sm:min-h-[250px] md:min-h-0">
          <Image
            src="/assets/FanClubBanner.jpg"
            alt="Women's Kabaddi League Fan Club"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Form Popup */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Join IWKL Fan Club</h2>
                <button
                  onClick={closeFormPopup}
                  className="text-gray-500 cursor-pointer hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="10"
                    max="100"
                    className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your age"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your city"
                  />
                </div>

                <div>
                  <label htmlFor="favoriteTeam" className="block text-sm font-medium text-gray-700 mb-1">
                    Favorite Team *
                  </label>
                  <select
                    id="favoriteTeam"
                    name="favoriteTeam"
                    value={formData.favoriteTeam}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {teams.map((team, index) => (
                      <option key={index} value={team === 'Select your favorite team' ? '' : team}>
                        {team}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="playingExperience" className="block text-sm font-medium text-gray-700 mb-1">
                    Kabaddi Playing Experience *
                  </label>
                  <select
                    id="playingExperience"
                    name="playingExperience"
                    value={formData.playingExperience}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {experienceLevels.map((level, index) => (
                      <option key={index} value={level === 'Select your experience' ? '' : level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I want to join as: *
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="role"
                        value="fan"
                        checked={formData.role === 'fan'}
                        onChange={handleInputChange}
                        className="text-purple-600 text-black focus:ring-purple-500"
                      />
                      <span className="ml-2 text-black">Fan/Supporter</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="role"
                        value="player"
                        checked={formData.role === 'player'}
                        onChange={handleInputChange}
                        className="text-purple-600 text-black focus:ring-purple-500"
                      />
                      <span className="ml-2 text-black">Aspiring Player</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-[#2F0834] text-white py-3 px-4 rounded-md hover:bg-[#2F0834]/97 transition duration-200 font-semibold"
                >
                  Join Fan Club
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {isThankYouOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to the Club!</h2>
              <p className="text-gray-600 mb-4">
                Thank you for joining the Women's Kabaddi League Fan Club!
              </p>
              <p className="text-gray-600 mb-6 text-sm">
                You'll receive updates about matches, player interactions, exclusive content, and fan events.
              </p>
              
              <button
                onClick={closeThankYouPopup}
                className="cursor-pointer bg-[#2F0834] text-white py-2 px-6 rounded-md hover:bg-[#2F0834]/97 transition duration-200 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FanClub;