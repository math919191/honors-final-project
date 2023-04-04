export function SelectAreaPage(props){

    function handleClick(){
        //TODO actually get the input from the radio buttons
        props.setAreaFunction("selectedArea");
        props.nextPageFunction()
    }

    return (
        <div>
            <p>Select Area to learn more about </p>
            <input type="radio" name="area" value="area 1"/>
            <label for="child"> area 1 </label><br/>
        
            <input type="radio" name="area" value="area 2"/>
            <label for="adult"> area 2 </label><br/>
        
            <input type="radio" name="area" value="area 3"/>
            <label for="senior"> area 3 </label>  <br/>

            <button onClick={() => handleClick() }>Submit and take the quiz </button>
  
        </div>
        )
}