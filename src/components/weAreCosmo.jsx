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
    <div className="relative h-[500px] w-screen overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt="Cosmo Communication"
        className="w-screen h-full object-cover absolute inset-0"
      />
      <div className="flex flex-col justify-center items-center h-full text-center text-white absolute inset-0">
        <h1 className="text-4xl pointer-events-none text-orange-600 font-extrabold mb-2">
          WE ARE COSMO COMMUNICATION
        </h1>
        <p className="text-blue-800 font-extrabold text-xl pointer-events-none  italic">
          Designers · Photographers · Offset Printers · Publishers · Packagers
        </p>
      </div>
    </div>
  );
};

export default WeAreCosmo;
