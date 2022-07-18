const os = require("os");

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());

const path = require("path");


console.log(path.sep); // 경로 구분자 출력 (?) 경로 구분자가 뭐지 / <- 얘 아닌가.
console.log(path.extname(__filename)); // 확장자 반환
//console.log(path.) // 현재 파일의 경로를 분리해서 출력하기
console.log(path.parse(__filename));

