export function HomePage(props){

    return (
        <div>
            <h1 style="color:blue;">Home Page</h1>
            <p>Some paragraph description about our page</p>
            <button onClick={() => props.nextPageFunction()}>Click here to take the quiz</button>
        </div>
    )
}