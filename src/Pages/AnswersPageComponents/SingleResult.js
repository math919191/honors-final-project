import React, { useState, useEffect } from "react";

export function SingleResult(props){

    function getCorrectNess(){
        return (props.userResponse == props.correctResponse ? 'correct' : 'incorrect');
    }

    return (
        <div className="card result w-50">

            <div className={"card-header " + getCorrectNess()}>
                Question: { (props.questionNum + 1) + " -- " + getCorrectNess() } 
            </div>
            <div className="card-body">
                <h5 className="card-title">
                You answered: {props.userResponse} <br/>
                The Correct Answer: {props.correctResponse}
                </h5>
                <p>Explanation: {props.explanation}</p>
                <p>Source <a href={props.source}>Source</a></p>
            </div>

        </div>
    )
}