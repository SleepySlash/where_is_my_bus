"use client";

import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Navbar from "@/components/front_end/Navbar";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Page = () => {
  const [mapType, setMapType] = useState<"street" | "satellite">("street");

  const toggleMapType = () => {
    setMapType((prevType) => (prevType === "street" ? "satellite" : "street"));
  };

  return (
    <div className="flex flex-col justify-center">
      <Navbar Route="Route 1" />

      <div className="flex w-full h-full gap-1">
        <div className="w-full h-screen -z-0 ">
          <MapContainer
            center={[17.559267, 78.490467]}
            zoom={13}
            style={{ height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={
                mapType === "street"
                  ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  : "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              }
            />
            <Marker position={[17.559267, 78.490467]} icon={customIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        {/* <div className="relative z-30  ">
          <button
            onClick={toggleMapType}
            className="bg-white border rounded-md px-2 py-1"
          >
            {mapType === "street"
              ? "Switch to Satellite View"
              : "Switch to Street View"}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
