import React, { useState, useEffect } from "react";
import { Question } from "./Question";

function Quiz(props){
    const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [buttonTitle, setButtonTitle] = useState("");

    useEffect(() => {
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
            //props.onEndOfQuiz(userAnswers);
            
            //store the user's answers in local storage
            localStorage.setItem("userAnswers", JSON.stringify(userAnswers))
            //switch to the post reflection page
            props.nextPageFunction();

        }

        
    }

    

    return (
        <div className="quiz">
            <Question 
                question = {props.questions[currentQuestionNum].question}
                questionOptions = {props.questions[currentQuestionNum].answers}
                currAnswer={selectedAnswer}
                onChange = {(choice) => setSelectedAnswer(choice)} 
                questionNumber = {currentQuestionNum}
                
            />
            <div className="buttons">
                <button variant="primary" onClick={()=>changeQuestionNum("next")}>{buttonTitle}</button>{' '}
            </div>
        </div>
    )
}

export {Quiz};