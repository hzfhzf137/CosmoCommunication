import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/home.jsx';
import CosmoCommunication from './components/cosmoCommunication.jsx';
import ProductAndServices from './components/productAndServices.jsx';
import ContactUs from './components/contactUs.jsx';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cosmo-communication" element={<CosmoCommunication />} />
          <Route path="/product-and-services" element={<ProductAndServices />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirects all unknown routes to home */}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
