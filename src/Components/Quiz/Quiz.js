import React, { useState, useEffect } from "react";
import { Question } from "./Question";
import Button from 'react-bootstrap/Button';

function Quiz(props){
    const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    
    useEffect(() => {
       setUserAnswers(new Array(props.questions.length).fill(""));
    }, [])

    function getEmptyArray(length){
        let array = []
        for (let i = 0; i < props.questions.length; i++){
            array.push("");
        }
        return array;
    }

    function changeQuestionNum(direction) {
        let success = false
        if (direction == "prev"){
            if (currentQuestionNum !== 0){
                setCurrentQuestionNum(currentQuestionNum - 1);
                success = true;
            }
        } else if (selectedAnswer != "" && direction == "next"){
            if (currentQuestionNum !== props.questions.length - 1 ){
                setCurrentQuestionNum(currentQuestionNum + 1);
                success = true;
            }
        }
        if (success){
            let temp = userAnswers;
            temp[currentQuestionNum] = selectedAnswer;
            setUserAnswers(temp);
            setSelectedAnswer("")
            console.log(selectedAnswer)    
        }
        console.log(userAnswers)
        
        if (direction == "next" && currentQuestionNum == props.questions.length - 1 ){
            let temp = userAnswers;
            temp[currentQuestionNum] = selectedAnswer;
            setUserAnswers(temp);
            props.onEndOfQuiz(userAnswers);
        }
        
    }

    

    return (
        <div>
            Quiz
            <Question 
                question = {props.questions[currentQuestionNum].question}
                questionOptions = {props.questions[currentQuestionNum].answers}
                currAnswer={selectedAnswer}
                onChange = {(choice) => setSelectedAnswer(choice)} 
                
            />
            <Button variant="primary" onClick={()=>changeQuestionNum("prev")}>Previous</Button>{' '}
            <Button variant="primary" onClick={()=>changeQuestionNum("next")}>Next</Button>{' '}

        </div>
    )
}

export {Quiz};