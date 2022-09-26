import React, { useState } from "react";

// const Sample = () => {
//     return(
//         <div>
//             <li>청바지</li>
//             <li>패딩</li>
//             <li>반팔</li>
//             <li>운동화</li>
//         </div>
//     );
// }

const Sample = () => {
    const [names, setNames] = useState([
        { id: 1, text:'청바지'},
        { id: 2, text:'패딩'},
        { id: 3, text:'반팔'},
        { id: 4, text:'운동화'},
    ]); // 이번엔 객체형태로 이뤄진 배열을 만듦. (고유id와 문자열이 있는 객체)

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    // 새로운 항목을 추가할 때 사용할 id

    // 새로운 데이터를 등록할 수 있는 기능을 구현.
    const onChange = (e) => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id );
        setNames(nextNames);
    }

    const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
    return (
        <div>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>

            <ul>
                {namesList}
            </ul>       
        </div>

    );
    // const fashion = ["청바지", "패딩", "반팔", "운동화"];
    // // 문자열로 구성된 배열 선언
    // const fashionList = fashion.map((fashion, index) => <li key={index}>{fashion}</li>);
    // // 그 배열값을 사용해 jsx 코드로 된 배열을 새로 생성.
    // return(
    //     <ul>{fashionList}</ul>
    // )
};

export default Sample;