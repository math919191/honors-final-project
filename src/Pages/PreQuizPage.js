export function PreQuizPage(props){
    return (
        <div>
            <h1>PreQuizPage</h1>

            <div class="slidecontainer">
                <p>Question 1</p>
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                <p>Question 2</p>
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                <p>Question 3</p>
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                <p>Question 4</p>
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
            </div>
            <button onClick={() => props.nextPageFunction()}>Click here to select a quiz</button>

        </div>
    )
}