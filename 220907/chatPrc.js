var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile(__dirname + "/chatPrc.html");
});

io.on("connection", function(socket){
    console.log("connected");
    socket.emit("info", socket.id);
    io.emit("notice", socket.id + "님이 입장하셨습니다.");
    socket.on("send", function(data){
        // data = { id:~~, msg:~~};
        console.log("client message : ", data.msg);
        io.emit("newMessage", data);
        // 모든 사람에게 보여지게.
    });

    socket.on("disconnect", function(){
        io.emit("notice", socket.id + "님이 퇴장하셨습니다.");
    });
});

http.listen( 8000, function(){
    console.log("server port : ", 8000);
});