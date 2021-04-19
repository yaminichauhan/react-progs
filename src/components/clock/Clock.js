import React, { Component } from 'react';

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>TIME NOW : {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
