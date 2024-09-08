import React, { useEffect, useRef, useState } from 'react';

// Sample service data
const services = [
  { name: 'Annual Reports', color: 'bg-gray-200' },
  { name: 'Black & White Copies', color: 'bg-gray-300' },
  { name: 'Colour Copies', color: 'bg-indigo-300' },
  { name: 'Booklets', color: 'bg-blue-300' },
  { name: 'Brochures', color: 'bg-blue-200' },
  { name: 'Business Cards', color: 'bg-indigo-200' },
  { name: 'Business Forms', color: 'bg-teal-200' },
  { name: 'Calendars', color: 'bg-green-200' },
  { name: 'Carbonless Books', color: 'bg-yellow-200' },
  { name: 'Catalogues', color: 'bg-orange-200' },
  { name: 'Corporate Gifts', color: 'bg-pink-200' },
  { name: 'Coupons', color: 'bg-purple-200' },
  { name: 'Envelopes', color: 'bg-emerald-200' },
  { name: 'Flyers', color: 'bg-cyan-200' },
  { name: 'Labels', color: 'bg-lime-200' },
  { name: 'Letterheads', color: 'bg-amber-200' },
  { name: 'Manuals', color: 'bg-rose-200' },
  { name: 'Memo Pads', color: 'bg-sky-200' },
  { name: 'Menus', color: 'bg-red-200' },
  { name: 'Newsletters', color: 'bg-blue-300' },
  { name: 'Notepads', color: 'bg-lime-300' },
  { name: 'Paper Supplies', color: 'bg-yellow-300' },
  { name: 'Personal Stationery', color: 'bg-teal-300' },
  { name: 'Posters', color: 'bg-orange-300' }
];

const ServicesGrid = () => {
  const [animated, setAnimated] = useState(Array(services.length).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setAnimated((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="pr-2 w-screen py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (refs.current[index] = el)}
            className={`${
              animated[index] ? 'animate-fadeInUp' : 'opacity-0'
            } ${service.color} text-gray-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center text-center`}
          >
            <h3 className="text-xl font-semibold font-roboto">{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
