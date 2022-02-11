import React, { useEffect, useState } from "react";

export default function UseEffectConcept1() {
    var [counter, setCounter] = useState(0);
    var [timer, setTimer] = useState(0);

    useEffect(() => {
        console.log("Use Effect Called Always")
    })

    useEffect(() => {
        console.log("Timer is Updated...")
    }, [timer])

    useEffect(() => {
        console.log("Counter is Updated...")
    }, [counter])

    useEffect(() => {
        console.log("Use Effect Called Once");
    }, [])

    function updateCounter() {
        setCounter(counter + 1)
    }

    function updateTimer() {
        setTimer(counter + 1)
    }

    return (
        <div>
            <h1>Current Counter is {counter}</h1>
            <h1>Current Timer is {timer}</h1>
            <input type="button" onClick={updateCounter} value="Update Counter" />
            <input type="button" onClick={updateTimer} value="Update Timer" />
        </div>
    )
}
