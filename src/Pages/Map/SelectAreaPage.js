import React, { useState } from "react";
import Map from "./Map.js"
import SimpleMap from "./SimpleMap.js"

export function SelectAreaPage(props){
    const [selectedAnswer, setSelectedAnswer] = useState(props.currAnswer);

    function handleClick(answer){
        console.log(answer)
        setSelectedAnswer(answer)
        props.setAreaFunction(answer);
        props.nextPageFunction()
    }

    return (
        <div>
            <SimpleMap 
                handleClick={ (choice) => handleClick(choice)}
            />
        </div>
        )
}