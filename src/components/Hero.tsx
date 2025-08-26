import React, { useState } from 'react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Fixed Position (Parallax) */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <img
            src="./All the images/hero section background.jpg"
            alt="Natural supplements and vitamins background"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          // Fallback gradient background
          <div className="w-full h-full bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800"></div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content - Positioned lower with more top padding */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Daily Wellness, Simplified.
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Nutriota provides clean, transparent supplements designed for modern lifestyles.
        </p>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;