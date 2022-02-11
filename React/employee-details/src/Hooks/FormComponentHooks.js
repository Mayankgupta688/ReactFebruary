import React, { useState } from 'react';

export default function FormComponentHooks() {

    var [name, setName] = useState("Mayank");
    
    function changeData(event) {
        setName(event.target.value)
    }

    return (
        <div>
            <h1>The current User is: {name}</h1>
            Enter Name: <input type="text" value={name} onChange={changeData} />
        </div>
    )
}