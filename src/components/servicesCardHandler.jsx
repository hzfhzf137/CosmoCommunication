import React, { useRef, useEffect, useState } from 'react';
import ServicesCard from './servicesCard';
import conceptAndDesign from '../assets/images/conceptAndDesign.jfif';
import bindingAndPackaging from '../assets/images/bindingAndPackaging.jpg';
import photography from '../assets/images/photography.jpg';
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
                'With an eagerness to bring about an out-of-the-box concept, we ensure that you stay globally competitive while enhancing your image in the industry internationally.',
            bgColor: 'bg-gray-200',
        },
        {
            title: 'BINDING & PACKAGING',
            image: bindingAndPackaging,
            description:
                'With an eagerness to bring about an out-of-the-box concept, we ensure that you stay globally competitive while enhancing your image in the industry internationally.',
            bgColor: 'bg-yellow-200',
        },
        {
            title: 'PHOTOGRAPHY',
            image: photography,
            description:
                'Le\' Topical is equipped with the latest cameras operated by professional photographers in an up-to-date in-house photographic studio. We also provide outdoor photography facilities.',
            bgColor: 'bg-green-200',
        },
        {
            title: 'PRINTING',
            image: printing,
            description:
                'With an eagerness to bring about an out-of-the-box concept, we ensure that you stay globally competitive while enhancing your image in the industry internationally.',
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
                    className={`transition-opacity duration-1000 transform transition-transform ${
                        visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
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
