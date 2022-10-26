import React from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "../App.css";
const Map = () => {
  // var map = L.map("map").setView([51.505, -0.09], 13);
  // var map = L.map("map").fitWorld();

  // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   maxZoom: 19,
  //   attribution: "© OpenStreetMap",
  // }).addTo(map);

  // map.locate({ setView: true, maxZoom: 16 });

  return (
    <div>
      <div className="shadow-lg">
        <h1 className="text-center pb-4 mb-6 font-bold text-gray-900 text-3xl mt-32">
          Navigate Hospitals
        </h1>
      </div>
      <div className="flex justify-center items-center md:h-[70vh] w-[95%] mx-auto z-0">
        <MapContainer className=""
          center={[19.1478218, 72.8386159]}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[19.1478218, 72.8386159]}>
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
