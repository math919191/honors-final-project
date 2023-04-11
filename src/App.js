import { AnswersPage } from "./Pages/AnswersPage"
import { HomePage } from "./Pages/HomePage"
import { NotFoundPage } from "./Pages/NotFoundPage"
import { PostQuizPage } from "./Pages/PostQuizPage"
import { PreQuizPage } from "./Pages/PreQuizPage"
import { QuizPage } from "./Pages/QuizPage"
import { ResourcesPage } from "./Pages/ResourcesPage"

import React, { useState, useEffect } from "react";
import { SelectAreaPage } from "./Pages/SelectAreaPage"

import realQuestions from './QuestionsFromGoogleSheets.json';


function App(){

    const [currentPage, setCurrentPage] = useState("");
    const [currentArea, setCurrentArea] = useState("");

    useEffect(() => {
        setCurrentPage("HomePage");

                
    }, [])

    function setArea(area){
        setCurrentArea(area);
    }
    
     function getCurrentPage(pageName){
        switch(pageName){
            case "HomePage":
                return <HomePage nextPageFunction = {() => setCurrentPage("PreQuizPage")}/>
            case "PreQuizPage":
                return <PreQuizPage nextPageFunction = {() => setCurrentPage("SelectAreaPage")}/>
            case "SelectAreaPage":
                return <SelectAreaPage nextPageFunction = {() => setCurrentPage("QuizPage")}
                                        setAreaFunction = {(area) => setArea(area)}
                                        possibleAreas = {Object.keys(realQuestions)}
                                        />
            case "QuizPage":
                return <QuizPage nextPageFunction = {() => setCurrentPage("PostQuizPage")}
                    questions={realQuestions[currentArea]}
                />
            case "PostQuizPage":
                return <PostQuizPage nextPageFunction = {() => setCurrentPage("AnswersPage")}/>
            case "AnswersPage":
                return <AnswersPage questions={realQuestions[currentArea]}
                                changePage = {(pageName) => setCurrentPage(pageName)}

                                />
            case "ResourcesPage":
                return <ResourcesPage
                    changePage = {(pageName) => setCurrentPage(pageName)}
                />
            default:
                return <NotFoundPage />
        }
    }

    return (
        <p>{getCurrentPage(currentPage)}</p>
    )
}
export default App;