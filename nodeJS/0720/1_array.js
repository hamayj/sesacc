let list = ['apple', 'banana'];

// let item1 = list[0];
// let item2 = list[1];
// 여태 배워서 썼던 것. 이렇게 될 경우 배열이 길면 어려워

[item1, item2= 'peach', item3 = 'melon'] = list;
// list에 있던 것이 하나씩 들어감
// 기본값을 지정할 수도 있음. 

console.log(" item1 : ", item1 );
console.log(" item2 : ", item2 );
console.log(" item3 : ", item3 );

// 배열의 구조를 분해해서 같은 인덱스에 넣어주는 것.
// 구조 분해해서 넣으면 값이 바뀜. 

let x = 1;
let y = 3;

// 두 개의 변수 값을 바꾸고 싶음.
// 우리가 알던 범위에서는 변수를 하나 더 만들어서 옮기는 방법을 썼음.

[ y, x ] = [ x, y ];
// 이렇게 한 번에 바꿀 수도 있음.
// es2015부터 생긴 문법. 


