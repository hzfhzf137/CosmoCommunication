import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/machine1.jpg';
import image2 from '../assets/images/machine2.jpg';
import image3 from '../assets/images/machine3.jpg';

const WeAreCosmo = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];
  const slideInterval = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [images.length, slideInterval]);

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Fixed Background Image Slideshow */}
      <div className="fixed top-0 left-0 w-screen min-h-screen z-[-1]">
        <img
          src={images[currentImageIndex]}
          alt="Cosmo Communication"
          className="w-screen h-screen object-cover transition-opacity duration-1000 ease-in-out"
        />
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Overlay Content */}
      <div className="flex flex-col justify-center items-center min-h-screen text-center text-white p-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 animate-slide-in text-shadow-lg">
          <span className="text-orange-500">COSMO COMMUNICATION</span>
        </h1>
        <div className="flex gap-2 text-gray-200 animate-fade-in text-shadow-lg">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black italic">
            Designers
          </p>
          <span className="mx-1">•</span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black italic">
            Offset Printers
          </p>
          <span className="mx-1">•</span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black italic">
            Publishers
          </p>
          <span className="mx-1">•</span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black italic">
            Packagers
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeAreCosmo;