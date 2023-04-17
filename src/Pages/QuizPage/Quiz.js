import React, { useState, useEffect } from "react";
import { Question } from "./Question";
import Button from 'react-bootstrap/Button';

function Quiz(props){
    const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [buttonTitle, setButtonTitle] = useState("");

    useEffect(() => {
        console.log("props", props)
        setUserAnswers(new Array(props.questions.length).fill(""));
        setButtonTitle("Next")
    }, [])

    function changeQuestionNum() {
        if (currentQuestionNum !== props.questions.length - 1 ){
            if (selectedAnswer !== ""){
                setCurrentQuestionNum(currentQuestionNum + 1);
                if (currentQuestionNum + 1 == props.questions.length-1){
                    setButtonTitle("Finish Quiz")
                }
                //save the user's answer
                let temp = userAnswers;
                temp[currentQuestionNum] = selectedAnswer;
                setUserAnswers(temp);
                setSelectedAnswer("")
            }
        } else {
            let temp = userAnswers;
            temp[currentQuestionNum] = selectedAnswer;
            setUserAnswers(temp);
            
            //store the user's answers in local storage
            localStorage.setItem("userAnswers", JSON.stringify(userAnswers))
            //switch to the post reflection page
            props.nextPageFunction();

        }

        
    }

    function getQuestionOptions(){
        return props.questions[currentQuestionNum].answers.split(";");
    }
    

    return (
        <div className="quizContainer">
            <div className="quiz">
                <Question 
                    question = {props.questions[currentQuestionNum].question}
                    questionOptions = {getQuestionOptions()}
                    currAnswer={selectedAnswer}
                    onChange = {(choice) => setSelectedAnswer(choice)} 
                    questionNumber = {currentQuestionNum}
                    
                />
                
                <div class="centerbutton space">
                <Button variant="primary text-center" onClick={()=>changeQuestionNum("next")}>{buttonTitle}</Button>{' '}
                </div>
                
                </div>
            </div>
    )
}

export {Quiz};