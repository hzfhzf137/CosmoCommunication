import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const officeCoordinates = {
  lat: 31.5669,  
  lng: 74.3260   
};

const zoom = 13;

const MapComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleYesClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${officeCoordinates.lat},${officeCoordinates.lng}`, '_blank');
    setShowPopup(false);
  };

  const handleNoClick = () => {
    setShowPopup(false);
  };

  return (
    <div className="pt-32 pb-5 flex justify-center bg-gray-900 w-screen">
      <div className="flex justify-center">
        <MapContainer
          center={officeCoordinates}
          zoom={zoom}
          className="w-[50vw] h-[calc(60vh-64px)]" // Set width to 50% of viewport width
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={officeCoordinates}>
            <Popup>
              <div>
                Here is our office! <br />
                Do you want to open this location in Google Maps?
                <div className="mt-2 flex justify-between">
                  <button
                    onClick={handleYesClick}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleNoClick}
                    className="bg-gray-500 text-white px-2 py-1 rounded"
                  >
                    No
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
