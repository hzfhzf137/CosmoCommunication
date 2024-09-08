import React, { useRef, useEffect, useState } from 'react';

const YearsAndClients = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [showYearsPlus, setShowYearsPlus] = useState(false);
  const [showClientsPlus, setShowClientsPlus] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let yearsInterval = setInterval(() => {
        setYearsCount((prev) => {
          if (prev < 25) {
            return prev + 1;
          } else {
            clearInterval(yearsInterval);
            setShowYearsPlus(true);
            return 25;
          }
        });
      }, 100);

      let clientsInterval = setInterval(() => {
        setClientsCount((prev) => {
          if (prev < 70) {
            return prev + 1;
          } else {
            clearInterval(clientsInterval);
            setShowClientsPlus(true);
            return 70;
          }
        });
      }, 50);

      return () => {
        clearInterval(yearsInterval);
        clearInterval(clientsInterval);
      };
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="flex justify-around items-center w-screen h-[50vh] bg-gray-100 text-center py-10">
      <div>
        <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-orange-500">
          {yearsCount}
          {showYearsPlus && '+'}
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 mt-2">
          Years of Service
        </p>
      </div>

      <div>
        <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-blue-800">
          {clientsCount}
          {showClientsPlus && '+'}
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 mt-2">
          Clients Served
        </p>
      </div>
    </div>
  );
};

export default YearsAndClients;
