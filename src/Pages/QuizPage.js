import { Quiz } from "./QuizPage/Quiz";

export function QuizPage(props){
    return (
        <Quiz questions={props.questions}
            nextPageFunction = {() => props.nextPageFunction()}
        />
    )
}