import React from "react";
import GoogleMapReact from 'google-map-react';
import CustomMarker from "./CustomMarker";

const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};


export default function SimpleMap(props){

  let coors = {
    "North America": {lat: 45.337071249502735, lng: -102.86507388777544},
    "Central/South America": {lat: 5.9199454529367745, lng: -63.33901104075203},
    "Africa": {lat: 7.839524813624917, lng: 17.520364578097922},
    "South/Southeast Asia": {lat: 29.03511583988592, lng: 88.36020822845255},
    // "Western Europe": {lat: 50.8184848693786, lng:0.46958060620685443},
    // "Eastern Europe": {lat: 55.83819603105466, lng:55.444456315925706},
    "Oceania" : {lat: -21.7135954837848, lng: 133.10445506470765},
    "Middle East" : {lat: 30.382355763597534, lng: 45.70861572712031},

  }

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 2
  };
  return (

<div className="map-container">
<div class="maptext"> Select an area to learn more: </div>

      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCdENsILOa3mUmgHdXqQfeNdpbgcerUq1U" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
        { Object.keys(coors).map( (element) => (
          
          <CustomMarker 
            lat={coors[element].lat}
            lng={coors[element].lng}
            areaName={element}
            onClick={ () => props.handleClick(element)}
          />            
        ))
      }

      </GoogleMapReact>
    </div>
  );
}