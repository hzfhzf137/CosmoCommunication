import React from 'react';

const ClientCard = ({ logoUrl, isVisible }) => {
  return (
    <div 
      className={`h-24 w-24 md:w-32 md:h-32 flex justify-center items-center overflow-hidden shadow-lg rounded-lg transform transition-transform duration-700 ease-out ${
        isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
      }`}
    >
      <img 
        src={logoUrl} 
        alt="Client Logo" 
        className="object-contain h-full w-full animate-pulseInfinite" 
      />
    </div>
  );
};

export default ClientCard;
