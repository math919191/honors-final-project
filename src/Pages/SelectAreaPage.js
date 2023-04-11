import React, { useState } from "react";


export function SelectAreaPage(props){
    const [selectedAnswer, setSelectedAnswer] = useState(props.currAnswer);

    function handleClick(answer){
        setSelectedAnswer(answer)
        props.setAreaFunction(answer);
    }

    return (
        <div>
            <p>Select Area to learn more about </p>
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