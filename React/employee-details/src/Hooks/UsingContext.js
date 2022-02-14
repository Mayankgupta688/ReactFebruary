import React, {useState, useContext} from "react";

var contextData = React.createContext({});

export default function GrandParent() {
    var [details, setDetails] = useState({
        village: "Haryana",
        surName: "Gupta",
        counter: 1
    })

    setTimeout(() => {
        setDetails({
            ...details,
            counter: details.counter + 1
        })
    }, 1000)
    return (
        <contextData.Provider value={details}>
            <h1>Counter Value {details.counter}</h1>
            <h2>This is Grand Parent</h2>
            <h4>Village Name: {details.village}</h4><hr/>
            <Parents {...details}></Parents>
        </contextData.Provider>
    )
}

function Parents() {
    return (
        <div>
            <h2>This is Parent</h2><hr/>
            <Children></Children>
        </div>
        
    )
}

function Children() {
    return (
        <div>
            <h2>This is Children</h2><hr/>
            <GrandChildren></GrandChildren>
        </div>
        
    )
}

function GrandChildren() {
    return (
        <div>
            <h2>This is Grand Children</h2><hr/>
            <GrandGrandChildren></GrandGrandChildren>
        </div>
        
    )
}

function GrandGrandChildren() {
    var dataFromContext = useContext(contextData);
    return (
        <div>
            <h1>Counter Value {dataFromContext.counter}</h1>
            <h2>This is Grand Grand Children</h2>
            <h4>Village Name from Grand Parent {dataFromContext.village}</h4><hr/>
        </div>
    )
}