import React from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "../App.css";

const Map = () => {
  return (
    <div>
      <div className="shadow-lg">
        <h1 className="text-center pb-4 mb-6 font-bold text-gray-900 text-3xl mt-32">
          Navigate Hospitals
        </h1>
      </div>
      <div className="flex justify-center items-center md:h-[70vh] w-[95%] mx-auto z-0" id="mapId">
        <MapContainer className=""
          center={[20.5937, 78.9629]}
          zoom={5}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[20.5937, 78.9629]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;