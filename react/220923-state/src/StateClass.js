import React, { Component } from 'react';

class StateClass extends Component {
    // 예전 문법.
    // constructor(props) {
    //     super(props);

    //     // state를 정의해줄거임.
    //     this.state = {
    //         name: "SeSAC",
    //         list: ['s', 'e', 's', 'a', 'c']
    //     };
    // }

    // 구조체를 쓰지 않아도 state만 써서 사용 가능.
    state = {
        name: "SeSAC",
        cnt: 0,
        list: ['s', 'e', 's', 'a', 'c']
    }
    // props 및 constructor를 안쓸때 이렇게 state만 쓰면 됨.
    
    render() {
        return (
            <div>
                <div> {this.state.name} StateClass {this.state.cnt} </div>
                {/* state를 여러개 바꾸고 싶으면 둘 다 적어주면 됨. */}
                <button onClick={()=>{ 
                    // 글자만 쓰면 안보이니까 cnt라는 state를 추가해줬음. // cnt 비동기적 처리임 지금.
                    // this.setState({name : "청년취업사관학교", cnt: this.state.cnt+1});
                    // this.setState({name : "영등포캠퍼스", cnt: this.state.cnt+1});
                    
                    // prevState는 기존상태를 가져오는 친구
                    // 기존 상태를 불러와서 바꾸고 가는 것.
                    // setState를 연달아 사용할 일이 없음. (하단 코드는 그렇게 잘 쓰이지는 않지만 보여주려고 쓴 코드.)
                    this.setState(prevState => {
                        return { cnt : prevState.cnt + 1 }
                    });
                    this.setState(prevState => {
                        return { cnt : prevState.cnt + 1 }
                    });
                    }}>클릭</button>
                <button onClick={()=>{ this.setState({list : ['c', 'l', 'i']})}}>클릭2</button>
                <ul>
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>
        
            </div>
        )
    }
}

export default StateClass;

// class Car {
//     constructor() {
//         this.name = "자동차";
//     } // constructor
// }