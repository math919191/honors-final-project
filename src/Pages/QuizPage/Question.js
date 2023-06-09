import React, { useState, useEffect } from "react";
import imageRef from  "../../assets/imagesReferences.json"
import africa6 from "../../assets/africa6.png"

function Question(props){

    
    const [selectedAnswer, setSelectedAnswer] = useState(props.currAnswer);

    const [picRef, setPicRef] = useState("")


    function updateSelectedAnswer(answer){
        setSelectedAnswer(answer)
        props.onChange(answer)
    }

    function getPictureRef(){
        let currArea =  props.currArea.toLowerCase();
        let currNum = props.questionNumber + 1;
        
        if (currArea == "africa" && currNum==6){
            return (require("../../assets/africa6.png"))
        }

        for (const element of imageRef){
            let imageArea = element.area;
            let imageNum = element.questionnum;
            // if ('area' in imageRef[i] && 'questionnum' in imageRef[i]){
                // imageArea = imageRef[i].area;
                // imageNum = imageRef[i].questionnum;    
            // } 

            if (imageArea == currArea && currNum == imageNum){
                console.log("returning" + element.imagereference);
                return element.imagereference;
            }

        }
    }

    return (
        <div class="questiondiv">
            <h1 class ="question" className="question">{(props.questionNumber +1) + ". "+ props.question}</h1>
            {props.hasPicture && 
                <img src={getPictureRef()} />
            }
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