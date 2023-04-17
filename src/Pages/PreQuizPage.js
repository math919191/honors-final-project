
import React, { useState } from 'react';
import Slider from 'react-input-slider';

export function PreQuizPage(props){
    const [state, setState] = useState({ x: 15, y: 15 });

    return (
        <div>
            <h1>PreQuizPage</h1>

            <div class="slidecontainer">
                <p>Question 1 This now now question test</p>
                
                <Slider
                    axis="x"
                    x={state.x}
                    onChange={({ x }) => setState(state => ({ ...state, x }))}
                />

                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>

            </div>
            <button onClick={() => props.nextPageFunction()}>Click here to select a quiz</button>

        </div>
    )
}