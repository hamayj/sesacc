const { resolve } = require("path");

const func1 = new Promise ((resolve, reject)=>{
    var flag = true;
    if (flag) resolve("성공"); // 프로미스가 성공했을 때.
    else reject ("실패"); // ㅍ로미스가 실패했을 때. 
}) 
//프로미스를 뉴 프로미스로 선언 (리졸브랑 리젝트 받을거야.)
// (리졸브는 안의 내용 작업이 성공할 때 실행할 함수)
// (리젝트는 실패할 경우 실행할 함수.)

func1.then (value => {
    console.log(value)
}).catch (err => {
    console.log( err );
});

체이닝이 가능함. 덴 밑에 덴을 또 쓸 수 있음.
