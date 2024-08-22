import React, { useRef, useEffect, useState } from 'react';
import ceoImg from '../assets/images/ceoImg.jpg';

const CeoImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center bg-black justify-center w-full md:w-1/2 h-[80vh] pt-10">
      <img
        ref={imageRef}
        src={ceoImg}
        alt="CEO Mahmood Zafar"
        className={`w-full h-[72%] object-contain rounded-lg transition-transform duration-1000 ${isVisible ? 'transform scale-100' : 'transform scale-90'}`}
      />
      {/* Horizontal white line */}
      <center>
        <hr className="absolute bottom-12 w-[80%] ml-10 mr-10 left-0 border-t-2 border-gray-400 opacity-70" />
      </center>
      {/* CEO text */}
      <p className="absolute bottom-4 right-4 text-gray-300 italic text-sm md:text-base lg:text-lg font-bold bg-black bg-opacity-0 px-3 py-1 rounded">
        CEO Mahmood Zafar
      </p>
    </div>
  );
};

export default CeoImage;
