// : 타입 표기 (Type Annotation)

let str: string = 'hi';
let num: number = 1;
let flag: boolean = true;
let age: number | string; // union을 통한 설정. 숫자나 문자 넣을 수 있게하는

age = 10;
age = 'a';
// age = true
let any: any; // 어떤 타입이든 상관없음.

// Array 
let arr1 : number[] = [1,2,3,4,5];
let arr2 : string[] = ['a', 'b', 'c'];
let arr3 : Array<number> = [1,2,3,4,5];

// Tuple 배열의 길이가 고정돼있고 타입이 지정된 형태.
let arr4: [string, number] = ['str', 1];
// arr4[0].concat() // concat은 문자를 연결함.
// arr4[2]; 길이가 지정돼있기 때문에 오류뜸.
// object 타입중에서도 엄격하게 제한함. 자주 쓰이지는 않음.

// Enum: 특정한 값의 집합을 만들어놓고 집합 중에 사용할 수 있게 하는 것.
enum Names { 홍길동, 코딩온, 새싹}
let name1: Names = Names.홍길동; // 특정 집합을 설정해 놓고 그 중에서만 들어올 수 있게 하는 것이 enum
name1 = Names.코딩온;
// name1 = Names.하마; 하마는 Names에 없으니까 에러.

// void
// 함수 : 반환 값이 없는 친구, / 변수 : undefined와 null만 들어갈 수 있음.
let void1: void = undefined; // 변수에는 잘 안씀. undefined만 쓰는 변수를 잘 사용하진 않으니까.
function void2(): void {
    console.log('11');
}

// never
// 함수에 사용. 함수의 끝에 절대 도달하지 않는다.
// 무한 반복하는 함수. 잘못 실행하면 큰일남(?). 영원히 끝나지 않는 코드. 잘 안쓰는 코드.
// 위험하니까 주석..^_^
// function neverEnd(): never {
//     while(true) {

//     }
// }

let test:any ; // 모든 타입 허용. 하지만 잘 사용하진 않음. any 쓰면 타입스크립트 쓰는 의미 x.
test = 1;
test = [1, 2, 3];

let test2 : object; // object는 기본 타입을 제외한 나머지 모두 (array, tuple등)
// test2 = 1; 기본타입이라 ㅐ에러가 나옴.
test2 = [1,2,3];
