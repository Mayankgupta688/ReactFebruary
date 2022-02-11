import React, { useState } from "react";

export default function UsingUseStateHookInterval() {

    var [counter, setCounter] = useState(0);

    setTimeout(() => {
        setCounter(counter + 1);
    }, 1000)

    return (
        <div>
            <h1>Current Counter is {counter}</h1>
        </div>
    )
}