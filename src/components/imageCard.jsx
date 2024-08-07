// src/ImageCard.js
import React from 'react';

const ImageCard = ({ imageUrl }) => {
    return (
        <div className=" w-1/4 h-48 overflow-hidden ">
            <img
                src={imageUrl}
                alt="Creation"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default ImageCard;
