const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs").promises; // callback이나  promise중에 선택하는거.



app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); // 새로 추가한 부분
app.use(bodyParser.json());
// 바디파서를 제이슨 형태로 받겠다고 선언 한 것.

app.get("/", function(req,res){
    res.render("ex32.ejs");
}); 


app.get("/ex32receive", function(req,res){
    console.log(req);
    console.log(req.query);
    res.render("ex32receive", req.query); 
    
}); 


app.post("/ex32receive", function(req,res){
    console.log("ex32receive");
    console.log(req.body);
    res.render("ex32receive", req.body);
    const { id, pw } = req.body;
    let info = id + "//" + pw;
    fs.writeFile("info.txt", info);

    fs.readFile("info.txt")
    .then(function(data) {
        data = data.toString();
        console.log(data.split('//'));
        data = data.split('//');
        
        
        // .then() -> 이거 아직 잘 몰라.
        
        
        
        
        
        
    });
    
    
});


app.listen(port, ()=>{
    console.log("Server Port : ", port );
})

// port 8080으로 서버 여는 법.