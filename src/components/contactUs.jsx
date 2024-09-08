import React, { useEffect } from 'react';
import Navbar from './navbar';
import MapComponent from './mapComponent';
import Address from './address';
import ContactUsForm from './contactUsForm';
import Footer from './footer';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <MapComponent />
      <div className="flex flex-col md:flex-row w-screen">
        <Address />
        <ContactUsForm />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
