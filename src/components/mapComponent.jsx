import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define office coordinates
const officeCoordinates = {
  lat: 31.5669,
  lng: 74.3260,
};

// Set zoom level
const zoom = 13;

// Define the default Leaflet icon
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Anchor point of the icon
  popupAnchor: [1, -34], // Anchor point of the popup
});

const MapComponent = () => {
  const handleYesClick = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${officeCoordinates.lat},${officeCoordinates.lng}`,
      '_blank'
    );
  };

  return (
    <div className="pt-36 pb-16 sticky bg-gray-900 flex flex-col items-center w-screen">
      <h1 className="text-gray-400 text-lg mb-6 pl-10 pr-10 italic text-center">
        Tap the marker below to view our location on Google Maps
      </h1>
      <div className="flex justify-center">
        <MapContainer
          center={officeCoordinates}
          zoom={zoom}
          className="w-[60vw] h-[60vh] rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={officeCoordinates} icon={defaultIcon}>
            <Popup>
              <div>
                Here is our office! <br />
                Would you like to open this location in Google Maps?
                <div className="mt-2 flex justify-center">
                  <button
                    onClick={handleYesClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
                  >
                    Yes
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
