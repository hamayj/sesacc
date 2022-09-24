// MyComponent를 클래스형 컴포넌트로 바꾸기

import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

class MyComponentS extends Component {
    render() {
        const {name, favoriteNumber, children} = this.props;

        return (
            <div> 
                안녕하세요, 제 이름은 {name}입니다. <br/>
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}

MyComponentS.defaultProps = {
    name: '기본 이름'
};

MyComponentS.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
}; // name 값은 무조건 문자열형태로 전달됨.
 
export default MyComponentS;