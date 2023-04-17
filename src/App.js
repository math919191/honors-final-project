import { AnswersPage } from "./Pages/AnswersPage"
import { HomePage } from "./Pages/HomePage"
import { NotFoundPage } from "./Pages/NotFoundPage"
import { PostQuizPage } from "./Pages/PostQuizPage"
import { PreQuizPage } from "./Pages/PreQuizPage"
import { QuizPage } from "./Pages/QuizPage"
import { ResourcesPage } from "./Pages/ResourcesPage"

import React, { useState, useEffect } from "react";
import { SelectAreaPage } from "./Pages/Map/SelectAreaPage"

import realQuestions from './assets/QuestionsFromGoogleSheets.json';

import './App.css'

function App(){

    const [currentPage, setCurrentPage] = useState("");
    const [currentArea, setCurrentArea] = useState("");
    const [includePrePostQuiz, setIncludePrePostQuiz] = useState(true);



    useEffect(() => {
        setCurrentPage("HomePage");

                
    }, [])

    function setArea(area){
        setCurrentArea(area);
    }
    
     function getCurrentPage(pageName){
        switch(pageName){
            case "HomePage":
                let nextPage = (includePrePostQuiz ? "PreQuizPage" : "SelectAreaPage")
                return <HomePage nextPageFunction = {() => setCurrentPage(nextPage)}/>
                
            case "PreQuizPage":
                return <PreQuizPage nextPageFunction = {() => setCurrentPage("SelectAreaPage")}/>
            case "SelectAreaPage":
                return <SelectAreaPage nextPageFunction = {() => setCurrentPage("QuizPage")}
                                        setAreaFunction = {(area) => setArea(area)}
                                        possibleAreas = {Object.keys(realQuestions)}
                                        />
            case "QuizPage":
                let nextPageFromQuiz = (includePrePostQuiz ? "PostQuizPage" : "AnswersPage")
                return <QuizPage nextPageFunction = {() => setCurrentPage(nextPageFromQuiz)}
                    questions={realQuestions[currentArea]}
                />

                // return <QuizPage nextPageFunction = {() => setCurrentPage("PostQuizPage")}
                //     questions={realQuestions[currentArea]}
                // />
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
        <>{getCurrentPage(currentPage)}</>
    )
}
export default App;