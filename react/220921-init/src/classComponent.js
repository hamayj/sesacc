import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
    // 클래스 컴포넌트를 만들기. extends 확장 상속기능. component의 기능을 사용하기 위해 extends 해줌.
    render() {
        return (
            <div>
                {this.props.children}
                <h2>ClassComponent - function </h2>
                <h5>name : {this.props.name} </h5>
                <h5>location : {this.props.location} </h5>
            </div>
        
            
        );
    }
    // 안바뀌는 거니까 정적타입으로 처리해 줌.
    static propTypes = {
        name: PropTypes.string
    }
}

// function ClassComponent (props){
//     return (
//         <div>
//             <h2>ClassComponent - function </h2>
//             <h5>name : {props.name} </h5>
//             <h5>location : {props.location} </h5>
//         </div>
//     )
// }

ClassComponent.defaultProps = {
    name: '기본이름',
    location: '기본위치'
}
ClassComponent.propTypes = {
    name : PropTypes.string
}
export default ClassComponent;

//클래스 컴포넌트는 이런 구조로 만들어진다. render라는 함수 안에서 return해야 함.

// 펑션 컴포넌트 쓰든 클래스 컴포넌트 쓰든 상관은 없다.
