import React, { Component } from "react";
import PropTypes from "prop-types";

class Prc extends Component {
    render() {
        const {text, valid} = this.props;
        return(
            <div>
                {text} <br/><br/>
                <button onClick={console.log({valid})}>콘솔 메세지</button>                
            </div>

        );
    }
}

Prc.defaultProps = {
    text : "이건 기본 text props입니다."
};

// Prc.PropTypes = {
//     text: PropTypes.string.isRequired,
// };

export default Prc;