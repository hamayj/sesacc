var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
// socket  불러온거.


app.get("/", function(req,res){
    console.log("client");
    res.sendFile(__dirname + "/index.html");
});
// ejs안썼기 때문에 sendFile로 파일 불러왔음.

// io는 전체연결.
// on은 read, / connection은 이벤트 명으로 정해져있는거.
io.on("connection", function(socket){
    console.log("connected");
    socket.emit("hello", "server hello");
    socket.on("click", function(data){
        console.log("client click");
        socket.emit("clickResponse", 'success');
        io.emit("clickResponse", "io success");
    })
});

http.listen( 8000, function(){
    console.log("server port : ", 8000);
});