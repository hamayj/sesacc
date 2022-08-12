const express = require('express');
const cookieParser = require('cookie-parser');
// 쿠키 파서 설치해야 
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");

// 쿠키 노출되면 안되니까 사용할 비밀키 적어줘, 
app.use(cookieParser('1234'));
app.use(session({
    secret: 'secret key',
    // 시크릿은 필수로 해야됨.
    // resave: false,
    // 세션을 덮어쓸지 말지 해야됨. (세션은 만료가 없음). false로 하면 변경된게 없을때 덮어쓰지 않게 하는 것.
    // saveUninitialized: true,
    // 세션 초기값이 지정되지 않은 상태에서도 미리 세션을 만들어놓는다.
}))

const cookieConfig = {
    maxAge: 30000,
    // 만료기간을 설정한 것. 밀리초 단위 : 30000=30초
    path: '/', // 많이 쓰진 않음.
    httpOnly: true, 
    // 웹서버일때만s 접속할 수 있음. (클라에서  document.cookie  로 접속을 못함.)
    signed: true, //signed 쿠키를 암호화 시키는 옵션
}; 


app.get("/", (req, res) => {
    req.session.name = '홍길동';
    req.session.key = 'value';
    req.session.name = '홍길동';
    req.session.num = '홍길동';
    res.cookie('key', 'value', cookieConfig); // 쿠키를 생성해준다.
    res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});


app.get("/get", (req, res) => {
    console.log( req.session.name );
    console.log( req.cookies );
    res.send( req.cookies );
})  // 클라이언트가 쿠키 갖고 있는지 봐야돼서 req.

app.get("/cookie", (req, res) => {
    res.render("cookie");
})

app.get('/destroy', (req, res) => {
    // 모든 연결상태 초기화 // 30분째 로그인만 돼 있는 경우 
    req.session.destroy(function (err){
        res.send("삭제");
    })
    // 특정 부분 삭제하고 싶으면 하나만 삭제하는게 어렵기 때문에 그 부분을 빈값으로 바꿔버림. 
    req.session.name= "";
})

app.listen(8000, () => {
    console.log( "server : ", 8000);
})