import React from 'react';

const ImageCard = ({ imageUrl }) => {
    return (
        // Adjusted responsive width: wider for small screens, narrower for larger screens
        <div className="w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/6 px-1 pb-2">
            <div className="h-48 md:h-52 lg:h-56 bg-gray-200 overflow-hidden relative group">
                <img
                    src={imageUrl}
                    alt="Creation"
                    className="w-full h-full transform group-hover:scale-125 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 ease-in-out"></div>
            </div>
        </div>
    );
};

export default ImageCard;
