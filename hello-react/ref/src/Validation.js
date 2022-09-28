import React, { Component } from 'react';
import './Validation.css';

class Validation extends Component {
    state = {
        password: "",
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === "0000"
            // 위에 validated에서 true나 false값 가지게 만들어뒀으므로
            // this.state.paseword === "0000"를 충족하면 true가 되는것.
        });
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? "success" : "failure") : "" }
                />
                <button onClick={this.handleButtonClick}>검증</button>
            </div>
        );
    }
}

export default Validation;