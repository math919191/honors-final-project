import { AnswersPage } from "./Pages/AnswersPage"
import { HomePage } from "./Pages/HomePage"
import { NotFoundPage } from "./Pages/NotFoundPage"
import { PostQuizPage } from "./Pages/PostQuizPage"
import { PreQuizPage } from "./Pages/PreQuizPage"
import { QuizPage } from "./Pages/QuizPage"
import { ResourcesPage } from "./Pages/ResourcesPage"

import React, { useState, useEffect } from "react";
import { SelectAreaPage } from "./Pages/SelectAreaPage"

import questions from './DataQuestions.json';
import answers from './CorrectAnswers.json';


function App(){

    const [currentPage, setCurrentPage] = useState("");
    const [currentArea, setCurrentArea] = useState("");

    useEffect(() => {
        setCurrentPage("HomePage");
        localStorage.setItem("correctAnswers", JSON.stringify(answers.correctAnswers))
        console.log(answers.correctAnswers)
    }, [])
    
     function getCurrentPage(pageName){
        switch(pageName){
            case "HomePage":
                return <HomePage nextPageFunction = {() => setCurrentPage("PreQuizPage")}/>
            case "PreQuizPage":
                return <PreQuizPage nextPageFunction = {() => setCurrentPage("SelectAreaPage")}/>
            case "SelectAreaPage":
                return <SelectAreaPage nextPageFunction = {() => setCurrentPage("QuizPage")}
                                        setAreaFunction = {(area) => setCurrentArea(area)}/>
            case "QuizPage":
                return <QuizPage nextPageFunction = {() => setCurrentPage("PostQuizPage")}
                    questions={questions}
                    // TOO load the questions based on the selected area 
                />
            case "PostQuizPage":
                return <PostQuizPage nextPageFunction = {() => setCurrentPage("AnswersPage")}/>
            case "AnswersPage":
                return <AnswersPage correctResponses={answers.correctAnswers}
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