import React, { useState, useEffect } from "react";

export function SingleResult(props){

    return (
        <div className="card result w-50 indivtext">
            <div className="card-header">
                Question: {props.questionNum + 1} 
            </div>
            <div className="card-body">
                <h5 className="card-title">
                You answered: {props.userResponse} <br/>
                The Correct Answer: {props.correctResponse}
                </h5>
                <p>Most people don't understand....
                    You can look look at the following websites for more information:
                    - website1
                    - website2
                </p>
            </div>

        </div>
    )
}