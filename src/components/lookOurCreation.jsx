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
      className="bg-black text-white w-screen text-center p-8 sm:p-12 md:p-16 lg:p-24"
    >
      <p
        className={`mb-4 sm:mb-10 md:mb-12 lg:mb-14 text-[10px] sm:text-xs md:text-sm lg:text-base transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        Welcome to Cosmo Communication. This site offers a comprehensive overview of our expertise, services, and facilities. We look forward to the opportunity to discuss your needs and explore how we can assist you. For any inquiries or proposals, feel free to reach out to our business development team at{' '}
        <a
          href="mailto:cosmo72@yahoo.com"
          className="border-b border-white hover:text-gray-500 hover:border-gray-500 transition-all duration-300"
        >
          cosmo72@yahoo.com
        </a>{' '}
        or visit our contact page.
      </p>


      <h2
        className={` text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        TAKE A LOOK AT OUR RECENT CREATIONS
      </h2>
    </div>
  );
};

export default LookOurCreation;
