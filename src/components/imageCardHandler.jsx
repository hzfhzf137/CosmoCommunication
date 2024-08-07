import React from 'react';
import ImageCard from './imageCard';
import image1 from '../assets/images/imageCreation2.jpg';
import image2 from '../assets/images/imageCreation3.jpg';
import image3 from '../assets/images/imageCreation4.jpg';
import image4 from '../assets/images/imageCreation5.jpg';
import image5 from '../assets/images/imageCreation7.jpg';
import image6 from '../assets/images/imageCreation1.jfif';
import image7 from '../assets/images/imageCreation6.webp';
import image8 from '../assets/images/imageCreation8.jfif';


const ImageCardHandler = () => {
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

    return (
        <div className=" w-screen flex flex-wrap justify-center  bg-black">
            {imagesData.map((image) => (
                <ImageCard
                    key={image.id}
                    imageUrl={image.imageUrl}
                />
            ))}
        </div>
    );
};

export default ImageCardHandler;
