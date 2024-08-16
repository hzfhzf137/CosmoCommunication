import React, { useRef, useEffect, useState } from 'react';

const LookOurCreation = () => {
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

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white w-screen text-center p-8 sm:p-12 md:p-16 lg:p-24"
    >
      <p
        className={`mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-[10px] sm:text-xs md:text-sm lg:text-base transition-opacity duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        We hope this site provides you with an overview of Cosmo Communication, our capabilities, and our setup.
        We are ready to discuss your queries or proposals with you at your convenience.
        You can contact the Cosmo Communication business development team directly at{' '}
        <a
          href="mailto:cosmo72@yahoo.com"
          className="border-b border-white hover:text-gray-500 hover:border-gray-500 transition-all duration-300"
        >
          cosmo72@yahoo.com
        </a>{' '}
        or from our contact page.
      </p>

      <h2
        className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        TAKE A LOOK AT OUR RECENT CREATIONS
      </h2>
    </div>
  );
};

export default LookOurCreation;
