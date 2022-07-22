// fs는 내장모듈이기 때문에 불러와야 함.

const fs = require("fs");

// console.log(fs);

fs.readFile("./test.txt", (err, data) => {
    if( err ) throw err 

        console.log( data );

        console.log( data.toString());
});

// 파일을 읽어오는것은 시스템적으로 처리하는 것이기에 비동기.
// ??????? 뒤에 말씀하신 것 이해 못함.  
  // throw는 에러를 던지는 것.
    // 에러났으니까 코드 진행 안하겠다고 하는 것.
    // 밑의 코드 출력 안되고 그냥 에러로..
// 콜백 함수 첫번째 인자로 err가 오고 나중에 data가 옴.
