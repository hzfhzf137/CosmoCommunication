import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define office coordinates
const officeCoordinates = {
  lat: 31.5669,
  lng: 74.3260
};

// Set zoom level
const zoom = 13;

// Define the default Leaflet icon
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Anchor point of the icon
  popupAnchor: [1, -34] // Anchor point of the popup
});

const MapComponent = () => {
  const handleYesClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${officeCoordinates.lat},${officeCoordinates.lng}`, '_blank');
  };

  return (
    <div className="pt-32 pb-5 flex justify-center bg-gray-900 w-screen">
      <div className="flex justify-center">
        <MapContainer
          center={officeCoordinates}
          zoom={zoom}
          className="w-[50vw] h-[calc(60vh-64px)] sticky"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={officeCoordinates} icon={defaultIcon}>
            <Popup>
              <div>
                Here is our office! <br />
                Do you want to open this location in Google Maps?
                <div className="mt-2 flex justify-center">
                  <button
                    onClick={handleYesClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
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
