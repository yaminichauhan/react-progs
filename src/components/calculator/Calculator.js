import React, { Component } from 'react';

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calculatedValue: 0
        }

        this.clickNumber = this.clickNumber.bind(this);
        this.clearCalculatedValue = this.clearCalculatedValue.bind(this);
        this.findCalculatedValue = this.findCalculatedValue.bind(this);
    }

    clickNumber(e) {
        if(this.state.calculatedValue === 0 ){
            this.setState({
                calculatedValue: e.target.value
            })
        }
        else {
            this.setState({
                calculatedValue: this.state.calculatedValue + e.target.value
            }) 
        }
    }

    clearCalculatedValue() {
        this.setState({
            calculatedValue: 0
        })
    }

    findCalculatedValue() {
        this.setState({
            calculatedValue: eval(this.state.calculatedValue)
        })
    }

    render() {
        return(
            <div>
                <center>
                    <textarea value={this.state.calculatedValue}></textarea>
                    <br></br>
                    <button value="(" onClick={this.clickNumber}>(</button>
                    <button value=")" onClick={this.clickNumber}>)</button>
                    <button value="%" onClick={this.clickNumber}>%</button>
                    <button onClick={this.clearCalculatedValue}>AC</button>
                    <br></br>
                    <button value="7" onClick={this.clickNumber}>7</button>
                    <button value="8" onClick={this.clickNumber}>8</button>
                    <button value="9" onClick={this.clickNumber}>9</button>
                    <button value="/" onClick={this.clickNumber}>/</button>
                    <br></br>
                    <button value="4" onClick={this.clickNumber}>4</button>
                    <button value="5" onClick={this.clickNumber}>5</button>
                    <button value="6" onClick={this.clickNumber}>6</button>
                    <button value="*" onClick={this.clickNumber}>*</button>
                    <br></br>
                    <button value="1" onClick={this.clickNumber}>1</button>
                    <button value="2" onClick={this.clickNumber}>2</button>
                    <button value="3" onClick={this.clickNumber}>3</button>
                    <button value="-" onClick={this.clickNumber}>-</button>
                    <br></br>
                    <button value="0" onClick={this.clickNumber}>0</button>
                    <button value="." onClick={this.clickNumber}>.</button>
                    <button onClick={this.findCalculatedValue}>=</button>
                    <button value="+" onClick={this.clickNumber}>+</button>
                </center>
            </div>
        )
    }
}