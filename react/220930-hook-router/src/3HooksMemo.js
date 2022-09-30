import { useState, useMemo, useCallback, useEffect, useRef } from 'react';

function getAverage(list) {
    console.log("getAverage");
    console.log( list );
    var sum = 0;
    if (list.length == 0) return sum;
    for( let i =0; i<list.length; i++){
        sum = sum + list[i];
    }
    return sum / list.length;
}

const Memo = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    // const onChange = e => {
    //     setNum(e.target.value);
    // }

    // useRef createRef 쓴것과 비슷함.
    // Ref 기본값이 없을 때 아무것도 안보내거나 null로 주로 보냄.
    const input = useRef(null);

    // const onInsert = e => {
    //     setList([...list, parseInt(num)]);
    //     setNum(0); // 여기서 왜 setNum(0)?
    // } // 왜 지웠지?



    const onChange = useCallback(e => {
        setNum(e.target.value);
        }, []);
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(num));
        setList(nextList);
        setNum("");
    }, [num, list]);
    

    // const avg = useMemo(() => getAverage(list), [list]);
    // 렌더링 할때 렌더링 하는 과정에서 두번째 인자로 받은 값이 바뀔 때만 1번째 파라미터(함수)를 실행하라)
    // 원하는 값이 바뀔 때만 실행할 수 있게 해주는.


    const [avg, setAvg] = useState(0);
    useEffect(() => {
        setAvg(getAverage(list));
    }, [list]);

    return (
        <div>
            <input value={num} onChange={onChange} ref={input}/>
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v,i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값 : {avg}</b>
            </div>
        </div>
    )
}
export default Memo;