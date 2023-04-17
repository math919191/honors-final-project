import React, { useState, useEffect } from "react";

export function SingleResult(props){

    function getCorrectNess(){
        return (props.userResponse == props.correctResponse ? 'correct' : 'incorrect');
    }

    return (
        <div className="card result w-50">

            <div className={"card-header " + getCorrectNess()} class="questioncorrect">
                Question: { (props.questionNum + 1) + " -- " + getCorrectNess() + " | " } 
                {props.question}
            </div>
            <div className="card-body" class="explanationdiv">
                <h5 className="card-title" class="youanswered">
                You answered: {props.userResponse} <br/>
                The Correct Answer: {props.correctResponse}
                </h5>
                <p class="explanationdiv">Explanation: {props.explanation}</p>
                <p><a href={props.source}>Source</a></p>
            </div>

        </div>
    )
}