// 콘솔 객체에서 자주 쓰이는 함수 볼거임.
// 콘솔 객체는 출력하는데 그냥 출력 형태만 확인한 것.

const obj = {
    out: {
        in : {
            key: 'value'
        }
    }
};

console.log(obj);
console.log(obj["out"]);
console.log(obj["out"]["in"]);

console.time("시간"); // time 부터 타임엔드까지 걸린 시간을 밀리초 단위로 보여줌


console.timeEnd("시간"); // 이 사이에는 레이블이 들어가고 레이블이 동일해야 시작과 끝을 체크 가능

console.error("에러!"); 
console.trace("이름은 내맘대로"); // 몇번째 줄에서 에러났는지 체크 가능.

console.table([{name: 'abc', birth:1990}, {name:'def', birth:1980}]);

console.dir(obj, {colors:true, depth: 2});
console.dir(obj, {colors:false, depth: 1});
//두개의 파라미터를 받음. 변수나 배열, 옵션을 받음