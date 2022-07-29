const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs").promises; // 프로미스 방식으로 쓰려면 이렇게 가져오기로 했음.



app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); // 새로 추가한 부분 머선 뜻입니까?
app.use(bodyParser.json());
// 바디파서를 제이슨 형태로 받겠다고 선언 한 것. // 데이터를 깨지지 않게

app.get("/", function(req,res){
    res.render("ex31index");
}); // action에서 연결해줬음.


app.get("/ex31receive", function(req,res){
    console.log(req);
    console.log(req.query);
    res.render("ex31receive", req.query); 
    // render의 파라미터...  여기 req.query는 왜 쓰는거?
}); // action에서 연결해줬음.


app.post("/ex31receive", function(req,res){
    console.log("ex31receive");
    console.log(req.body);
    res.render("ex31receive", req.body);  
    const {id, pw} = req.body;
    var info = + id + "//" + pw ; 
    // req.body는 딕셔너리 형태의 객체임. 
    fs.writeFile("info.txt", info);
    console.log(id,pw);
    console.log(fs.readFile("info.txt")); 
}); 



app.listen(port, ()=>{
    console.log("Server Port : ", port );
})



// port 8080으로 서버 여는 법.