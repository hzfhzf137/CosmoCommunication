import React from 'react';
import Navbar from './navbar';
import CeoMessage from './ceoMessage';
import CeoImage from './ceoImage';
import OurJourney from './ourJourney';
import WhatWeDo from './whatWeDo';
import Footer from './footer';

const CosmoCommunication = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="flex flex-col md:flex-row w-screen">
                <CeoMessage />
                <CeoImage />
            </div>
            <div className="flex flex-col md:flex-row w-screen">
                <OurJourney />
                <WhatWeDo />
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default CosmoCommunication;
