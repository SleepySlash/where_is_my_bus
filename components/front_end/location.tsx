// components/IframeComponent.js
"use client";
import React, { useState, useEffect } from "react";

const Location = () => {
  const [iframeValue, setIframeValue] = useState(null);

  useEffect(() => {
    const handleMessage = (event: any) => {
      // Ensure the message is coming from the expected origin
      if (event.origin !== window.location.origin) return;

      // Handle the received message
      const data = event.data;

      // Check if the data is an object
      if (typeof data === "object" && data !== null) {
        // Process the object data as needed
        if (data.coordinates) {
          setIframeValue(data.coordinates);
        } else {
          console.error("Received object data without 'coordinates' key");
        }
      } else {
        // Handle string or other primitive data
        setIframeValue(data);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="w-52 h-52">
      <iframe
        src="/maps/locationpicker.html"
        className={`h-screen w-screen ${iframeValue ? "hidden" : ""}`}
        title="Iframe Example"
      />
      {iframeValue && <div>Value from iframe: {iframeValue}</div>}
    </div>
  );
};

export default Location;
