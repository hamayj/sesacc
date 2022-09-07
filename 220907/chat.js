var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile(__dirname + "/chat.html");
});

io.on("connection", function(socket){
    console.log("connected");
    socket.on("send", function(msg){
        console.log("client message : ", msg);
        io.emit("newMessage", msg);
    })

});

http.listen( 8000, function(){
    console.log("server port : ", 8000);
});