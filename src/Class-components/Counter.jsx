import React, { Component } from 'react'


export default class Counter extends Component {
    // step1. initialize state
    constructor(props) {  //accept prps as aparameter//
        super(props);  //used to invoke parent componenet//
        this.state = { count: 0 };
    }


    //step 2: define methods to modify state//

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    
    //step 3: render ui
    render() {
        return (
            <div>
                <h2>count: {this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>

            </div>
        )
    }
}
