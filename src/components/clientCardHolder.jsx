import React from 'react';
import ClientCard from './clientCard';
import logo1 from '../assets/images/childProtectionLogo.jpg'; 
import logo2 from '../assets/images/dareArqamLogo.png';
import logo3 from '../assets/images/punjabSchoolLogo.png';
import logo4 from '../assets/images/alkhidmatLogo.png';

const ClientCardHolder = () => {
  const clients = [
    logo1,
    logo2,
    logo3,
    logo4,
  ];

  return (
    <div className="bg-black w-screen py-8 pt-20 pb-28">
      <h2 className="text-white text-xl pt-5 pb-5 text-center font-bold mb-6">OUR PROMINENT CLIENTS</h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {clients.map((logo, index) => (
          <ClientCard key={index} logoUrl={logo} />
        ))}
      </div>
    </div>
  );
};

export default ClientCardHolder;
