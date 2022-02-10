import React from "react";

export default class TimerComponent extends React.Component {
    constructor() {
        debugger;
        super();
        this.userName = "Mayank";
        this.state = {
            counter: 0
        }

        this.incrementCounter = this.incrementCounter.bind(this);
        this.forceRenderConponent = this.forceRenderConponent.bind(this);
    }

    forceRenderConponent() {
        this.state.counter = this.state.counter + 1;
        this.forceUpdate();
    }

    incrementCounter() {
        debugger
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Class Counter Value is {this.state.counter}</h1>
                <h2>User Name for the Program is {this.userName}</h2>
                <input type="button" onClick={this.incrementCounter} value="Increment Counter" />
                <input type="button" onClick={this.forceRenderConponent} value="Force Increment Counter" />
            </div>
        )
    }
}