import React from 'react';
import Navbar from './navbar';
import MapComponent from './mapComponent';
import Address from './address';
import ContactUsForm from './contactUsForm';
import Footer from './footer';
const ContactUs = () => {
    return (
        <React.Fragment>
            <Navbar />
            <MapComponent />
            <div className="flex flex-col w-screen md:flex-row">
                <Address />
                <ContactUsForm />
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default ContactUs;
