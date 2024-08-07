import React from 'react';

const ClientCard = ({ logoUrl }) => {
  return (
    <div className="h-24 w-24 md:w-32 md:h-32 flex justify-center items-center overflow-hidden shadow-lg animate-slideInLeft">
      <img src={logoUrl} alt="Client Logo" className="object-contain h-full w-full animate-pulse" />
    </div>
  );
};

export default ClientCard;
