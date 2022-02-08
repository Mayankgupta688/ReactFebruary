import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render((
    React.createElement("div", {}, [
        React.createElement("h1", {}, "Hello World..."),
        React.createElement("div", {}, (
            React.createElement("h2", {}, "This is Other Content")
        )),
        React.createElement("div", {}, [
            React.createElement("div", {}, 
                React.createElement("h3", {}, "This is Sample Div")
            ), React.createElement("div", {}, 
                React.createElement("h4", {}, "This is Other div Content")
            )
        ])
    ])
), document.getElementById("root"))

// <div>
//     <h1>Hello World...</h1>
//     <div>
//         <h2>This is Other Content</h2>
//     </div>
// 
//     <div>
//         <div>
//             <h3>This is Sample Div</h2>
//         </div>
//         <div>
//             <h4>This is Other div Content</h4>
//         </div>
//     </div>
// </div> 