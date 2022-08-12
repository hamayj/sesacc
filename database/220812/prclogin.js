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
}))

const cookieConfig = {
    maxAge: 30000,
    path: '/',
    httpOnly: true, 
    // 웹서버일때만s 접속할 수 있음. (클라에서  document.cookie  로 접속을 못함.)
    signed: true, //signed 쿠키를 암호화 시키는 옵션
}; 



app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/login", (req, res) => {
    var flag = true;
    if (flag) {
        req.session.id = req.body.id;
        res.redirect("/profile");
    } else res.redirect("/login");
});

// 아무데나 갔다가 그냥 다시 페이지로 온거야. (로그인했던 사람인지, 그냥 경로 붙여넣기 한 사람인지 알 수 있음.)
app.get("/profile", (req, res) => {
    if ( req.session.id == undefined || req.session.id == ""){
        res.redirect("/login");
        return false;
    }
    req.session.id 로 작업
    res.render("profile");
})

app.get("/main", (req, res) => {

})

app.listen(8000, () => {
    console.log( "server : ", 8000);
})