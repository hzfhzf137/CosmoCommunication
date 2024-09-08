import React, { useRef, useEffect, useState } from 'react';

const CeoMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      { threshold: 0.3 }
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

  return (
    <div
      ref={sectionRef}
      className="flex items-center justify-center bg-black text-gray-300 p-6 pt-20 w-full md:w-1/2 h-[80vh]"
    >
      <div
        className={`max-w-lg px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h2
          className={`text-xl md:text-2xl font-bold mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Cosmo Communication
        </h2>
        <p
          className={`text-base md:text-lg leading-relaxed text-gray-400 text-justify transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Cosmo Communication is a privately-owned press with 25 years of experience in the industry. 
          We offer a comprehensive range of printing services, 
          including graphic design and layout, high-speed and high-volume copying in both black and white 
          and color, as well as flex printing. 
          Our expertise extends to meeting all your corporate stationery and printing needs.
        </p>
      </div>
    </div>
  );
};

export default CeoMessage;
