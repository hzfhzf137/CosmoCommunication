import React from 'react';
import Navbar from './navbar';
import CeoMessage from './ceoMessage';
import CeoImage from './ceoImage';
import Footer from './footer';

const CosmoCommunication = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-col md:flex-row w-screen h-screen">
        <CeoMessage />
        <CeoImage />
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default CosmoCommunication;
