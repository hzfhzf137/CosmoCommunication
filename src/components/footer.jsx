import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-screen py-6">
      <div className="container mx-auto px-4 flex items-center justify-start">
        <a 
          href="https://wa.me/03008423278"
          className="flex items-center text-gray-300 text-xs sm:text-sm md:text-base mr-2 hover:text-green-300"
          aria-label="Chat with us on WhatsApp"
        >
          Chat with us
        </a>
        <a 
          href="https://wa.me/03008423278"
          className="text-green-400 hover:text-green-300"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
      <p className="text-gray-300 text-xs sm:text-sm md:text-base text-center mt-2 pointer-events-none">
        © 2024 Cosmo Communication. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
