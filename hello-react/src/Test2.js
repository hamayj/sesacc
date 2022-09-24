import React, { Component } from "react";
import muhan from "./test2.jpg"

    class Test2 extends Component {
        render() {
            const style = {
                color : "orange",
                fontSize : "40px",
                marginTop : "20"
            } 
            return(
                <div style={style}> 
                {/* 이렇게 쓰는게 맞는건가? */}
                    <h2>🙋‍♀️안녕하세요🙋‍♀️</h2>
                    <img src={muhan}></img>
                </div>
            );            
        }
    }
    // style을 지정하려는데 딕셔너리 형태라는 것 들은 기억만 남.

export default Test2;