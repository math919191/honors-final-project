import {Results} from './AnswersPageComponents/Results'
import React, { useState, useEffect } from "react";

export function AnswersPage(props){

    useEffect(() => {
        
    }, [])
    
    return (
        <div>
            <Results questions={props.questions}/>
            {/* <button onClick={() => props.changePage("ResourcesPage")}>Look at more resources! </button> */}
            {/* <p>There used to be a link to a resources page...are we still doing that? </p> */}
            <button onClick={() => props.changePage("SelectAreaPage")}>Take another quiz!</button>
            <button onClick={() => props.changePage("HomePage")}>Go back to the Home page</button>


        </div>
    )
}