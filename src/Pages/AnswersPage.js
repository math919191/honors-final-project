import {Results} from './AnswersPageComponents/Results'
import React, { useEffect } from "react";
import "../Components/CSS/homepage.css";
import Button from 'react-bootstrap/Button';

export function AnswersPage(props){

    useEffect(() => {
        
    }, [])
    
    return (
        <div>
            <Results questions={props.questions}/>
            {/* <button onClick={() => props.changePage("ResourcesPage")}>Look at more resources! </button> */}
            <div className='answersbottom'>
                <p>There used to be a link to a resources page...are we still doing that? </p>
                <Button className="buttonspace" onClick={() => props.changePage("SelectAreaPage")}>Take another quiz!</Button>
                <Button onClick={() => props.changePage("HomePage")}>Go back to the Home page</Button>
            </div>

        </div>
    )
}