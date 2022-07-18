const func1 = setTimeout(()=>{
    console.log("1.5초 후 실행");
}, 1500 ); //  바로 실행되는거다


const func2 = setInterval(() => {
    console.log("1초마다 반복");
}, 1000); // 1초마다 반복 // 함수를 변수에 담으면 변수명으로 함수 사용가능.

const func3 = setTimeout(( ) => {
    console.log("func3 실행");
}, 3000); // 3초후에 실행

setTimeout(( )=> {
    clearTimeout(func3);
    clearInterval(func2);
}, 2500); // 2.5초 후에 func3 멈추고, 

const func4 = setImmediate(()=> {
    console.log("func4 즉시 실행");
});

const func5 = setImmediate(()=> {
    console.log("func5 즉시 실행");
});

clearImmediate(func5);

// 타이머 흐름 다시 보기.

console.log(__filename); // 어떻게 하는거지...^^?