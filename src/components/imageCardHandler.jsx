import React, { useState } from 'react';
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

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="w-screen flex flex-wrap justify-center bg-gray-900 pt-10 pb-5">
            {imagesData.map((image) => (
                <ImageCard
                    key={image.id}
                    imageUrl={image.imageUrl}
                    onClick={() => handleImageClick(image.imageUrl)}
                />
            ))}
            
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 "
                    onClick={closeModal}
                >
                    <div 
                        className="relative"
                        onClick={(e) => e.stopPropagation()} 
                        style={{ maxHeight: '75vh', maxWidth: '75vw' }} 
                    >
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="object-contain"
                            style={{ maxHeight: '75vh', maxWidth: '75vw' }} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageCardHandler;
