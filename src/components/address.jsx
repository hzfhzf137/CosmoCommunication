import React from 'react';

const Address = () => {
  return (
    <div
      className="bg-orange-400 text-gray-100 w-screen md:w-1/2 p-8 flex flex-col justify-center"
      style={{ minHeight: '50vh' }} 
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
        Cosmo Communication
      </h2>
      <p className="leading-relaxed mb-4">
        Abbot Road, Lakshmi Chowk,<br />
        Lahore-54000<br />
        Punjab, Pakistan.
      </p>
      <p className="mb-4">
        <span className="font-semibold text-white">Email:</span>{' '}
        <a href="mailto:cosmo72@yahoo.com" className="underline text-gray-50 hover:text-gray-300">
          cosmo72@yahoo.com
        </a>
      </p>
      <p className="mb-4">
        <span className="font-semibold text-white">Cell Phone:</span>{' '}
        <a href="tel:+923008423278" className="underline text-gray-50 hover:text-gray-300">
          03008423278
        </a>{' '}
      </p>
      <p className="mb-4">
        <span className="font-semibold text-white">Telephone:</span>{' '}
        <a href="tel:+924236283501" className="underline text-gray-50 hover:text-gray-300">
          04236283501
        </a>
      </p>
    </div>
  );
};

export default Address;
