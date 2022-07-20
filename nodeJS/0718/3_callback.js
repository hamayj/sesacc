console.log( "start");

function login(id, pw,  cb){
    setTimeout(() => {
        console.log('정보없음');
        cb (id) ;
    }, 3000);
}

const user = login('kim', '1234', user => {
    console.log(user + "님 반갑습니다.");
});
// 함수를 선언했다고 해서 바로 실행되는 것이 아님.
// 파라미터가 세개.

console.log( user + "님 반갑습니다.");

console.log("finish");

// 우리가 원하는 실행방식이 아님.
// 원하는 방식으로 만들어보자..^^
// login도 콜백함수를 가질 수 있음.

// 단점 : 너무 많은 콜백이 이뤄질 수 있음.
