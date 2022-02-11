import React, { useState } from "react";

export default function UsingUseStateHook() {
    var [counter, setCounter] = useState(6);

    debugger;

    function increseCounter() {
        debugger;
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>Current Counter is {counter}</h1>
            <input type="button" onClick={increseCounter} value="Add to Counter" />
        </div>
    )
}