/*
    function 함수이름 (변수명 : 타입) : 반환 타입 {}
*/


function sum1(a, b) {
    return a + b;
}
console.log(sum1(1,'1')); 
console.log(sum1(1 ,null));  // 안보내더라도 null이나 undefined라도 넣어줘야 됨. 

function sum2 (a: number, b : number) : number {
    return a+b;
}

// ts 화살표 함수?

console.log(sum2(1,2));


// ?를 넣으면 number 혹은 undefined를 가질 수 있게 됨. (union처럼..^^)
function sum3 (a: number, b?:number): number {
    return a+b;
}

console.log(sum3(1 ));

const tstfunction = () => {
    return 'test'
}
console.log(tstfunction());


let person = { name : "코딩온", age: 10};

function getInfo(obj : {name : string, age: number}){
    
}

// interface: 우리끼리 미리 정해놓는 규칙.
// 객체 속성이나 파라미터 등에 많이 사용.
// 여러군데에서 정의해야 될 때 인터페이스를 많이 사용함.
interface PersonData {
    readonly name : string;
    age : number;
    nickname?: string;
}

function getInfo2(obj : PersonData) {

}

let person2:PersonData = { name : "코딩온", age: 10};

person2.age = person2.age + 1;
// person2.name = 'gg';  // readonly를 지정하면 읽기 전용으로 변경 불가. 

interface login {
    (id : string, pw: string) : boolean
};

let loginUser:login = (id, pw) => {
    return true;
}

interface Book {
    title : string;
    getInfo() : void;
    changeTitle(newTitle: string) : void;
}

class MyBook implements Book {
    title = "hamane";
    date = '';
    getInfo(){
        console.log("하마짱");
    }
    changeTitle(newTitle: string): void {
        
    }
}