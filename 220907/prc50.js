var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
// socket  불러온거.


app.get("/", function(req,res){
    console.log("client");
    res.sendFile(__dirname + "/prc50.html");
});
// ejs안썼기 때문에 sendFile로 파일 불러왔음.

// io는 전체연결.
// on은 read, / connection은 이벤트 명으로 정해져있는거.
io.on("connection", function(socket){
    console.log("connected");
    socket.emit("hello", "server hello");
    socket.on("click1", function(data){
        console.log("client :", data);
        socket.emit("clickResponse1", 'hello : 안녕하세요!');
    });

    socket.on("click2", function(data){
        console.log("client :", data);
        socket.emit("clickResponse2", 'study : 공부합시다!');
    });

    socket.on("click3", function(data){
        console.log("client :", data);
        socket.emit("clickResponse3", 'bye : 내일 또 봐요!');
    })


});

http.listen( 8000, function(){
    console.log("server port : ", 8000);
});