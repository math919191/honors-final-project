import React, { useState } from "react";


function Question(props){

    
    const [selectedAnswer, setSelectedAnswer] = useState(props.currAnswer);

    function updateSelectedAnswer(answer){
        setSelectedAnswer(answer)
        props.onChange(answer)
    }

    return (
        <div class="questiondiv">
            <h1 class ="question" className="question">{(props.questionNumber +1) + ". "+ props.question}</h1>
            <div class="answersdiv" className="answers">
                {props.questionOptions.map((choice, index) => (
                <div class="answer">
                    <label key={index} class="radio">
                        <input type="radio"
                            name="radio"
                            value={choice}
                            key={index}
                            checked={selectedAnswer === choice}
                            onChange={() => updateSelectedAnswer(choice)} />
                        <span>{choice}</span>

                    </label>
                </div>
                ))}
            </div>

        </div>

    )
}


export {Question}