import React, { useState, useRef, useEffect } from 'react';
import ClientCard from '../components/clientCard';
import logo1 from '../assets/images/childProtectionLogo.jpg';
import logo2 from '../assets/images/dareArqamLogo.png';
import logo3 from '../assets/images/punjabSchoolLogo.png';
import logo4 from '../assets/images/alkhidmatLogo.png';

const ClientCardHolder = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const clients = [logo1, logo2, logo3, logo4];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target); // Stop observing once it's visible
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="bg-black pt-32 pb-28 w-screen"
    >
      <div
        ref={containerRef}
        className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-10">
          OUR PROMINENT CLIENTS
        </h2>
        <div className="overflow-hidden relative">
          <div
            className={`flex ${isVisible ? 'animate-slideHorizontal' : ''} gap-8 md:gap-12`}
          >
            {clients.map((logo, index) => (
              <ClientCard key={index} logoUrl={logo} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCardHolder;
