import React, { useState } from 'react';

const About = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image - Left Side */}
          <div className="order-1">
            {!imageError ? (
              <img
                src="./All the images/Learn more image.jpg"
                alt="Premium supplement bottles with natural botanical background"
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-700 font-bold text-xl">N</span>
                  </div>
                  <p className="text-emerald-600 font-medium">Nutriota Products</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Content - Right Side */}
          <div className="order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Nutriota
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nutriota crafts high-quality vitamins, minerals, and herbal blends designed for daily wellness. 
              We focus on clean ingredients, transparent labels, and products that fit real-life routines.
            </p>
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;