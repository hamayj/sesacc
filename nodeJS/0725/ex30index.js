const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");



app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); // 새로 추가한 부분 머선 뜻입니까?
app.use(bodyParser.json());
// 바디파서를 제이슨 형태로 받겠다고 선언 한 것. // 데이터를 깨지지 않게

app.get("/", function(req,res){
    res.render("ex30index");
}); // action에서 연결해줬음.


app.get("/ex30receive", function(req,res){
    console.log(req);
    console.log(req.query);
    res.render("ex30receive", req.query); 
}); // action에서 연결해줬음.


app.post("/ex30receive", function(req,res){
    console.log("ex30receive");
    console.log(req.body);
    res.render("ex30receive", req.body); 
}); 


app.listen(port, ()=>{
    console.log("Server Port : ", port );
})


// port 8080으로 서버 여는 법.