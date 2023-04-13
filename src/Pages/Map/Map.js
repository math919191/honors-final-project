import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './Map.css'
import Test from "./Test";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCdENsILOa3mUmgHdXqQfeNdpbgcerUq1U",
  });

  if (!isLoaded) return <div>Loading...</div>;
  //return <p>Hello</p>
  return <MapFragment />;
}

function MapFragment() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={3} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} tooltip={"TEst"} />
      {/* <Test
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
    </GoogleMap>
  );
}