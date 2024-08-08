import React from 'react';

const ImageCard = ({ imageUrl }) => {
    return (
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 px-1">  {/* Reduced width and gap */}
            <div className="h-48 md:h-52 lg:h-56 bg-gray-200 overflow-hidden relative group">  {/* Fixed height container with hover group */}
                <img
                    src={imageUrl}
                    alt="Creation"
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 ease-in-out"  /* Image scaling effect on hover */
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 ease-in-out"></div> {/* Dark overlay on hover */}
            </div>
        </div>
    );
};

export default ImageCard;
