

console.log(process.version); // 실행하고 있는 노드 버전
console.log(process.arch); // 프로세스 아키텍쳐 정보 : 64bit
console.log(process.platform); //  실행하고 있는 운영체제. 나옴.
console.log(process.uptime()); // 0.026717663 <=??? 
console.log(process.execPath); // /usr/local/bin/node
console.log(process.cpuUsage()); // { user: 31115, system: 7218 }
console.log(process.env); // 어떤 객체가 등장함. 

const os = require("os"); // 내장 모듈 os

console.log(os.hostname()); // 함수를 실행시킴. process보다 디테일한 정보를 볼 수 잇음.

const path = require("path");
// 폴더나 파일 경로를 조작함. so, 그 폴더나 파일ㄹ경로가 필요함.

const string = __filename; // 현재 파일에 대한 정보.
console.log(path.extname(string));  // 확장자만 출력해줌. 

console.log(os.freemem());
