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
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex]}
          alt="Cosmo Communication"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>
      <div className="flex flex-col justify-center items-center h-full text-center text-white absolute inset-0 p-6 backdrop-blur-[2px]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
          <span className="text-orange-500">COSMO</span>{' '}
          <span className="text-orange-500">COMMUNICATION</span>
        </h1>
        <div className="grid grid-cols-2 gap-6 text-gray-200">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black italic text-center" style={{ WebkitTextStroke: '1px black', textStroke: '1px black' }}>
            Designers
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black italic text-center" style={{ WebkitTextStroke: '1px black', textStroke: '1px black' }}>
            Offset Printers
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black italic text-center" style={{ WebkitTextStroke: '1px black', textStroke: '1px black' }}>
            Publishers
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black italic text-center" style={{ WebkitTextStroke: '1px black', textStroke: '1px black' }}>
            Packagers
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeAreCosmo;
