import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const festivals = [
  { name: "Diwali", region: "North India", location: [28.6139, 77.2090], description: "Festival of Lights" },
  { name: "Pongal", region: "Tamil Nadu", location: [13.0827, 80.2707], description: "Harvest Festival of Tamil Nadu" },
  { name: "Bihu", region: "Assam", location: [26.2006, 92.9376], description: "Harvest Festival of Assam" },
  { name: "Ganesh Chaturthi", region: "Maharashtra", location: [18.5204, 73.8567], description: "Celebration of Lord Ganesha" },
  { name: "Durga Puja", region: "West Bengal", location: [22.5726, 88.3639], description: "Celebration of Goddess Durga" },
  { name: "Onam", region: "Kerala", location: [10.8505, 76.2711], description: "Harvest Festival of Kerala" },
  { name: "Holi", region: "North India", location: [27.1767, 78.0081], description: "Festival of Colors" },
  { name: "Navratri", region: "Gujarat", location: [23.0225, 72.5714], description: "Nine Nights Festival of Dance" },
  { name: "Lohri", region: "Punjab", location: [30.7333, 76.7794], description: "Harvest Festival of Punjab" },
  { name: "Eid", region: "Across India", location: [28.6139, 77.2090], description: "Celebration of Breaking the Fast" },
];

const Map = () => {
  return (
    <div className="map-container">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {festivals.map((festival, index) => (
          <Marker position={festival.location} key={index}>
            <Popup>
              <strong>{festival.name}</strong>
              <p>{festival.description}</p>
              <p>Region: {festival.region}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
