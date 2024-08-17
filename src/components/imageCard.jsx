import React from 'react';

const ImageCard = ({ imageUrl, onClick, isVisible, id }) => {
  return (
    <div
      className="p-3"
      data-id={id} // Add data attribute for visibility detection
    >
      <div
        className={`relative bg-gray-900 rounded-lg shadow-lg overflow-hidden group cursor-pointer transform transition-transform hover:scale-105 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000 ease-in-out`}
        onClick={onClick}
        style={{ width: '100%', height: '250px' }} // Full width and fixed height
      >
        <img
          src={imageUrl}
          alt="Creation"
          className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-in-out rounded-lg flex items-end p-4">
          <p className="text-white text-sm font-semibold">View Image</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
