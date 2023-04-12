import React, { useState, useEffect } from "react";

export default function CustomMarker(props){

    const [currentMarkerText, setCurrentMarkerText] = useState("Click on me");

    return <div className="obvious"
    onClick={()=> props.onClick()}
    onMouseOver={()=> setCurrentMarkerText("CLICK TO LEARN ABOUT" + props.areaName)}
    onMouseLeave={()=> setCurrentMarkerText("Click on me")}
    > {currentMarkerText}</div>
}

// const CustomMarker = (props) => {
//     const {id} = props;

//     const onMarkerClick = (evt) => {
//         console.log(id);
//     };

//     return (
//         <Marker
//             onClick={onMarkerClick}
//             {...props}
//             areaName={props.areaName} 
//         />
//     );
// };

// export default CustomMarker;