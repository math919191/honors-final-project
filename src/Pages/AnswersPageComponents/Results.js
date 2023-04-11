
import { SingleResult } from "./SingleResult";
import React, { useState, useEffect } from "react";
import './results.css'

function Results(props){

    const [userAnswers, setUserAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);

    const [percentCorrect, setPercentCorrect] = useState(0);


    useEffect(() => {
        let array1 = JSON.parse(localStorage.getItem("userAnswers"))
        setUserAnswers(array1);
        let array2 = [];

        props.questions.forEach(element => {
            let correctAnswer = element.answers.split(";")[element.correctAnswer - 1];
            array2.push(correctAnswer);
        });

        setCorrectAnswers(array2);
 
        let counter = 0;
        for (let i = 0; i < array1.length; i++){
            if (array1[i] == array2[i]){
                counter++;
            }
        }

        let score = Math.round((counter/array1.length)*100);
        setPercentCorrect(score)
        localStorage.setItem("score", score )



     }, [])
    
    return (
        <div>
            
            <div className="results">
                <h2>You got {percentCorrect}% correct!</h2>
                {userAnswers.map((userResponse, index) => (
                    <SingleResult 
                        questionNum={index}
                        userResponse={userResponse}
                        // correctResponse={props.correctResponses[index]}
                        correctResponse = {correctAnswers[index]}
                        explanation={props.questions[index].explanation}
                        source={props.questions[index].source}

                        />
                    ))}
            </div>
            <br/>
        </div>
    )
}

export {Results};