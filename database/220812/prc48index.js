const express = require('express');
const cookieParser = require('cookie-parser');
// 쿠키 파서 설치해야 
const app = express();

app.set("view engine", "ejs");

// 쿠키 노출되면 안되니까 사용할 비밀키 적어줘, 
app.use(cookieParser('1234'));

const cookieConfig = {
    maxAge: 30000,
    // 만료기간을 설정한 것. 밀리초 단위 : 30000=30초
    path: '/', // 많이 쓰진 않음.
    httpOnly: true, 
    // 웹서버일때만s 접속할 수 있음. (클라에서  document.cookie  로 접속을 못함.)
    signed: true, //signed 쿠키를 암호화 시키는 옵션
}; 


app.get("/", (req, res) => {
    res.cookie('key', 'value', cookieConfig); // 쿠키를 생성해준다.
    res.cookie('key2', 'value2', cookieConfig);
    res.render("prc48index");
});


app.get("/get", (req, res) => {
    console.log( req.cookies );
    res.send( req.cookies );
})  // 클라이언트가 쿠키 갖고 있는지 봐야돼서 req.

app.get("/cookie", (req, res) => {
    res.render("cookie");
})

app.listen(8000, () => {
    console.log( "server : ", 8000);
})