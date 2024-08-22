import React from 'react';

const ServicesCard = ({ title, image, description, bgColor }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center shadow-lg p-6 rounded-lg ${bgColor} transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      <img
        src={image}
        alt={title}
        className="w-20 h-20 mb-4 rounded-full border-4 border-white shadow-md"
      />
      <h3 className="text-xl font-bold mb-2 hover:text-indigo-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServicesCard;
