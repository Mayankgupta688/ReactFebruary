import React from "react";

export default class ComponentMountedEvent extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            counter: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger;

        setTimeout(() => {
            alert(this.state.counter);
        }, 5000);

        return false;
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Class Counter Value is {this.state.counter}</h1>
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            counter: this.state.counter + 10
        })
    }
}