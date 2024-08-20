import React from 'react';
import ceoImg from '../assets/images/ceoImg.jpg';

const CeoImage = () => {
  return (
    <div className="relative flex items-center bg-black justify-center w-full md:w-1/2 h-full">
      <img
        src={ceoImg}
        alt="CEO Mahmood Zafar"
        className="w-full h-[72%] object-contain rounded-lg"
      />
      {/* Horizontal white line */}
      <hr className="absolute bottom-12  left-0 w-full border-t-2 border-gray-400 opacity-70" />
      {/* CEO text */}
      <p className="absolute bottom-4  right-4 text-gray-300 italic text-sm md:text-base lg:text-lg font-bold bg-black bg-opacity-0 px-3 py-1 rounded">
        CEO Mahmood Zafar
      </p>
    </div>
  );
};

export default CeoImage;
