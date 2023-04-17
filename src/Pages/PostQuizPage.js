import questions from "../assets/prepostquizquestions.json"


export function PostQuizPage(props){


    function getQuestionRender(question){
        if (question.questiontype.toLowerCase() == "post"){
            return (
                <>
                    <p>{question.question}</p>
                    <textarea id="answer" name="answer" rows="4" cols="50">
                    </textarea>
                </>
            )
        }
    }


    return (

        <div class="filler">
            <h1>Post Quiz Questions</h1>
            {questions.map( (element) => (
                getQuestionRender(element)
            ))}
            <br/>
            <button onClick={() => props.nextPageFunction()}>Click here to see how you did</button>

        </div>
    )
}