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
      <h2
        className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        Welcome to Cosmo Communication
      </h2>

      <p
        className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mb-4 sm:mb-8 md:mb-10 lg:mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        At Cosmo Communication, we specialize in delivering exceptional printing solutions tailored to your needs. With 25 years of experience, our dedicated team ensures high-quality results for all your projects. Explore our latest work to see how we can bring your vision to life. For inquiries or proposals, please contact us at{' '}
        <a
          href="mailto:cosmo72@yahoo.com"
          className="border-b border-white hover:text-gray-500 hover:border-gray-500 transition-all duration-300"
        >
          cosmo72@yahoo.com
        </a>{' '}
        or visit our contact page.
      </p>
    </div>
  );
};

export default LookOurCreation;
