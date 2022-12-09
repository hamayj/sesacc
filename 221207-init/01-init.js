// 변수
// 키워드 변수이름 : 타입 = 값;
var str1 = '문자열';
var num1 = 1;
var flag = true;
var any;
any = 1;
any = '문자';
any = false;
any = []; // object 타입도 허용하는 any
// 실행전 오류를 체크할 수 있는 것이 ts의 장점.
var arr1 = [1, 2, 3, 4, 5]; // number[] : 숫자만 받을 수 있는 배열
arr1.push(6);
var arr2 = ['a', 'b', 'c'];
// 튜플 : 배열의 길이가 고정되어 있고 타입도 지정돼있음. 
var arr3 = ['1', 2]; // 0번째 인덱스에 string이 들어와야 하고 1번째 인덱스에 number가 들어와야함.
// object : 기본형 외에 모든 것 다 넣을 수 있음.
var arr4 = [1, 'a'];
// enum : select box를 미리 만들어 놓은 것. 내가 지정한 값 중에서만 가질 수 있게 만드는 것.
var Values;
(function (Values) {
    Values[Values["\uAC121"] = 0] = "\uAC121";
    Values[Values["\uAC122"] = 1] = "\uAC122";
})(Values || (Values = {}));
;
var v1; // v1변수는 값1, 값2 중에서만 선택할 수 있음.
v1 = Values.값1;
// v1 = 값2; <- 오류
// Union : 어떤 것 중에 선택이 가능한지 적는 것,
var v2;
v2 = 1;
v2 = 'a';
v2 = true;
// 함수
/* function 함수이름(매개변수: 타입) : 반환값 타입 {
    return 반환값
}
*/
// function sum1(a,b){
//     return a + b;
// }
// // b? b변수를 옵셔널 하게 만든 것.
// function sum2(a: number, b?:number) : number {
//     return a + b;
// }
// console.log( sum2(1,2));
// console.log( sum2(3));
const func1 = (a) => {
    console.log("func1");
};
function func2() {
    console.log("func2");
}
