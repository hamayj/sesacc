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
class MyComponent extends Component {
    render () {
        return (
            <div>
                나의 새롭고 멋진 컴포넌트
            </div>
        );
    }
}
export default MyComponent;