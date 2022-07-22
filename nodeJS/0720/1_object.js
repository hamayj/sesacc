let obj = {
    key1: "value1",
    key2: "value2",
    key3: function(){
        console.log( "a" );
    }
};

const { key1: key00, key2, key3, key4="a" } = obj;

// 이런 식으로 객체 구조를 분해시켜 값을 가져올 수 있음.
key3();

console.log( key00 ) ;

//  undefined면 기본값으로 할 수 잇음.

let obj2 = { a:1, b:2, c:3, d:4 };
const { a, b, ...rest } = obj2;
// ...을 전개 연산자라고 부름. 나머지 객체를 가져오겠다. 

console.log( rest );