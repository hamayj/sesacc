/*
    function 함수이름 (변수명 : 타입) : 반환 타입 {}
*/
function sum1(a, b) {
    return a + b;
}
console.log(sum1(1, '1'));
console.log(sum1(1, null)); // 안보내더라도 null이나 undefined라도 넣어줘야 됨. 
function sum2(a, b) {
    return a + b;
}
// ts 화살표 함수?
console.log(sum2(1, 2));
// ?를 넣으면 number 혹은 undefined를 가질 수 있게 됨. (union처럼..^^)
function sum3(a, b) {
    return a + b;
}
console.log(sum3(1));
var tstfunction = function () {
    return 'test';
};
console.log(tstfunction());
var person = { name: "코딩온", age: 10 };
function getInfo(obj) {
}
function getInfo2(obj) {
}
var person2 = { name: "코딩온", age: 10 };
person2.age = person2.age + 1;
;
var loginUser = function (id, pw) {
    return true;
};
var MyBook = /** @class */ (function () {
    function MyBook() {
        this.title = "hamane";
        this.date = '';
    }
    MyBook.prototype.getInfo = function () {
        console.log("하마짱");
    };
    MyBook.prototype.changeTitle = function (newTitle) {
    };
    return MyBook;
}());
