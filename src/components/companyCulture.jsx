import React, { useRef, useEffect, useState } from 'react';

const CompanyCulture = () => {
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
      className="  flex flex-col  justify-center items-start bg-gray-200 p-6 md:p-10 w-screen md:w-1/2 h-[50vh] shadow-lg"
    >
      <h2
        className={`text-xl md:text-2xl text-gray-800 font-semibold mb-3 md:mb-5 border-b-2 border-gray-500 pb-2 text-center w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        Company Culture
      </h2>
      <p
        className={`text-sm md:text-base leading-relaxed text-gray-600 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        At our core, we believe that your success is integral to our own. This guiding philosophy drives every aspect of our business. We are committed to delivering the highest quality products and services, ensuring they are on time and within budget. Our dedication extends to providing exceptional customer service each and every day, reinforcing our commitment to your success.
      </p>
    </div>
  );
};

export default CompanyCulture;
