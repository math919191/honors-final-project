import {Results} from './AnswersPageComponents/Results'
import React, { useState, useEffect } from "react";

export function AnswersPage(props){

    useEffect(() => {
        
    }, [])
    
    return (
        <div>
            <h1>Results</h1>
            <Results correctResponses={props.correctResponses}/>
            <button onClick={() => props.changePage("ResourcesPage")}>Look at more resources! </button>
        </div>
    )
}