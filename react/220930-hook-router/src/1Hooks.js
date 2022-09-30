import {useState, useEffect} from 'react';

const Hook = () => {
    const [name, setName] = useState("");
    const [cnt, setCnt] = useState(0);

    const changeName = e => {
        setName(e.target.value);
    }
    
    const changeCnt = () => {
        setCnt(cnt + 1);
    }

    // useEffect(() => {
    //     console.log("useEffect");
    //     console.log("name : ", name);
    // }, [name]); // 내가 검사하고 싶은 state를 넣어줌으로써 실행할 수 있음.

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.name != this.state.name) {
    //         // 실행
    //     }
    // }


    useEffect(() => {
        console.log("name1 :", name);
        return () => {
            console.log("name2 :", name);
        }
    })
    return (
        <div>
            <div>
                <input value={name} onChange={changeName} />
                <button onClick={changeCnt} > +1 </button>
            </div>
            <h3>이름 : {name}</h3>
            <h4>횟수 : {cnt}</h4>
        </div>
    )
}

export default Hook;