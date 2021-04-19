import React, { Component } from 'react';

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0 }

        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrementCounter() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    resetCounter() {
        this.setState({
            counter: 0
        })
    }

    render() {
        return (
            <div>
                <h1>Counter : {this.state.counter}</h1>
                <button onClick={this.incrementCounter}>+</button>
                <button onClick={this.decrementCounter} disabled={this.state.counter === 0 && "true"}>-</button>
                <button onClick={this.resetCounter}>RESET</button>
            </div>
        );
    }
}