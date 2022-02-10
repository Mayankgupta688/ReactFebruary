import React from 'react';

export default class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }

        this.changeData = this.changeData.bind(this);
    }

    changeData(event) {
        debugger;
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>The current User is: {this.state.name}</h1>
                Enter Name: <input type="text" value={this.state.name} onChange={this.changeData} />
            </div>
        )
    }
}