import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import HeroSection from '../components/heroSection';
import ServicesGrid from '../components/servicesGrid';
import ClientCardHolder from './clientCardHolder';
import YearsAndClients from './yearsAndClients';

const ProductAndServices = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <YearsAndClients/>
      <ClientCardHolder/>
      <Footer />
    </div>
  );
};

export default ProductAndServices;
