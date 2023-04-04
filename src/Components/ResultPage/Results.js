
import { SingleResult } from "./SingleResult";
import React, { useState, useEffect } from "react";
import './results.css'
function Results(props){

    const [userAnswers, setUserAnswers] = useState([]);
    function getUserResponse(){
        console.log(props)
        console.log(JSON.parse(localStorage.getItem("userAnswers")))
        return JSON.parse(localStorage.getItem("userAnswers"));
    }

    useEffect(() => {
        setUserAnswers(getUserResponse());
     }, [])
    
    return (
        <div>
            <h1>Results</h1>
            <div className="results">
                {userAnswers.map((userResponse, index) => (
                    <SingleResult 
                        questionNum={index}
                        userResponse={userResponse}
                        correctResponse={props.correctResponses[index]}
                    />
                    ))}
            </div>
            <br/>
        </div>
    )
}

export {Results};