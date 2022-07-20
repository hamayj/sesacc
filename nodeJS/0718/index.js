const returnString = require("./func.js");

// 한개의 파일만 내보낼때는 바로 변수에 넣을 수 있음.

//호출할 때는  require를 사용함 . 어차피 하나니까 다른 이름에 할당이 가능한 것. 


const { a, b} = require("./variable.js");
// 구조 분해 할당. a라는 변수에는 a 변수가 들어가고, b라는 변수에는 b변수가 들어가고. (알수가 없으니까 동일한 이름을 쓰는것.)

console.log(returnString());