import React from "react";

export default class TimerComponent extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            counter: 0
        }

        setInterval(() => {
            debugger;
            this.setState({
                counter: this.state.counter + 1
            })
            console.log("Class: " + this.state.counter)
        }, 1000);
    }

    IncrementCounter() {}

    render() {
        debugger;
        return (
            <div>
                <h1>Class Counter Value is {this.state.counter}</h1>
                <input type="button" onClick={} value="increment Counter" />
            </div>
        )
    }
}