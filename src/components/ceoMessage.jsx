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
          Established in July, 1995, Cosmo Communication was initially set up as a design house by Mr. Mahmood Zafar, 
          the CEO of Cosmo Communication, himself a graduate in design and printing from NCA, Lahore. 
          With firm commitment and passion to set out distinctive from the rest of the printing houses, 
          over the span of two decades, Cosmo Communication has set out a benchmark in terms of quality and consistency 
          and provides its clients with pre-press, press, and post-press facilities under one roof.
        </p>
      </div>
    </div>
  );
};

export default CeoMessage;
