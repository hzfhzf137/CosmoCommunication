import React, { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
    <section
      ref={sectionRef}
      className={`w-screen bg-gradient-to-r from-gray-900 to-black py-20 px-4 text-center ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
    >
      <h1 className="text-5xl font-bold mb-6 pt-10 text-gray-200 font-roboto">
        Product and Services
      </h1>
      <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-400 font-roboto">
        From business communication solutions to high-volume printing services, we offer everything to help you connect and grow. Explore our range of products and services that are tailored to meet your business needs.
      </p>
    </section>
  );
};

export default HeroSection;
