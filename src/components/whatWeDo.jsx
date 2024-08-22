import React, { useRef, useEffect, useState } from 'react';

const WhatWeDo = () => {
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
      { threshold: 0.6 }
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
      className="flex flex-col justify-center items-start bg-gray-300 p-6 md:p-10 w-screen md:w-1/2 h-[50vh] shadow-lg"
    >
      <h2
        className={`text-xl md:text-2xl text-gray-800 font-semibold mb-3 md:mb-5 border-b-2 border-gray-500 pb-2 text-center w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        WHAT WE DO AT LE' TOPICAL
      </h2>
      <p
        className={`text-sm md:text-base leading-relaxed text-gray-600 text-justify transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        We are a one-stop, state-of-the-art printing company with diverse printing solutions that aims to increase your business efficiency and reduce your costs. 
        As your partner in print, we value your trust. That’s why we listen and understand your needs to generate innovative ideas to create value-added, 
        quality products, just for you.
      </p>
    </div>
  );
};

export default WhatWeDo;
