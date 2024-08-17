import React from 'react';

const Address = () => {
  return (
    <div
      className="bg-orange-400 text-gray-100 w-screen md:w-1/2 p-8 flex flex-col justify-center"
      style={{ minHeight: '50vh' }} // Ensure it takes up at least 50% of the viewport height
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
        <a href="mailto:cosmo72@yahoo.com" className="underline text-gray-200 hover:text-gray-50">
          cosmo72@yahoo.com
        </a>
      </p>
      <p className="mb-4">
        <span className="font-semibold text-white">Telephone:</span>{' '}
        <a href="tel:+923014278823" className="underline text-gray-200 hover:text-gray-50">
          +92-301-4278823
        </a>{' '}
        &amp;{' '}
        <a href="tel:+923250678823" className="underline text-gray-200 hover:text-gray-50">
          +92-325-0678823
        </a>
      </p>
    </div>
  );
};

export default Address;
