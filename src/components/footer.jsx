import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-screen py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Chat Section */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <a 
            href="https://api.whatsapp.com/send?phone=923014278823"
            className="flex items-center text-gray-300 text-xs sm:text-sm md:text-base hover:text-green-400 transition-colors duration-300"
            aria-label="Chat with us on WhatsApp"
          >
            Chat with us
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=923014278823"
            className="text-green-400 hover:text-green-500 transition-transform duration-300 transform hover:scale-110"
            aria-label="Chat with us on WhatsApp"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full md:w-auto h-0.5 bg-gray-700 md:hidden mb-4"></div>

        {/* Copyright Section */}
        <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center md:text-left">
          © 2024 Cosmo Communication. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
