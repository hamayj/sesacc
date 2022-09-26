import React, { Component } from "react";

class prcState extends Component {
    state = {
        number: 0
    }

    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>{ number }</h1>
                <button
                    onClick={ () => {
                        this.setState(prevState => {
                            return {
                                number : prevState.number + 2
                            }
                        });
                    }}
                >+2</button>
                <button
                    onClick={}
                >-1</button>
            </div>
        )
    }
}