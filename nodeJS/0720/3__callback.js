function func1(callback){
    callback();
}
function func2(a){
    console.log( "안녕" );
}

func1(func2)


// 콜백함수는 대체로 이름이 없음.
// 