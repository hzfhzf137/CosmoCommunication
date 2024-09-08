import React, { useRef, useEffect, useState } from 'react';

const MissionStatment = () => {
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
      className=" flex flex-col  justify-center items-start bg-gray-300 p-6 md:p-10 w-screen md:w-1/2 h-[50vh] shadow-lg"
    >
      <h2
        className={`text-xl md:text-2xl text-gray-800 font-semibold mb-3 md:mb-5 border-b-2 border-gray-500 pb-2 text-center w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
         Mission Statement
      </h2>
      <p
        className={`text-sm md:text-base leading-relaxed text-gray-600 text-justify transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        Our mission is to deliver the highest quality products and services promptly and at competitive prices. We are dedicated to understanding your needs and helping you achieve your business goals. You can rely on us for honest, expert advice and responsive, friendly customer service. Our commitment is to consistently meet and exceed your expectations.
      </p>
    </div>
  );
};

export default MissionStatment;
