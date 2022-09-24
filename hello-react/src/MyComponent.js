// 함수형 컴포넌트 작성
// import React from 'react';

// const MyComponent = () => {
//     return <div>나의 새롭고 멋진 컴포넌트</div>;
// }
// export default MyComponent;

// 클래스형 컴포넌트
import React, {Component} from 'react';
// 클래스형 컴포넌트 작성시 import React, {Component} from 'react'를 써서
// Component는 import 해줘야만 컴포넌트 사용 가능.
// class MyComponent extends Component {
//     render () {
//         return (
//             <div>
//                 나의 새롭고 멋진 컴포넌트
//             </div>
//         );
//     }
// }
import PropTypes from 'prop-types'; // propTypes 불러오기
const MyComponent = ({name, favoriteNumber, children}) => {
    // const {name, children} = props;
    return (
        <div> 
            안녕하세요, 제 이름은 {name}입니다. <br/>
            children 값은 {children}
            입니다.
            <br />
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
}; // name 값은 무조건 문자열형태로 전달됨.
 
export default MyComponent;