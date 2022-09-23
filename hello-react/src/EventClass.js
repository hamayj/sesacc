import React, { Component } from 'react';

class Event extends Component {
    state = {
        username: "",
        message : ""
    }

    // constructor(props) {
    //     super(props);
    //     this.eventChange = this.eventChange.bind(this);
    //     this.eventClick = this.eventClick.bind(this);
    // }
    // 함수가 호출될 때 this는 호출부에 따라 결정되는데, 
    // 임의 메서드가 특정 html요소의 이벤트로 등록되면서 메서드와 this의 관계가 끊어지게 됨.
    // -> 하단부의 button에서 이벤트로 등록되면서 this(Event)라는 의미가 끊어지게 되고 껍데기인 this만 남게됨.
    // -> 따라서 임의 메서드가 이벤트로 등록돼도 this가 컴포넌트 자신을 가리키게 하기 위해서 메서드를 this와 바인딩하는 작업(묶어주기)가 필요함.
    // 만약 바인딩을 하지 않는다면 this는 undefined를 가리키게 됨. 따라서 이 constructor 함수에서 함수를 바인딩하는 작업을 하고 있는 것.


    // // 여기서는 메서드 이름을 정하고 아까 써준 코드를 그대로 써줬음. 메서드 이름은 아무거나 가능.
    // eventChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     })
    // }

    // eventClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ""
    //     });
    // }

    // 화살표 함수형태로 메서드를 정의하면 좀 더 간단히 작성 가능.
    eventChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    // 여기 중요함. key를 []로 감싸면 그 안에 넣은 실제 값이 key로 사용됨. 

    eventClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: "",
            message: ""
        });
    }

    eventKeyPress = (e) => {
        if ( e.key === "Enter") {
            this.eventClick();
        }
    }


    render() {
        return (
            <div>
                <h1>리액트의 이벤트!</h1>

                <input  
                    type="text"
                    name="username"
                    placeholder='사용자 이름'
                    value = {this.state.username}
                    onChange={ this.eventChange }
                />
                
                <input
                    type="text"
                    name="message"
                    placeholder="이곳에 입력해보세요"
                    value = {this.state.message}
                    onChange = {this.eventChange}
                    onKeyPress = {this.eventKeyPress}
                />    
                <button onClick={ this.eventClick }>인풋 옮겨가기</button>    
            </div>
        );
    }
}

export default Event;

// 클래스형 컴포넌트로 만들었음.



// import React, { Component } from 'react';

// class Event extends Component {
//     state = {
//         message : ""
//     }

//     render() {
//         return (
//             <div>
//                 <h1>리액트의 이벤트!</h1>

//                 <input  
//                     type="text"
//                     name="message"
//                     placeholder='이곳에 입력하세요'
//                     value = {this.state.message}
//                     onChange={
//                         (e) => {
//                             // console.log(e);
//                             this.setState({
//                                 message : e.target.value
//                             });
//                             // console.log(this.state.message);
//                             // console.log(e.target.value);
//                         }
//                     }
//                 />
//                 {/* <button
//                     onClick={alert(this.state.message)} */}
                
//                 <button onClick={
//                     () => {
//                         alert(this.state.message);
//                         this.setState({
//                             message: ""
//                         });
//                     }
//                 }>인풋 옮겨가기</button>    
//             </div>
//         );
//     }
// }

// export default Event;

// // 클래스형 컴포넌트로 만들었음.