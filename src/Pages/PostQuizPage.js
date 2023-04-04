export function PostQuizPage(props){

    return (
        <div>
            <h1>PostQuizPage -- Reflect on how you did </h1>
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
            <label for="fname">Reflect Heavily about your experience...</label>
            <br/>

            <textarea name="Text1" cols="40" rows="5"></textarea>

            <br/>

            <button onClick={() => props.nextPageFunction()}>See how you did!</button>

        </div>
    )
}