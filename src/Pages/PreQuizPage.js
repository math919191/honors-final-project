import questions from "../assets/prepostquizquestions.json";
import Button from 'react-bootstrap/Button';


export function PreQuizPage(props){


    function getQuestionRender(question){
        if (question.questiontype.toLowerCase() == "pre"){
            return (
                <>
                    <p class="prequizquestion">{question.question}</p>
                    <textarea id="answer" name="answer" rows="4" cols="50">
                    </textarea>
                </>
            )
        }
    }


    return (

        <div class="filler">
            <h1 class="resulttitle">Pre Quiz Questions</h1>
            <div class="prequiz">
                {questions.map( (element) => (
                    getQuestionRender(element)
                ))}
            </div>
            <br/>
            <Button onClick={() => props.nextPageFunction()}>Click here to take the quiz</Button>

        </div>
    )
}