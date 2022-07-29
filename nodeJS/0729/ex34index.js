const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs").promises; // 



app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); 
app.use(bodyParser.json());

app.get("/", function(req,res){
    res.render("ex34index");
}); 


app.post("/receive", function(req,res){
    console.log(req.body);

    const { id, pw } = req.body;

    fs.readFile("info.txt")
    .then(function(data) {
        data = data.toString(); 
        console.log(data.split('//')); // //을 기준으로 나눠서 배열에 넣어줌.
        data = data.split('//');

        if(data[0]==id && data[1]==pw){
            res.send("로그인 성공"); // res.send로 보낸 것이 then의 데이터(값)로 감.
        } else {
            res.send("아이디 or 비밀번호를 확인해주세요.");
        }
    });
});


app.listen(port, ()=>{
    console.log("Server Port : ", port );
})


