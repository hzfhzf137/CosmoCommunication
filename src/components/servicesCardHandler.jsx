import React, { useRef, useEffect, useState } from 'react';
import ServicesCard from './servicesCard';
import conceptAndDesign from '../assets/images/conceptAndDesign.jfif';
import bindingAndPackaging from '../assets/images/bindingAndPackaging.jpg';
import binding from '../assets/images/binding.png'
import printing from '../assets/images/printing.jpg';

const ServicesCardHandler = () => {
    const [visibleCards, setVisibleCards] = useState({});
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.getAttribute('data-index');
                        setVisibleCards((prevVisibleCards) => ({
                            ...prevVisibleCards,
                            [index]: true,
                        }));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    const services = [
        {
            title: 'CONCEPT & DESIGN',
            image: conceptAndDesign,
            description:
                'Transform your vision into compelling visual stories with our expert concept and design services. We blend creativity with precision to deliver impactful design solutions.',
            bgColor: 'bg-gray-200',
        },
        {
            title: 'BINDING',
            image: binding,
            description:
                'Ensure durability and a polished finish with our professional binding services. We offer a range of binding options tailored to your specific needs.',
            bgColor: 'bg-yellow-200',
        },
        {
            title: 'PACKAGING',
            image: bindingAndPackaging,
            description:
                'Elevate your product presentation with our innovative packaging solutions. We provide customized, eye-catching packaging that enhances brand appeal and protection.',
            bgColor: 'bg-green-200',
        },
        {
            title: 'PRINTING',
            image: printing,
            description:
                'Experience top-notch quality and efficiency with our comprehensive printing services. From high-speed copying to vibrant color prints, we meet all your printing demands with precision.',
            bgColor: 'bg-blue-200',
        },
    ];

    return (
        <div className="w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-8">
            {services.map((service, index) => (
                <div
                    key={index}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    data-index={index}
                    className={`opacity-0 translate-y-10 ${visibleCards[index] ? 'opacity-100 translate-y-0 transition-all duration-1000' : ''}`}
                >
                    <ServicesCard
                        title={service.title}
                        image={service.image}
                        description={service.description}
                        bgColor={service.bgColor}
                    />
                </div>
            ))}
        </div>
    );
};

export default ServicesCardHandler;
