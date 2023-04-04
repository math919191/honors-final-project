export function ResourcesPage(props){
    return (
        <div>
            <h1>ResourcesPage</h1>
            <p>Look here!</p>
            <p>Look here!</p>
            <p>Look here!</p>
            <p>Look here!</p>


            <button onClick={() => props.changePage("AnswersPage")}>Look at your Results again!</button>

            <button onClick={() => props.changePage("PreQuizPage")}>Take another quiz!</button>
            
            <button onClick={() => props.changePage("HomePage")}>Go back to the Home page</button>

        </div>
    )
}