import React from 'react';

const LookOurCreation = () => {
  return (
    <div className="bg-black text-white w-screen text-center p-8 sm:p-12 md:p-16 lg:p-24">
      <p className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-sm sm:text-base md:text-lg lg:text-xl">
        We hope this site provides you with an overview of Cosmo Communication, our capabilities and our setup. 
        We are ready to discuss your queries or proposals with you at your convenience. 
        You can contact the Cosmo Communication business development team directly at{' '}
        <a
          href="mailto:info@topicalprinters.com"
          className="border-b border-white hover:text-gray-500 hover:border-gray-500"
        >
          info@CosmoCommunication.com
        </a>{' '}
        or from our contact page.
      </p>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        TAKE A LOOK AT OUR RECENT CREATIONS
      </h2>
    </div>
  );
};

export default LookOurCreation;
