import React, { useState, useEffect } from "react";
import './Marker.css'

export default function CustomMarker(props){

    const [currentMarkerText, setCurrentMarkerText] = useState("Click to learn more about " + props.areaName);
    const [hovering, setHovering] = useState(false);

    function mouseHoverOn(){
        setHovering(true)
    }

    function mouseHoverOff(){
        setHovering(false)
    }


    return (
    <>
    
        <div className="marker"
            onClick={()=> props.onClick()}
            onMouseOver={()=> mouseHoverOn()}
            onMouseLeave={()=> mouseHoverOff()}
            >
        </div>

        { hovering &&
            <div class="tooltip">
                <span class="tooltiptext">{currentMarkerText}</span>
            </div>

        }
    </>
    )
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