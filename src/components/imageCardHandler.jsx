// ImageCardHandler.js
import React, { useState, useRef, useEffect } from 'react';
import ImageCard from '../components/imageCard';
import image1 from '../assets/images/imageCreation2.jpg';
import image2 from '../assets/images/imageCreation3.jpg';
import image3 from '../assets/images/imageCreation4.jpg';
import image4 from '../assets/images/imageCreation5.jpg';
import image5 from '../assets/images/imageCreation6.jpg';
import image6 from '../assets/images/imageCreation1.jpg';
import image7 from '../assets/images/imageCreation7.jpg';
import image8 from '../assets/images/imageCreation8.jfif';

const ImageCardHandler = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  const imagesData = [
    { id: 1, imageUrl: image1 },
    { id: 2, imageUrl: image2 },
    { id: 3, imageUrl: image3 },
    { id: 4, imageUrl: image4 },
    { id: 5, imageUrl: image5 },
    { id: 6, imageUrl: image6 },
    { id: 7, imageUrl: image7 },
    { id: 8, imageUrl: image8 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div 
      ref={galleryRef} 
      className={`w-screen flex flex-wrap justify-center bg-gray-900 pt-10 pb-5 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {imagesData.map((image) => (
        <ImageCard
          key={image.id}
          imageUrl={image.imageUrl}
          onClick={() => handleImageClick(image.imageUrl)}
        />
      ))}

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div 
            className="relative max-h-[75vh] max-w-[75vw]"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="object-contain max-h-[75vh] max-w-[75vw] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCardHandler;
