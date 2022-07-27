const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");



app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); 
app.use(bodyParser.json());


app.get("/", function(req,res){
    res.render("ex33index");
}); // action에서 연결해줬음.


app.get("/ex33receive", function(req,res){
    console.log(req.query);
    res.send( req.query); 
}); 

// send는 인자 하나만, 보낼 경로 지정을 안해줘도 된다.



app.listen(port, ()=>{
    console.log("Server Port : ", port );
})


// port 8080으로 서버 여는 법.