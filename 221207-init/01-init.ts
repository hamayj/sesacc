// 변수
// 키워드 변수이름 : 타입 = 값;

var str1:string = '문자열';
var num1:number = 1;
var flag: boolean = true;
var any: any ;

any = 1;
any = '문자';
any = false; 
any = []; // object 타입도 허용하는 any

// 실행전 오류를 체크할 수 있는 것이 ts의 장점.

var arr1:number[] = [1,2,3,4,5]; // number[] : 숫자만 받을 수 있는 배열
arr1.push(6);
var arr2: string[] = ['a', 'b', 'c'];

// 튜플 : 배열의 길이가 고정되어 있고 타입도 지정돼있음. 
var arr3: [string, number] = ['1',2]; // 0번째 인덱스에 string이 들어와야 하고 1번째 인덱스에 number가 들어와야함.

// object : 기본형 외에 모든 것 다 넣을 수 있음.
var arr4:object = [1,'a'];

// enum : select box를 미리 만들어 놓은 것. 내가 지정한 값 중에서만 가질 수 있게 만드는 것.
enum Values { 값1, 값2};
var v1:Values; // v1변수는 값1, 값2 중에서만 선택할 수 있음.
v1 = Values.값1;
// v1 = 값2; <- 오류


// Union : 어떤 것 중에 선택이 가능한지 적는 것,
var v2: string|number|boolean;
v2 = 1;
v2 = 'a';
v2 = true;


// 함수
/* function 함수이름(매개변수: 타입) : 반환값 타입 {
    return 반환값
}
*/

function sum1(a,b){
    return a + b;
}

// b? b변수를 옵셔널 하게 만든 것.
function sum2(a: number, b?:number) : number {
    return a + b;
}


console.log( sum2(1,2));
console.log( sum2(3));

const func1 = (a: string) : void => {
    console.log("func1");
}

function func2(){
    console.log("func2");
}

// 인터페이스 : 약속, 규칙을 미리 정의한 것.
// Implement로 클래스에서 받아와서도 사용 가능.
interface Student {
    name: string,
    age: number,
    nickname?: string // nickname은 option속성으로 지정. 
};

// 인터페이스를 받는 변수를 만들었음.
var stu1:Student = {
    name: 'hama',
    age: 10
}

var stu2:Student = {
    name: 'hama',
    age: 10,
    nickname: 'hamayj'
}

interface Shape {
    width: number;
    getLength() : number; // number를 리턴하는 함수.
}

// interface implements로 클래스에 삽입해주기,
class Square implements Shape {
    width: number;
    height: number; // 기존 인터페이스에 없던 확장
    getLength(): number {
        return 0;
    }
}

// 변수에 사용하는 인터페이스랑 클래스에 사용하는 인터페이스에 차이가 있음.
// 변수는 규칙을 지켜야만 되는데, 클래스는 규칙을 다 지키면서 추가로 확장이 가능함.


// 클래스
/* 
class 클래스명 {
    변수명1: 타입; // 이 클래스에서 사용할 변수를 constructor 밖에서 지정해주기.
    constructor(변수명 : 타입, 변수명: 타입) {
        this.변수명1 = 변수명;
    }
}
*/

interface Developer {
    name: string;
    getName() : string;
}

class Developer1 implements Developer{
    name: string; // this.name의 타입이 string , name앞에 readonly 적으면 변경불가.
    constructor(name: string){
        this.name = name;
    }
    getName() : string {
        return this.name;
    }
}

class Developer2 {
    constructor(readonly name: string){    } // 선언도 안했는데 this.name에 사용할 수 있음.
    getName() : string {
        return this.name;
    }
}

var dev1 = new Developer1("새싹");
dev1.name = "SeSAC";
console.log(dev1.getName());

var dev2 = new Developer2("코딩온"); 
console.log(dev2.getName());

// 제네릭 (Generics)
// 재사용성을 높이기 위해서 . <> <- 를 사용해서 만듦.
// Array<number> number타입의 배열을 만들겠다.
// Array<number> = number[]
// Array<> 
// 한가지 타입을 만들기보다 여러가지 담아야 할 때 제네릭을 많이 사용함.
// const[age, setAge] = useState<number>(0) // 제네릭을 이용한 설정.

function getText<S>(text: S): S {
    return text;
}

// 하나의 함수를 다양하게 쓸 수 있게 만드는. 
getText<number>(1); // 매개변수, 반환값 모두 number
getText<string>('a');
// any보다 generic을 쓰는게 좋음. 좀 더 예측 가능한 코드가 되니까.
getText(1); // 타입이 무조건 지정되는건 아님.

// instanceof : object 타입을 비교하는 것. 
// dev2가 Developer2로 만들어졌다면
if(dev2 instanceof Developer2) {
    
}
