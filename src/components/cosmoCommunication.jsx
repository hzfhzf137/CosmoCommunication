import React, { useEffect } from 'react';
import Navbar from './navbar';
import CeoMessage from './ceoMessage';
import CeoImage from './ceoImage';
import CompanyCulture from './companyCulture';
import MissionStatment from './missionStatment';
import ClientCardHolder from './clientCardHolder';
import YearsAndClients from './yearsAndClients';
import ServicesCardHandler from './servicesCardHandler';
import Footer from './footer';

const CosmoCommunication = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <React.Fragment>
            <Navbar />
            <div className="flex flex-col md:flex-row w-screen">
                <CeoMessage />
                <CeoImage />
            </div>
            <div className=" flex flex-col  md:flex-row w-screen">
                <CompanyCulture />
                <MissionStatment />
            </div>
            <ServicesCardHandler/>
            <YearsAndClients/>
            <ClientCardHolder/>
            <Footer />
        </React.Fragment>
    );
};

export default CosmoCommunication;
