const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const { application } = require("express");



app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); 
app.use(bodyParser.json());

app.get("/", function(req,res) {
    res.render("index");
})


app.get("/receive", function(req,res){
    console.log(req.query);
    // res.send(req.body.name + "안녕");
    let name = req.query.name;
    let msg = req.query.name + "GET";
    res.send({name: name, message: msg});
})

app.post("/ex33receive", function(req,res){
    console.log(req.body);
    // res.send(req.body.name + "안녕");
    let name = req.body.name;
    let msg = req.body.name + "POST";
    res.send({name: name, message: msg});
    //res.send는 하나의 변수밖에 보내지 못함. 그래서 딕셔너리 형태로 보낼거임(배열은 분해해서 보지 않는한 인덱스 파악이 어렵기 때문에 딕셔너리가 나음.)
    res.render("ex33receive");
})

app.listen(port, ()=>{
    console.log("Server Port : ", port );
})


