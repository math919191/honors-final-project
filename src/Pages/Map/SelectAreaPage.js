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
            <p>Select Area to learn more about </p>
            <SimpleMap 
                handleClick={ (choice) => handleClick(choice)}
            />
            {props.possibleAreas.map((choice, index) => (
                <div>
                    <label key={index} class="radio">
                        <input type="radio"
                            name="radio"
                            value={choice}
                            key={index}
                            checked={selectedAnswer === choice}
                            onChange={() => handleClick(choice)} />
                        <span>{choice}</span>

                    </label>
                </div>
                ))
                }


            <button onClick={() => props.nextPageFunction() }>Submit and take the quiz </button>
  
        </div>
        )
}