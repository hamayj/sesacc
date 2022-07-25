const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");



app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); // 새로 추가한 부분
app.use(bodyParser.json());
// 바디파서를 제이슨 형태로 받겠다고 선언 한 것.

app.get("/", function(req,res){
    res.render("index");
}); // action에서 연결해줬음.


app.get("/receive", function(req,res){
    console.log(req);
    console.log(req.query);
    res.render("receive", req.query); 
    
}); // action에서 연결해줬음.


app.post("/receive", function(req,res){
    console.log("receive");
    console.log(req.body);
    res.render("receive", req.body); //
}); // action에서 연결해줬음.
    // req.body가 이미 딕셔너리 형태야.
    // res.render("receive", {a:2, b:3});


app.listen(port, ()=>{
    console.log("Server Port : ", port );
})


// port 8080으로 서버 여는 법.