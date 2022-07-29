const express = require("express")
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json()) ;

app.get("/", function(req, res) {
    res.render("formGR");

});
app.get("/test", function(req,res){
    console.log( req.query );
    res.send({ab: 1, bc: 2});
})
app.post("/test", function(req,res){
    console.log( req.body );
    res.send({ab: 1, bc: 2});
})

app.get("/receive", function(req,res){
    // let a = { key1: value, key2: value }
    // a.key1
    // a["key2"]
    console.log( req.query );

    let a = req.query.abc;

    res.send("abc");
    res.send("abc");
})
app.post("/receive", function(req,res){
    // let a = { key1: value, key2: value }
    // a.key1
    // a["key2"] 같은 방법.
    console.log( req.body );

    let a = req.body.abc;

    res.render("receive", { abc: a, d: req.body.abc2 } );
})

app.listen(port, ()=>{
    console.log(" Server Port : ", port) ; 
})
